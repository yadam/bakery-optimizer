import React from 'react';
import { create } from 'react-test-renderer';
import { Copyright } from './Copyright';

describe('Breads', () => {
  it('renders', () => {
    const tree = create(<Copyright />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
