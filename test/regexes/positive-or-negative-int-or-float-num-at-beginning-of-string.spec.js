import * as R from 'ramda';
import { POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING } from '../../src/constants';

describe('POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING', () => {
  it('should integer support', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        '12',
      ),
    ).toEqual(true);
  });

  it('should floating points support', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        '1.2',
      ),
    ).toEqual(true);
  });

  it('should negative meaning', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        '-7',
      ),
    ).toEqual(true);
  });

  it('should invalid number', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        '1....2',
      ),
    ).toEqual(false);
  });

  it('should negative floating point', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        '-7.777',
      ),
    ).toEqual(true);
  });

  it('should not a number', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        'myNameIsMax',
      ),
    ).toEqual(false);
  });

  it('should not a number', () => {
    expect(
      R.test(
        POSITIVE_OR_NEGATIVE_INT_OR_FLOAT_NUM_AT_BEGINNING_OF_STRING,
        'myNameIsMax',
      ),
    ).toEqual(false);
  });
});
