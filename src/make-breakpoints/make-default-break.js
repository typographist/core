// makeDefaultBreak :: Object -> [Object]
export const makeDefaultBreak = ({ base, lineHeight, ratio }) =>
  Array.of({
    base,
    lineHeight,
    ratio,
    name: 'default',
    breakpoint: '0px',
  });
