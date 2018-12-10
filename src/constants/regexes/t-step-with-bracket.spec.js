import R from 'ramda';
import { T_STEP_WITH_BRACKET } from '.';

describe('regexes', () => {
  describe('T_STEP_WITH_BRACKET regex', () => {
    it('should remove `t-step(`', () => {
      expect(R.replace(T_STEP_WITH_BRACKET, '', 't-step(12)')).toEqual('12)');
    });
  });
});
