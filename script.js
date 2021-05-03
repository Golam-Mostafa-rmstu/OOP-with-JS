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
