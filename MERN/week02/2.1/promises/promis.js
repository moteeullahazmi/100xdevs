let promise = new Promise(function(resolve,reject){
    let success = true;
    if(success){
        resolve("operation succesfull")
    }
    else {
        reject("operation failed")
    }
})

promise
    .then(function (result){
        console.log(result)
    } )
    .catch(function (error){
        console.log(error)
    } )
    .finally(function(){
        ()=> console.log("Operation completed")
    })