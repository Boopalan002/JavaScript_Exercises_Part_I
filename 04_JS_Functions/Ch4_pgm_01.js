// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// movie-2
var movie2 = {
    title: "Toy Story",
    actors: "Tom Hanks, Tim Allen",
    directors: "John Lasseter"
  };
  
  console.log("Movie information for " + movie2.title);
  console.log("------------------------------");
  console.log("Actors: " + movie2.actors);
  console.log("Directors: " + movie2.directors);
  console.log("------------------------------");
  
  // Blog post object
  var blogPost = {
    title: "My Blog post page",
    author: "Anna Williams",
    body: "This page contains description of the movie and the artists of the movie.",
    date: "2024-07-05"
  };
  
  console.log("Blog Post Information");
  console.log("------------------------------");
  console.log("Title: " + blogPost.title);
  console.log("Author: " + blogPost.author);
  console.log("Body: " + blogPost.body);
  console.log("Date: " + blogPost.date);
  console.log("------------------------------");
  



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */