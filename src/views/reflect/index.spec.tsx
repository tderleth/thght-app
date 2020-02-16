import * as React from 'react';
import { MemoryRouter } from 'react-router-native';
import * as renderer from 'react-test-renderer';
import Reflect from '.';

describe('Reflect', () => {
  it('snapshot test', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Reflect />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
