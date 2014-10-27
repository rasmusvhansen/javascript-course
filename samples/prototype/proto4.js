'use strict';

var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var Bar = Object.create( Foo );

Bar.speak = function() {
  console.log( "Hello, " + this.identify() + "." );
};

var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();

console.log(b1.__proto__);
console.log(b1.__proto__.__proto__);
console.log(b1.__proto__.__proto__.__proto__);
console.log(b1.__proto__.__proto__.__proto__.__proto__);