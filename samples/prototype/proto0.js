'use strict';
var a = {
  f1: function () { console.log('f1');}
};

a.f1(); // Function found directly on a object

// toString is not found directly on a, so it walks up the prototype chain
console.log(a.toString());
console.log('a\'s prototype is :' + a.__proto__);


