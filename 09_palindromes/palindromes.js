const palindromes = function (str) {
  let newStr = str.split(/\W/).join("").toLowerCase();

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
