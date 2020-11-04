import test1 from './test1.js';
import test2 from './test2.js';

function printLevel (obj, key) {
  var level = 0;
  if (key in obj) {
    while (!Object.prototype.hasOwnProperty.call(obj, key)) {
      obj = Object.getPrototypeOf(obj);
      level++;
    }
    return [level, obj[key]];
  } else {
    return `can't find ${key} in ${obj}`;
  };
}

test1(printLevel);
test2(printLevel);
