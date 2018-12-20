import { camelize } from '.';

describe('convertors', () => {
  describe('camelize', () => {
    it('convert cebabcase string to camalcase', () => {
      expect(camelize('hello-world')).toEqual('helloWorld');
    });

    it('lowercase the first letter', () => {
      expect(camelize('HelloWorld')).toEqual('helloWorld');
    });

    it('converts string to camelcase', () => {
      expect(camelize('hello world')).toEqual('helloWorld');
    });

    it('converts snakecase string to camelcase', () => {
      expect(camelize('hello_world')).toEqual('helloWorld');
    });
  });
});
