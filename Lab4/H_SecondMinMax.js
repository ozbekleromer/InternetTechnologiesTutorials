function secondMinMax(arr) {
	if(!Array.isArray(arr))
		return "ERROR - Input must be array!";
	if(!arr.every(a => typeof a === "number"))
		return "ERROR - Input must be array of numbers!";
  arr.sort((a,b) => a - b);
  return [arr[1], arr[arr.length-2]];
}

console.log(secondMinMax());
console.log(secondMinMax(""));
console.log(secondMinMax(undefined));
console.log(secondMinMax(['a', 33, 16, 40]));
console.log(secondMinMax([5, 2, 7, 9]));
console.log(secondMinMax([32, 33, 16, 40]));
