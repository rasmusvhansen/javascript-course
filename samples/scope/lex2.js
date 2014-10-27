'use strict';
function func() {
  var x = 1;
  {
    var x = 2;
  }
  console.log(x);
}

func();
