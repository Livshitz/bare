import { Codelet, Coderack, newEvent, WithEventMetadata } from 'codelet';
import { CalcState, CalcEvent } from './CalculatorCoderack';

// --- Single Big Codelet Variation ---
const SingleBigCodelet = Codelet.create<CalcState, CalcEvent>([
  'digit', 'operator', 'clear', 'equals', 'result', 'error'],
  async (event, state) => {
    switch (event.name) {
      case 'digit': {
        let display = state.justCalculated ? '' : state.display;
        display += event.value;
        return Codelet.stateChange({ display, justCalculated: false });
      }
      case 'clear': {
        return Codelet.stateChange({ display: '', operator: '', operand: null, justCalculated: false, loading: false });
      }
      case 'operator': {
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
      case 'equals': {
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
      case 'result': {
        return Codelet.stateChange({ display: event.value, operator: '', operand: null, justCalculated: true, loading: false });
      }
      case 'error': {
        return Codelet.stateChange({ display: event.error, operator: '', operand: null, justCalculated: true, loading: false });
      }
      default:
        return Codelet.noopResult();
    }
  }
);

export function createSingleCodeletCalculatorCoderack(initialState: CalcState) {
  const coderack = new Coderack<CalcState>(initialState);
  coderack.addCodelet(SingleBigCodelet);
  return coderack;
} 