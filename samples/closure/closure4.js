'use strict';
var countObj = {i: 0}
while(countObj.i < 5) {
  countObj.i++;
  (function (obj) {
    setTimeout( function timer(){
      console.log(obj.i);
    }, obj.i*1000 );
  })(countObj);
}