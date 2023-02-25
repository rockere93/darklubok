'use strict'
const textCard = document.querySelector('.textCard')
const buttonsBlock = document.querySelector('.buttons');
const mainField = document.querySelector('.mainField');
const mainFieldBody = document.querySelector('.mainFieldBody')
const player = {
    name: '',
    gender: '',
    inventory: [],
}


/* ________Служебные функции______________ */

function dowloadChapterScript (pathToChapter, nameChapter) {
    let startScript = document.createElement('script');
    startScript.src = pathToChapter;
    document.body.append(startScript);
    startScript.onload = function () {
    alert(nameChapter)
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

dowloadChapterScript ('story/intro/intro.js', 'Вступление');

