/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits.length === 1) {
        if(digits[0] === 9) {
            digits = [1,0]
            return digits;
        }
    }
    if(digits[digits.length - 1] !== 9) {
        digits[digits.length -1] = digits[digits.length - 1] + 1
    }
    else {
        let nines = 1;
        for(let x = digits.length - 2; x > 0; x--) {
            if(digits[x] === 9) {
                nines++;
            }
            else {
                x = 0;
            }
        }
        let i = digits.length - 1;
        for(let y = nines; y > 0; y--) {
            digits[i] = 0;
            i--;
        }
        digits[i] = digits[i] + 1
    }
    if(digits[0] === 10) {
        digits[0] = 1
        digits.push(0);
    }
    return digits
};