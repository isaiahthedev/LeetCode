/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let a = init;
    let counter = {
        increment: () => {return a=a+1},
        reset: () => {return a = init},
        decrement: () => {return a=a-1}
    }
    return counter
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */