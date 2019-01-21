import { errorReporter } from '../../src/helpers/error-reporter';

describe('errorReporter', () => {
  it('return object Error with error message', () => {
    expect(errorReporter).toThrow();
  });
});
