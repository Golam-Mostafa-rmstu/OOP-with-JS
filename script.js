


//getter setter

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

