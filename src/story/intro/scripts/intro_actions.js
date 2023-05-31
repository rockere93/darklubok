import player from '../../player/player';
import goToStoryCard from '../../../scripts/main/goToStoryCard';
import intro from './intro_story';
import { startChapter1 } from '../../chapter1/scripts/chapter1_actions';
import { pageBody, buttonsBlock, mainfield } from '../../../scripts/DOM-elements/mainelements';

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
    input.addEventListener('keydown', function (event) {
        if (event.code === 'Enter') {
            agreeName();
        }
    });
}

function agreeName () {
    const input = buttonsBlock.querySelector('input');
    if (input.value === '' && input.classList.contains('empty')) {
        animationInput();
    } else if (input.value === '') {
        input.classList.add('empty');
    } else {
        player.name = input.value;
        goToStoryCard(intro, 2);
        animationDark();
    }
}

function goToChapter1 () {
    startChapter1();
}

// ----------Animation scripts--------------//

function animationInput () {
    function changePadding (value) {
        const input = buttonsBlock.querySelector('input');
        input.style.paddingLeft = value;
    }
    changePadding('5px');
    setTimeout(changePadding, 50, '0px');
    setTimeout(changePadding, 100, '5px');
    setTimeout(changePadding, 150, '0px');
}

function animationDark () {
    if (!mainfield.classList.contains('dark_animation')) {
        setTimeout(() => mainfield.classList.add('dark_animation'), 2000);
    };
    pageBody.classList.add('dark');
}

export { animationDark, goToChapter1, agreeName, addInputName, chooseSex };
