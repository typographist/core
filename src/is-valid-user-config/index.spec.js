import { isValidUserConfig } from '.';
import { UserConfig } from '../mocks';

describe('user config validators', () => {
  describe('isValidUserConfig function', () => {
    it('if valid user config ', () => {
      expect(isValidUserConfig(UserConfig)).toEqual(true);
    });
  });
});
