import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CaptureThoughtDone from '.';

describe('CaptureThoughtDone', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<CaptureThoughtDone />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
