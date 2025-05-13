/**
 * Example codelet that listens to 'example' events and sets example: true in state.
 * Demonstrates returning both a state change and a new event.
 */
import { Codelet, State, Event, CodeletResult } from './Codelet';
import { createNewEvent, WithEventMetadata } from './Orchestrator';

export class ExampleCodelet extends Codelet<State, Event> {
  listensTo = ['example'];

  async process(event: Event, state: State): Promise<CodeletResult> {
    // Example: change state and emit a new event
    const newEv = createNewEvent({ type: 'anotherEvent' }, event as WithEventMetadata<Event>);
    return Codelet.stateChangeAndNewEvent({ example: true }, newEv);
  }
} 