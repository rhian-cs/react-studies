import { capitalize } from './stringUtils';

describe('#capitalize', () => {
  it('properly capitalizes strings', () => {
    expect(capitalize('string')).toEqual('String');
    expect(capitalize('stRing')).toEqual('StRing');
    expect(capitalize('String')).toEqual('String');
    expect(capitalize('STRING')).toEqual('STRING');
    expect(capitalize('multiple words')).toEqual('Multiple words');
  });
});
