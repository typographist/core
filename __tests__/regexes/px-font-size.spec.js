import * as R from 'ramda';
import { VAL_IN_PX } from '../../src/constants';

describe('VAL_IN_PX', () => {
  it('should has pixels', () => {
    expect(R.test(VAL_IN_PX, '12px')).toEqual(true);
  });

  it('should floating-point number has pixels', () => {
    expect(R.test(VAL_IN_PX, '567.88px')).toEqual(true);
  });

  it('should does not contain pixels', () => {
    expect(R.test(VAL_IN_PX, '12rem')).toEqual(false);
  });

  it('should floating-point number does not contain pixels', () => {
    expect(R.test(VAL_IN_PX, '12.34rem')).toEqual(false);
  });
});
