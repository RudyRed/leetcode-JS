// There are N children standing in a line. Each child is assigned a rating value.
//
// You are giving candies to these children subjected to the following requirements:
//
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

const candy = function (ratings) {
  const givenCandies = Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      givenCandies[i] = givenCandies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      givenCandies[i] = Math.max(givenCandies[i], givenCandies[i + 1] + 1);
    }
  }

  return givenCandies.reduce((a, i) => a + i, 0);
};

console.log(candy([1, 2, 3, 4, 5, 3, 2, 1, 2, 6, 5, 4, 3, 3, 2, 1, 1, 3, 3, 3, 4, 2]), 's/b 47');
console.log(candy([1, 2, 2]), 's/b 4');
console.log(candy([]));
