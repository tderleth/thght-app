import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RegistrationOption from '.';

describe('RegistrationOption', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<RegistrationOption />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
