export const inheritProps = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];
