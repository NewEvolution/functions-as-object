var multiplier = function(mult1, mult2) {
  return mult1 * mult2;
}

var divider = function(numerator, denominator) {
  return numerator / denominator;
}

var mathMaster = function(num1, num2, mathFunction) {
  mathFunction(num1, num2);
}

console.log(mathMaster(12, 2, multiplier));