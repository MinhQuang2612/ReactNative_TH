Array.prototype.mySome = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

const numbers = [45, 4, 9, 16, 25];
const someGreaterThan100 = numbers.mySome(function(element) {
    return element > 100;
});

console.log(someGreaterThan100);