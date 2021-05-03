
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