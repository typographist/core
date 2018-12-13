// @flow

type Input = {
  base: string[],
};

type Output = {
  base: number[],
};

type StripBase = Input => Output;
export const stripBase: StripBase = ({ base, ...item }) => ({
  ...item,
  base: base.map(parseFloat),
});
