import { typeOf } from '.';

describe('helpers', () => {
  describe('typeOf fn', () => {
    it('will determinate the type of value', () => {
      expect(typeOf(1987)).toEqual('Number');

      expect(typeOf('str')).toEqual('String');

      expect(typeOf(true)).toEqual('Boolean');

      expect(typeOf(null)).toEqual('Null');

      expect(typeOf(undefined)).toEqual('Undefined');

      expect(typeOf([])).toEqual('Array');

      expect(typeOf({})).toEqual('Object');

      expect(typeOf(() => {})).toEqual('Function');
    });
  });
});
