function foo() {
  'use strict';
  var a = 2;

  function bar() {
    console.log(a); // 2
  }

  return bar;
}

var func = foo();
func();