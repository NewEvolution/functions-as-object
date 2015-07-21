var multiFunc = function(mult1, mult2) {
  return mult1 * mult2;
}

var diviFunc = function(numerator, denominator) {
  return numerator / denominator;
}

var mathMaster = function(arg1, arg2, mathFunc) {
  return mathFunc(arg1, arg2);
}

console.log(mathMaster(12, 2, multiFunc));
console.log(mathMaster(12, 2, diviFunc));