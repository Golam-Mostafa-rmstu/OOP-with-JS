// Encapsulation

let circle = {
    radius: 1,
    draw: function(){
        console.log('draw');
    }
}
circle.draw()

// Factory function

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
};

const cicle = createCircle(1);
cicle.draw();

// consturctor function

function createCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
    //return this
};
const circle = new createCircle(1);// new keyword needed
circle.draw();
console.log(circle.radius);

// call method()

function createCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
    //return this
};


const circle = new createCircle(1);
const another = {};
circle.draw.call(another,1);//call the create object by another object
delete circle.draw;//deleting something
console.dir(circle);

function createCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
    //return this
};

const circle = new createCircle(1);
const keys = Object.keys(circle);
console.log(keys);
const values = Object.values(circle);
console.log(values);

for(let key in circle){
    // console.log(circle[key]);
    if(typeof circle[key] !== 'function')
        console.log(key);
}

if('radius' in circle)console.log('exist');

// Abstraction

function createCircle(radius){
    this.radius = radius;
    let defaultLocation =  {x:1};
    let computeOptimumLocation = function(factor){
        console.log(factor);
    }
    this.draw = function(){
        computeOptimumLocation(0.1);//only can handle by the draw function
        console.log('draw');//closure concept is working there
    };
};

const circle = new createCircle(1);
circle.draw();//can't computeOptimumLocation() without calling draw

console.dir(circle.draw);

// accesses Object property/methods by another object

let objectMethods = {
    eat(){
        console.log('eating');
    },
    play(){
        console.log('playing');
    }
}

function personDetails(name, age){
    let person = Object.create(objectMethods);
    person.name = name;
    person.age = age;
    return person;
}
const me = personDetails('mostafa', 24);
me.eat();
me.play();// play() is not own method of 'me' obj

// constructor function so much easier than above function
function personDetails(name, age){
    // let this = Object.create(objectMethods);
    this.name = name;
    this.age = age;
    // return this;
}

personDetails.prototype = {
    eat(){
        console.log('eating');
    },
    play(){
        console.log('playing');
    }
}

const me = new personDetails('mostafa',23);
me.play();

// class is not understood by js it always works with above fashion but programmer want class

class Person {
    constructor(name, age){// prototype er baccha hey tu
        this.name = name;
        this.age = age;
    }
    eat(){// prototype er baccha hey tu
        console.log('eating');
    }
    play(){// prototype er baccha hey tu
        console.log('playing');
    }
}
const me = new Person('mostafa',23);
me.play();
console.dir(Person)

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

// Inheritence with Class based

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    eat(){
        console.log(`${this.name} is eating`);
    };
}

class Cricketer extends Person{
    constructor(name, age, type, country){
        super(name, age);
        this.type = type;
        this.country = country;
    };
    play(){
        console.log(`${this.name} is playing`);
    };
}

const taskin = new Cricketer('taskin', 33, 'bowler', 'bangladesh');
taskin.eat();

// getter setter

class Person{
    constructor(name, age){
        this.name =name;
        this.age =age;
    }
    get getName(){//getter
        console.log(this.name);
    }
    set setName(name){//setter
        this.name = name;
    }
}
const per1 = new Person('mostafa', 24);
per1.getName;
per1.setName = 'imran';//interesting
console.log(per1.name);

// polymorphism

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing with Person`);
    }
}
class Cricketer extends Person{
    constructor(name, age, type, country){
        super(name,age);
        this.type = type;
        this.country = country;
    }
    play(){
        super.play();
        console.log(`${this.name} is playing with Cricketer`);
    }
}
const per = new Cricketer('ab de', 34, 'bat', 'sa');
per.play();