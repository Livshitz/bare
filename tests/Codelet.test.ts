import { createCalculatorCoderack, type CalcState, type CalcEvent } from "../demo/src/views/codelets/CalculatorCoderack";

describe("Calculator Codelet", () => {
  let coderack: ReturnType<typeof createCalculatorCoderack>;
  let state: CalcState;

  beforeEach(() => {
    state = {
      display: '',
      operator: '',
      operand: null,
      justCalculated: false,
      loading: false,
    };
    coderack = createCalculatorCoderack(state);
  });

  test("should update display when digit is entered", async () => {
    await coderack.dispatchWithPromise({ name: 'digit', value: '7' });
    expect(coderack.getState().display).toBe('7');
    await coderack.dispatchWithPromise({ name: 'digit', value: '8' });
    expect(coderack.getState().display).toBe('78');
  });

  test("should clear display when clear is entered", async () => {
    await coderack.dispatchWithPromise({ name: 'digit', value: '5' });
    expect(coderack.getState().display).toBe('5');
    await coderack.dispatchWithPromise({ name: 'clear' });
    expect(coderack.getState().display).toBe('');
    expect(coderack.getState().operator).toBe('');
    expect(coderack.getState().operand).toBe(null);
  });
}); 