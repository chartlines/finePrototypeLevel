//屬性在物件上的哪一層
//一個函式兩參數  key new出來實體
//return 值 層級()

var Animal = function(name){
    this.name = name;
    this.show = () => {333};
  };
  Animal.prototype = {yes:123};
  var dog = new Animal('dog');
  Object.prototype.ss = 'hello';
  
  
  function DD(newObj,key){
    var level=0,value,nn;
    value = newObj[key];
    nn = newObj;
    if(`${key}` in newObj){
      while(!(nn.hasOwnProperty(`${key}`))){
        nn = nn.proto;
        level++;
      }
    };
    return [level,value]
  }
    
  console.log( DD(dog,'name'), DD(dog,'yes'), DD(dog,'ss'), DD(dog,'show') ); //[0,dog] 
  
  function displayKeyInfo(source, key) {
    function checkKey(obj, level) {
      if (obj.hasOwnProperty(key)) return [level, obj[key]];
      const proto = obj.proto;
      if (!proto) return [null, undefined];
      return checkKey(proto, level + 1);
    }
    return checkKey(source, 0);
  }
  
  console.log('displayKeyInfo', displayKeyInfo(dog,'name'), displayKeyInfo(dog,'yes'), displayKeyInfo(dog,'ss'), displayKeyInfo(dog,'show') );