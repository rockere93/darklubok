import makeButton from '../main/makeButton';
import animationText from '../animation/animationText';
import getRandomInteger from '../main/getRandomInteger';
import scrollTextDown from '../animation/scrollText';
import { mainfield, mainfieldBody, buttonsBlock, textCard, viewport } from '../DOM-elements/mainelements';
import player from '../characters/player';

function goToFight(player, enemy) {
    showCharactersSideblock(player, enemy);
    mainfieldBody.classList.remove('_opacityZero');
    textCard.innerHTML = ' ';
    buttonsBlock.innerHTML = ' ';
    const fightHead = document.createElement('div');
    fightHead.classList.add('fightHead');
    fightHead.textContent = 'БОЙ';
    viewport.prepend(fightHead);
    fightRound(player, enemy);
}

function showCharactersSideblock(player, enemy) {
    mainfield.insertAdjacentHTML('afterbegin', `<div class='character-sideblock player'>
        <img src='${player.avatar}'>
        <div class="fight health__back">
        <div class="fight health__bar"></div>
        <span class="fight health__text">${player.health}/${player.maxhealth}</span>
        </div></div>`);
    mainfield.insertAdjacentHTML('afterbegin', `<div class='character-sideblock enemy'>
        <img src='${enemy.avatar}'>
        <div class="fight health__back">
        <div class="fight health__bar"></div>
        <span class="fight health__text">${enemy.health}/${enemy.maxhealth}</span>
        </div></div>`);
    
}

function fightRound(player, enemy) {
    const indexAttack = getRandomInteger(0, enemy.attacks.length - 1);
    hitDamage(enemy, player, indexAttack);
    scrollTextDown(); // времянка, пока нет дизайна скрола
    changeHP();
    if (player.health <= 0) {
        const buttonsArray = enemy.buttonsDefeat;
        for (const button of buttonsArray) {
            let argArray = [];
            if (button.arg) { argArray = button.arg; };
            const newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
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

function PlayerAttack(player, enemy, indexAttack) {
    hitDamage(player, enemy, indexAttack);
    scrollTextDown();
    if (enemy.health <= 0) {
        buttonsBlock.innerHTML = ' ';
        const buttonsArray = enemy.buttonsWin;
        for (const button of buttonsArray) {
            let argArray = [];
            let newButton;
            if (button.arg) { argArray = button.arg; };
            newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
            buttonsBlock.append(newButton);
            animationText(buttonsBlock, 3000);
        };
    } else {
        animationText(buttonsBlock, 3000);
        buttonsBlock.innerHTML = ' ';
        setTimeout(() => fightRound(player, enemy), 3000);
    }
};

function hitDamage(subject, object, indexAttack) {
    if (subject.attacks[indexAttack].isHit) {
        object.health -= subject.attacks[indexAttack].damagePoints;
    }
    let fightString = document.createElement('p');
    fightString.textContent = `${subject.attacks[indexAttack].text}. ` + `Осталось здоровья: ${object.health}`;
    fightString.classList.add('fightString', '_opacityZero');
    textCard.append(fightString);
    fightString = mainfieldBody.querySelector('.textCard > p:last-child');
    animationText(fightString, 1000);
};


function changeHP() {
    const playerHealthBar = document.querySelector('.player-info .health__bar');
    const playerHealthText = document.querySelector('.player-info .health__text');
    playerHealthText.textContent = player.health + "/" + player.maxhealth;
    playerHealthBar.style.width = Math.floor((player.health / player.maxhealth) * 100) + '%';
}

export default goToFight;
