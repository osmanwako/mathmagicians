import operate from './operate';

describe('Testing the operate component:', () => {
  it('1. Testing addition:', () => {
    expect(operate(45, 55, '+')).toBe('100');
  });

  it('2. Testing divide by zero error:', () => {
    expect(operate(1, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('3. Test not an operation error:', () => {
    expect(() => { operate(99, 0, '*'); }).toThrow(Error);
  });
});
