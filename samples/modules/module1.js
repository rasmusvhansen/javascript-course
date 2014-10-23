'use strict';
function createMyMod() {
  var a = 'a',
    b = 'b';

  function somePrivateFunc() {
    return a;
  }

  function apiFunc() {
    return 'From ' + somePrivateFunc() + ' to ' + b;
  }

  function setA (newA) {
    a = newA;
  }

  return {
    apiFunc: apiFunc,
    setA: setA
  };

}

var myMod = createMyMod();
var myOtherModInstance = createMyMod();

myOtherModInstance.setA('BIGASS');

console.log(myMod.apiFunc());
console.log(myOtherModInstance.apiFunc());