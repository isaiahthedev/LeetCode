/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let count = 0;
    let letter = false;
    for (let x = s.length -1; x >= 0; x--) {
        if(s[x] !== " ") {
            count++;
            letter = true;
        }
        else if (letter === true) {
            return count;
        }
    }
    return count;
};