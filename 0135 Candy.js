// There are N children standing in a line. Each child is assigned a rating value.
//
// You are giving candies to these children subjected to the following requirements:
//
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

const findNextMin = function (ratings, givenCandies) {
  let currentMin;
  let minIndex;

  for (let i = 0; i < ratings.length; i++) {
    if (givenCandies[i]) continue;
    if (currentMin === undefined || ratings[i] < currentMin) {
      currentMin = ratings[i];
      minIndex = i;
    }
  }

  return minIndex;
};


const candy = function (ratings) {
  const givenCandies = Array(ratings.length).fill(0);
  let minIndex = findNextMin(ratings, givenCandies);


  while (minIndex != undefined) {
    let right = minIndex + 1;
    let left = minIndex - 1;

    givenCandies[minIndex] = 1;

    while (ratings[right] > ratings[right - 1] || ratings[left] > ratings[left + 1]) {

      if (ratings[right] > ratings[right - 1] && ratings[right]) {
        givenCandies[right] = Math.max(givenCandies[right], givenCandies[right - 1] + 1);
        right++;
      }

      if (ratings[left] > ratings[left + 1]) {
        givenCandies[left] = Math.max(givenCandies[left], givenCandies[left + 1] + 1)
        left--;
      }

    }

    minIndex = findNextMin(ratings, givenCandies);

  }

  return givenCandies.reduce((a, i) => a + i, 0);
};

console.log(candy([1, 2, 3, 4, 5, 3, 2, 1, 2, 6, 5, 4, 3, 3, 2, 1, 1, 3, 3, 3, 4, 2]), 's/b 47');
console.log(candy([2, 2]), 's/b 4');
console.log(candy([]));
