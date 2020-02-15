import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BottomNavigationLayout from '.';

describe('CaptureThought', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<BottomNavigationLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
