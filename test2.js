const Animal = function () {};
Animal.prototype = { walk: 123 };
const SuperAnimal = function () {};
SuperAnimal.prototype = { walk: 456 };
const Dog = function () { Animal.call(this); };

Dog.prototype = Object.create(Animal.prototype);

const d1 = new Dog();

Dog.prototype = Object.create(SuperAnimal.prototype);

const d2 = new Dog();

export default (cb) => {
  console.log('test2');
  console.log('d2', d2.walk);
  console.log('d1', d1.walk, d1.__proto__, d1.__proto__.__proto__);
};
