function palindrome(str) {
	if(typeof str != "string")	
  	return "ERROR - Input must string!"
	for(let i=0; i<str.length/2; i++) {
  	if(str.charAt(i) != str.charAt(str.length-1-i)) return false;
  }
  return true;
}

console.log(palindrome());
console.log(palindrome(""));
console.log(palindrome(undefined));
console.log(palindrome("racecar"));
console.log(palindrome("abba"));
console.log(palindrome("aasdfasfga"));
