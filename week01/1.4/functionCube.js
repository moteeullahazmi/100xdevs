function cube(n){
    return n*n*n;
}

function sumofCube(a,b){
    let val1= cube(a);
    let val2 = cube(b);
    return val1+val2;
}

console.log(sumofCube(2,2))