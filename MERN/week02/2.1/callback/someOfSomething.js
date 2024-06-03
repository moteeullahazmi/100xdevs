
function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}


function someOfSomething(a,b,fn){
    let number1 = fn(a)
    let number2 = fn(b)
    return result = number1 + number2
}


console.log(someOfSomething(2,2,cube))
