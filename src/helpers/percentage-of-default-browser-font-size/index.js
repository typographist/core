import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

// percentageOfDefaultBrowserFontSize :: (Number | String) => Number
export const percentageOfDefaultBrowserFontSize = x =>
  (parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE) * 100;
