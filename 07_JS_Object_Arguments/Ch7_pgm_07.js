// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();
var getBig = function (str) {
    return str.toUpperCase();
};
console.log(planet + " becomes " + bigPlanet);

var getSmall = function (str) {
    return str.toLowerCase();
};

// Testing getSmall function
var country = "UNITED STATES";
var smallCountry = getSmall(country);
console.log(country + " becomes " + smallCountry);

/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */