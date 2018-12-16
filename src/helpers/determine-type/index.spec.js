import { determineType } from '.';

describe('helpers', () => {
  describe('determineType fn', () => {
    it('will determinate the type of value', () => {
      expect(determineType(1987)).toEqual('Number');

      expect(determineType('str')).toEqual('String');

      expect(determineType(true)).toEqual('Boolean');

      expect(determineType(null)).toEqual('Null');

      expect(determineType(undefined)).toEqual('Undefined');

      expect(determineType([])).toEqual('Array');

      expect(determineType({})).toEqual('Object');

      expect(determineType(() => {})).toEqual('Function');
    });
  });
});
