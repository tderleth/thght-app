import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '.';

describe('Button', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<Button text="Test" onPress={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
