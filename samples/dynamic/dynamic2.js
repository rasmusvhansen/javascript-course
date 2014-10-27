'use strict';

var propertyName = 'foo';

var obj = {
  foo: function () {
    console.log('FOO!');
  }
}

obj[propertyName]();
