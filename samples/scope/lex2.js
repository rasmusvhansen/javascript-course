'use strict';
function func() {
  var x = 1;
  {
    var x = 2;
  }
  console.log(x);
}

func();

// Do blocks create scope?
// What about for loops, if statements, while loops etc?
