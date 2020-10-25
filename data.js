var Animal = function(name){
    this.name = name;
    this.show = () => {333};
};
Animal.prototype = {yes:123};
var dog = new Animal('dog');
Object.prototype.ss = 'hello';

export default dog;