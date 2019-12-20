import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '.';

describe('Button', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<Button text="Test" onPress={() => null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
