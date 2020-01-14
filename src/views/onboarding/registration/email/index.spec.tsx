import * as React from 'react';
import * as renderer from 'react-test-renderer';
import RegistrationEmail from '.';

describe('RegistrationEmail', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<RegistrationEmail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
