import average from '../src/average';

test('calculates the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([10, 20, 30, 40, 50])).toBe(30);
    expect(average([])).toBe(0);
});