/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let arr2 = [];
    for(let x = 0; x < arr.length; x++) {
        if(fn(arr[x], x)) {
            arr2.push(arr[x])
        }
    }
    return arr2
};