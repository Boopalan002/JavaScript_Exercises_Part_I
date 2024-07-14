// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;

buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));

// For cars
var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function (name, type, kilometer, country) {
    return {
        name: name,
        type: type,
        kilometer:kilometer,
        country:country
    };
};

getCarInfo = function (car) {
    return car.name.toUpperCase() + ": car " + car.type;
};

car1 = buildCar("VolksWagon", "Taigun", 140, "USA");
car2 = buildCar("Tata", "Harrier", 170, "India");

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));

/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */