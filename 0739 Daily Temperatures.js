// Given a list of daily temperatures, produce a list that, for each day in the
// input, tells you how many days you would have to wait until a warmer temperature.
// If there is no future day for which this is possible, put 0 instead.
//
// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73],
// your output should be [1, 1, 4, 2, 1, 1, 0, 0].
//
// Note: The length of temperatures will be in the range [1, 30000]. Each
// temperature will be an integer in the range [30, 100].

const dailyTemperatures = function(temps) {
  let last = 0;
  let output = [];
  let pending = [];

  for (let i = 0; i < temps.length; i++) {
    let curr = temps[i];

    while (pending.length && curr > pending[pending.length - 1][1]) {
      let insert = pending.pop();
      output[insert[0]] = i - insert[0];
    }

    pending.push([i, curr]);
  }

  while (pending.length) {
    let insert = pending.pop();
    output[insert[0]] = 0;
  }

  return output;
};

// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73], 'sb [1, 1, 4, 2, 1, 1, 0, 0]'));
