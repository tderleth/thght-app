import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Reflect from '.';

describe('Reflect', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<Reflect />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
