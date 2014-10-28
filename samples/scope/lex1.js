function foo() {
  'use strict';
  var a = 2;

  function bar() {
    console.log(a);
  }

  bar();
}

foo();