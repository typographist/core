import R from 'ramda';

/*
  Breakpoint :: Maybe {
    value :: String,
    base :: Maybe String | [String],
    lineHeight :: Maybe Number,
    ratio :: Maybe Number | String,
  }
*/

/* NamedBreakpoint :: Maybe {
                    value :: String,
                    base :: Maybe String | [String],
                    lineHeight :: Maybe Number,
                    ratio :: Maybe Number | String,
                    name :: String,
                  }
*/

// setNameProp :: [String, Breakpoint] -> NamedBreakpoint
const setNameProp = ([breakName, breakBody]) =>
  R.mergeRight(breakBody, { name: breakName });

// makeNamedBreaks :: UserConfig -> [NamedBreakpoint] | []
export const makeNamedBreaks = R.compose(
  R.map(setNameProp),
  R.toPairs,
  R.omit(['base', 'lineHeight', 'ratio']),
);
