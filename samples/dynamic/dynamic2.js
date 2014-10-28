'use strict';

var propertyName = 'foo';

var obj = {
  foo: function () {
    console.log('FOO!');
  }
}

obj[propertyName]();

// In this example, we access a function on an object using a string literal to
// access it using "bracket"-notation
