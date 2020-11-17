function fibonacci(n) {
	if(n < 0)	return "ERROR - Input must be bigger than zero!"
	let f = [0, 1];
	for(let i = 2; i<=n; i++) {
  	f[i] = f[i-1] + f[i-2];
  }
  return f[n];
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(-5));
