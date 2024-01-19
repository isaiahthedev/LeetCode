/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const aLit = `0b${a}`;
    const bLit = `0b${b}`;
    const sum = BigInt(aLit) + BigInt(bLit);
    return sum.toString(2);
};