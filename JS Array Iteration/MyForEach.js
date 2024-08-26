Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const numbers = [45, 4, 9, 16, 25];
numbers.myForEach(function(element) {
    console.log(element * 2);
});