import * as R from 'ramda';
import { FONT_SIZE } from '@constants';

describe('FONT_SIZE', () => {
  it('should found number with pixels', () => {
    expect(R.match(FONT_SIZE, '666px at 8')).toEqual(['666px']);
  });

  it('should found number with ems', () => {
    expect(R.match(FONT_SIZE, '666em at 8')).toEqual(['666em']);
  });

  it('should found floating point number with pixels', () => {
    expect(R.match(FONT_SIZE, '6.66px at 8')).toEqual(['6.66px']);
  });

  it('should found negative floating point number with with pixels', () => {
    expect(R.match(FONT_SIZE, '6.66px at 8')).toEqual(['6.66px']);
  });

  it('should not found matches ', () => {
    expect(R.match(FONT_SIZE, '666rem at 8')).toEqual([]);
  });
});
