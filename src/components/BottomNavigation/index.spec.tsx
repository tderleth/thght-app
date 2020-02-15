import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BottomNavigation from '.';

describe('CaptureThought', () => {
  it.only('snapshot test', () => {
    const tree = renderer.create(<BottomNavigation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
