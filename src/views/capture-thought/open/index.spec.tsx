import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CaptureThought from '.';

describe('CaptureThought', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<CaptureThought />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
