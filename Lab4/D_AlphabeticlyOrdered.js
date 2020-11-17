function ordered(str) {
	if(typeof str != "string")	
  	return "ERROR - Input must string!"
  return str.split("").sort().join("");
}

console.log(ordered());
console.log(ordered(""));
console.log(ordered(undefined));
console.log(ordered("dsxz"));
console.log(ordered("abcdf"));
console.log(ordered("aasdfasfga"));
console.log(ordered("webmaster"));
