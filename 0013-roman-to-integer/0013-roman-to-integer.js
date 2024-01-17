/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let num = 0;
    for(let x = 0; x < s.length; x++) {
        switch(s[x]) {
            case 'I':  
            if(s[x+1] == 'V') {
                num = num + 4;
                x++;
                break;
            }
            if(s[x+1] == 'X') {
                num = num + 9;
                x++;
                break;
            }
                num = num + 1;
            break;
            case 'V':  num = num + 5;
            break;
            case 'X':
            if(s[x+1] == 'L') {
                num = num + 40;
                x++;
                break;
            }
            if(s[x+1] == 'C') {
                num = num + 90;
                x++;
                break;
            }
                num = num + 10;
            break;
            case 'L':  num = num + 50;
            break;
            case 'C':
            if(s[x+1] == 'D') {
                num = num + 400;
                x++;
                break;
            }
            if(s[x+1] == 'M') {
                num = num + 900;
                x++;
                break;
            }
                num = num + 100;
            break;
            case 'D':  num = num + 500;
            break;
            case 'M':  num = num + 1000;
            break;
        }
    }
    return num;
};