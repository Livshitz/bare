import { Codelet } from '../../../../src/modules/Codelet';
import { Orchestrator, createNewEvent, WithEventMetadata } from '../../../../src/modules/Orchestrator';

// State type matching the Vue component
export interface CalcState {
  display: string;
  operator: string;
  operand: number | null;
  justCalculated: boolean;
  loading: boolean;
}

// Event type matching the Vue component
export type CalcEvent =
  | { type: 'digit'; value: string }
  | { type: 'operator'; value: string }
  | { type: 'clear' }
  | { type: 'equals' }
  | { type: 'result'; value: string }
  | { type: 'error'; error: string };

// Codelets
const DigitCodelet = Codelet.create<CalcState, CalcEvent>([
  'digit'],
  async (event, state) => {
    if (event.type !== 'digit') return Codelet.noopResult();
    let display = state.justCalculated ? '' : state.display;
    display += event.value;
    return Codelet.stateChange({ display, justCalculated: false });
  }
);

const ClearCodelet = Codelet.create<CalcState, CalcEvent>([
  'clear'],
  async (event, state) => {
    if (event.type !== 'clear') return Codelet.noopResult();
    return Codelet.stateChange({ display: '', operator: '', operand: null, justCalculated: false, loading: false });
  }
);

const OperatorCodelet = Codelet.create<CalcState, CalcEvent>([
  'operator'],
  async (event, state) => {
    if (event.type !== 'operator') return Codelet.noopResult();
    if (state.display === '') return Codelet.noopResult();
    let operand = state.operand;
    let operator = state.operator;
    let display = state.display;
    if (operator) {
      // If operator already set, calculate previous
      return Codelet.newEventResult(createNewEvent({ type: 'equals' }, event as WithEventMetadata<CalcEvent>));
    }
    operand = parseFloat(display);
    operator = event.value;
    display = '';
    return Codelet.stateChange({ operand, operator, display });
  }
);

const EqualsCodelet = Codelet.create<CalcState, CalcEvent>([
  'equals'],
  async (event, state) => {
    if (event.type !== 'equals') return Codelet.noopResult();
    if (!state.operator || state.operand === null || state.display === '' || state.loading) return Codelet.noopResult();
    // Simulate async
    return new Promise((resolve) => {
      setTimeout(() => {
        const a = state.operand!;
        const b = parseFloat(state.display);
        let result = 0;
        switch (state.operator) {
          case '+': result = a + b; break;
          case '-': result = a - b; break;
          case '*': result = a * b; break;
          case '/': result = b !== 0 ? a / b : NaN; break;
        }
        if (isNaN(result)) {
          resolve(Codelet.newEventResult(createNewEvent({ type: 'error', error: 'Error' }, event as WithEventMetadata<CalcEvent>)));
        } else {
          resolve(Codelet.newEventResult(createNewEvent({ type: 'result', value: result.toString() }, event as WithEventMetadata<CalcEvent>)));
        }
      }, 1000);
    });
  }
);

const ResultCodelet = Codelet.create<CalcState, CalcEvent>([
  'result'],
  async (event, state) => {
    if (event.type === 'result') {
      return Codelet.stateChange({ display: event.value, operator: '', operand: null, justCalculated: true, loading: false });
    }
    return Codelet.noopResult();
  }
);

const ErrorCodelet = Codelet.create<CalcState, CalcEvent>([
  'error'],
  async (event, state) => {
    if (event.type === 'error') {
      return Codelet.stateChange({ display: event.error, operator: '', operand: null, justCalculated: true, loading: false });
    }
    return Codelet.noopResult();
  }
);

// Factory to create orchestrator and register codelets
export function createCalculatorCodeletOrchestrator(initialState: CalcState) {
  const orchestrator = new Orchestrator<CalcState>(initialState);
  orchestrator.register(DigitCodelet);
  orchestrator.register(ClearCodelet);
  orchestrator.register(OperatorCodelet);
  orchestrator.register(EqualsCodelet);
  orchestrator.register(ResultCodelet);
  orchestrator.register(ErrorCodelet);
  return orchestrator;
} 