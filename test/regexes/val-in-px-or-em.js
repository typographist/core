import * as R from 'ramda';
import { VAL_WITH_PX_OR_EM } from '../../src/constants';

describe('VAL_WITH_PX_OR_EM', () => {
  it('returns `true` if string contain integer or floating point number with pixels', () => {
    expect(R.test(VAL_WITH_PX_OR_EM, '12px')).toEqual(true);
  });
});
