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
