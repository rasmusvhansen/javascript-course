function loop() {
  'use strict';
  var count = 0;
  //console.log(i);
  // Some other logic taking up a lot of lines	
  for (var i = 0; i < 100; i++) {
    count++;
  }
  return count + i;
}
console.log(loop()); // Result = ?
