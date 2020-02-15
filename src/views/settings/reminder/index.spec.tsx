import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SettingsReminder from '.';

describe('SettingsReminder', () => {
  it('snapshot test', () => {
    const tree = renderer.create(<SettingsReminder />);
    expect(tree).toMatchSnapshot();
  });
});
