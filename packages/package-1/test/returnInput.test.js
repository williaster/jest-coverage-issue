const returnInput = require('../src/returnInput');

describe('returnInput', () => {
  it('returns input', () => {
    expect(returnInput(123)).toBe(123);
  });
});
