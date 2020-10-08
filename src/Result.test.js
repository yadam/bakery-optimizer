import React from 'react';
import { create } from 'react-test-renderer';
import { AppContext } from './AppContext';
import { Result } from './Result';

const breads = ['sourdough', 'wheat', 'banana'];
const customers = [
  {
    key: 0,
    sourdough: 'round',
  },
  {
    key: 1,
    wheat: 'pan',
    banana: 'round',
  },
  {
    key: 2,
    sourdough: 'pan',
    wheat: 'round',
  },
];

describe('Result', () => {
  it('renders with no results', () => {
    const tree = create(
      <AppContext.Provider value={{ breads: [], customers: [] }}>
        <Result />
      </AppContext.Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with results', () => {
    const tree = create(
      <AppContext.Provider value={{ breads, customers }}>
        <Result />
      </AppContext.Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
