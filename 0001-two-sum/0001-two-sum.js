/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let x = 0; x < nums.length; x++) {
        for(let y = 1; y < nums.length; y++) {
            if(y === x) {
                y++;
            }
            if(nums[x] + nums[y] === target) {
                return [x,y];
            }
        }
    }
};