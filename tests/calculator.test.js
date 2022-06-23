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
