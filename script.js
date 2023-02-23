'use strict'
    name: '',
    gender: '',
    inventory: [],
}


/* ________Служебные функции______________ */

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => mainFieldBody.classList.add('animationText'), 1000)
});

function animationText() {
    if (mainFieldBody.classList.contains('animationText')) {
        mainFieldBody.classList.remove('animationText')
    };
    setTimeout(() => mainFieldBody.classList.add('animationText'), 1000)
}

function makeButton(name, func) {
    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${name}`;
    button.onclick = func;
    return button
}

function goToStoryCard(storyCard) {
    animationText();
    textCard.innerHTML = ' ' + `${storyCard.text}`;
    buttonsBlock.innerHTML = ' ';
    let buttonsArray = storyCard.buttons;
    for (let button of buttonsArray) {
        let newButton = makeButton(button.nameButton, button.functionButton);
        buttonsBlock.append(newButton);
    };
}

dowloadChapterScript ('story/intro/intro.js', 'Вступление');

player.health = 10;
console.log(player)