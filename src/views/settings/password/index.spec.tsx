import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SettingsPassword from '.';

describe('SettingsPassword', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<SettingsPassword />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
