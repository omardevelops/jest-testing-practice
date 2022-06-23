const reverseString = (str) => {
  if (str === null) throw new Error('Input string is Null');
  if (str === undefined) throw new Error('Input string is Undefined');
  if (typeof str !== 'string') throw new Error('Input type is Not String');

  const strAsArray = str.split('');
  let result = '';
  for (let i = strAsArray.length - 1; i >= 0; i--) {
    result += strAsArray[i];
  }
  return result;
};

export default reverseString;
