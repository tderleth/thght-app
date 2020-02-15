import * as React from 'react';
import { MemoryRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';
import BottomNavigationLayout from '.';

describe('CaptureThought', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <BottomNavigationLayout />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
