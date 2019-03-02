import { separateWords } from '../../src/utils-public/separate-words';

describe('separateWords', () => {
  it('should separate word', () => {
    expect(separateWords('^')('HelloWorld')).toEqual('hello^world');
  });

  it('separate word with default separator', () => {
    expect(separateWords()('HelloWorld')).toEqual('hello world');
  });
});
