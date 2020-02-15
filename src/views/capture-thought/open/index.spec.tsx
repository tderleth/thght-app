import * as React from 'react';
import { MemoryRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';
import CaptureThought from '.';

describe('CaptureThought', () => {
  it('snapshot test', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CaptureThought />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
