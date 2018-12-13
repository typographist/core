import { isValiduserConfig } from '.';
import { userConfig } from '../models';

describe('user config validators', () => {
  describe('isValiduserConfig function', () => {
    it('if valid user config ', () => {
      expect(isValiduserConfig(userConfig)).toEqual(true);
    });
  });
});
