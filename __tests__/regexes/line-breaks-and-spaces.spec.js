import * as R from 'ramda';
import { regexes } from '../../src/constants';

describe('regexes', () => {
  describe('LINE_BREAKS_AND_SPACES', () => {
    it('should remove line breaks and spaces', () => {
      expect(
        R.replace(regexes.LINE_BREAKS_AND_SPACES, '')(
          '.test \n.some-test   .wrapper \n\n',
        ),
      ).toEqual('.test.some-test.wrapper');
    });
  });
});
