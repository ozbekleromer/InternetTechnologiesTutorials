function isPrime(n) {
	if(typeof n != "number")	
		return "ERROR - Input must be number!"
	for(let i=2; i<=n/2; i++) {
  	if(n % i == 0)	return false;
  }
  return true;
}

console.log(isPrime());
console.log(isPrime(""));
console.log(isPrime(undefined));
console.log(isPrime(13));
console.log(isPrime(7));
console.log(isPrime(97));
console.log(isPrime(91));
console.log(isPrime(16));
