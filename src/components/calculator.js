import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcState, setCalcState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const displayResult = (e) => {
    const name = e.target.textContent;
    setCalcState((prev) => ({
      ...prev,
      total: name,
    }));
  };

  const onbuttonclick = (e) => {
    const keyValue = e.target.textContent;
    const result = calculate(calcState, keyValue);
    setCalcState(result);
  };
  const { total, next, operation } = calcState;
  return (
    <div className="design">
      <div className="math-header">
        <h3>Lets Do some Maths</h3>
      </div>
      <div className="grid-calculator">
        <button
          type="button"
          className="input button items"
          onChange={displayResult}
        >
          {total}
          {operation}
          {next}
        </button>
        <button
          type="button"
          className="clear button items"
          onClick={onbuttonclick}
        >
          AC
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="sign button items"
        >
          +/-
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="module button operator"
        >
          %
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="divided operator button"
        >
          ÷
        </button>
        <button
          type="button"
          className="seven button number"
          onClick={onbuttonclick}
        >
          7
        </button>
        <button
          type="button"
          className="eight button number"
          onClick={onbuttonclick}
        >
          8
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="nine button number"
        >
          9
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="times button operator"
        >
          x
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="four button number"
        >
          4
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="five button number"
        >
          5
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="six button number"
        >
          6
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="minus operator button"
        >
          -
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="three button number"
        >
          3
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="two button number"
        >
          2
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="one button number"
        >
          1
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="plus operator button"
        >
          +
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="zero button number"
        >
          0
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="dot button items"
        >
          .
        </button>
        <button
          type="button"
          onClick={onbuttonclick}
          className="equal button items"
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
