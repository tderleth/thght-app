import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Login from '.';

describe('Login', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
