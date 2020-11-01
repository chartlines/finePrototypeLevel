// 屬性在物件上的哪一層
// 一個函式兩參數  key new出來實體jkjlkjlk
// return 值 層級()

import dog from './data.js';
/*
function DD (newObj, key) {
  var level = 0; var value; var nn;
  value = newObj[key];
  nn = newObj;
  if (`${key}` in newObj) {
    while (!nn.hasOwnProperty(`${key}`)) {
      nn = nn.__proto__;
      level++;
    }
  };
  return [level, value];
}

console.log(DD(dog, 'name'), DD(dog, 'yes'), DD(dog, 'show'));
*/

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

export default printLevel;
console.log('printLevel', printLevel(dog, 'name'), printLevel(dog, 'yes'), printLevel(dog, 'show'));

function displayKeyInfo (source, key) {
  function checkKey (obj, level) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return [level, obj[key]];
    const proto = Object.getPrototypeOf(obj);
    if (!proto) return [null, undefined];
    return checkKey(proto, level + 1);
  }
  return checkKey(source, 0);
}

console.log('displayKeyInfo', displayKeyInfo(dog, 'name'), displayKeyInfo(dog, 'yes'), displayKeyInfo(dog, 'show'));
