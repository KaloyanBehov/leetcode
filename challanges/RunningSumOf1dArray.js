/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const runningSum = [nums[0]];

  nums.slice(1).forEach((num, index) => {
    runningSum.push(runningSum[index] + num);
  });

  return runningSum;
};

runningSum([3, 1, 2, 10, 1]);
