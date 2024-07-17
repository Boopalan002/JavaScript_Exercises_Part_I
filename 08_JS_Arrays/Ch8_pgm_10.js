// Using the arguments passed by forEach - compact

// Original code for players array
[ "Dax", "Jahver", "Kandra" ].forEach(function (item, index, wholeArray) {
  console.log("Item: " + item);
  console.log("Index: " + index);
  console.log("Array: " + wholeArray);
});

// Rectangle array
var rect = [
  { length: 5, width: 3 },
  { length: 10, width: 4 },
  { length: 6, width: 6 },
  { length: 7, width: 2 },
  { length: 8, width: 5 }
];

// Function to assign area to a rectangle
var assignArea = function(rect) {
  rect.area = rect.length * rect.width;
};

// Function to display rectangle info
var showInfo = function(rect) {
  console.log("Length: " + rect.length);
  console.log("Width: " + rect.width);
  console.log("Area: " + rect.area);
};

// Assign area to each rectangle and display info
rect.forEach(function(rect) {
  assignArea(rect);
  showInfo(rect);
});

// Example to show the array with assigned areas
console.log(rect);
  
  /* Further Adventures
   *
   * 1) Create an array of rectangle objects.
   *    Each rectangle should have a length
   *    property and a width property.
   *
   * 2) Define an assignArea function that
   *    takes a rectangle as an argument and
   *    assigns an area property holding
   *    the area of the rectangle.
   *
   * 3) Define a showInfo function that
   *    takes a rectangle as an argument and
   *    displays its properties on the console.
   *
   * 4) Use forEach and your two functions
   *    to display info about each of
   *    the rectangles in the array.
   *
   */