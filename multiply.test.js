const multiply = require('./multiply');

test('multiple 2 * 2 equal to 4 resulst', () => {
  expect(multiply(2, 2)).toBe(4);
});
