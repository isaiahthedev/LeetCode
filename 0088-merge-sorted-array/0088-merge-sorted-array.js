/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (nums1.length === 1 && nums1[0] === 0) {
        nums1.pop();
        nums1.push(...nums2);
        return;
    }
    while(nums1.length !== m) {
        nums1.pop();
    }
        
    if(nums1[0] < nums2[0]) {
        nums1.push(...nums2);
    }
    else {
        nums1.unshift(...nums2);
    }

    if(nums1.length === 1) {
        return;
    }

    let high = nums1[0] - 1;
    let temp = 0;

    for(let x = 0; x < nums1.length; x++) {
        if(nums1[x] > high) {
            high = nums1[x];
        }
        else {
            for(let y = 0; y < nums1.length; y++) {
                if((nums1[x] >= nums1[y]) && (nums1[x] < nums1[y + 1])) {
                    temp = nums1[x];
                    nums1.splice(x, 1);
                    nums1.splice(y + 1, 0, temp);
                    break;
                }
            }
        }
    }
};