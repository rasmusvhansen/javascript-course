'use strict';
// Partial function application ("currying")

function sumThreeNumbers(a, b, c) {
  return a + b + c;
}

// We can create a partial function that adds two numbers to 42