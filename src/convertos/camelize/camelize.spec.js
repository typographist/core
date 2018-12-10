import { camelize } from '.';

describe('convertors', () => {
  describe('camelize', () => {
    it('should camelize string', () => {
      expect(camelize('hello-world')).toEqual('helloWorld');
    });
  });
});
