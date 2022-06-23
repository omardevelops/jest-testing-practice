import calculator from '../src/calculator';

/* Addition */
test('Adds two integers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Adds two large integers', () => {
  expect(calculator.add(1523669, 2255448896)).toBe(2256972565);
});

test('Adds two negative integers', () => {
  expect(calculator.add(-56, -200)).toBe(-256);
});

test('Adds two floating point numbers correctly', () => {
  expect(calculator.add(0.1, 0.2)).toBe(0.3);
});

test('Adds two floating point numbers correctly', () => {
  expect(calculator.add(1.3234234, 65.23123)).toBe(66.5546534);
});

test('Adds two floating point numbers correctly', () => {
  expect(calculator.add(1.000009, 3.000001)).toBe(4.00001);
});

/* Subtraction */
test('Subtracts two integers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('Subtracts two negative integers', () => {
  expect(calculator.subtract(-3, -2)).toBe(-1);
});

test('Subtracts two zeros', () => {
  expect(calculator.subtract(0, 0)).toBe(0);
});

test('Subtracts two large integers', () => {
  expect(calculator.subtract(234234234, 1231232234)).toBe(-996998000);
});

test('Subtracts two floating point numbers correctly', () => {
  expect(calculator.subtract(0.1, 0.2)).toBe(-0.1);
});

test('Subtracts two floating point numbers correctly', () => {
  expect(calculator.subtract(1.2, 0.2000001)).toBe(0.9999999);
});

test('Subtracts two floating point numbers correctly', () => {
  expect(calculator.subtract(1.2, 0.2000001)).toBe(0.9999999);
});

/* Division */
test('Divides two integers', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('Numerator larger than denominator', () => {
  expect(calculator.divide(5, 3)).toBe(1.6666667);
});

test('Denominator larger than numerator', () => {
  expect(calculator.divide(3, 5)).toBe(0.6);
});

test('Division over zero handled', () => {
  expect(() => calculator.divide(1, 0)).toThrow(/dividend value/);
});

test('Division with a negative number (1)', () => {
  expect(calculator.divide(32, -55)).toBe(-0.5818182);
});

test('Division with a negative number (2)', () => {
  expect(calculator.divide(-25, 5)).toBe(-5);
});

test('Division with a negative number (3)', () => {
  expect(calculator.divide(-25, -5)).toBe(5);
});

test('Division with float numbers', () => {
  expect(calculator.divide(12.25, 2.5)).toBe(4.9);
});

/* Multiplication */
test('Multip. with two integers', () => {
  expect(calculator.multiply(5, 6)).toBe(30);
});

test('Multip. with zero', () => {
  const a = Math.random(1, 0) * 100;
  expect(calculator.multiply(a, 0)).toBe(0);
});

test('Multip. with float numbers', () => {
  expect(calculator.multiply(1.25, 7.76)).toBe(9.7);
});

test('Multip. with a negative number (1)', () => {
  expect(calculator.multiply(-64, 4)).toBe(-256);
});

test('Multip. with a negative number (2)', () => {
  expect(calculator.multiply(32, -4)).toBe(-128);
});

test('Multip. large numbers', () => {
  expect(calculator.multiply(234234234, 745674657)).toBe(174662532095607738);
});
