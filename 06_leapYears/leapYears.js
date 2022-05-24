const leapYears = function(yearNum) {
    if (yearNum % 100 === 0) {
        if (yearNum % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else if (yearNum % 4 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
