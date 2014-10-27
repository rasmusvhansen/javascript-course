'use strict';
var a = 42;
console.log(typeof a);

console.log(typeof (a + '')); // Implicit coercion

console.log(typeof String(a)); // explicit coercion

var d = new Date();
console.log(d);
console.log(Number(d)); // coercion to number
console.log(+d); // different way of coercing to number







// -----------------------------------------------

var Foo = {
//  valueOf: function () {
//    return this.value;
//  },
  init: function (v) {
    this.value = v;
  }
};

var f = Object.create(Foo);
f.init('42');

console.log(+f);