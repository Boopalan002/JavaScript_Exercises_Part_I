// Calling the sayHello function three times

var sayHello;

sayHello = function () {
  console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

function printLetters() {
  var message = "Hello World!";
  for (var i = 0; i < message.length; i++) {
    console.log(message[i]);
  }
}

printLetters();


/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */