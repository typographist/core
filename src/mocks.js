/*
  Breakpoint :: {
    base :: Number | [Number],
    lineHeight :: Number,
    name :: String,
    ratio :: Number,
    root :: Number,
    value :: String,
  }
*/

// Breakpoints :: [Breakpoint]
export const breakpoints = [
  {
    base: [16, 33],
    lineHeight: 1.5,
    name: 'default',
    ratio: 1.1342044031840226,
    root: 12,
    value: '0px',
  },
  {
    base: 17,
    lineHeight: 1.5,
    name: 'tablet',
    ratio: 1.1258335640240535,
    root: 13,
    value: '640px',
  },
  {
    base: 18,
    lineHeight: 1.7,
    name: 'desktop',
    ratio: 1.333,
    root: 16,
    value: '1024px',
  },
  {
    base: 20,
    lineHeight: 1.7,
    name: 'lgDesktop',
    ratio: 1.333,
    root: 17,
    value: '1200px',
  },
  {
    base: 22,
    lineHeight: 1.7,
    name: 'xlDesktop',
    ratio: 1.333,
    root: 19,
    value: '1600px',
  },
];

/*
  Breakpoint :: {
    value :: String,
    base :: Maybe String | [String],
    lineHeight :: Maybe Number, 
    ratio :: Maybe Number | String,
  }
*/

/* UserConfig :: 
  {
    base :: String | [String],
    lineHeight :: Number, 
    ratio :: Number | String,
    Maybe Breakpoint,
  } 
*/

export const UserConfig = {
  base: ['1em', '2em'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    value: '40em',
    base: '17px',
  },
  desktop: {
    value: '64em',
    base: '18px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    value: '75em',
    base: '20px',
  },
  xlDesktop: {
    value: '100em',
    base: '22px',
  },
};
