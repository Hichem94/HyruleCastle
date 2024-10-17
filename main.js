"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_characters_1 = require("./lib_characters");
var lib_fight_1 = require("./lib_fight");
var readlineSync = require("readline-sync");
function waitForKeyPress() {
    console.log("\n");
    //realineSync.keyInPause();
    readlineSync.keyIn("=== Press any key to continue ===");
}
//MAIN
var numberOfStages = 3;
var fs = require('fs');
var isEnd = false;
var cpt = 0;
//Characters
var listOfCharacters = JSON.parse(fs.readFileSync('characters.json', 'utf-8'));
var link;
var bokoblin;
var ganon;
var enemie;
for (var _i = 0, listOfCharacters_1 = listOfCharacters; _i < listOfCharacters_1.length; _i++) {
    var car = listOfCharacters_1[_i];
    if (car.name === 'Link')
        link = car;
    if (car.name === 'Bokoblin')
        bokoblin = car;
    if (car.name === 'Ganon')
        ganon = car;
}
for (var stage = 1; stage < numberOfStages; stage++) {
    //Réinitialisation pour début stage
    for (var _a = 0, listOfCharacters_2 = listOfCharacters; _a < listOfCharacters_2.length; _a++) {
        var car = listOfCharacters_2[_a];
        if (car.name === 'Link')
            link = car;
        if (car.name === 'Bokoblin')
            bokoblin = car;
        if (car.name === 'Ganon')
            ganon = car;
    }
    if (stage === numberOfStages - 1) {
        enemie = ganon;
        lib_fight_1.default.start(stage, link, enemie);
    }
    else {
        enemie = bokoblin;
        lib_fight_1.default.start(stage, link, enemie);
    }
    while (true) {
        isEnd = lib_characters_1.default.action_hero(link, enemie, stage);
        if (isEnd)
            break;
        isEnd = lib_characters_1.default.action_enemie(enemie, link, stage);
        if (isEnd)
            break;
        cpt++;
    }
    waitForKeyPress();
}
