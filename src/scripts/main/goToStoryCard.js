import animationText from '../animation/animationText';
import makeButton from './makeButton';
import { textCard, buttonsBlock, mainfield__body } from '../DOM-elements/mainelements';

function goToStoryCard (array, index) {
    animationText(mainfield__body, 1000);
    textCard.innerHTML = ' ' + `${array[index].text}`;
    buttonsBlock.innerHTML = ' ';
    const buttonsArray = array[index].buttons;
    for (const button of buttonsArray) {
        let argArray = [];
        let newButton;
        if (button.arg) { argArray = button.arg; };
        if (button.functionButton.name === 'goToStoryCard') {
            newButton = makeButton(button.nameButton, button.functionButton, array, ...argArray);
        } else {
            newButton = makeButton(button.nameButton, button.functionButton, ...argArray);
        }
        buttonsBlock.append(newButton);
        animationText(buttonsBlock, 2000);
    };
    animationText(buttonsBlock, 2000);
}

export default goToStoryCard;
