import R from 'ramda';
import { STEP_WITH_BRACKET } from '.';

describe('regexes', () => {
  describe('STEP_WITH_BRACKET regex', () => {
    it('should remove `step(`', () => {
      expect(R.replace(STEP_WITH_BRACKET, '', 'step(12)')).toEqual('12)');
    });
  });
});
