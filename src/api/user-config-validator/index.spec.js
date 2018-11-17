import { userConfigValidator } from '.';
import { userConfig as config } from '../../mocks';

describe('validateUserConfig', () => {
  describe('userConfigValidator function', () => {
    it('if valid user config ', () => {
      expect(userConfigValidator(config)).toBe(true);
    });
  });
});
