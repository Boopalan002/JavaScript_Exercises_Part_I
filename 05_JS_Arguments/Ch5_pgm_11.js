// Displaying a player's location

var showPlayerPlace;

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName[0] + " is in " + playerPlace);//display in array format.
    console.log(playerName[1] + " is in " + playerPlace);//display the second letter of the name. 
    console.log(playerName[3] + " is in " + playerPlace);//display the fourth letter of the name because it the number represents the index of array.  
};

showPlayerPlace("Kandra", "The Dungeon of Doom");
showPlayerPlace("Dax", "The Old Library")



/* Further Adventures
 *
 * 1) Inside the console.log brackets,
 *    change playerName to playerName[0]
 *    Run the program.
 *    What effect do the brackets have?
 *
 * 2) Change the number in the brackets to 1.
 *
 * 3) What happens when you change the
 *    number to 3? Why?
 *
 */