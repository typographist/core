import { UserConfigValidator } from '.';
import { UserConfig as config } from '../mocks';

describe('user config validators', () => {
  describe('UserConfigValidator function', () => {
    it('if valid user config ', () => {
      expect(UserConfigValidator(config)).toEqual(true);
    });
  });
});
