import { separateWords } from '.';

describe('helpers', () =>
  describe('separateWords', () => {
    it('should separate word', () => {
      expect(separateWords('^')('HelloWorld')).toEqual('Hello^World');
    });
  }));
