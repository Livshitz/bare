import { Codelet, Coderack, newEvent, WithEventMetadata } from 'codelet';

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
  | { name: 'digit'; value: string }
  | { name: 'operator'; value: string }
  | { name: 'clear' }
  | { name: 'equals' }
  | { name: 'result'; value: string }
  | { name: 'error'; error: string };

// Codelets
const DigitCodelet = Codelet.create<CalcState, CalcEvent>([
  'digit'],
  async (event, state) => {
    if (event.name !== 'digit') return Codelet.noopResult();
    let display = state.justCalculated ? '' : state.display;
    display += event.value;
    return Codelet.stateChange({ display, justCalculated: false });
  }
);

const ClearCodelet = Codelet.create<CalcState, CalcEvent>([
  'clear'],
  async (event, state) => {
    if (event.name !== 'clear') return Codelet.noopResult();
    return Codelet.stateChange({ display: '', operator: '', operand: null, justCalculated: false, loading: false });
  }
);

const OperatorCodelet = Codelet.create<CalcState, CalcEvent>([
  'operator'],
  async (event, state) => {
    if (event.name !== 'operator') return Codelet.noopResult();
    if (state.display === '') return Codelet.noopResult();
    let operand = state.operand;
    let operator = state.operator;
    let display = state.display;
    if (operator) {
      // If operator already set, calculate previous
      return Codelet.newEventResult(newEvent('equals', {}, event as WithEventMetadata<CalcEvent>));
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
    if (event.name !== 'equals') return Codelet.noopResult();
    if (!state.operator || state.operand === null || state.display === '') return Codelet.noopResult();
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
          resolve(Codelet.newEventResult(newEvent('error', { error: 'Error' }, event as WithEventMetadata<CalcEvent>)));
        } else {
          resolve(Codelet.newEventResult(newEvent('result', { value: result.toString() }, event as WithEventMetadata<CalcEvent>)));
        }
      }, 1000);
    });
  }
);

const ResultCodelet = Codelet.create<CalcState, CalcEvent>([
  'result'],
  async (event, state) => {
    if (event.name === 'result') {
      return Codelet.stateChange({ display: event.value, operator: '', operand: null, justCalculated: true, loading: false });
    }
    return Codelet.noopResult();
  }
);

const ErrorCodelet = Codelet.create<CalcState, CalcEvent>([
  'error'],
  async (event, state) => {
    if (event.name === 'error') {
      return Codelet.stateChange({ display: event.error, operator: '', operand: null, justCalculated: true, loading: false });
    }
    return Codelet.noopResult();
  }
);

// Factory to create coderack and register codelets
export function createCalculatorCoderack(initialState: CalcState) {
  const coderack = new Coderack<CalcState>(initialState);
  coderack.addCodelet(DigitCodelet);
  coderack.addCodelet(ClearCodelet);
  coderack.addCodelet(OperatorCodelet);
  coderack.addCodelet(EqualsCodelet);
  coderack.addCodelet(ResultCodelet);
  coderack.addCodelet(ErrorCodelet);
  return coderack;
} 