const getSum = (numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};
const getAverage = (numbers) => {
  return getSum(numbers) / numbers.length;
};
const isArrayNumeric = (arr) => {
  return arr.some((value) => typeof value !== 'number') ? false : true;
};
const analyzeArray = (numbers) => {
  if (isArrayNumeric(numbers) === false)
    throw new Error('Error: Input Array contains Non-Number Elements');
  if (numbers.length === 0) throw new Error('Error: Input Array is Empty');

  return {
    average: getAverage(numbers),
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
  };
};

export default analyzeArray;
