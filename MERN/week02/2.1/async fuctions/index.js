// best example is 
// 1. reading File
// 2. Timeout

 const fs =require("fs")

fs.readFile("a.txt", "utf-8", (function(err,data){
console.log(data)
}));
