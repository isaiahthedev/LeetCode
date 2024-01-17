/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    console.log(this);
    if(this.length == 0) {
        return -1;
    }
    return this[this.length - 1];
}