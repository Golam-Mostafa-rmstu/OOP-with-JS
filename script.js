
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