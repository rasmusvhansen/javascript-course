'use strict';
// OLOO style

var Shape = {
  init: function () {
    this.x = 0;
    this.y = 0;
  },
  move: function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  }
};

var Rectangle = Object.create(Shape);

var rect = Object.create(Rectangle);
rect.init();
rect.move(1,1);

console.log(Rectangle.isPrototypeOf(rect));
console.log(Shape.isPrototypeOf(rect));