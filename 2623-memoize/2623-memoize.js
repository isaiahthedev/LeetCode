/**
 * @param {Function} fn
 * @return {Function}
 */
 let result = [];
function memoize(fn) {
    let arg = [];
    return function(...args) {
        arg.push(args);
        if(arg.length > 100) {
            return fn(...args)
        }
        if(arg.length > 1) {
            let check = true;
            for(let x = 0; x < arg.length - 1; x++) {
                    if(arg[x][0] == args[0] && arg[x][1] == args[1]) {
                        check = false;
                        if(args != []) {
                        result.push(result[x])
                        return result[x]
                        }
                    }
                }
                if(check == true) {
                    if(args != []) {
                        result.push(fn(...args))
                        return result[result.length - 1]
                    }
                }
        }
        else {
            if(args != []) {
                result = [];
                result.push(fn(...args))
                return result[result.length - 1]
            }
        }
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */