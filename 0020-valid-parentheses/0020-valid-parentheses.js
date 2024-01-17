/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2) {
        return false;
    }
    let latestClose = "";
    let shouldClose = [];
    let opens = 0;
    for(let x = 0; x < s.length; x++) {
        switch(s[x]) {
            case '(' : opens++; shouldClose.push(')');
            break;
            case '[' : opens++; shouldClose.push(']');
            break;
            case '{' : opens++; shouldClose.push('}');
            break;
        }
        switch(s[x]) {
            case ')' : latestClose = s[x]; opens--; if(shouldClose[opens] !== latestClose) {
                return false;
            };
            shouldClose.pop();
            break;
            case ']' : latestClose = s[x]; opens--; if(shouldClose[opens] !== latestClose) {
                return false;
            };
            shouldClose.pop();
            break;
            case '}' : latestClose = s[x]; opens--; if(shouldClose[opens] !== latestClose) {
                return false;
            };
            shouldClose.pop();
            break;
        }
    }
    if(opens == 0) {
        return true;
    }
    else {
        return false;
    }
};