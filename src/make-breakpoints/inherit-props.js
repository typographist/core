// @flow

export const inheritProps = (acc: any, item: any, index: any): any => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];
