import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

// percentage :: Number | String -> Number
export const percentage = x =>
  (parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100;
