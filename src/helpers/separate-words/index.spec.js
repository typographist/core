import { separateWords } from '.';

describe('helpers', () =>
  describe('separateWords', () => {
    it('should separate word', () => {
      expect(separateWords('^')('HelloWorld')).toEqual('hello^world');
    });

    it('separate word with default separator', () => {
      expect(separateWords()('HelloWorld')).toEqual('hello world');
    });
  }));
