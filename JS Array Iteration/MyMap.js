Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const numbers = [45, 4, 9, 16, 25];

const doubled = numbers.myMap(function(element) {
    return element * 2;
});

console.log(doubled);