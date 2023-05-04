import Big from 'big.js';

export function calculate(term1, operator, term2) {
  const one = Big(term1);
  const two = Big(term2);
  Big.strict = false;
  if (operator === '+') {
    return one.plus(two).toString();
  }
  if (operator === '-') {
    return one.minus(two).toString();
  }
  if (operator === 'x') {
    return one.times(two).toString();
  }
  if (operator === '÷') {
    try {
      return one.div(two).toString();
    } catch (errors) {
      return 'Error';
    }
  }
  if (operator === '%') {
    try {
      return one.mod(two).toString();
    } catch (errors) {
      return 'Error';
    }
  }
  return 'Error';
}

export function reduceterm(arr) {
  let result = 0;
  let op = '+';
  const operator = 'x%-+÷';
  arr.every((term) => {
    if (operator.includes(term)) op = term;
    else result = calculate(result, op, term);
    if (result === 'Error') return false;
    return true;
  });
  return result;
}

export function setTerm(str) {
  let temp = str[0];
  const operator = 'x%÷';
  let term = [];
  let i = 1;
  while (i < str.length) {
    if (operator.includes(str[i])) {
      term = [...term, temp, str[i]];
      temp = '';
    } else {
      temp = `${temp}${str[i]}`;
    }
    i += 1;
  }
  return reduceterm([...term, temp]);
}
