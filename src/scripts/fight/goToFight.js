import makeButton from '../main/makeButton';
import animationText from '../animation/animationText';
import getRandomInteger from '../main/getRandomInteger';

const textCard = document.querySelector('.textCard');
const buttonsBlock = document.querySelector('.buttons_block');
const mainFieldBody = document.querySelector('.mainFieldBody');

function goToFight (player, enemy) {
    mainFieldBody.classList.remove('_opacityZero');
    textCard.innerHTML = ' ';
    buttonsBlock.innerHTML = ' ';
    const fightHead = document.createElement('div');
    fightHead.classList.add('fightHead');
    fightHead.textContent = 'БОЙ';
    textCard.append(fightHead);
    fightRound(player, enemy);
}

function fightRound (player, enemy) {
    const indexAttack = getRandomInteger(0, enemy.attacks.length - 1);
    hitDamage(enemy, player, indexAttack);
    if (player.health <= 0) {
        const buttonsArray = enemy.buttonsDefeat;
        for (const button of buttonsArray) {
            let argArray = [];
            let newButton;
            if (button.arg) { argArray = button.arg; };
            if (button.functionButton.name === 'goToStoryCard') {
                newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
            } else {
                newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
            }
            buttonsBlock.append(newButton);
            animationText(buttonsBlock, 3000);
        };
    } else {
        for (let i = 0; i < player.attacks.length; i++) {
            const newButton = makeButton(player.attacks[i].name, PlayerAttack, player, enemy, i);
            buttonsBlock.append(newButton);
            animationText(buttonsBlock, 3000);
        }
    }
}

function PlayerAttack (player, enemy, indexAttack) {
    hitDamage(player, enemy, indexAttack);
    if (enemy.health <= 0) {
        buttonsBlock.innerHTML = ' ';
        const buttonsArray = enemy.buttonsWin;
        for (const button of buttonsArray) {
            let argArray = [];
            let newButton;
            if (button.arg) { argArray = button.arg; };
            if (button.functionButton.name === 'goToStoryCard') {
                newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
            } else {
                newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
            }
            buttonsBlock.append(newButton);
            animationText(buttonsBlock, 3000);
        };
    } else {
        buttonsBlock.innerHTML = ' ';
        fightRound(player, enemy);
    }
};

function hitDamage (subject, object, indexAttack) {
    object.health -= subject.attacks[indexAttack].damagePoints;
    let fightString = document.createElement('p');
    fightString.textContent = `${subject.attacks[indexAttack].text}. ` + `Осталось здоровья: ${object.health}`;
    fightString.classList.add('fightString', '_opacityZero');
    textCard.append(fightString);
    fightString = mainFieldBody.querySelector('.textCard > p:last-child');
    animationText(fightString, 1000);
};

export default goToFight;
