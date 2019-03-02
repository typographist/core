import { toSnakeCase } from '../../src/utils-public';

describe('toSnakeCase', () => {
  it('convert string to snake case notation', () => {
    expect(toSnakeCase('HelloWorld')).toEqual('hello_world');
  });
});
