function Button() {
  const lists = [
    { area: 'one', value: 1 },
    { area: 'two', value: 2 },
    { area: 'three', value: 3 },
    { area: 'four', value: 4 },
    { area: 'five', value: 5 },
    { area: 'six', value: 6 },
    { area: 'seven', value: 7 },
    { area: 'eight', value: 8 },
    { area: 'nine', value: 9 },
    { area: 'zero', value: 0 },
    { area: 'minus', value: '-' },
    { area: 'plus', value: '+' },
    { area: 'times', value: '*' },
    { area: 'module', value: '%' },
    { area: 'divided', value: '/' },
    { area: 'dot', value: '.' },
    { area: 'equel', value: '=' },
    { area: 'clear', value: 'AC' },
    { area: 'input', value: '0' },
    { area: 'plusminus', value: '+/-' },
  ];
  const result = lists.map((list) => (
    <li key={list.area} className={list.area}>
      {list.value}
    </li>
  ));
  return <ul className="grid-calculator">{result}</ul>;
}

export default Button;
