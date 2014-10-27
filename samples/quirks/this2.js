'use strict';
// explicit binding

var Foo = {
  init: function(who) {
    this.me = who;

    $('#myElement').on('click', this.changeMe);
  },
  changeMe: function () {
    this.me = 'Someone else'; // this is bound to what?
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var f = Object.create(Foo);
f.init('Me');
