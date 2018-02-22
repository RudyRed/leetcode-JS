// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (ie, buy one and
//   sell one share of the stock), design an algorithm to find the maximum profit.
//
// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5
//
// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0
//
// In this case, no transaction is done, i.e. max profit = 0.

const maxProfit = function(prices) {
  let profit = 0;
  let currentMin = prices[0];

  for (let price of prices) {
    if (price < currentMin) {
      currentMin = price;
    } else if (price - currentMin > profit) {
      profit = price - currentMin;
    }
  }

  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]), 'sb 5');
// console.log(maxProfit([7, 6, 4, 3, 1]), 'sb 0');
// console.log(maxProfit([7]), 'sb 0');
