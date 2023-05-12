import operate from './operate';

describe('Testing the operate component:', () => {
  it('1. Testing addition:', () => {
    expect(operate(45, 55, '+')).toBe('100');
  });

  it('2. Testing Multiplication:', () => {
    expect(operate(8, 8, 'x')).toBe('64');
  });

  it('3. Testing Substraction:', () => {
    expect(operate(45, 55, '-')).toBe('-10');
  });

  it('4. Testing Division:', () => {
    expect(operate(20, 5, '÷')).toBe('4');
  });

  it('5. Testing Division:', () => {
    expect(operate(9, 5, '%')).toBe('4');
  });

  it('6. Testing divide by zero error:', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('7. Test not an operation error:', () => {
    expect(() => { operate(99, 0, '*'); }).toThrow(Error);
  });
});
