var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

//creating quizQuestion function
var quizQuestion1;
var quizQuestion2;
var quizQuestion3;
var quizInfo;

quizQuestion1 = {
    id: 1,
    question: "who is the father of nation?",
    option1: "Gandhiji",
    option2: "Nehru",
    correctAnswer: "Gandhiji"
};
quizQuestion2 = {
    id: 2,
    question: "when did India got independence?",
    option1: 1947,
    option2: 1956,
    correctAnswer: 1947
};
quizQuestion3 = {
    id: 3,
    question: "who is the father of computer?",
    option1: "Charles Babbage",
    option2: "Musk Alon",
    correctAnswer: "Charles Babbage"
};

quizInfo = function (){
    console.log("Question: " + quizQuestion.id);
    console.log("--------------------");
    console.log(quizQuestion.id + quizQuestion.question);
    console.log("option-1 " + quizQuestion.option);
    console.log("option-2 " + quizQuestion.option);
    console.log("correct answer: " + quizQuestion.correctAnswer);
}

quizQuestion = quizQuestion1;
quizInfo();

quizQuestion = quizQuestion2;
quizInfo();

quizQuestion = quizQuestion3;
quizInfo();



/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */