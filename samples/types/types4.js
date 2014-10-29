'use strict';
var regex = /[o]{3}/i;
console.log(typeof regex);

console.log('regex returns:  ' + regex.test('I contain three Ooos somewhere'));
console.log('regex returns:  ' + regex.test('I contain bar somewhere'));

