import character from './characters';
import { red, green, blue, bold, yellow, bgCyan, white } from 'colorette';

function start(stage: number,attacker: character, recever: character){
    
    print(stage, attacker, recever);
    //ENCOUNTER
    process.stdout.write("You encounter ");
    if (recever.name !== "Ganon") process.stdout.write("a ");
    console.log(`${recever.name}`);   
}


function print(stage: number, attacker: character, recever: character){

    const fs = require('fs');
    const listOfCharacters = JSON.parse(fs.readFileSync('characters.json', 'utf-8'));

    //FIGHT
    console.log(`========= FIGHT ${stage} =========`);

    //ENEMIE
    console.log(red(`${recever.name}`));
    for(let car of listOfCharacters){
        if(car.name === recever.name){
            process.stdout.write("hp: ");
            for(let i=0; i<recever.hp; i++){ process.stdout.write("I") };
            for(let j=recever.hp+1; j<car.hp; j++){ process.stdout.write("_") };
            console.log(` ${recever.hp} / ${car.hp}`);
            console.log(("\n"));
        }
    }

    //HERO
    console.log(green(`${attacker.name}`));
    for(let car of listOfCharacters){
        if(car.name === attacker.name){
            process.stdout.write("hp: ");
            for(let i=0; i<attacker.hp; i++){ process.stdout.write("I") };
            for(let j=attacker.hp+1; j<car.hp; j++){ process.stdout.write("_") };
            console.log(` ${attacker.hp} / ${car.hp}`);
            console.log(("\n"));
        }
    }

}

function isEnd(charac: character){
    let end: boolean = false;
    charac.hp === 0 ? end = true : end = false;
    if(end) {
        console.log(`${charac.name} is dead!`);
    }
    return end; 
}


export default {start, isEnd, print};