/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    copy = x;
    let reversed = 0;
    while(copy != 0) {
        reversed = reversed * 10 + copy%10;
        copy = Math.floor(copy/10);
    }
    return x == reversed;
};