function findSum(n){
	let ans = 0;
	for (let i = 0; i<n; i++){
		ans += i;
	}
	return ans;
}

function findsumTill100(){
	console.log( findSum(100))

}

//busy waiting
function string (){
	let ans =0;
	for (let i = 0; i<=100000000;i++){
		ans= ans+i;
	}
	console.log(ans)
}
setTimeout(string, 1000)
console.log("azmi")
// console.log(string())

// setTimeout(findsumTill100, 1000)

console.log("hello worlld")