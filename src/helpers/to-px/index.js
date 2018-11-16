const { BROWSER_DEFAULT_FONT_SIZE } = require('../../constants');

// toPx :: String => String
export const toPx = x => `${parseFloat(x) * BROWSER_DEFAULT_FONT_SIZE}px`;
