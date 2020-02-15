import * as React from 'react';
import { MemoryRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';
import BottomNavigation from '.';

describe('CaptureThought', () => {
  it.only('snapshot test', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <BottomNavigation />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
