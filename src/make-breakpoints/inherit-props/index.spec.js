import { inheritProps } from '.';

describe('make breaks model', () => {
  describe('Name of the group', () => {
    const breakpoints = [
      {
        base: ['16px', '33px'],
        lineHeight: 1.5,
        name: 'default',
        ratio: '45px at 6',
        value: '0px',
      },
      {
        base: '17px',
        value: '640px',
      },
      {
        base: '18px',
        value: '1024px',
      },
      {
        base: '20px',
        value: '1200px',
      },
      {
        base: '22px',
        value: '1600px',
      },
    ];

    it('should inherit missing properties from previous breakpoint', () => {
      expect(inheritProps(breakpoints)).toEqual([
        {
          base: ['16px', '33px'],
          lineHeight: 1.5,
          name: 'default',
          ratio: '45px at 6',
          value: '0px',
        },
        {
          base: '17px',
          lineHeight: 1.5,
          name: 'default',
          ratio: '45px at 6',
          value: '640px',
        },
        {
          base: '18px',
          lineHeight: 1.5,
          name: 'default',
          ratio: '45px at 6',
          value: '1024px',
        },
        {
          base: '20px',
          lineHeight: 1.5,
          name: 'default',
          ratio: '45px at 6',
          value: '1200px',
        },
        {
          base: '22px',
          lineHeight: 1.5,
          name: 'default',
          ratio: '45px at 6',
          value: '1600px',
        },
      ]);
    });
  });
});
