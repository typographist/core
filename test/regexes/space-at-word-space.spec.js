import * as R from 'ramda';
import { SPACE_AT_WORD_SPACE } from '../../src/constants';

describe('AT_WORD', () => {
  it('should ratio string has `at` word', () => {
    expect(R.test(SPACE_AT_WORD_SPACE, '123px at 7')).toEqual(true);
  });

  it("should doesn't contain `at` word", () => {
    expect(R.test(SPACE_AT_WORD_SPACE, '123px  7px')).toEqual(false);
  });
});
