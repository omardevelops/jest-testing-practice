// Takes a string and returns it with ONLY the first character capitalized
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export default capitalize;
