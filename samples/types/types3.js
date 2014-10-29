'use strict';
var arr = [];
console.log(arr + ' {' + arr.length + '}');

arr.push('a');
arr.push('b');
arr.push('c');

console.log(arr + ' {' + arr.length + '}');

arr[3] = 'd';
console.log(arr + ' {' + arr.length + '}');

arr[100] = 'e';
console.log(arr + ' {' + arr.length + '}');
console.log(arr[7])


// beware

//var key = 'f';
//arr[key] = 42;
//console.log(arr + ' {' + arr.length + '}');
//
//key = '7';
//arr[key] = 'g';
//console.log(arr + ' {' + arr.length + '}');