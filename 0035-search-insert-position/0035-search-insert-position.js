/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target < nums[0]) {
        return 0;
    }
    if(target > nums[nums.length - 1]) {
        return nums.length
    }
    if(nums.indexOf(target) > -1) {
        return nums.indexOf(target);
    }
    else {
        if(nums.indexOf(target - 1) > -1) {
            return nums.indexOf(target - 1) + 1
        }
        else {
            return nums.indexOf(target + 1)
        }
    }
};