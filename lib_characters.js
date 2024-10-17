"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_fight_1 = require("./lib_fight");
function attack_hero(attacker, recever, stage) {
    if (recever.hp >= attacker.str) {
        recever.hp -= attacker.str;
        console.log("You attacked and dealt ".concat(attacker.str, " damages!\n"));
    }
    else {
        recever.hp = 0;
        console.log("You attacked and dealt ".concat(attacker.str - recever.hp, " damages!\n"));
    }
    return lib_fight_1.default.isEnd(recever);
}
function attack_enemie(attacker, recever, stage) {
    if (recever.hp >= attacker.str) {
        recever.hp -= attacker.str;
        console.log("".concat(attacker.name, " attacked and dealt ").concat(attacker.str, " damages!\n"));
    }
    else {
        recever.hp = 0;
        console.log("".concat(attacker.name, " attacked and dealt ").concat(attacker.str - recever.hp, " damages!\n"));
    }
    lib_fight_1.default.print(stage, recever, attacker);
    return lib_fight_1.default.isEnd(recever);
}
function heal(charac, recever, stage) {
    charac.hp = 60;
    console.log("You used heal!");
    return false;
}
function action_hero(attacker, recever, stage) {
    var readline = require('readline-sync');
    console.log("\n---Options------------");
    var answer = readline.question("1. Attack  2. Heal\n");
    while (answer !== 1 || answer !== 2) {
        answer = readline.question("1. Attack  2. Heal\n");
    }
    if (answer === "1") {
        return attack_hero(attacker, recever, stage);
    }
    else if (answer === "2") {
        return heal(attacker, recever, stage);
    }
    else
        return false;
}
function action_enemie(attacker, recever, stage) {
    return attack_enemie(attacker, recever, stage);
}
exports.default = { attack_hero: attack_hero, attack_enemie: attack_enemie, heal: heal, action_hero: action_hero, action_enemie: action_enemie };
