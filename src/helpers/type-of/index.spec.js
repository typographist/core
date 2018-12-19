import { typeOf } from '.';

describe('helpers', () => {
  describe('typeOf fn', () => {
    it('will determinate the type of value', () => {
      expect(typeOf(1987)).toEqual('number');

      expect(typeOf('str')).toEqual('string');

      expect(typeOf(true)).toEqual('boolean');

      expect(typeOf(null)).toEqual('null');

      expect(typeOf(undefined)).toEqual('undefined');

      expect(typeOf([])).toEqual('array');

      expect(typeOf({})).toEqual('object');

      expect(typeOf(() => {})).toEqual('function');
    });
  });
});
