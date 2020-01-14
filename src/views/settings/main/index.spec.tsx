import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SettingsMain from '.';

describe('SettingsMain', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<SettingsMain />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
