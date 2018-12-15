import { validateUserConfig } from '.';
import { userConfig } from '../mocks';

describe('user config validators', () => {
  describe('validateUserConfig function', () => {
    it('if valid user config ', () => {
      expect(validateUserConfig(userConfig)).toEqual(true);
    });
  });
});
