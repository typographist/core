import { toSnakeCase } from '../../src/convertors/to-snake-case';

describe('toSnakeCase', () => {
  it('convert string to snake case notation', () => {
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
  });
});
