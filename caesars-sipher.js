const rot13Alphabet = {
  A: 'N',
  B: 'O',
  C: 'P',
  D: 'Q',
  E: 'R',
  F: 'S',
  G: 'T',
  H: 'U',
  I: 'V',
  J: 'W',
  K: 'X',
  L: 'Y',
  M: 'Z',
};

function rot13(str) {
  return str
    .split('')
    .map((letter) => mutateLetter(letter))
    .join('');
}

function mutateLetter(char) {
  for (const key in rot13Alphabet) {
    if (char === key) {
      char = rot13Alphabet[key];
      return char;
    } else if (char === rot13Alphabet[key]) {
      char = key;
      return char;
    }
  }
  return char;
}

console.log(rot13('SERR PBQR PNZC'));
console.log(rot13('SERR CVMMN!'));
console.log(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.'));
