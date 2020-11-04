const Animal = function () {};
Animal.prototype = { walk: 123 };
const SuperAnimal = function () {};
SuperAnimal.prototype = { walk: 456 };
const Dog = function () { Animal.call(this); };

Dog.prototype = Object.setPrototypeOf(Dog.prototype, Animal.prototype);

const d1 = new Dog();

Dog.prototype = Object.setPrototypeOf(Dog.prototype, SuperAnimal.prototype);

const d2 = new Dog();

// d1.__proto__.__proto__ === d1.__proto__.constructor.prototype.__proto__
// d1.__proto__.constructor === DOG
export default (cb) => {
  console.log('test1');
  console.log('d2', d2.walk);
  console.log('d1', d1.walk);
  // console.log('Dog', Dog);
};
