Array.prototype.myFind = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

const numbers = [5, 12, 8, 130, 44];

const found = numbers.myFind(function(element) {
    return element > 10;
});

console.log(found);