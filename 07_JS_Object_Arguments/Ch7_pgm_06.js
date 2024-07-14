// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
  var line = "========================================";
  lineLength = Math.max(0, lineLength);
  lineLength = Math.min(40, lineLength);
  return line.substr(0, lineLength);
};

for (var i = -20; i <= 60; i += 10) {
  console.log("Length: " + i + ", Line: " + line(i));
}


var spaces = function (spaceLength) {
  var spaces = "                                        ";
  spaceLength = Math.max(0, spaceLength);
  spaceLength = Math.min(40, spaceLength);
  return spaces.substr(0, spaceLength);
};
// Test spaces function
console.log(spaces(15)); // Output: "               "
console.log(spaces(40)); // Output: "                                        "
console.log(spaces(50)); // Output: "


var emptyBox = function (boxWidth) {
  boxWidth = Math.max(0, boxWidth);
  boxWidth = Math.min(40, boxWidth);

  var topBottom = line(boxWidth);
  var middle = "=" + spaces(boxWidth - 2) + "=";

  console.log(topBottom);
  for (var i = 0; i < 3; i++) {
      console.log(middle);
  }
  console.log(topBottom);
};

// Test emptyBox function
emptyBox(12);


console.log(line(30));
console.log(line(40));
console.log(line(50));
  
  
  
  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */