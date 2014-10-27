'use strict';
// Partial function application ("currying")

function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

var addTwoNumbersTo42 = sumThreeNumbers.bind(null, 42);
console.log(addTwoNumbersTo42(5, 3));

var addOneNumberTo50 = addTwoNumbersTo42.bind(null, 8);
console.log(addOneNumberTo50(10));

