import animationText from "../animation/animationText";
import makeButton from "./makeButton";

const textCard = document.querySelector('.textCard')
const buttonsBlock = document.querySelector('.buttons');
const mainFieldBody = document.querySelector('.mainFieldBody')

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
    animationText(buttonsBlock, 2000);
}

export default goToStoryCard 