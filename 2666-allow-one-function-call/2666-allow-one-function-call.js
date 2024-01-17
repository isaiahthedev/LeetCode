/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let ret = 0;
	return function(...args){
        if(ret == 0) {
            ret = 1;
            return fn(...args)
        }
        else {
            return
        }
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */