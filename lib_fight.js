"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colorette_1 = require("colorette");
function start(stage, attacker, recever) {
    print(stage, attacker, recever);
    //ENCOUNTER
    process.stdout.write("You encounter ");
    if (recever.name !== "Ganon")
        process.stdout.write("a ");
    console.log("".concat(recever.name));
}
function print(stage, attacker, recever) {
    var fs = require('fs');
    var listOfCharacters = JSON.parse(fs.readFileSync('characters.json', 'utf-8'));
    //FIGHT
    console.log("========= FIGHT ".concat(stage, " ========="));
    //ENEMIE
    console.log((0, colorette_1.red)("".concat(recever.name)));
    for (var _i = 0, listOfCharacters_1 = listOfCharacters; _i < listOfCharacters_1.length; _i++) {
        var car = listOfCharacters_1[_i];
        if (car.name === recever.name) {
            process.stdout.write("hp: ");
            for (var i = 0; i < recever.hp; i++) {
                process.stdout.write("I");
            }
            ;
            for (var j = recever.hp + 1; j < car.hp; j++) {
                process.stdout.write("_");
            }
            ;
            console.log(" ".concat(recever.hp, " / ").concat(car.hp));
            console.log(("\n"));
        }
    }
    //HERO
    console.log((0, colorette_1.green)("".concat(attacker.name)));
    for (var _a = 0, listOfCharacters_2 = listOfCharacters; _a < listOfCharacters_2.length; _a++) {
        var car = listOfCharacters_2[_a];
        if (car.name === attacker.name) {
            process.stdout.write("hp: ");
            for (var i = 0; i < attacker.hp; i++) {
                process.stdout.write("I");
            }
            ;
            for (var j = attacker.hp + 1; j < car.hp; j++) {
                process.stdout.write("_");
            }
            ;
            console.log(" ".concat(attacker.hp, " / ").concat(car.hp));
            console.log(("\n"));
        }
    }
}
function isEnd(charac) {
    var end = false;
    charac.hp === 0 ? end = true : end = false;
    if (end) {
        console.log("".concat(charac.name, " is dead!"));
    }
    return end;
}
exports.default = { start: start, isEnd: isEnd, print: print };
