'use strict';
function func() {
  var x = 1;
  {
    var x = 2;
  }
  console.log('x inside func' + x);
}

func();
// console.log('x outside func: ' + x);

// Do blocks create scope?
// What about for loops, if statements, while loops etc?

//if (true) {
//  var y = 5;
//  console.log('y inside if: ' + y);
//}
//console.log('y outside if: ' + y);