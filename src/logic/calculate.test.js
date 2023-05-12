import calculate from './calculate';

describe('Testing calculations', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };

  it('1. Testing addition', () => {
    let result = calculate(obj, '56');
    result = calculate(result, '+');
    result = calculate(result, '4');
    result = calculate(result, '=');

    expect(result.total).toBe('60');
  });

  it('2. Testing multiplication', () => {
    let result = calculate(obj, '10');
    result = calculate(result, '0');
    result = calculate(result, 'x');
    result = calculate(result, '23');
    result = calculate(result, '0');
    result = calculate(result, '=');

    expect(result.total).toBe('23000');
  });

  it('3. Testing substraction', () => {
    let result = calculate(obj, '20');
    result = calculate(result, '0');
    result = calculate(result, '-');
    result = calculate(result, '10');
    result = calculate(result, '0');
    result = calculate(result, '=');

    expect(result.total).toBe('100');
  });

  it('4. Testing division', () => {
    let result = calculate(obj, '20');
    result = calculate(result, '0');
    result = calculate(result, '÷');
    result = calculate(result, '10');
    result = calculate(result, '0');
    result = calculate(result, '=');

    expect(result.total).toBe('2');
  });

  it('5. Testing sign', () => {
    let result = calculate(obj, '7');
    result = calculate(result, '+/-');
    result = calculate(result, 'x');
    result = calculate(result, '8');
    result = calculate(result, '+/-');
    result = calculate(result, '=');

    expect(result.total).toBe('56');
  });

  it('6. Testing consequetive operations', () => {
    let result = calculate(obj, '10');
    result = calculate(result, '0');
    result = calculate(result, '-');
    result = calculate(result, '5');
    result = calculate(result, '5');
    result = calculate(result, '-');
    result = calculate(result, '1');
    result = calculate(result, '5');
    result = calculate(result, '=');

    expect(result.total).toBe('30');
  });

  it('7. Testing divide by zero error', () => {
    let result = calculate(obj, '8');
    result = calculate(result, '÷');
    result = calculate(result, '0');
    result = calculate(result, '=');

    expect(result.total).toBe("Can't divide by 0.");
  });

  it('8. Testing Module', () => {
    let result = calculate(obj, '20');
    result = calculate(result, '%');
    result = calculate(result, '6');
    result = calculate(result, '=');

    expect(result.total).toBe('2');
  });

  it('9. Testing AC ', () => {
    let result = calculate(obj, '20');
    result = calculate(result, 'AC');
    result = calculate(result, '18');
    result = calculate(result, '%');
    result = calculate(result, '6');
    result = calculate(result, '=');

    expect(result.total).toBe('0');
  });

  it('10. Testing invert(+/-) ', () => {
    let result = calculate(obj, '20');
    result = calculate(result, '+/-');
    result = calculate(result, '6');
    result = calculate(result, '-');
    result = calculate(result, '6');
    result = calculate(result, '=');


    expect(result.total).toBe('-212');
  });

  it('11. Testing AC % invert(+/-)', () => {
    let result = calculate(obj, '20');
    result = calculate(result, '0');
    result = calculate(result, 'AC');
    result = calculate(result, '15');
    result = calculate(result, '%');
    result = calculate(result, '6');
    result = calculate(result, '+/-');
    result = calculate(result, '+/-');
    result = calculate(result, '=');

    expect(result.total).toBe('3');
  });
});
