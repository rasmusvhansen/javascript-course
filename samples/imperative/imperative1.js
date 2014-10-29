'use strict';
var a = 5;

while(a > 0) {
  console.log('HEY');
  a--;
}

for(var b = 0; b < 5; b++) {
  console.log(b);
}

var c = 'A';

switch (c) {
  case 'A':
  case 'B':
    console.log('Found A or B');
    break;
  default:
    console.log('DEFAULT');
}

var x = 10;
if (x > 7) {
  console.log('larger');
} else {
  console.log('smaller');
}