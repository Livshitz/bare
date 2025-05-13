# Codelet Framework Documentation & Plan (v0)

## 1. Introduction

The Codelet framework provides a structured approach to building event-driven systems with a clear separation between state, events, and logic. It promotes the creation of isolated, reusable computational units called "Codelets" that process events idempotently.

**Core Principles:**

*   **Separation of Concerns:** State, Events, and Logic (Codelets) are distinct.
*   **Event-Driven:** System behavior is triggered by events.
*   **Idempotency:** Codelets process events in a way that multiple executions with the same event and initial state yield the same result.
*   **Modularity:** Codelets are independent units, simplifying development and testing.

## 2. Architecture

The framework consists of the following core components:

*   **State:** A central object holding the application's current state.
*   **Events:** Plain objects representing occurrences or triggers within the system. Each event has a `type`.
*   **Codelets:** Units of logic that subscribe to specific event types and access relevant parts of the state. They process events and can produce state changes or new events.
*   **Orchestrator:** Manages the event stream, maintains a registry of Codelets, determines which Codelets handle an incoming event, provides the necessary state subset, executes the Codelet's logic, and applies the results (state changes or dispatching new events).

**Data Flow:**

1.  An external source or a Codelet emits an Event.
2.  The Event is added to the Orchestrator's event stream/queue.
3.  The Orchestrator dequeues an Event.
4.  The Orchestrator identifies Codelets registered for this Event `type`.
5.  For each relevant Codelet:
    *   The Orchestrator retrieves the required state subset.
    *   The Orchestrator executes the Codelet's `process` method with the Event and state subset.
    *   The Codelet returns a `CodeletResult` (either a state patch or a new Event).
6.  The Orchestrator processes the `CodeletResult`:
    *   If it's a state patch, it merges it into the main State.
    *   If it's a new Event, it adds it to the event stream.

## 3. API Design (v0 - Simplified)

```typescript
// Represents the overall application state
interface State {
  [key: string]: any;
}

// Base interface for all events
interface Event {
  type: string;
  payload?: any; // Optional payload
}

// Result of a Codelet's processing
type CodeletResult =
  | { type: 'stateChange'; patch: Partial<State> }
  | { type: 'newEvent'; event: Event }
  | { type: 'noop' }; // No operation

// Interface for a Codelet
interface Codelet<S extends State, E extends Event> {
  /**
   * Specifies the event types this Codelet listens to.
   */
  listensTo: string[];

  /**
   * Defines the subset of the state required by this Codelet.
   * (v0 simplification: Access the whole state for now, refinement in future versions)
   */
  // requiredStateKeys?: (keyof S)[]; // Future enhancement

  /**
   * Processes an incoming event with the relevant state subset.
   * Should be idempotent.
   * @param event The event to process.
   * @param state The relevant state subset (or whole state in v0).
   * @returns A CodeletResult indicating the outcome.
   */
  process(event: E, state: S): CodeletResult | Promise<CodeletResult>;
}

// The Orchestrator class
class Orchestrator<S extends State> {
  private state: S;
  private codelets: Map<string, Codelet<S, Event>[]>; // Map event type -> Codelets
  private eventQueue: Event[];
  private isProcessing: boolean;

  constructor(initialState: S);

  register(codelet: Codelet<S, Event>): void;

  dispatch(event: Event): void;

  private processQueue(): Promise<void>;

  getState(): S; // Method to get the current state
}
```

## 4. Implementation Plan (v0)

*   **[x] Create `src/modules/Codelet.ts`:** Define core interfaces (`State`, `Event`, `CodeletResult`, `Codelet`).
*   **[x] Implement `Orchestrator` class:**
    *   **[x] Constructor:** Initialize state, Codelet registry, event queue.
    *   **[x] `register` method:** Add Codelets to the registry based on `listensTo`.
    *   **[x] `dispatch` method:** Add events to the queue and trigger processing if not already running.
    *   **[x] `processQueue` method:** Loop through the queue, find relevant Codelets, execute `process`, handle results (state update, new event dispatch). Ensure basic idempotency handling (e.g., process one event at a time).
    *   **[x] `getState` method:** Provide read-only access to the state.
*   **[x] Basic Error Handling:** Add simple checks and logging.
*   **[x] Example Usage (Optional but recommended):** Create a simple example (e.g., counter/calculator) to demonstrate framework usage. (See `src/modules/CalculatorExample.ts`)
*   **[ ] Testing (Optional but recommended):** Basic unit tests for the Orchestrator and a sample Codelet.

## 5. Future Enhancements (v1+)

*   **State Subset Selection:** Implement `requiredStateKeys` logic in `Orchestrator` to provide only necessary state slices to Codelets.
*   **Asynchronous Processing:** Improve handling of asynchronous `process` methods.
*   **Event History/Replay:** Store event history for debugging or state reconstruction.
*   **Transactionality/Atomicity:** Ensure state updates are atomic, especially with multiple Codelets reacting to one event.
*   **Middleware/Plugins:** Allow extending Orchestrator behavior.
*   **Advanced Idempotency:** Implement more robust idempotency checks (e.g., using event IDs).
*   **Codelet Dependencies:** Manage scenarios where one Codelet's output triggers another.
*   **TypeScript Generics:** Improve type safety with more specific generics for State and Events in Codelets and Orchestrator.

## 6. Example: Calculator App (Completed)

A simple calculator example is implemented in `src/modules/CalculatorExample.ts` using the Codelet framework. The calculator supports the following operations as events:

- Add
- Subtract
- Multiply
- Divide
- Reset

Each operation is handled by a dedicated Codelet. The state contains a single value: `result`.

**Event Types:**
- `add` (payload: { value: number })
- `subtract` (payload: { value: number })
- `multiply` (payload: { value: number })
- `divide` (payload: { value: number })
- `reset` (payload: none)

**State:**
```ts
interface CalculatorState {
  result: number;
}
```

**Codelets:**
- AddCodelet
- SubtractCodelet
- MultiplyCodelet
- DivideCodelet
- ResetCodelet

**Example Usage:**
- Initialize state: `{ result: 0 }`
- Dispatch events to perform calculations
- Observe state changes

See the implementation in `src/modules/CalculatorExample.ts`. 