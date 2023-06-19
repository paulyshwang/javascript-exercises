const fibonacci = function(n) {
  
  // Cast any strings to number
  let num = Number(n);
  
  // Handle negative numbers
  if (num < 0) return "OOPS"

  // Base cases:
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  // Recursive case:
  return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
