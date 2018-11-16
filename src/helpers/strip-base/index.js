import {
  INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT,
  INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT,
} from '../../constants/regexes';
import { toPx } from '../to-px';

//  stripBase :: (Array[String] | String) => Array[Number] | Number
export const stripBase = x => {
  let result = null;

  if (Array.isArray(x)) {
    result = x.map(item => stripBase(item));
  } else if (typeof x === 'string') {
    if (INTEGER_OR_FLOATING_POINT_NUMBER_WITH_PX_UNIT.test(x)) {
      result = parseFloat(x);
    }
    if (INTEGER_OR_FLOATING_POINT_NUMBER_WITH_EM_UNIT.test(x)) {
      result = parseFloat(toPx(x));
    }
  }
  return result;
};
