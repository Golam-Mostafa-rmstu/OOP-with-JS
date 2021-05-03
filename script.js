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