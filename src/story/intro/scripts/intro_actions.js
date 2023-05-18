import player from "../../player/player";
import goToStoryCard from "../../../scripts/main/goToStoryCard";
import intro from "./intro_story";
import { part1 } from "../../chapter1/scripts/chapter1_story";

const buttonsBlock = document.querySelector('.buttons');
const mainField = document.querySelector('.mainField');


function chooseSex(gender) {
    player.gender = gender;
    goToStoryCard(intro, 1);
    addInputName();
}

function addInputName() {
    let input = document.createElement('input');
    input.id = "inputName";
    input.placeholder = "Нажмите сюда, чтобы ввести имя";
    buttonsBlock.prepend(input);
}

function agreeName() {
    let input = buttonsBlock.querySelector('input');
    player.name = input.value;
    goToStoryCard(intro, 2);
    animationDark();
}


function animationDark() {
    if (!mainField.classList.contains('darkAnimation')) {
        setTimeout(() => mainField.classList.add('darkAnimation'), 2000)
    }
}

function goToNextChapter() {
    goToStoryCard(part1, 0)
}

export { animationDark, goToNextChapter, agreeName, addInputName, chooseSex }