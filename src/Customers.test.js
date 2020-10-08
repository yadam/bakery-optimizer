import React from 'react';
import { act, create } from 'react-test-renderer';
import { AppContext } from './AppContext';
import { Customers } from './Customers';

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

describe('Customers', () => {
  it('renders', () => {
    const setCustomersMock = jest.fn();
    const tree = create(
      <AppContext.Provider
        value={{ breads: [], customers: [], setCustomers: setCustomersMock }}
      >
        <Customers />
      </AppContext.Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with customers', () => {
    const setCustomersMock = jest.fn();
    const tree = create(
      <AppContext.Provider
        value={{ breads, customers, setCustomers: setCustomersMock }}
      >
        <Customers />
      </AppContext.Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds a customer', () => {
    const setCustomersMock = jest.fn();
    const tree = create(
      <AppContext.Provider
        value={{ breads, customers, setCustomers: setCustomersMock }}
      >
        <Customers />
      </AppContext.Provider>,
    );
    const instance = tree.root;
    const input = instance.findByProps({ name: 'sourdough' });
    const button = instance.findByType('button');
    act(() => {
      input.props.onChange({ target: { value: 'sourdough' } });
    });
    act(() => {
      button.props.onClick();
    });
    expect(setCustomersMock).toHaveBeenCalledTimes(1);
  });

  it('does not add a customer if nothing selected', () => {
    const setCustomersMock = jest.fn();
    const tree = create(
      <AppContext.Provider
        value={{ breads, customers, setCustomers: setCustomersMock }}
      >
        <Customers />
      </AppContext.Provider>,
    );
    const instance = tree.root;
    const button = instance.findByType('button');
    act(() => {
      button.props.onClick();
    });
    expect(setCustomersMock).not.toHaveBeenCalled();
  });
});
