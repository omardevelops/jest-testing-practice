const calculator = (() => {
  const isFloat = (value) => {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    )
      return true;
    return false;
  };
  const getResult = (result) => {
    if (isFloat(result)) return parseFloat(result.toFixed(7)); // Approximates floating point arithmetic
    return result;
  };
  const add = (a, b) => getResult(a + b);
  const subtract = (a, b) => getResult(a - b);
  const divide = (a, b) => {
    if (!b) throw new Error('Unexpected dividend value (+0, -0, or NaN)');
    return getResult(a / b);
  };
  const multiply = (a, b) => getResult(a * b);

  return { add, subtract, divide, multiply };
})();

export default calculator;
