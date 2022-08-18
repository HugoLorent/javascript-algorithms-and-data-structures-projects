function convertToRoman(num) {
  const finalArray = [];
  const numStrArray = num.toString().split('');
  let isNumberFinished = false;

  while (isNumberFinished === false) {
    switch (numStrArray.length) {
      case 1:
        finalArray.push(unitsTransform(numStrArray[numStrArray.length - 1]));
        isNumberFinished = true;
        break;
      case 2:
        finalArray.push(tensTransform(numStrArray[numStrArray.length - 2]));
        numStrArray.splice(numStrArray.length - 2, 1);
        break;
      case 3:
        finalArray.push(hundredsTransform(numStrArray[numStrArray.length - 3]));
        numStrArray.splice(numStrArray.length - 3, 1);
        break;
      case 4:
        finalArray.push(
          thousandsTransform(numStrArray[numStrArray.length - 4])
        );
        numStrArray.splice(numStrArray.length - 4, 1);
        break;
      default:
        return 'num must be between 1 and 3999';
    }
  }
  return finalArray.join('');
}

function unitsTransform(numStr) {
  switch (numStr) {
    case '1':
      return 'I';
    case '2':
      return 'II';
    case '3':
      return 'III';
    case '4':
      return 'IV';
    case '5':
      return 'V';
    case '6':
      return 'VI';
    case '7':
      return 'VII';
    case '8':
      return 'VIII';
    case '9':
      return 'IX';
    default:
      break;
  }
}

function tensTransform(numStr) {
  switch (numStr) {
    case '1':
      return 'X';
    case '2':
      return 'XX';
    case '3':
      return 'XXX';
    case '4':
      return 'XL';
    case '5':
      return 'L';
    case '6':
      return 'LX';
    case '7':
      return 'LXX';
    case '8':
      return 'LXXX';
    case '9':
      return 'XC';
    default:
      break;
  }
}

function hundredsTransform(numStr) {
  switch (numStr) {
    case '1':
      return 'C';
    case '2':
      return 'CC';
    case '3':
      return 'CCC';
    case '4':
      return 'CD';
    case '5':
      return 'D';
    case '6':
      return 'DC';
    case '7':
      return 'DCC';
    case '8':
      return 'DCCC';
    case '9':
      return 'CM';
    default:
      break;
  }
}

function thousandsTransform(numStr) {
  switch (numStr) {
    case '1':
      return 'M';
    case '2':
      return 'MM';
    case '3':
      return 'MMM';
    default:
      break;
  }
}

console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));
