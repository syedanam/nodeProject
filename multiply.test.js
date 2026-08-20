const multiply = require('./multiply');

test('multiplies 4 * 3 to equal 12', () => {
  expect(multiply(4, 3)).toBe(12);
});