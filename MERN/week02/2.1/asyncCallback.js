// chai bnaane ja rhaa hu 
// chai bn gyi 
// chai pee lo

function makeChai(araam){
    console.log("chai bnaane jaa rha hu")

    setTimeout(function(){
        console.log("chai bn gyi ")
        araam()
    },10000)
}

makeChai(function(){
    console.log("chai pee lo")
})