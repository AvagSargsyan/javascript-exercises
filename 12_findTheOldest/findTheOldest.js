const findTheOldest = function(arr) {
    const currentYear = (new Date()).getFullYear();
    return arr.map(personObj => {
        if (personObj.yearOfDeath !== undefined) {
            return {
                name: personObj.name,
                age: personObj.yearOfDeath - personObj.yearOfBirth
            }
        } else {
            return {
                name: personObj.name,
                age: currentYear - personObj.yearOfBirth
            }
        }
    }).reduce((aggr, obj) => {
        if (aggr.age < obj.age) {
            aggr = obj;
        } else {
            return aggr;
        }
        return aggr;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
