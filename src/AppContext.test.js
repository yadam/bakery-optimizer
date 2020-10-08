import React from 'react';
import renderer from 'react-test-renderer';
import { AppContextProvider } from './AppContext';

describe('AppContextProvider', () => {
  it('renders with children', () => {
    const tree = renderer
      .create(
        <AppContextProvider>
          <div>
            <span>Hello World!</span>
          </div>
        </AppContextProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without children', () => {
    const tree = renderer.create(<AppContextProvider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
