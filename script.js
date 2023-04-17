function fibonacci(num) {
// your code here
	let n1=0,n2=1;
	let n3=0;
	console.log(n1+" "+n2);
	for(let i=2;i<num;i++){
		n3=n1+n2;
		console.log(n3+" ");
		n1=n2;
		n2=n3;
	}
	return num;
}

module.exports = fibonacci;
