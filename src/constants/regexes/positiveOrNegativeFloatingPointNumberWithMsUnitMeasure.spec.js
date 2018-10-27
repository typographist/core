const {
  POSITIVE_OR_NEGATIVE_FLOATING_POINT_NUMBER_WITH_STEP_UNIT_MEASURE,
} = require('./');

describe('regexes', () => {
  describe('POSITIVE_OR_NEGATIVE_FLOATING_POINT_NUMBER_WITH_STEP_UNIT_MEASURE', () => {
    it('should find number with step unit', () => {
      expect(
        POSITIVE_OR_NEGATIVE_FLOATING_POINT_NUMBER_WITH_STEP_UNIT_MEASURE.test(
          '12step',
        ),
      ).toBe(true);
    });

    it('should find floating point number with step unit', () => {
      expect(
        POSITIVE_OR_NEGATIVE_FLOATING_POINT_NUMBER_WITH_STEP_UNIT_MEASURE.test(
          '12.5step',
        ),
      ).toBe(true);
    });

    it('should find negative floating point number with step unit', () => {
      expect(
        POSITIVE_OR_NEGATIVE_FLOATING_POINT_NUMBER_WITH_STEP_UNIT_MEASURE.test(
          '-12.5step',
        ),
      ).toBe(true);
    });

    it('should not find negative floating point number with px unit', () => {
      expect(
        POSITIVE_OR_NEGATIVE_FLOATING_POINT_NUMBER_WITH_STEP_UNIT_MEASURE.test(
          '-12.5px',
        ),
      ).toBe(false);
    });
  });
});
