import capitalize from '../src/capitalize';

test('Multiple words, fully lowercase', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('Multiple words, fully uppercase', () => {
  expect(capitalize('MEOW MEOW MEOW')).toBe('Meow meow meow');
});

test('One word, fully lowercase', () => {
  expect(capitalize('procrastinate')).toBe('Procrastinate');
});

test('One word, fully uppercase', () => {
  expect(capitalize('PROCRASTINATE')).toBe('Procrastinate');
});

test('Already capitalized word', () => {
  expect(capitalize('Apple')).toBe('Apple');
});

test('Already capitalized sentence', () => {
  expect(capitalize('I like trains')).toBe('I like trains');
});

test('Sentence with random capitalization', () => {
  expect(capitalize('i lIkE cHicKEN')).toBe('I like chicken');
});

test('Word with random capitalization', () => {
  expect(capitalize('cHicKEN')).toBe('Chicken');
});
