import calculate from '../../logic/calculate';

describe('calculate', () => {
  it('clears the display when AC button is clicked', () => {
    const data = {
      total: 5,
      next: 8,
      operation: '+',
    };

    const clear = {
      total: '',
      next: '',
      operation: '',
    };
    const myCalculate = calculate(data, 'AC');
    expect(myCalculate).toEqual(clear);
  });
  it('shows the plus operation when clicked on', () => {
    const myCalculate = { total: 15, operation: '+', next: '' };
    const data = calculate(myCalculate, '+');
    expect(data.operation).toEqual('+');
  });
  it('display the multiplication operation when clicked on ', () => {
    const myCalculate = { total: 15, operation: 'X', next: '' };
    const data = calculate(myCalculate, 'X');
    expect(data.operation).toEqual('X');
  });

  it('undertakes an operation when an equal sign is clicked', () => {
    const myCalculate = { total: 15, operation: 'X', next: 5 };
    const data = calculate(myCalculate, '=');
    expect(data.total).toEqual('75');
  });
  it('multiplies the result on the display with -1 when +/- is clicke on', () => {
    const myCalculate = { total: 15, operation: 'X', next: '' };
    const data = calculate(myCalculate, '+/-');
    expect(data.total).toEqual(-15);
  });
});
