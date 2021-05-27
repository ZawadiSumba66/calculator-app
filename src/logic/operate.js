import Big from 'big.js';

function operate(numberOne, numberTwo, operator) {
  if (!numberOne || !numberTwo || !operator) return '0';
  let res = 0;
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operator) {
    case '+':
      res = num1.plus(num2);
      break;
    case '-':
      res = num1 - num2;
      break;
    case 'X':
      res = num1 * num2;
      break;
    case '/':
      res = num1 / num2;
      break;
    case '%':
      res = (num1 * num2) / 100;
      break;
    default:
      res = 0;
  }
  return res.toString();
}

export default operate;
