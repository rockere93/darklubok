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

function makeButton(name, func, contex, arg) {
    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${name}`;
    button.onclick = function () {func(contex, ...arg)};
    return button
}

function goToStoryCard(storyCard) {
    console.log(storyCard)
    animationText();
    textCard.innerHTML = ' ' + `${storyCard.text}`;
    buttonsBlock.innerHTML = ' ';
    let buttonsArray = storyCard.buttons;
    for (let button of buttonsArray) {
        let array = [];
        if (button.arg) array = button.arg;  
        let newButton = makeButton(button.nameButton, button.functionButton, array, storyCard);
        buttonsBlock.append(newButton);
    };
}



//dowloadChapterScript ('story/intro/intro.js', 'Вступление');
dowloadChapterScript ('story/chapter1/chapter1.js', 'Глава 1')
