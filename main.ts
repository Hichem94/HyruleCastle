import character from './characters';
import lib_character from './lib_characters'
import fight from './lib_fight'
import * as readlineSync from 'readline-sync'


function waitForKeyPress(){
    console.log("\n");
    //realineSync.keyInPause();
    readlineSync.keyIn("=== Press any key to continue ===");
}

//MAIN
const numberOfStages = 3;
const fs             = require('fs');
let isEnd            = false;
let cpt              = 0;
//Characters
const listOfCharacters = JSON.parse(fs.readFileSync('characters.json', 'utf-8'));
let link!: character;
let bokoblin!: character;
let ganon!: character;

let enemie: character;

for(let car of listOfCharacters){
    if(car.name === 'Link') link = car
    if(car.name === 'Bokoblin') bokoblin = car
    if(car.name === 'Ganon') ganon = car
}

for(let stage=1; stage<numberOfStages; stage++){

    //Réinitialisation pour début stage
    for(let car of listOfCharacters){
        if(car.name === 'Link') link = car
        if(car.name === 'Bokoblin') bokoblin = car
        if(car.name === 'Ganon') ganon = car
    }

    if(stage === numberOfStages-1){
        enemie = ganon;
        fight.start(stage, link, enemie);
    }else{
        enemie = bokoblin;
        fight.start(stage, link, enemie);
    }
    while(true){
        isEnd = lib_character.action_hero(link, enemie, stage);
        if(isEnd) break;
        isEnd = lib_character.action_enemie(enemie, link, stage);
        if(isEnd) break;
        cpt++;
    }
    waitForKeyPress();
}


