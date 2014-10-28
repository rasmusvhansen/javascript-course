'use strict';

function cube(n) {
  return n * n * n;
}

function square(n) {
  return n*n
}





var someObj = {
  squareMe: square,
  someProp: 'I am a property'
}

console.log(someObj.squareMe(8));




// Functions are objects, and as such can be assigned to variables,
// can have properties and methods themselves.

console.log(square.length);

square.maxInt = 20;

console.log(square(square.maxInt));