'use strict';

var a = 5;
console.log(a + ' ' + typeof a);

a = 'Hello';
console.log(a + ' ' + typeof a);

a = {};
console.log(a + ' ' + typeof a);

a = function (param) {
};
console.log(a + ' ' + typeof a); // Despite being an object

a = null;
console.log(a + ' ' + typeof a);

a = undefined;
console.log(a + ' ' + typeof a);

a = true;
console.log(a + ' ' + typeof a);

a = [2, 'a'];
console.log(a + ' ' + typeof a);

// Javascript builtin types are:
// null, undefined, boolean, number, string, object
// Note that function and array are not first class types, they are special types
// of objects.
