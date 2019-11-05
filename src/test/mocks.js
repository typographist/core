exports.config = {
  base: ['16px', '32px'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    breakpoint: '768px',
    base: ['17px'],
  },
  desktop: {
    breakpoint: '992px',
    base: ['18px'],
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    breakpoint: '1200px',
    base: ['20px'],
  },
  xlDesktop: {
    breakpoint: '1600px',
    base: ['22px'],
  },
};

exports.invalidconfig = {
  base: ['1rem', '2em'],
  lineHeight: 1.5,
  ratio: '45 at 6',
  tablet: {
    base: '17px',
  },
  desktop: {
    breakpoint: '64rem',
    base: '18px',
    lineHeight: '1.7',
    ratio: 1.333,
  },
  lgDesktop: {
    breakpoint: '75rem',
    base: '20px',
  },
  xlDesktop: {
    breakpoint: '100rem',
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

exports.breakpointsMap = {
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
    value: '768px',
  },
  desktop: {
    base: [18],
    lineHeight: 1.7,
    ratio: 1.333,
    root: 15.5,
    value: '992px',
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
