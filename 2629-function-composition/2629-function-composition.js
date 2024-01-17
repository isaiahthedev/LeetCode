/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let ret = x;
        for(let y = functions.length - 1; y >= 0; y--) {
        let funct = functions[y];
        ret = funct(ret);
    }
    return ret;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */