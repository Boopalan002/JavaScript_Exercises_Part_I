var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var cube;
cube = function(numberToCube){
    var cube = Math.pow(numberToCube, 3);
    console.log("The cube of " +numberToCube + " is: " + cube);
}
cube(4);
cube(5);
cube(99);
cube(10);

var squareRoot;
squareRoot = function(numberToSqrt){
    var squareRoot = Math.sqrt(numberToSqrt);
    console.log("The Square Root of " + numberToSqrt + " is: " + squareRoot);
}
squareRoot(4);
squareRoot(81);
squareRoot(25);
squareRoot(1000);

