import hitDamage from "./hitDamage";
import makeButton from "../main/makeButton";
import animationText from "../animation/animationText";
import getRandomInteger from "../main/getRandomInteger";

const buttonsBlock = document.querySelector('.buttons');


function fightRound(player, enemy) {
    let indexAttack = getRandomInteger(0, enemy.attacks.length - 1)
    hitDamage(enemy, player, indexAttack);
    if (player.health <= 0) {
        let buttonsArray = enemy.buttonsDefeat;
        for (let button of buttonsArray) {
            let argArray = [];
            let newButton;
            if (button.arg) { argArray = button.arg };
            if (button.functionButton.name === 'goToStoryCard') {
                newButton = makeButton(button.nameButton, button.functionButton, array, ...argArray);
            } else {
                newButton = makeButton(button.nameButton, button.functionButton, ...argArray);

            }
            buttonsBlock.append(newButton)
            animationText(buttonsBlock, 3000)
        };
    } else {

        for (let i = 0; i < player.attacks.length; i++) {
            let newButton = makeButton(player.attacks[i].name, PlayerAttack, player, enemy, i);
            buttonsBlock.append(newButton)
            animationText(buttonsBlock, 3000)
        }
    }

}

export default fightRound