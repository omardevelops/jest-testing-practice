const alphabet = [...'abcdefghijklmnopqrstuvwxyz']; // ['a', 'b', 'c', ... , 'y', 'z']

// Takes plaintext and turns it into ciphertext using caesarCipher
const caesarCipher = (plaintext, key) => {
  let ciphertext = '';
  const plaintextArray = plaintext.split('');
  plaintextArray.forEach((char) => {
    const charIndex = alphabet.indexOf(char.toLowerCase());
    if (charIndex === -1)
      ciphertext += char; // If not found in alphabet, add as is
    else {
      // Otherwise, shift letter
      let shift = charIndex + key;
      // To avoid array out of bounds
      if (shift >= alphabet.length) shift -= alphabet.length;
      else if (shift < 0) shift += alphabet.length; // handle negative shifts
      if (char === char.toUpperCase())
        // If uppercase, make sure shifted letter is uppercase as well
        ciphertext += alphabet[shift].toUpperCase();
      else ciphertext += alphabet[shift]; // Otherwise, lowercase
    }
  });
  return ciphertext;
};

export default caesarCipher;
