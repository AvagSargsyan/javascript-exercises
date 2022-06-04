const fibonacci = function(num) {
    let item;
    let result = [1, 1];
    
    if (num < 0) {
        return 'OOPS';
    }

    if (num === 0) {
        return 0;
    }

    if (num === 1 || num === 2) {
        return 1;
    }
    
    else {
        for (let i = 1; i < num - 1; i++) {
            item = result[i - 1] + result[i];
            result.push(item);
        }
        return result[num - 1];
    }
};


console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
