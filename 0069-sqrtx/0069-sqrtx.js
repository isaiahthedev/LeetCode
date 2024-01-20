/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let guess = 2;
    let actualGuess = 0;
    let b = true;
    while(b === true) {
        guess = (guess + x / guess) / 2;
        actualGuess = guess * guess;
        actualGuess = Math.floor(actualGuess);
        if(actualGuess <= x && (guess + 1 ) * (guess + 1) > x) {
            b = false;
            break;
        }
    }
    return Math.floor(guess)
};