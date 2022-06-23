import calculator from '../src/calculator';

/* Addition */
test('Adds two integers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Adds two negative integers', () => {
  expect(calculator.add(-56, -200)).toBe(-256);
});

test('Adds two floating point numbers with handling floating point arithmetic', () => {
  expect(calculator.add(0.1, 0.2)).toBe(0.3);
});

test('Adds two floating point numbers with handling floating point arithmetic', () => {
  expect(calculator.add(1.3234234, 65.23123)).toBe(66.5546534);
});

test('Adds two floating point numbers with handling floating point arithmetic', () => {
  expect(calculator.add(1.000009, 3.000001)).toBe(4.00001);
});

/* Subtraction */
test('Subtracts two integers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});
