// class is not understood by js it always works with old fashion but programmer want class

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
