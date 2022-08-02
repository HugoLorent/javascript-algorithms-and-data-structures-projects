function palindrome(str) {
  const nonAlphaNumericCharactersRegex = /\W|_/g;
  const palindromeToCheck = str
    .trim()
    .replace(nonAlphaNumericCharactersRegex, '')
    .toLowerCase();

  const strReversed = palindromeToCheck.split('').reverse().join('');
  if (palindromeToCheck === strReversed) {
    return true;
  }
  return false;
}

console.log(palindrome('_eye'));
console.log(palindrome('not a palindrome'));
console.log(palindrome('never odd or even'));
console.log(palindrome('A man, a plan, a canal. Panama'));
