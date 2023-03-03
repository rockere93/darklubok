'use strict'
const textCard = document.querySelector('.textCard')
const buttonsBlock = document.querySelector('.buttons');
const mainField = document.querySelector('.mainField');
const mainFieldBody = document.querySelector('.mainFieldBody')
const player = {
    name: '',
    gender: '',
    inventory: [],
    health: 100,
    attacks: [
        {
            name: "Удар рукой",
            get damagePoints() {
                this._damage = getRandomInteger(0, 5);
                return this._damage
            },
            get text() {
                if (this._damage === 0) return 'Вы промахнулись';
                return `Вы тыкаете кулаком по противнику. Он получает ${this._damage} урона`

            },
        },
        {
            name: "Пинок",
            get damagePoints() {
                this._damage = getRandomInteger(0, 5);
                return this._damage
            },
            get text() {
                if (this._damage === 0) return 'Вы промахнулись';
                return `Удар ногой наносит ${this._damage} урона`

            },
        },

    ]
}


/* ________Служебные функции______________ */


function getRandomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function dowloadChapterScript(pathToChapter, nameChapter) {
    let startScript = document.createElement('script');
    startScript.src = pathToChapter;
    startScript.id = nameChapter;
    document.body.append(startScript);
    startScript.onload = function () {
    };
    startScript.onerror = function () {
        alert('Ошибка загрузки ' + this.src)
    }
}

function animationText(divClass, ms) {
    if (divClass.classList.contains('animationText')) {
        divClass.classList.remove('animationText')
    };
    setTimeout(() => divClass.classList.add('animationText'), ms)
}

function makeButton(name, func, ...arg) {
    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${name}`;
    button.onclick = function () { func(...arg)};
    return button
}

function goToStoryCard(array, index) {
    animationText(mainFieldBody, 1000);
    textCard.innerHTML = ' ' + `${array[index].text}`;
    buttonsBlock.innerHTML = ' ';
    let buttonsArray = array[index].buttons;
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
        animationText(buttonsBlock, 2000)
    };
}


function deleteCardButton(arrayButtons, buttonName) {
    let index = arrayButtons.findIndex((button) => button.nameButton === buttonName);
    if (index > -1) arrayButtons.splice(index, 1)
}

/* ________Бой______________ */

function hitDamage(subject, object, indexAttack) {
    object.health -= subject.attacks[indexAttack].damagePoints;
    let fightString = document.createElement('p');
    fightString.textContent = `${subject.attacks[indexAttack].text}. ` + `Осталось здоровья: ${object.health}`
    fightString.classList.add('fightString', '_opacityZero');
    textCard.append(fightString);
    fightString = mainFieldBody.querySelector('.textCard > p:last-child')
    animationText(fightString, 1000)
};

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

function goToFight(player, enemy) {
    mainFieldBody.classList.remove('_opacityZero');
    textCard.innerHTML = ' ';
    buttonsBlock.innerHTML = ' ';
    let fightHead = document.createElement('div');
    fightHead.classList.add('fightHead');
    fightHead.textContent = `БОЙ`;
    textCard.append(fightHead);
    fightRound(player, enemy);
}

//dowloadChapterScript ('story/intro/intro.js', 'intro');
dowloadChapterScript('story/chapter1/chapter1.js', 'Глава 1');
