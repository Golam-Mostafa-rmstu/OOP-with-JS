for(let key in circle){
    // console.log(circle[key]);
    if(typeof circle[key] !== 'function')
        console.log(key);
}

if('radius' in circle)console.log('exist');