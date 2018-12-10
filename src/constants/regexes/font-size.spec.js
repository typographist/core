import R from 'ramda';

import { FONT_SIZE } from '.';

describe('regexes', () => {
  describe('FONT_SIZE regex', () => {
    it('should found number with pixels', () => {
      expect('666px at 8'.match(FONT_SIZE)).toEqual(['666px']);
    });

    it('should found number with ems', () => {
      expect('666em at 8'.match(FONT_SIZE)).toEqual(['666em']);
    });

    it('should found floating point number with pixels', () => {
      expect('6.66px at 8'.match(FONT_SIZE)).toEqual(['6.66px']);
    });

    it('should found negative floating point number with with pixels', () => {
      expect('6.66px at 8'.match(FONT_SIZE)).toEqual(['6.66px']);
    });

    it('should not found matches ', () => {
      expect(R.match(FONT_SIZE)('666rem at 8')).toEqual([]);
    });
  });
});
