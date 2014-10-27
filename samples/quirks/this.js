'use strict';

var a = {
  f: function (val) {
    this.value = val;
  }
}

///////////////////////////

a.f('Case 1');
console.log(a.value);

//var f = a.f;
//f('Case 2');
//console.log(a.value);

//var b = {};
//a.f.call(b, 'Case 3');
//console.log(b.value);