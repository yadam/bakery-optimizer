import React from 'react';
import { act, create } from 'react-test-renderer';
import { AppContext } from './AppContext';
import { Breads } from './Breads';

const breads = ['sourdough', 'wheat', 'banana'];

describe('Breads', () => {
  it('renders', () => {
    const setBreadsMock = jest.fn();
    const tree = create(
      <AppContext.Provider value={{ breads: [], setBreads: setBreadsMock }}>
        <Breads />
      </AppContext.Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with breads', () => {
    const setBreadsMock = jest.fn();
    const tree = create(
      <AppContext.Provider value={{ breads, setBreads: setBreadsMock }}>
        <Breads />
      </AppContext.Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds a bread', () => {
    const setBreadsMock = jest.fn();
    const tree = create(
      <AppContext.Provider value={{ breads, setBreads: setBreadsMock }}>
        <Breads />
      </AppContext.Provider>,
    );
    const instance = tree.root;
    const input = instance.findByType('input');
    const button = instance.findByType('button');
    act(() => {
      input.props.onChange({ target: { value: 'brioche' } });
    });
    act(() => {
      button.props.onClick();
    });
    expect(setBreadsMock).toHaveBeenCalledTimes(1);
  });
});
