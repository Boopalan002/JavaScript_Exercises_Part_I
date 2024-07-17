var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerLocation = function (player) {
    console.log(player.name + " is in " + player.place);
};

showPlayerHealth = function (player) {
    console.log(player.name + " has health " + player.health);
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(player);
    showPlayerHealth(player);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();