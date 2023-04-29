const removeFromArray = function(array, ...parameters) {
  // let newArray = array;
  // for (param of parameters) {
  //   newArray = newArray.filter(element => element !== param);
  // }
  // return newArray;
  
  return array.filter(element => !parameters.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
