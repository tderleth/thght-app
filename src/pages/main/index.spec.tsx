import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Main from '.';

describe('Main', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
