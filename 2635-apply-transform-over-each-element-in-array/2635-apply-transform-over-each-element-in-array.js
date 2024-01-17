/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arr2 = [];
    for(let x = 0; x < arr.length; x++) {
        arr2[x] = fn(arr[x], x);
    }
    return arr2
};