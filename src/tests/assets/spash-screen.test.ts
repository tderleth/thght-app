import * as fs from 'fs';
import { imageSize } from 'image-size';

describe('splash-screen', () => {
  const path = './assets/splash.png';
  it('should check splash screen existence', () => {
    expect(fs.existsSync(path)).toEqual(true);
  });
  it('should check dimensions of splash screen', () => {
    const dimensions = imageSize(path);
    expect(dimensions.width).toEqual(1242);
    expect(dimensions.height).toEqual(2436);
  });
});
