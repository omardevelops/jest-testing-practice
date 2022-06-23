import reverseString from '../src/reverseString';

test('Reverses a word', () => {
  expect(reverseString('apple')).toBe('elppa');
});

test('Reverses a capitalized word respectively', () => {
  expect(reverseString('Chicken')).toBe('nekcihC');
});

test('Reverses a sentence', () => {
  expect(reverseString('I like trains')).toBe('sniart ekil I');
});

test('Reverses a number', () => {
  expect(reverseString('12345678')).toBe('87654321');
});

test('Reverses some random string', () => {
  expect(reverseString('n9atItwzbFwx75oiG0n0l79JKdiYHC')).toBe(
    'CHYidKJ97l0n0Gio57xwFbzwtIta9n'
  );
});

test('Handles a single char', () => {
  expect(reverseString('a')).toBe('a');
});

test('Handles a single char (number)', () => {
  expect(reverseString('4')).toBe('4');
});

test('Handles a single char (symbol)', () => {
  expect(reverseString('$')).toBe('$');
});

test('Handles empty string', () => {
  expect(reverseString('')).toBe('');
});

test('Handles none string type', () => {
  expect(() => reverseString(123)).toThrow(/Not String/);
  expect(() => reverseString(false)).toThrow(/Not String/);
  expect(() => reverseString(23.0045)).toThrow(/Not String/);
});

test('Handles null case', () => {
  expect(() => reverseString(null)).toThrow(/Null/);
});

test('Handles undefined case', () => {
  expect(() => reverseString(undefined)).toThrow(/Undefined/);
});
