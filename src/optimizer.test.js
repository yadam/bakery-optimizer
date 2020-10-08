import { optimize } from './optimizer';

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

const moreBreads = ['sourdough', 'wheat', 'banana', 'ciabatta', 'brioche'];
const moreCustomers = [
  {
    key: 0,
    sourdough: 'round',
    ciabatta: 'round',
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
  {
    key: 3,
    brioche: 'round',
    banana: 'round',
    ciabatta: 'pan',
  },
  {
    key: 4,
    ciabatta: 'pan',
    brioche: 'round',
  },
];

describe('optimize', () => {
  it('should optimize', () => {
    const actual = optimize(breads, customers);
    const expected = { sourdough: 'round', wheat: 'round', banana: 'round' };
    expect(actual).toStrictEqual(expected);
  });

  it('should optimize a longer list', () => {
    const actual = optimize(moreBreads, moreCustomers);
    const expected = {
      sourdough: 'pan',
      wheat: 'pan',
      banana: 'pan',
      brioche: 'round',
      ciabatta: 'round',
    };
    expect(actual).toStrictEqual(expected);
  });

  it('should handle empty breads', () => {
    const actual = optimize([], customers);
    expect(actual).toStrictEqual({});
  });

  it('should handle empty customers', () => {
    const actual = optimize(breads, []);
    expect(actual).toStrictEqual({});
  });

  it('should handle a single customer', () => {
    const actual = optimize(breads, [customers[0]]);
    const expected = { sourdough: 'round', wheat: 'pan', banana: 'pan' };
    expect(actual).toStrictEqual(expected);
  });

  it('should handle a single bread', () => {
    const actual = optimize([breads[0]], [customers[0]]);
    const expected = { sourdough: 'round' };
    expect(actual).toStrictEqual(expected);
  });

  it('should handle impossible situations', () => {
    const actual = optimize(
      [breads[0]],
      [customers[0], { key: 3, sourdough: 'pan' }],
    );
    const expected = {};
    expect(actual).toStrictEqual(expected);
  });
});
