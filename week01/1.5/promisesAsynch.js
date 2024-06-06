<<<<<<< HEAD
const fs = require('fs')

// my own asynchronous function
function azmiReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data)
    });
}

//calback function to call

function onDone(data){
    console.log(data)
}

=======
const fs = require('fs')

// my own asynchronous function
function azmiReadFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data)
    });
}

//calback function to call

function onDone(data){
    console.log(data)
}

>>>>>>> main
azmiReadFile(onDone)