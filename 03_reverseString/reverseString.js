const reverseString = function(string) {
  let newString = "";
  for (let i = 0; i <= string.length; i++) {
    newString += string.charAt(string.length - i);
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
