/* eslint-disable no-undef */
import caesarCipher from '../src/caesarCipher';

test('Encrypts one letter', () => {
  expect(caesarCipher('a', 2)).toBe('c');
});

test('Encrypts a word', () => {
  expect(caesarCipher('procrastinate', 1)).toBe('qspdsbtujobuf');
});

test('Encrypts with symbols', () => {
  expect(caesarCipher('!^&*()procrastinate.$#@', 1)).toBe(
    '!^&*()qspdsbtujobuf.$#@'
  );
});

test('Encrypts with punctuation', () => {
  expect(
    caesarCipher(
      `o' you don't have the right, all the more you don't have the right...`,
      5
    )
  ).toBe(
    `t' dtz its'y mfaj ymj wnlmy, fqq ymj rtwj dtz its'y mfaj ymj wnlmy...`
  );
});

test('Encrypts by keeping same case (1)', () => {
  expect(caesarCipher('jELLo', 3)).toBe('mHOOr');
});

test('Encrypts by keeping same case (2)', () => {
  expect(
    caesarCipher('oH ThIs iS a VeRy nIcE FLOWeR vASe yOU HaVE HOHOHO', 2)
  ).toBe('qJ VjKu kU c XgTa pKeG HNQYgT xCUg aQW JcXG JQJQJQ');
});

test('Encrypts with negative shifting (1)', () => {
  expect(caesarCipher('hello world', -13)).toBe('uryyb jbeyq');
});

test('Encrypts with negative shifting (2)', () => {
  expect(caesarCipher('hello world', -1)).toBe('gdkkn vnqkc');
});

test('Encrypts with wrapping from z to a', () => {
  expect(caesarCipher('i love yarn', 4)).toBe('m pszi cevr');
});

test('Encrypts with key value zero (no shift)', () => {
  expect(caesarCipher('same same', 0)).toBe('same same');
});
