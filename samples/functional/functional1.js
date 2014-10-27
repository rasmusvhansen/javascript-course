'use strict';

var square = function (n) {
  return n*n
}

var someObj = {
  squareMe: square,
  someProp: 'I am a property'
}

console.log(someObj.squareMe(12));

