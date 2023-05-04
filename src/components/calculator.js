import Button from './Button';
import { setTerm, reduceterm } from './operation';

function Calculator() {
  const createterm = (str) => {
    let temp = str[0];
    const operator = '*+-%÷';
    let term = [];
    let i = 1;
    while (i < str.length) {
      if (str[i] === '+') {
        term = [...term, temp, str[i]];
        temp = '';
      } else if (str[i] === '-' && !operator.includes(str[i - 1])) {
        term = [...term, temp, str[i]];
        temp = '';
      } else {
        temp = `${temp}${str[i]}`;
      }
      i += 1;
    }
    return [...term, temp];
  };
  const setanswer = (temp) => {
    let answer = 'Error';
    const lists = createterm(temp);
    // console.log(temp, lists);
    const terms = lists.map((list) => (list.includes('%') || list.includes('x') || list.includes('÷')
      ? setTerm(list)
      : list));
    answer = reduceterm(terms);
    return answer;
  };
  return <Button getanswer={setanswer} />;
}

export default Calculator;
