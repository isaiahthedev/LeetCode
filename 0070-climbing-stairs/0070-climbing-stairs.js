/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let ways = [1,1]
    for(let x = 2; x <= n; x++) {
        ways[x] = ways[x-1] + ways[x-2];
    }
    return ways[n];
};