import * as fs from 'fs';

describe('splash-screen', () => {
  it('should check splash screen existence', () => {
    expect(fs.existsSync('./assets/splash.png')).toEqual(true);
  });
});
