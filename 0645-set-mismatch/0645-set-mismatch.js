/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let miss = 0;
    let dupe = 0;
    if(nums.indexOf(1) === -1) {
        for(let x = 1; x <= nums.length; x++) {
        if(nums.indexOf(x,nums.indexOf(x) + 1) !== -1) {
            dupe = x;
        }
    }
        return [dupe,1]
    }
    for(let x = 1; x <= nums.length; x++) {
        if(nums.indexOf(x) === -1) {
            miss = x;
        }
        if(nums.indexOf(x,nums.indexOf(x) + 1) !== -1) {
            dupe = x;
        }
    }
    return [dupe, miss];
};