import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('STEP_WITH_BRACKET', () => {
    it('should remove `step(`', () => {
      expect(R.replace(regexes.STEP_WITH_BRACKET, '', 'step(12)')).toEqual(
        '12)',
      );
    });
  });
});
