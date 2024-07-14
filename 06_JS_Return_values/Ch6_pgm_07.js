// Getting a string for a player’s name

var getPlayerName = function (playerName) {
    var prefixSuffix = "====";
    var border = "|";
    return prefixSuffix + " " + playerName + " " + prefixSuffix + "\n" + border + "\n" + border + " " + playerName + "\n" + border;
};

console.log(getPlayerName("Kandra")); 
console.log(getPlayerName("Kiki")); 
console.log(getPlayerName("Mahesha")); 
console.log(getPlayerName("Jahver")); 



/* Further Adventures
 *
 * 1) Update the getPlayerName function
 *    so it adds a prefix and suffix
 *    made up of the = character.
 *    The length of the prefix and suffix
 *    should be 4.
 *
 *    getPlayerName("Kiki") should return
 *    ==== Kiki ====
 *
 *    getPlayerName("Mahesha") should return
 *    ==== Mahesha ====
 *
 * 2) Update the getPlayerName function
 *    so it includes a border on the left
 *    when displaying the name.
 *
 *    getPlayerName("Jahver") should return
 *    
 *    |
 *    | Jahver
 *    |
 *
 * Note: to add a new-line character to a
 * string, use the escape sequence '\n'
 *
 * var msg = "\na\nb\n";
 * console.log(msg) would display:
 * "
 * a
 * b
 * "
 *
 */