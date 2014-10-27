'use strict';

console.log(typeof undefined);
console.log(typeof true);
console.log(typeof 42);
console.log(typeof "42");
console.log(typeof { life: 42 });


console.log(typeof null); // WAT?!
console.log(typeof []); // object
console.log(function a() {}); // function - but still an object...