function fileRead(azmi){
    console.log("reading file")
    setTimeout(function(){
        console.log("complete read file")
        azmi();
    },1000)
}
function name(){
    console.log("thank you maine kitaab padh li")
}
fileRead(name)