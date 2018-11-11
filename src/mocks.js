const breakpointsModel = [
  {
    root: 12,
    base: [16, 33],
    lineHeight: 1.5,
    ratio: 1.1880883987824906,
    value: '0px',
    name: 'default',
  },
  {
    root: 13,
    base: 17,
    name: 'tablet',
    value: '640px',
    lineHeight: 1.5,
    ratio: 1.1880883987824906,
  },
  {
    root: 16,
    base: 18,
    lineHeight: 1.7,
    ratio: 1.333,
    name: 'desktop',
    value: '1024px',
  },
  {
    root: 17,
    base: 20,
    name: 'lgDesktop',
    value: '1200px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  {
    root: 19,
    base: 22,
    name: 'xlDesktop',
    value: '1600px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
];

const userConfig = {
  base: '16px',
  lineHeight: 1.25,
  ratio: 1.067,
  tablet: {
    breakpoint: '576px',
    base: '17px',
    ratio: 1.125,
  },
  desktop: {
    breakpoint: '768px',
    base: '18px',
  },
  lgDesktop: {
    breakpoint: '992px',
    base: '20px',
    ratio: 1.2,
  },
  xlDesktop: {
    breakpoint: '1200px',
    base: '21px',
  },
};

module.exports = {
  breakpointsModel,
  userConfig,
};
