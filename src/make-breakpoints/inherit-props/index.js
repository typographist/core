import R from 'ramda';

const indexedReduce = R.addIndex(R.reduce);

/*
  InputBreakpoint :: {
    value :: String,
    base :: Maybe String | [String],
    lineHeight :: Maybe Number,
    ratio :: Maybe Number | String,
    name :: String,
  }

  OutputBreakpoint :: {
    value :: String,
    base :: String | [String],
    lineHeight :: Number,
    ratio :: Number | String,
    name :: String,
  }
*/

// inheritProps :: (InputBreakpoint -> OutputBreakpoint) -> [InputBreakpoint] -> [OutputBreakpoint]
export const inheritProps = indexedReduce(
  (acc, breakpoint, index) =>
    R.append(R.mergeLeft(breakpoint, acc[index - 1]), acc),
  [],
);
