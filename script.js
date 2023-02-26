'use strict'
const textCard = document.querySelector('.textCard')
const buttonsBlock = document.querySelector('.buttons');
const mainField = document.querySelector('.mainField');
const mainFieldBody = document.querySelector('.mainFieldBody')
const player = {
    name: '',
    gender: '',
    inventory: [],
    health: 25,
    actions: [
        {
            name: "удар рукой",
            set text (value) {
                this._text = value
            },
            get text () {
                if (this._text === 0) return 'Вы промахнулись';
                return `Вы тыкаете кулаком по противнику. Он получает ${this._text} урона`

            },
            get attack () {
                return getRandomInteger(0,5)
            }
        },
        {
            name: "пинок",
            set text (value) {
                this._text = value
            },
            get text () {
                if (this._text === 0) return 'Вы промахнулись';
                return `Удар ногой наносит ${this._text} урона`

            },
            get attack () {
                return getRandomInteger(0,5)
            }
        },
        
    ]
}


/* ________Служебные функции______________ */


function getRandomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

function dowloadChapterScript (pathToChapter, nameChapter) {
    let startScript = document.createElement('script');
    startScript.src = pathToChapter;
    document.body.append(startScript);
    startScript.onload = function () {
};
    startScript.onerror = function () {
    alert('Ошибка загрузки ' + this.src)
}
}

function animationText() {
    if (mainFieldBody.classList.contains('animationText')) {
        mainFieldBody.classList.remove('animationText')
    };
    setTimeout(() => mainFieldBody.classList.add('animationText'), 1000)
}

function makeButton(name, func, ...arg) {
    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${name}`;
    button.onclick = function () {func(...arg)};
    return button
}

function goToStoryCard(array, index) {
    animationText();
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
    };
}


function deleteCardButton (arrayButtons, buttonName) {
    let index = arrayButtons.findIndex((button) => button.nameButton === buttonName);
    if (index > -1) arrayButtons.splice(index, 1)
}

/* ________Служебные функции______________ */



//dowloadChapterScript ('story/intro/intro.js', 'Вступление');
dowloadChapterScript('story/chapter1/chapter1.js', 'Глава 1');
