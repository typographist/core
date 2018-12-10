import R from 'ramda';
import { LAST_COMMA } from '.';

describe('regexes', () => {
  describe('LAST_COMMA regex', () => {
    it('should remove last comma', () => {
      expect(R.replace(LAST_COMMA, '', 'this, is, awesome, project,')).toEqual(
        'this, is, awesome, project',
      );
    });
  });
});
