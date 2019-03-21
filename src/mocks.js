exports.userConfig = {
  base: ['1em', '2em'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    breakpoint: '40em',
    base: '17px',
  },
  desktop: {
    breakpoint: '64em',
    base: '18px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    breakpoint: '75em',
    base: '20px',
  },
  xlDesktop: {
    breakpoint: '100em',
    base: '22px',
  },
};

exports.breakpoints = [
  {
    base: [16, 32],
    lineHeight: 1.5,
    name: 'initial',
    ratio: 1.1880883987824906,
    root: 12,
    value: '0px',
  },
  {
    base: [17],
    lineHeight: 1.5,
    name: 'tablet',
    ratio: 1.1761442744249144,
    root: 13,
    value: '640px',
  },
  {
    base: [18],
    lineHeight: 1.7,
    name: 'desktop',
    ratio: 1.333,
    root: 15.5,
    value: '1024px',
  },
  {
    base: [20],
    lineHeight: 1.7,
    name: 'lgDesktop',
    ratio: 1.333,
    root: 17,
    value: '1200px',
  },
  {
    base: [22],
    lineHeight: 1.7,
    name: 'xlDesktop',
    ratio: 1.333,
    root: 18.5,
    value: '1600px',
  },
];

exports.breakpointsModel = {
  initial: {
    base: [16, 32],
    lineHeight: 1.5,
    ratio: 1.1880883987824906,
    root: 12,
    value: '0px',
  },
  tablet: {
    base: [17],
    lineHeight: 1.5,
    ratio: 1.1761442744249144,
    root: 13,
    value: '640px',
  },
  desktop: {
    base: [18],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 15.5,
    value: '1024px',
  },
  lgDesktop: {
    base: [20],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 17,
    value: '1200px',
  },
  xlDesktop: {
    base: [22],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 18.5,
    value: '1600px',
  },
};
