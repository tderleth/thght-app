import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SettingsEmail from '.';

describe('SettingsEmail', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<SettingsEmail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
