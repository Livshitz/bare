import { Codelet, State, Event, CodeletResult } from "../src/modules/Codelet";
import { Orchestrator, createNewEvent, WithEventMetadata } from "../src/modules/Orchestrator";

// Test Codelet implementation
class TestCodelet extends Codelet<State, Event> {
  listensTo = ["test"];
  async process(event: Event, state: State): Promise<CodeletResult> {
    return Codelet.stateChange({ processed: true, eventType: event.type });
  }
}

// Test Codelet that generates new events
class EventGeneratorCodelet extends Codelet<State, Event> {
  listensTo = ["generate"];
  async process(event: Event, state: State): Promise<CodeletResult> {
    const newEvent = createNewEvent({ type: "test", payload: "from-generate" }, event as WithEventMetadata<Event>);
    return Codelet.newEventResult(newEvent);
  }
}

// Test Codelet that does nothing
class NoopCodelet extends Codelet<State, Event> {
  listensTo = ["noop"];
  async process(event: Event, state: State): Promise<CodeletResult> {
    return Codelet.noopResult();
  }
}

// Example of using the factory for a codelet
const FactoryCodelet = Codelet.create<State, Event>([
  "factory"],
  async (event, state) => Codelet.stateChange({ factory: true })
);

// Helper to wait for a condition on orchestrator state
async function waitForState(orchestrator: Orchestrator, predicate: (state: State) => boolean, timeout = 2000, interval = 5) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (predicate(orchestrator.getState())) return;
    await new Promise(res => setTimeout(res, interval));
  }
  throw new Error('Timed out waiting for state');
}

describe("Codelet Framework", () => {
  describe("Orchestrator", () => {
    test("should initialize with initial state", () => {
      const initialState = { count: 0 };
      const orchestrator = new Orchestrator(initialState);
      expect(orchestrator.getState()).toEqual(initialState);
    });

    test("should register codelets", () => {
      const orchestrator = new Orchestrator({});
      const codelet = new TestCodelet();
      orchestrator.register(codelet);
      // No direct way to test registration, but we can test it works through dispatch
    });

    test("should process events and update state", async () => {
      const orchestrator = new Orchestrator({});
      const codelet = new TestCodelet();
      orchestrator.register(codelet);

      await orchestrator.dispatchWithPromise({ type: "test" });
      expect(orchestrator.getState()).toEqual({
        processed: true,
        eventType: "test"
      });
    });

    test("should handle event generation", async () => {
      const orchestrator = new Orchestrator({});
      const generatorCodelet = new EventGeneratorCodelet();
      const testCodelet = new TestCodelet();
      
      orchestrator.register(generatorCodelet);
      orchestrator.register(testCodelet);

	  await orchestrator.dispatchWithPromise({ type: "generate" });
    //   orchestrator.dispatch({ type: "generate" });

      // Wait for the generated event to be processed
      await waitForState(
        orchestrator,
        state => state.processed === true && state.eventType === "test"
      );
      expect(orchestrator.getState()).toEqual({
        processed: true,
        eventType: "test"
      });
    });

    test("should handle noop results", async () => {
      const orchestrator = new Orchestrator({ initial: "state" });
      const noopCodelet = new NoopCodelet();
      orchestrator.register(noopCodelet);

      await orchestrator.dispatchWithPromise({ type: "noop" });
      // State should remain unchanged
      expect(orchestrator.getState()).toEqual({ initial: "state" });
    });

    test("should handle state change listeners", async () => {
      const orchestrator = new Orchestrator({});
      const codelet = new TestCodelet();
      orchestrator.register(codelet);

      let stateChanged = false;
      orchestrator.onStateChange(() => {
        stateChanged = true;
      });

      await orchestrator.dispatchWithPromise({ type: "test" });
      expect(stateChanged).toBe(true);
    });

    test("should handle multiple codelets for same event type", async () => {
      const orchestrator = new Orchestrator({});
      
      class FirstCodelet extends Codelet<State, Event> {
        listensTo = ["multi"];
        async process(event: Event, state: State): Promise<CodeletResult> {
          return {
            type: "stateChange",
            patch: { first: true }
          };
        }
      }

      class SecondCodelet extends Codelet<State, Event> {
        listensTo = ["multi"];
        async process(event: Event, state: State): Promise<CodeletResult> {
          return {
            type: "stateChange",
            patch: { second: true }
          };
        }
      }

      orchestrator.register(new FirstCodelet());
      orchestrator.register(new SecondCodelet());

      await orchestrator.dispatchWithPromise({ type: "multi" });
      // Wait a tick to ensure all codelets have processed
      await new Promise(res => setTimeout(res, 10));
      const state = orchestrator.getState() as any;
      expect(state.first).toBe(true);
      expect(state.second).toBe(true);
    });

    test("should handle errors in codelets gracefully", async () => {
      const orchestrator = new Orchestrator({});
      
      class ErrorCodelet extends Codelet<State, Event> {
        listensTo = ["error"];
        async process(event: Event, state: State): Promise<CodeletResult> {
          throw new Error("Test error");
        }
      }

      orchestrator.register(new ErrorCodelet());
      
      // Should not throw and should complete within timeout
      const result = await orchestrator.dispatchWithPromise({ type: "error" });
      expect(result.type).toBe("noop");
      // State should remain unchanged
      expect(orchestrator.getState()).toEqual({});
    });

    test("should handle state change and new event together", async () => {
      const orchestrator = new Orchestrator({});
      class StateAndEventCodelet extends Codelet<State, Event> {
        listensTo = ["combo"];
        async process(event: Event, state: State): Promise<CodeletResult> {
          const newEv = createNewEvent({ type: "test", payload: "combo" }, event as WithEventMetadata<Event>);
          return Codelet.stateChangeAndNewEvent({ combo: true }, newEv);
        }
      }
      const testCodelet = new TestCodelet();
      orchestrator.register(new StateAndEventCodelet());
      orchestrator.register(testCodelet);
      await orchestrator.dispatchWithPromise({ type: "combo" });
      await waitForState(
        orchestrator,
        state => state.combo === true && state.processed === true && state.eventType === "test"
      );
      expect(orchestrator.getState()).toEqual({ combo: true, processed: true, eventType: "test" });
    });
  });
}); 