import config from './config';

describe('config', () => {
  it('has defaults', () => {
    expect(config.host).toBe('localhost');
    expect(config.port).toBe(3000);
    expect(config.isBrowser).toBe(false);
    expect(config.isDev).toBe(true);
  });
});
