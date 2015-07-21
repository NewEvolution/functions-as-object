var multiFunc = function(mult1, mult2) {
  return mult1 * mult2;
}

var diviFunc = function(numerator, denominator) {
  return numerator / denominator;
}

var mathMaster = function(arg1, arg2, mathFunc) {
  return mathFunc(arg1, arg2);
}

var x = mathMaster(12, 2, multiFunc);
var y = mathMaster(12, 2, diviFunc);

console.log(x);
console.log(y);