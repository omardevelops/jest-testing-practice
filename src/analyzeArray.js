const getSum = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};
const getAverage = (numbers) => {
  return getSum(numbers) / numbers.length;
};
const isArrayNumeric = (arr) => {
  // checks if array contains non-Number elements
  return arr.some((value) => typeof value !== 'number') ? false : true;
};
const analyzeArray = (numbers) => {
  // if NOT numeric, throw error
  if (isArrayNumeric(numbers) === false)
    throw new Error('Error: Input Array contains Non-Number Elements');
  // if empty, throw error
  if (numbers.length === 0) throw new Error('Error: Input Array is Empty');

  // otherwise, returns analysis of array
  return {
    average: getAverage(numbers),
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
};

export default analyzeArray;
