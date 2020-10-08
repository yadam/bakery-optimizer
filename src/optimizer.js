export const optimize = (breads, customers) => {
  let result = {};
  let maxRounds;

  if (!customers.length) {
    return result;
  }

  const traverse = (path, happyCustomers, depth, numOfRounds) => {
    if (depth === breads.length) {
      // leaf node
      if (happyCustomers.every((customer) => customer)) {
        // valid solution
        result = path;
        maxRounds = numOfRounds;
        return true;
      }
      return false;
    }
    const bread = breads[depth];
    const leftPath = { ...path, [bread]: 'pan' };
    const leftHappyCustomers = customers.map(
      (customer, index) => happyCustomers[index] || customer[bread] === 'pan',
    );

    const left = traverse(leftPath, leftHappyCustomers, depth + 1, numOfRounds);

    let right;
    if (!maxRounds || maxRounds > numOfRounds + 1) {
      /**
        Only continue to traverse the right side if no solution has been found or
        we have not matched the number of round loaves being produced in the solutions
        that have been found so far. This prunes the tree and prevents the pursuing
        of less optimal solutions
      */
      const rightPath = { ...path, [bread]: 'round' };
      const rightHappyCustomers = customers.map(
        (customer, index) =>
          happyCustomers[index] || customer[bread] === 'round',
      );
      right = traverse(
        rightPath,
        rightHappyCustomers,
        depth + 1,
        numOfRounds + 1,
      );
    }
    return left || right;
  };

  // root node
  traverse({}, [], 0, 0);

  return result;
};

export default optimize;
