// LLM NOTE: When updating this file, also update the corresponding unit tests in 'src/modules/__tests__/Codelet.test.ts'.

// Codelet Framework v0 - Core Implementation

// Core types
export type State = Record<string, any>;

export interface Event {
  type: string;
  [key: string]: any;
}

export type CodeletResult =
  | { type: 'stateChange'; patch: Partial<State> }
  | { type: 'newEvent'; event: Event }
  | { type: 'stateChange+newEvent'; patch: Partial<State>; event: Event }
  | { type: 'noop' };

/**
 * Abstract base class for all codelets. Extend or use the static factory to create codelets.
 */
export abstract class Codelet<S extends State = State, E extends Event = Event> {
  abstract listensTo: string[];
  abstract process(event: E, state: S): Promise<CodeletResult>;

  /**
   * Helper to create a stateChange result.
   */
  static stateChange(patch: Partial<State>): CodeletResult {
    return { type: 'stateChange', patch };
  }

  /**
   * Helper to create a newEvent result.
   * Always use createNewEvent for the event itself!
   */
  static newEventResult(event: Event): CodeletResult {
    return { type: 'newEvent', event };
  }

  /**
   * Helper to create a combined stateChange and newEvent result.
   */
  static stateChangeAndNewEvent(patch: Partial<State>, event: Event): CodeletResult {
    return { type: 'stateChange+newEvent', patch, event };
  }

  /**
   * Helper to create a noop result.
   */
  static noopResult(): CodeletResult {
    return { type: 'noop' };
  }

  /**
   * Factory method to create a codelet with the given listeners and process function.
   */
  static create<S extends State, E extends Event>(
    listensTo: string[],
    process: (event: E, state: S) => Promise<CodeletResult>
  ): Codelet<S, E> {
    return new (class extends Codelet<S, E> {
      listensTo = listensTo;
      process = process;
    })();
  }
}
