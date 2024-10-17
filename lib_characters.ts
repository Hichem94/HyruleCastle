import character from './characters';
import fight from './lib_fight'

function attack_hero(attacker: character, recever: character, stage: number){      
    if(recever.hp >= attacker.str){
        recever.hp -= attacker.str;
        console.log(`You attacked and dealt ${attacker.str} damages!\n`);
    }else{
        recever.hp = 0;
        console.log(`You attacked and dealt ${attacker.str - recever.hp} damages!\n`);
    }
    return fight.isEnd(recever);
}

function attack_enemie(attacker: character, recever: character, stage: number){      
    if(recever.hp >= attacker.str){
        recever.hp -= attacker.str;
        console.log(`${attacker.name} attacked and dealt ${attacker.str} damages!\n`);
    }else{
        recever.hp = 0;
        console.log(`${attacker.name} attacked and dealt ${attacker.str - recever.hp} damages!\n`);
    }
    fight.print(stage, recever, attacker);
    return fight.isEnd(recever);
}


function heal(charac: character, recever: character, stage: number){
    charac.hp = 60;
    console.log("You used heal!");
    return false;
}


function action_hero(attacker: character, recever: character, stage: number){
    const readline = require('readline-sync');
    console.log("\n---Options------------");
    let answer = readline.question("1. Attack  2. Heal\n");
    while(answer !== 1 || answer !== 2){
        answer = readline.question("1. Attack  2. Heal\n");
    }
    if(answer === "1"){
        return attack_hero(attacker, recever, stage);
    }else if(answer === "2") {
        return heal(attacker, recever, stage);
    }else return false;
}

function action_enemie(attacker: character, recever: character, stage: number){
    return attack_enemie(attacker, recever, stage);
}

export default {attack_hero, attack_enemie, heal, action_hero, action_enemie};







