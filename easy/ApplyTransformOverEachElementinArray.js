/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let returnedarr = [];

  for (let i = 0; i < arr.length; i++) {
    returnedarr[i] = fn(arr[i], i);
  }
  return returnedarr;
};
