
// constructor construct

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