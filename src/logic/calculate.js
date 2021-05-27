import operate from './operate';

function calculate(calculatorObject, buttonName) {
  let { total, next, operation } = calculatorObject;
  if (buttonName === 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (buttonName === '+/-') {
    total = (next * total * -1).toString();
  } else if (buttonName === '+'
        || buttonName === '-'
        || buttonName === '/'
        || buttonName === '*'
        || buttonName === '%'
  ) {
    operation = !next ? buttonName : null;
  } else if (buttonName === '=') {
    total = operate(total, next, operation);
    next = '';
    operation = null;
  } else if (!operation) {
    total += buttonName;
  } else {
    next += buttonName;
  }
  return { total, next, operation };
}

export default calculate;
