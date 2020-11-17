function amountToCoins(amount, coins) {
  coins.sort((a,b) => b - a);
  let myCoins = [];
  for(let i=0; i<coins.length; i++) {
  	if(Math.floor(amount / coins[i]) != 0) {
    	amount -= coins[i];
      myCoins.push(coins[i]);
      i--;
    }
  }
  return myCoins;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
console.log(amountToCoins(23, [25, 10, 5, 2, 1]));
console.log(amountToCoins(67, [5, 10, 25, 1, 2]));
