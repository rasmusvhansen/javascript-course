var myMod = (function createMyMod() {
  'use strict';
  var a = 'a',
    b = 'b';

  function somePrivateFunc() {
    return a;
  }

  function apiFunc() {
    return 'From ' + somePrivateFunc() + ' to ' + b;
  }

  return {
    apiFunc: apiFunc
  };
})();

console.log(myMod.apiFunc());