import { type } from '../../helpers';

// isObject :: a -> Boolean
export const isObject = (x) => type(x) === 'Object';

// isNotObject :: a -> Boolean
export const isNotObject = (x) => type(x) !== 'Object';

// isString :: a -> Boolean
export const isString = (x) => typeof x === 'string';

// isNumber :: a -> Boolean
export const isNumber = (x) => typeof x === 'number';

// isNumeric :: a -> Boolean
export const isNumeric = (x) => !Number.isNaN(parseFloat(x)) && isFinite(x);

// isNumerical :: a -> Boolean
export const isNumerical = (x) => typeof x === 'number' && isNumeric(x);

// ratioHasFontSize :: String -> Boolean
export const ratioHasFontSize = (x) => /^\d+(\.\d+)?px\b/g.test(x);

// ratioHasAtWord :: String -> Boolean
export const ratioHasAtWord = (x) => /\sat\s/.test(x);

// ratioHasStep :: String -> Boolean
export const ratioHasStep = (x) => /-?\b\d+(\.\d+)?\b\s*$/g.test(x);

// hasPx :: a -> Boolean
export const hasPx = (x) => /\d+(\.\d+)?px/.test(x);

// isValidStep :: String -> Boolean
export const isValidStep = (x) => /^-?\d+(\.\d+)?$/.test(x);
