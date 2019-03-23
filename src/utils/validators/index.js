// isString :: a -> Boolean
export const isString = (x) => typeof x === 'string';

// isNumber :: a -> Boolean
export const isNumber = (x) => typeof x === 'number';

// ratioHasFontSize :: String -> Boolean
export const ratioHasFontSize = (x) => /^\d+(\.\d+)?(px|em)\b/g.test(x);

// ratioHasAtWord :: String -> Boolean
export const ratioHasAtWord = (x) => /\sat\s/.test(x);

// ratioHasStep :: String -> Boolean
export const ratioHasStep = (x) => /-?\b\d+(\.\d+)?\b\s*$/g.test(x);

// hasPx :: a -> Boolean
export const hasPx = (x) => /\d+(\.\d+)?px/.test(x);

// hasEm :: a -> Boolean
export const hasEm = (x) => /\d+(\.\d+)?em/.test(x);

// hasPxOrEm :: a -> Boolean
export const hasPxOrEm = (x) => /\d+(\.\d+)?(px|em)/.test(x);

// isValidStep :: String -> Boolean
export const isValidStep = (x) => /^-?\d+(\.\d+)?$/.test(x);

// isNumeric :: a -> Boolean
export const isNumeric = (x) => !Number.isNaN(parseFloat(x)) && isFinite(x);

// isNumerical :: a -> Boolean
export const isNumerical = (x) => typeof x === 'number' && isNumeric;
