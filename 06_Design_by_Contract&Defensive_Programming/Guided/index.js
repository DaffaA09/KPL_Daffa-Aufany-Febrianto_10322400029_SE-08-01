const convert = (number = undefined, base = undefined) => {
  if (number === undefined) throw new Error('Number is required');
  if (base === undefined) throw new Error('Base is required');

  if (typeof number !== 'number' || typeof base !== 'number') {
    throw new Error('Both parameters need to be numbers');
  }

  switch (base) {
    case 2:
      return number.toString(2);

    case 10:
      return parseInt(number, 2);

    default:
      throw new Error('Base must be 2 or 10');
  }
};