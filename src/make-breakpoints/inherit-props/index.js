// @flow

type Input = {
  value: string,
  name: string,
  base?: string | string[],
  lineHeight?: number,
  ratio?: number | string,
};

type Output = {
  value: string,
  name: string,
  base: string | string[],
  lineHeight: number,
  ratio: number | string,
};

type Inherit = (any, any, number) => any[];
const inherit: Inherit = (acc, item, index) => [
  ...acc,
  {
    ...acc[index - 1],
    ...item,
  },
];

type InheritProps = (Input[]) => Output[];
export const inheritProps: InheritProps = input => input.reduce(inherit, []);
