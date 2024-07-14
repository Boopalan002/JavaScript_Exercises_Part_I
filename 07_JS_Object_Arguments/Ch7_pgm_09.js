// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

var startIndex = message.indexOf("go");
console.log(startIndex);

var message = "We choose to go to the Moon!";

var startIndexOfChoose = message.indexOf("choose");
var choose = message.substr(startIndexOfChoose, 6); // "choose" has 6 characters
console.log(choose); // Logs "choose"

var message = "We choose to go to the Moon!";

var lastIndex = message.lastIndexOf("oo");
console.log(lastIndex); // Logs the index of "oo" in "Moon"


/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */