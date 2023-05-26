import player from '../../player/player';
import goToStoryCard from '../../../scripts/main/goToStoryCard';
import intro from './intro_story';
import { part1 } from '../../chapter1/scripts/chapter1_story';

const buttonsBlock = document.querySelector('.buttons_block');
const mainField = document.querySelector('.mainField');
const pageBody = document.querySelector('body');

function chooseSex (gender) {
    player.gender = gender;
    goToStoryCard(intro, 1);
    addInputName();
}

function addInputName () {
    const input = document.createElement('input');
    input.id = 'inputName';
    input.placeholder = 'Нажмите сюда, чтобы ввести имя';
    buttonsBlock.prepend(input);
    input.addEventListener ("keydown", function (event) {
        if (event.code === "Enter") {
            agreeName();
        }
    });
}

function agreeName () {
    const input = buttonsBlock.querySelector('input');
    if (input.value === '' && input.classList.contains('empty')) {
        input.style.paddingLeft = '5px';
        setTimeout(() => input.style.paddingLeft = '0px', 50)
        setTimeout(() => input.style.paddingLeft = '5px', 100)
        setTimeout(() => input.style.paddingLeft = '0px', 150)
    } else if (input.value === '') {
        input.classList.add('empty');
    } else {
        player.name = input.value;
        goToStoryCard(intro, 2);
        animationDark();
    }
}

function animationDark () {
    if (!mainField.classList.contains('darkAnimation')) {
        setTimeout(() => mainField.classList.add('darkAnimation'), 2000);
    };
    pageBody.classList.add('dark');
}

function goToNextChapter () {
    goToStoryCard(part1, 0);
}

export { animationDark, goToNextChapter, agreeName, addInputName, chooseSex };
