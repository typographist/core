import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('LAST_COMMA', () => {
    it('should remove last comma', () => {
      expect(
        R.replace(regexes.LAST_COMMA, '', 'this, is, awesome, project,'),
      ).toEqual('this, is, awesome, project');
    });
  });
});
