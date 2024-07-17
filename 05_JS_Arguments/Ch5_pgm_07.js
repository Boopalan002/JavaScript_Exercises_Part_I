// Displaying a player's name

var showPlayerName;

showPlayerName = function (playerName) {
    // console.log(playerName);
    console.log("The player's name is " + playerName);
};

showPlayerName("Kandra");
showPlayerName("Dax");


var playerNameLength;
playerNameLength = function(playerName){
    console.log("The number of letters in the: " + playerName.length);
}
playerNameLength("Kandra");
playerNameLength("KGCAS");


/* Further Adventures
 *
 * 1) Update the text logged so that it is
 *    of the form:
 *    The player's name is Kandra
 *
 * Strings have a length property that gives
 * the number of characters in the string.
 * e.g. playerName.length.
 *
 * 2) Make the function show the number
 *    of letters in the player's name.
 *
 */