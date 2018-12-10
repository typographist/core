import R from 'ramda';

/* Breakpoint :: {
                  base :: String | [String]
                  lineHeight :: Number,
                  name :: String
                  ratio :: Number | String,
                  value :: String
                }
*/

// makeDefaultBreak :: UserConfig -> [Breakpoint]
export const makeDefaultBreak = R.compose(
  R.of,
  R.mergeDeepRight({ name: 'default', value: '0px' }),
  R.pick(['base', 'lineHeight', 'ratio']),
);
