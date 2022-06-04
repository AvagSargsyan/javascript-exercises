const palindromes = function (str) {
    let index = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] === '!' || str[i] === ',' || str[i] === '.' || str[i] === ' ') {
            continue;
        }
        if (str[index] === '!' || str[index] === ',' || str[index] === '.' || str[index] === ' ') {
            index--;
        }

        if (str[i].toLowerCase() !== str[index].toLowerCase()) {
            if (str[i] === '!' || str[i] === ',' || str[i] === '.' || str[i] === ' ') {
                return true;
            }
            if (str[index] === '!' || str[index] === ',' || str[index] === '.' || str[index] === ' ') {
                return true;
            }
            return false;
        }
        index--;
    }
    return true;
};

debugger;
console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
