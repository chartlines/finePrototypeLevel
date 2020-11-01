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

/*
const Animal = function () {};
Animal.prototype = { walk: 123 };
const SuperAnimal = function () {};
SuperAnimal.prototype = { walk: 456 };
const Dog = function () { Animal.call(this); };

Dog.prototype = Object.setPrototypeOf(Dog.prototype, Animal.prototype);

const d1 = new Dog();
console.log(d1.walk);

Dog.prototype = Object.setPrototypeOf(Dog.prototype, SuperAnimal.prototype);

const d2 = new Dog();
console.log(printLevel(d2, 'walk'), printLevel(d1, 'walk'));
*/

const Animal = function () {};
Animal.prototype = { walk: 123 };
const SuperAnimal = function () {};
SuperAnimal.prototype = { walk: 456 };
const Dog = function () { Animal.call(this); };

Dog.prototype = Object.create(Animal.prototype);

const d1 = new Dog();
console.log(d1.walk);

Dog.prototype = Object.create(SuperAnimal.prototype);

const d2 = new Dog();
console.log(printLevel(d2, 'walk'), printLevel(d1, 'walk'));
