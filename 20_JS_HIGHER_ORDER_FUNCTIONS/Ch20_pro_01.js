const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//  Executes a provided function once for each array element. It does not return a new array and is used when you want to perform an action for each element without altering the original array.
//Creates a new array with all elements that pass the test implemented by the provided function. 
// Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. 

countries.forEach(country => console.log(country));
names.forEach(name => console.log(name));
numbers.forEach(number => console.log(number));
const countriesUpperCase = countries.map(country => country.toUpperCase());
console.log(countriesUpperCase);
const countriesLength = countries.map(country => country.length);
console.log(countriesLength);
const numbersSquared = numbers.map(number => number ** 2);
console.log(numbersSquared);
const namesUpperCase = names.map(name => name.toUpperCase());
console.log(namesUpperCase);
const productPrices = products.map(product => product.price);
console.log(productPrices);
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);
const countriesWithSixChars = countries.filter(country => country.length === 6);
console.log(countriesWithSixChars);
const countriesWithSixOrMoreLetters = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreLetters);
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);
const validPrices = products.filter(product => typeof product.price === 'number' && !isNaN(product.price));
console.log(validPrices);
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
}

console.log(getStringLists([1, 'hello', true, 'world'])); // Output: ['hello', 'world']
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const countriesSentence = countries.reduce((acc, curr, index) => {
    if (index === countries.length - 1) {
        return acc + ' and ' + curr;
    } else {
        return acc + ', ' + curr;
    }
}, 'Estonia');
console.log(`${countriesSentence} are north European countries`);

const hasNamesGreaterThanSeven = names.some(name => name.length > 7);
console.log(hasNamesGreaterThanSeven);
const allCountriesContainLand = countries.every(country => country.includes('land'));
console.log(allCountriesContainLand);
const countryWithSixLetters = countries.find(country => country.length === 6);
console.log(countryWithSixLetters);
const indexCountryWithSixLetters = countries.findIndex(country => country.length === 6);
console.log(indexCountryWithSixLetters);
const indexNorway = countries.findIndex(country => country === 'Norway');
console.log(indexNorway);

const indexRussia = countries.findIndex(country => country === 'Russia');
console.log(indexRussia);