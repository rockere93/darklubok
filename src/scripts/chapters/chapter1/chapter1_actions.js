import player from '../../characters/player';
import deleteCardButton from '../../../scripts/main/deleteCardButton';
import goToStoryCard from '../../../scripts/main/goToStoryCard';
import { part1, part2 } from './chapter1_story';
import getRandomInteger from '../../../scripts/main/getRandomInteger';
import { mainfield, mainfield__body, pageBody } from '../../../scripts/DOM-elements/mainelements';
import animationText from '../../../scripts/animation/animationText';

function openLockerDoor () {
    deleteCardButton(part1[0].buttons, 'Оглядеться');
    goToStoryCard(part1, 2);
}

function startChapter1 () {
    pageBody.className = 'body body_theme_ch1-p1';
    mainfield.className = 'mainfield mainfield_theme_ch1-p1 _opacityZero';
    mainfield__body.className = 'mainfield__body mainfield__body_theme_ch1-p1 _opacityZero';
    animationText(mainfield, 3000)
    goToStoryCard(part1, 0);
}

function takeFragments () {
    deleteCardButton(part1[0].buttons, 'Осмотреть печь');
    deleteCardButton(part1[1].buttons, 'Осмотреть печь');
    deleteCardButton(part1[2].buttons, 'Осмотреть печь');
    goToStoryCard(part1, 5);
}

function takeRoundedObject () {
    deleteCardButton(part1[3].buttons, 'Вытащить округлый предмет');
    goToStoryCard(part1, 4);
    player.inventory.push({ name: 'Амулет с надписью "Алёна"' });
}

function tryOpenDoor () {
    deleteCardButton(part1[6].buttons, 'Попытаться открыть дверь');
    goToStoryCard(part1, 7);
}

function endPart1 () {
    goToStoryCard(part2, 0);
}

//-------------Затычка------------//
function goToIntro () {
    location.reload();
}

function gusDefeat () {
    goToStoryCard(part2, 0);
}

function goToStoryCardPart1 () {
    goToStoryCard(part1, ...arguments);
}

export { openLockerDoor, takeFragments, takeRoundedObject, tryOpenDoor, endPart1, goToIntro, gusDefeat, goToStoryCardPart1, startChapter1 };
