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