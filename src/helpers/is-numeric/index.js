// isNumeric :: a -> Boolean
export const isNumeric = num => !Number.isNaN(parseFloat(num)) && isFinite(num);
