import { errorReporter } from '@utils';

describe('errorReporter', () => {
  it('return object Error with error message', () => {
    expect(errorReporter).toThrow();
  });
});
