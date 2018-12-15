import R from 'ramda';
import * as regexp from '.';

describe('regexes', () => {
  describe('LINE_BREAKS_AND_SPACES regex', () => {
    it('should remove line breaks and spaces', () => {
      expect(
        R.replace(regexp.LINE_BREAKS_AND_SPACES, '')(
          '.test \n.some-test   .wrapper \n\n',
        ),
      ).toEqual('.test.some-test.wrapper');
    });
  });
});
