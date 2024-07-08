import median from '../src/median';

test('calculates the median of an array of numbers', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([10, 20, 30, 40, 50])).toBe(30);
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(median([])).toBe(0);
});