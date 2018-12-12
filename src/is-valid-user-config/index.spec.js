import { isValiduserConfig } from '.';
import { userConfig } from '../mocks';

describe('user config validators', () => {
  describe('isValiduserConfig function', () => {
    it('if valid user config ', () => {
      expect(isValiduserConfig(userConfig)).toEqual(true);
    });
  });
});
