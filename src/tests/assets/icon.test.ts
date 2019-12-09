import * as fs from 'fs';

describe('icon', () => {
  it('should check app icon existence', () => {
    expect(fs.existsSync('./assets/icon.png')).toEqual(true);
  });
});
