import * as fs from 'fs';
import { imageSize } from 'image-size';

describe('icon', () => {
  const path = './assets/icon.png';
  it('should check app icon existence', () => {
    expect(fs.existsSync(path)).toEqual(true);
  });
  it('should check dimensions of app icon', () => {
    const dimensions = imageSize(path);
    expect(dimensions.width).toEqual(1024);
    expect(dimensions.height).toEqual(1024);
  });
});
