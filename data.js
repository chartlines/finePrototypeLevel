var Animal = function (name) {
  this.name = name;
  this.show = () => { return 333; };
};
Animal.prototype = { yes: 123 };
var dog = new Animal('dog');

export default dog;
