/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs == false) {
        return "";
    }
    if(strs.length == 1) {
        let ret = "";
        ret = ret + strs;
        return ret;
    }
    let blank = false;
    for(let x = 0; x < strs.length; x++) {
        if(strs[x] == "") {
            return ""
        }
    }
    let common = "";
    let equal = false;
    for(let x = 0; x < strs[0].length; x++) {
        for(let y = 1; y < strs.length; y++) {
            equal = true;
            if(strs[y][x] !== strs[0][x]) {
                equal = false;
                if( equal === false ) {
                return common;
            }
            }
        }
        if( equal === false ) {
                return common;
            }
            else {
                common = common + strs[0][x];
            }
    }
    return common;
};