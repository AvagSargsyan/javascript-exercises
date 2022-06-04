const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((aggr, val) => aggr + val, 0);
};

const multiply = function(args) {
  let result = 1;
  for (let num of args) {
    result *= num;
  }
  return result;
};

const power = function(base, exp) {
	let result = base;
  while (exp > 1) {
    result *= base;
    exp--;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  while (num > 1) {
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
