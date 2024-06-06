<<<<<<< HEAD
function square(n){
      return n*n
}
function cube(n){
    return n*n*n
}

function someOfAnything(a,b,callback){
    console.log(a)
    console.log(b)
    console.log(callback)
    let val1 = callback(a)
    let val2 = callback(b)
    return val1 + val2;


}

let sumofSquare = (someOfAnything(2,2,square))
console.log(sumofSquare)
console.log("Next Part")
let sumofCube = (someOfAnything(3,7,cube))
=======
function square(n){
      return n*n
}
function cube(n){
    return n*n*n
}

function someOfAnything(a,b,callback){
    console.log(a)
    console.log(b)
    console.log(callback)
    let val1 = callback(a)
    let val2 = callback(b)
    return val1 + val2;


}

let sumofSquare = (someOfAnything(2,2,square))
console.log(sumofSquare)
console.log("Next Part")
let sumofCube = (someOfAnything(3,7,cube))
>>>>>>> main
console.log(sumofCube)