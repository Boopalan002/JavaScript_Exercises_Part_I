// Manipulating arrays with push, pop and join
var items = [];
var item = "The Pyramids";
var removed;

items.push(item);
items.push("The Grand Canyon");
items.push("Bondi Beach");

console.log(items);

removed = items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));

items.push("The great artist");
console.log(items.join(" and "));
item[1] = "The theme park";
console.log(items.join(" and "));
items.push("The Warner Bros", "Disney Island");
console.log(items.join(" and  "));


/* Further Adventures
 *
 * 1) Push another item onto the array.
 *
 * 2) Log the joined items.
 *
 * You can set an array element by using its index.
 * items[2] = "The Taj Mahal"
 *
 * 3) Set one of the items using square brackets.
 *
 * 4) Can you push more than one item at a time?
 *
 */