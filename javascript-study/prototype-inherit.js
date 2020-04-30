function Animal(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function(){
    console.log(this.sound);
}

function Dog(name, sound){
    Animal.call(this, '개', name, sound);
}

Dog.prototype = Animal.prototype;

const animal = new Animal('개', '멍멍이', '멍멍');
const dog = new Dog('멍멍이', '멍멍');


console.log(animal)
animal.say()
//
console.log(dog)
dog.say()