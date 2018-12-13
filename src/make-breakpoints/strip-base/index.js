// @flow

type Input = {
  base: string | string[],
};

type Output = {
  base: number | number[],
};

type StripBase = Input => Output;
export const stripBase: StripBase = ({ base, ...item }) => ({
  ...item,
  base: Array.isArray(base) ? base.map(parseFloat) : parseFloat(base),
});
