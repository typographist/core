export const userConfig = {
  base: ['16px', '32px'],
  lineHeight: 1.5,
  ratio: '45px at 6',
  tablet: {
    breakpoint: '768px',
    base: '17px',
  },
  desktop: {
    breakpoint: '992px',
    base: '18px',
    lineHeight: 1.7,
    ratio: 1.333,
  },
  lgDesktop: {
    breakpoint: '1200px',
    base: '20px',
  },
  xlDesktop: {
    breakpoint: '1600px',
    base: '22px',
  },
};

export const invalidUserConfig = {
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
