const removeFromArray = function(arr, ...args) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                exists = true;
            }
        }
        if (!exists) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
