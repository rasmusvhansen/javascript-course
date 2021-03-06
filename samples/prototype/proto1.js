'use strict';
// Traditional mimicking of inheritance

// Shape - superclass
function Shape() {
  this.x = 10;
  this.y = 10;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved to ' + this.x + ', ' + this.y);
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

rect instanceof Rectangle; // true
rect instanceof Shape; // true

rect.move(1, 1);