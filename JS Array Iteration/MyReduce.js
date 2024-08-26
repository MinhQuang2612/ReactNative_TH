Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];

    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

const numbers = [45, 4, 9, 16, 25];

const sum = numbers.myReduce(function(accumulator, element) {
    return accumulator + element;
}, 0);

console.log(sum);