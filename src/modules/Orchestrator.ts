// LLM NOTE: When updating this file, also update the corresponding unit tests in 'src/modules/__tests__/Orchestrator.test.ts'.
import { State, Event, Codelet, CodeletResult } from './Codelet';

function generateEventId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Symbols for internal event metadata
export const EVENT_ID = Symbol('eventId');
export const TRIGGER_EVENT_ID = Symbol('triggerEventId');
export type WithEventMetadata<T> = T & { [EVENT_ID]?: string; [TRIGGER_EVENT_ID]?: string };

// Internal event type with metadata (metadata is now symbol-based)
interface InternalEvent extends Event {
  // Metadata is attached via symbols, not string keys
}

// The Orchestrator class
export class Orchestrator<S extends State = State> {
  private state: S;
  private codelets: Map<string, Codelet<S, Event>[]> = new Map();
  private eventQueue: InternalEvent[] = [];
  private isProcessing = false;
  private stateChangeListeners: Array<() => void> = [];
  private resultListeners: Array<(event: InternalEvent, result: CodeletResult) => void> = [];

  constructor(initialState: S) {
    this.state = { ...initialState };
  }

  /**
   * Registers a listener to be called whenever the orchestrator's state changes.
   * Returns an unsubscribe function to remove the listener.
   */
  onStateChange(listener: () => void) {
    this.stateChangeListeners.push(listener);
    return () => this.offStateChange(listener);
  }

  /**
   * Removes a previously registered state change listener.
   */
  offStateChange(listener: () => void) {
    this.stateChangeListeners = this.stateChangeListeners.filter(l => l !== listener);
  }

  private notifyStateChange() {
    for (const listener of this.stateChangeListeners) {
      listener();
    }
  }

  private onResult(listener: (event: InternalEvent, result: CodeletResult) => void) {
    this.resultListeners.push(listener);
  }

  private offResult(listener: (event: InternalEvent, result: CodeletResult) => void) {
    this.resultListeners = this.resultListeners.filter(l => l !== listener);
  }

  /**
   * Registers a codelet to listen for specific event types.
   */
  register(codelet: Codelet<S, Event>): void {
    for (const eventType of codelet.listensTo) {
      if (!this.codelets.has(eventType)) {
        this.codelets.set(eventType, []);
      }
      this.codelets.get(eventType)!.push(codelet);
    }
  }

  /**
   * Dispatches an event to the orchestrator for processing.
   */
  dispatch(event: Event): void {
    const internalEvent = event as WithEventMetadata<Event>;
    ensureEventId(internalEvent);
    this.eventQueue.push(internalEvent);
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  /**
   * Dispatches an event and returns a promise that resolves with the result.
   */
  dispatchWithPromise(event: Event): Promise<CodeletResult> {
    return new Promise((resolve, reject) => {
      const internalEvent = event as WithEventMetadata<Event>;
      ensureEventId(internalEvent);
      const eventId = internalEvent[EVENT_ID]!;
      // Track all event IDs in the chain
      const pendingEventIds = new Set<string>([eventId]);
      // Map child eventId -> parent eventId
      const childToParent = new Map<string, string>();
      let finalResult: CodeletResult | undefined;
      const listener = (resultEvent: WithEventMetadata<Event>, result: CodeletResult) => {
        const thisEventId = resultEvent[EVENT_ID]!;
        // Remove this event from pending
        pendingEventIds.delete(thisEventId);
        // If this event caused new events, add them to pending
        if (result.type === 'newEvent') {
          const childEvent = createNewEvent(result.event as Event, resultEvent);
          pendingEventIds.add(childEvent[EVENT_ID]!);
          childToParent.set(childEvent[EVENT_ID]!, thisEventId);
        }
        if (result.type === 'stateChange+newEvent') {
          const childEvent = createNewEvent(result.event as Event, resultEvent);
          pendingEventIds.add(childEvent[EVENT_ID]!);
          childToParent.set(childEvent[EVENT_ID]!, thisEventId);
        }
        // Save the last non-noop result for the root event
        if (thisEventId === eventId && result.type !== 'noop') {
          finalResult = result;
        }
        // If all pending events are processed, resolve
        if (pendingEventIds.size === 0) {
          this.offResult(listener);
          resolve(finalResult ?? { type: 'noop' });
        }
      };
      this.onResult(listener);
      this.dispatch(event);
    });
  }

  private async processQueue(): Promise<void> {
    this.isProcessing = true;
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift()! as WithEventMetadata<Event>;
      const codelets = this.codelets.get(event.type) || [];
      for (const codelet of codelets) {
        try {
          const result = await codelet.process(event, this.state);
          if (result.type === 'stateChange') {
            this.state = { ...this.state, ...result.patch };
            this.notifyStateChange();
          }
          if (result.type === 'newEvent') {
            const childEvent = createNewEvent(result.event as Event, event);
            this.eventQueue.push(childEvent);
          }
          if (result.type === 'stateChange+newEvent') {
            this.state = { ...this.state, ...result.patch };
            this.notifyStateChange();
            const childEvent = createNewEvent(result.event as Event, event);
            this.eventQueue.push(childEvent);
          }
          // Notify listeners for every event processed, regardless of result type
          for (const listener of this.resultListeners) {
            listener(event, result);
          }
        } catch (err) {
          // Basic error handling
          console.error(`Error in codelet for event '${event.type}':`, err);
          // Emit a noop result so listeners (including dispatchWithPromise) can resolve
          const noopResult: CodeletResult = { type: 'noop' };
          for (const listener of this.resultListeners) {
            listener(event, noopResult);
          }
        }
      }
    }
    this.isProcessing = false;
  }

  /**
   * Returns a deep copy of the current orchestrator state.
   */
  getState(): S {
    // Return a deep copy to prevent external mutation
    return deepCopy(this.state);
  }

  /**
   * Subscribe to all processed events and their results.
   * Returns an unsubscribe function.
   */
  public onEventProcessed(listener: (event: WithEventMetadata<Event>, result: CodeletResult) => void) {
    this.resultListeners.push(listener);
    return () => this.offResult(listener);
  }
}

function ensureEventId<T extends Event>(event: WithEventMetadata<T>) {
  if (!event[EVENT_ID]) {
    event[EVENT_ID] = generateEventId();
  }
}

// Note: Internal event metadata (eventId, triggerEventId) is now stored using symbols and is not visible on the public Event interface.
// If you need to access these for debugging, use the EVENT_ID and TRIGGER_EVENT_ID symbols.
// In the Event interface (in Codelet.ts), add a comment:
//   // Note: Internal metadata may be attached via symbols by the orchestrator, but is not part of the public API.
//   // If you need to access these for debugging, use the EVENT_ID and TRIGGER_EVENT_ID symbols.

// Utility: Deep copy for nested state immutability
function deepCopy<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepCopy) as any;
  const result: any = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = deepCopy((obj as any)[key]);
    }
  }
  return result;
}

/**
 * Creates a new event with proper metadata, referencing the triggering event.
 * Always use this helper to create new events in codelets and orchestrator internals.
 * @param eventData - The event data (must include type)
 * @param triggerEvent - The event that triggered this new event
 */
export function createNewEvent<T extends Event>(eventData: T, triggerEvent: WithEventMetadata<Event>): WithEventMetadata<T> {
  const newEvent = { ...eventData } as WithEventMetadata<T>;
  ensureEventId(newEvent);
  newEvent[TRIGGER_EVENT_ID] = triggerEvent[EVENT_ID]!;
  return newEvent;
}

// Usage note for codelet authors:
//   Always use createNewEvent(eventData, triggerEvent) to create new events in codelets.
//   This ensures event IDs and trigger references are set correctly. 