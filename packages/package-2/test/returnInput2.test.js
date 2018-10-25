const returnInput = require('../src/returnInput2');

describe('returnInput', () => {
  it('returns input', () => {
    expect(returnInput(123)).toBe(123);
  });
});
