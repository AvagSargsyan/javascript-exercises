const ftoc = function(tempF) {
  return +((tempF - 32) * (5 / 9)).toFixed(1);
};

const ctof = function(tempC) {
  return +(tempC * (9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
