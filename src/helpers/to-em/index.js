import { BROWSER_DEFAULT_FONT_SIZE } from '../../constants';

// toEm :: String => String
export const toEm = x => `${parseFloat(x) / BROWSER_DEFAULT_FONT_SIZE}em`;
