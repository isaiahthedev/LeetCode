/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length == 0) {
        return init
    }
    else {
        let val = fn(init, nums[0])
            for(let x = 1; x < nums.length; x++) {
            val = fn(val, nums[x])
        }
        return val
    }
};