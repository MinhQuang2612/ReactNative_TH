Array.prototype.myEvery = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;

};

const numbers = [5, 4, 9, 16, 25];
const everyGreaterThan3 = numbers.myEvery(function(element) {
    return element > 3;
});

console.log(everyGreaterThan3);