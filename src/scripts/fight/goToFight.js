import makeButton from '../main/makeButton';
import animationText from '../animation/animationText';
import getRandomInteger from '../main/getRandomInteger';
import scrollTextDown from '../animation/scrollText';
import { mainfield, mainfieldBody, buttonsBlock, textCard, viewport } from '../DOM-elements/mainelements';
import player from '../characters/player';

function goToFight(player, enemy) {
    moveSideMenu('down');
    showCharactersSideblock(player, enemy);
    mainfieldBody.classList.remove('_opacityZero');
    textCard.innerHTML = ' ';
    buttonsBlock.innerHTML = ' ';
    createTitle("БОЙ");
    fightRound(player, enemy);
}

function showCharactersSideblock(player, enemy) {
    mainfield.insertAdjacentHTML('afterbegin', `<div class='character-sideblock player'>
        <img src='${player.avatar}'>
        <div class="fight health__back">
        <div class="fight health__bar" id="playerHealthBar"></div>
        <span class="fight health__text" id="playerHealthText">${player.health}/${player.maxhealth}</span>
        </div></div>`);
    mainfield.insertAdjacentHTML('afterbegin', `<div class='character-sideblock enemy'>
        <img src='${enemy.avatar}'>
        <div class="fight health__back">
        <div class="fight health__bar" id="enemyHealthBar"></div>
        <span class="fight health__text" id="enemyHealthText">${enemy.health}/${enemy.maxhealth}</span>
        </div></div>`);
    
}

function createTitle (text) {
    const fightTitle = document.createElement('div');
    fightTitle.classList.add('fightTitle');
    fightTitle.textContent = text;
    viewport.prepend(fightTitle);
}

function fightRound(player, enemy) {
    const indexAttack = getRandomInteger(0, enemy.attacks.length - 1);
    hitDamage(enemy, player, indexAttack);
    scrollTextDown(); // времянка, пока нет дизайна скрола
    changeHP(player);
    if (player.health <= 0) {
        createFinalButtons(enemy.buttonsDefeat)
        moveSideMenu("up");
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
    changeHP(enemy);
    scrollTextDown();
    if (enemy.health <= 0) {
        createFinalButtons(enemy.buttonsWin)
        moveSideMenu("up")
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


function changeHP(object) {
    if (object === player) {
        const inventoryHealthBar = document.querySelector('.player-info .health__bar');
        const inventoryHealthText = document.querySelector('.player-info .health__text');
        const sideHealthBar = document.querySelector('#playerHealthBar');
        const sideHealthText = document.querySelector('#playerHealthText');
        inventoryHealthText.textContent = sideHealthText.textContent = player.health + "/" + player.maxhealth;
        inventoryHealthBar.style.width = sideHealthBar.style.width = Math.floor((player.health / player.maxhealth) * 100) + '%';
    } else {
        const sideHealthBar = document.querySelector('#enemyHealthBar');
        const sideHealthText = document.querySelector('#enemyHealthText');
        sideHealthText.textContent = object.health + "/" + object.maxhealth;
        sideHealthBar.style.width = Math.floor((object.health / object.maxhealth) * 100) + '%';
    }

}

function moveSideMenu (direction) {
    const sideMenu = document.querySelector('.sidemenu');
    if (direction == 'down') {
        sideMenu.classList.remove("sidemenu_up")
        sideMenu.classList.add("sidemenu_down");
    } else if (direction == 'up' ) {
        sideMenu.classList.remove("sidemenu_down")
        sideMenu.classList.add("sidemenu_up");
    }
}

function createFinalButtons (enemyButtons) {
    buttonsBlock.innerHTML = ' ';
    const buttonsArray = enemyButtons;
    for (const button of buttonsArray) {
        let argArray = [];
        let newButton;
        if (button.arg) { argArray = button.arg; };
        newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
        buttonsBlock.append(newButton);
        animationText(buttonsBlock, 3000);
    }
}

export default goToFight;
