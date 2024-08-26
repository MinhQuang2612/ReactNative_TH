const numbers = [45, 4, 9, 16, 25];

Array.prototype.myFilter = function(num) {

    const result = [];
    for (let i = 0; i < this.length; i++) {

        if (this[i] > num) {
            result.push(this[i]);
        }

    }

    return result;
};

const value = numbers.myFilter(18);

console.log(value);