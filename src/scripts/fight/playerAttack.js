import hitDamage from "./hitDamage";
import animationText from "../animation/animationText";


function PlayerAttack(player, enemy, indexAttack) {
    hitDamage(player, enemy, indexAttack);
    if (enemy.health <= 0) {
        buttonsBlock.innerHTML = ' ';
        let buttonsArray = enemy.buttonsWin;
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
        buttonsBlock.innerHTML = ' ';
        fightRound(player, enemy);
    }
};

export default PlayerAttack