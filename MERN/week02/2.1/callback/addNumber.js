function addNumber(a,b,callback){
    let sumTotal =a+b
    callback(sumTotal)
}

addNumber(4,3,displayTotal)

function displayTotal(sumTotal){
    console.log("the result is ", +sumTotal)}