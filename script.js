// Encapsulation

let circle2 = {
    radius: 1,
    draw: function(){
        console.log('draw');
    }
}
circle2.draw()

// Factory function

function createCircle1(radius){
    const obj = {
        radius,
        draw1: function(){
            console.log('draw');
        }
    }
    return obj;
};

// console.dir(createCircle);

const cicle = createCircle1(1);
cicle.draw1();
// console.dir(cicle)

// consturctor function

function createCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
    //return this
};
const circle1 = new createCircle(1);// new keyword needed
circle1.draw();
console.log(circle1.radius);

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

const circle3 = new createCircle(1);
const keys = Object.keys(circle3);
console.log(keys);
const values = Object.values(circle3);
console.log(values);

for(let key in circle3){
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

const circle4 = new createCircle(1);
circle4.draw();//can't computeOptimumLocation() without calling draw

console.dir(circle4.draw);

// accesses Object property/methods by another object

let objectMethods = {
    eat(){
        console.log('eating');
    },
    play(){
        console.log('playing');
    }
}

function personDetails1(name, age){
    let person = Object.create(objectMethods);
    person.name = name;
    person.age = age;
    return person;
}
const me = personDetails1('mostafa', 24);
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

const me1 = new personDetails('mostafa',23);
me1.play();

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
const me2 = new Person('mostafa',23);
me2.play();
console.dir(Person)

// Inheritence with prototype based
function Person1(name, age){
    this.name = name;
    this.age = age;
}
Person1.prototype.eat = function(){
    console.log(`${this.name} is eating`);
}

function Cricketer(name, age, type, country){
    Person1.call(this, name, age);
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

class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    eat(){
        console.log(`${this.name} is eating`);
    };
}

class Cricketer1 extends Person2{
    constructor(name, age, type, country){
        super(name, age);
        this.type = type;
        this.country = country;
    };
    play(){
        console.log(`${this.name} is playing`);
    };
}

const taskin = new Cricketer1('taskin', 33, 'bowler', 'bangladesh');
taskin.eat();

// getter setter

class Person3{
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
const per1 = new Person3('mostafa', 24);
per1.getName;
per1.setName = 'imran';//interesting
console.log(per1.name);

// polymorphism

class Person4 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    play(){
        console.log(`${this.name} is playing with Person`);
    }
}
class Cricketer2 extends Person4{
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
const per = new Cricketer2('ab de', 34, 'bat', 'sa');
per.play();

// call aplly bind

function person11(...args){
    let arr = args;
    console.log(`${this.name} is good and ${arr[0]} and ${arr[1]}`);
}
const imran = {
    name: 'imran',
    age : 33
}
person11.call(imran, 'well');

person11.apply(imran, [12, 13])

let binding = person11.bind(imran, 10);
console.log(binding);

function processOrder1(){
    console.log('Order started');
    setTimeout(() =>{console.log('1st Order completed');}, 3000)

    console.log('waiting for another order');
}

console.log('take a order');
processOrder1();
console.log('Another order completed');

// execution control with asynchronous function
function takeAOrder(customer, callback){
    console.log(`${customer} order for food`);
    callback(customer);
}

function processOrder(customer, callback){
    console.log(`order is started for ${customer}`);
    setTimeout(()=>{
        console.log(`cooking is completed`);
        console.log(`order is completed for ${customer}`);
        callback(customer);
    },3000)
}

function completOrder(customer){
    console.log(`order is over for Mr ${customer} go for next`);
}
takeAOrder('Mushi', (customer)=>{
    processOrder(customer, (customer)=>{
        completOrder(customer);
    })
})

// // create a promise

// const hasMeeting = true;

// const meeting = new Promise((resolve, reject)=>{
//     if(!hasMeeting){
//         const meetingDetails = {
//             subjet : 'Tuition',
//             location : 'google meet',
//             time : '10:00 am'
//         };
//         resolve(meetingDetails);
//     }else reject(new Error('Meetig already scheduled'));
// })

// meeting
//     .then((res)=>{
//         console.log(JSON.stringify(res));
//     })
//     .catch(err => {
//         console.log(err.message);
//     })

// nested promise with then
const hasMeeting = false;

const meeting = new Promise((resolve, reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            subjet : 'Tuition',
            location : 'google meet',
            time : '10:00 am'
        };
        resolve(meetingDetails);
    }else reject(new Error('Meetig already scheduled'));
})

const addToCalendar = (meetingDetails) =>{
    const calendar = `the ${meetingDetails.subjet} is scheduled at ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calendar);
}

meeting
    .then (addToCalendar)
    .then((res)=>{
        console.log(JSON.stringify(res));
    })
    .catch(err => {
        console.log(err.message);
    })

// promise all and race

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 1 resolved');
    },4000)
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Promise 2 resolved');
    },3000)
})
promise1.then(res => console.log(res));
promise2.then(res => console.log(res));

Promise.all([promise1, promise2])// at a time resolve no gap
    .then(res => console.log(res));


Promise.race([promise1, promise2])
    .then(res => console.log(res));