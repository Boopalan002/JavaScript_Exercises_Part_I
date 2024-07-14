// Using dot notation to update a property

var player1;

player1 = {
    name: "Max",
    attempted: 0,
    correct: 0
};

player1.attempted = 1;
player1.correct = 1;
player1.score = 50;

console.log(player1);

// Updated the values 
player1.attempted = 2;
player1.correct = 3;
player1.score = 100;
player1.name = "Well";

console.log(player1);



/* Further Adventures
 *
 * 1) Run the program and then
 *    click after the console prompt.
 *
 * 2) Change the value of the score property
 *    by typing player1.score = 100;
 *    at the prompt and pressing Enter.
 *
 * 3) Update other properties using the console.
 *
 */