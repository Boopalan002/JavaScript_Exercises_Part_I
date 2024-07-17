const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const c = []
console.log("Empty set c:", c);


const numSet = new Set();
for(let i = 0; i <= 10; i++){
    numSet.add(i);
}
console.log("Number Set:", numSet);

numSet.delete(5);
console.log("After deleting", numSet);

numSet.clear();
console.log("After clearing:", numSet);

const birds = ["peacock", "crow", "dove", "parrot", "swan"]
console.log("Set of 5 string elements:", birds);

const countryMap = new Map();
countries.forEach(country => {
    countryMap.set(country, country.length);
});
console.log("Map of countries and number of characters:");
countryMap.forEach((value, key)=> {
    console.log(`${key}: ${value}`);
});

// create an empty set
// Create a set containing 0 to 10 using loop
// Remove an element from a set
// Clear a set
// Create a set of 5 string elements from array
// Create a map of countries and number of characters of a country