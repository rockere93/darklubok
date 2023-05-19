import player from '../../player/player';
import deleteCardButton from '../../../scripts/main/deleteCardButton';
import goToStoryCard from '../../../scripts/main/goToStoryCard';
import { part1, part2 } from './chapter1_story';
import getRandomInteger from '../../../scripts/main/getRandomInteger';

function openLockerDoor () {
    player.inventory.push({ name: 'Старый кухонный нож' });
    player.attacks.push({
        name: 'Старый кухонный нож',
        get damagePoints () {
            this._damage = getRandomInteger(0, 5);
            return this._damage;
        },
        get text () {
            if (this._damage === 0) return 'ВЫ промахнулись';
            return `Вы бьете ножом, как умеете и наносите ${this._damage} урона`;
        }
    });
    deleteCardButton(part1[0].buttons, 'Оглядеться');
    goToStoryCard(part1, 2);
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

function goToIntro () {
    location.reload();
}

function gusDefeat () {
    goToStoryCard(part2, 0);
}

function goToStoryCardPart1 () {
    goToStoryCard(part1, ...arguments);
}

export { openLockerDoor, takeFragments, takeRoundedObject, tryOpenDoor, endPart1, goToIntro, gusDefeat, goToStoryCardPart1 };
