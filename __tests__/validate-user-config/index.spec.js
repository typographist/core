import { validateUserConfig } from '../../src/validate-user-config';
import { userConfig } from '../../src/models/user-config';

describe('user config validators', () => {
  describe('validateUserConfig function', () => {
    it('if valid user config ', () => {
      expect(validateUserConfig(userConfig)).toEqual(true);
    });
  });
});