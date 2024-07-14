// Calling forEach with an inline function

var items = [ "The Pyramids", "The Grand Canyon", "Bondi Beach" ];

var showItems = function () {
    console.log("Dream destinations (" + items.length + " places to visit):");
    items.forEach(function (item) {
        console.log(" – " + item);
    });
};

// Initial display of items
showItems();
//in console by typing showItems() we can run the program
// Also using pop we can remove the items in the console prompt



/* Further Adventures
 *
 * 1) Change the program to show the number of
 *    places to visit as well as the places themselves.
 *
 * 2) Wrap the display code in a function
 *    and assign it to the showItems variable.
 *
 * 3) Click after the prompt on the console,
 *    type showItems() and press Enter.
 *    Can you run your function from the console?
 *
 * 4) Add and remove array items via the console
 *    and display the current state of the array
 *    with the showItems function.
 *
 * You can press the up arrow when working at the
 * console prompt to show previous commands used.
 *
 */