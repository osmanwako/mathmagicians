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

    it('3. Testing consequetive operations', () => {
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

    it('4. Testing divide by zero error', () => {
        let result = calculate(obj, '8');
        result = calculate(result, '÷');
        result = calculate(result, '0');
        result = calculate(result, '=');

        expect(result.total).toBe("Can't divide by 0.");
    });
});