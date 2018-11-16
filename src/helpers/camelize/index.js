import { DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS } from '../../constants/regexes';
import { isNumeric } from '../is-numeric';

// camelize :: String => String
export const camelize = value => {
  let string = value;

  if (isNumeric(string)) {
    return string;
  }
  string = string.replace(DASH_HYPHEN_WHITESPACE_ANY_CHARACTERS, (match, chr) =>
    chr ? chr.toUpperCase() : '',
  );
  // Ensure 1st char is always lowercase
  return string.substr(0, 1).toLowerCase() + string.substr(1);
};
