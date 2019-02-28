import { errorReporter } from '@utils/error-reporter';

describe('errorReporter', () => {
  it('return object Error with error message', () => {
    expect(errorReporter).toThrow();
  });
});
