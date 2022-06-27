import analyzeArray from '../src/analyzeArray';

test('Analyzes array of integers correctly', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('Analyzes array of float numbers correctly', () => {
  expect(analyzeArray([1.2, 8.3, 3.7, 4.5, 2.95, 4.32])).toEqual({
    average: 4.161666666666666,
    min: 1.2,
    max: 8.3,
    length: 6,
  });
});

test('Analyzes array of two float numbers correctly', () => {
  expect(analyzeArray([0.1, 0.3])).toEqual({
    average: 0.2,
    min: 0.1,
    max: 0.3,
    length: 2,
  });
});

test('Analyzes array of negative numbers correctly', () => {
  expect(analyzeArray([-52, -95, -22, -60, -36, -46, -23, -75])).toEqual({
    average: -51.125,
    min: -95,
    max: -22,
    length: 8,
  });
});

test('Analyzes array of mixed numbers correctly', () => {
  expect(analyzeArray([5, 13, 14, 15, 16, 0, 0, -1, -7, -8, -16, -19])).toEqual(
    {
      average: 1,
      min: -19,
      max: 16,
      length: 12,
    }
  );
});

test('Analyzes array of zeros', () => {
  expect(analyzeArray([0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 3,
  });
});

test('Analyzes array of a single number', () => {
  expect(analyzeArray([42])).toEqual({
    average: 42,
    min: 42,
    max: 42,
    length: 1,
  });
});

test('Handles empty array', () => {
  expect(() => analyzeArray([])).toThrow(/Empty/);
});

test('Handles array with string types', () => {
  expect(() => analyzeArray(['chicken', 'apple', 'Hello World', 3])).toThrow(
    /Non-Number/
  );
});

test('Handles array with bool types', () => {
  expect(() => analyzeArray([true, true, false, 'a'])).toThrow();
});

test('Handles array with null types (1)', () => {
  expect(() => analyzeArray([null, null, null])).toThrow();
});

test('Handles array with null types (2)', () => {
  expect(() => analyzeArray([null, 2, 3])).toThrow();
});

test('Handles array with undefined values', () => {
  expect(() => analyzeArray([undefined, 2, 3, 5])).toThrow();
});
