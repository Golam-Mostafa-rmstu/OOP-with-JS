// Inheritence with prototype based
function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.eat = function(){
    console.log(`${this.name} is eating`);
}

function Cricketer(name, age, type, country){
    Person.call(this, name, age);
    // this.name = name;
    this.type = type;
    this.country = country;
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

const mushi = new Cricketer('mushi', 35, 'wk-batsman', 'bangladesh');
mushi.eat();
console.log(mushi.name);
