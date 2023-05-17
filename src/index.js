import goToStoryCard from "./scripts/main/goToStoryCard";
import getRandomInteger from "./scripts/main/getRandomInteger";
import intro from "./story/intro/intro";
import chooseSex from "./story/intro/chooseSex";
import './style.scss';

const textCard = document.querySelector('.textCard');
const buttonsBlock = document.querySelector('.buttons');
const mainField = document.querySelector('.mainField');
const mainFieldBody = document.querySelector('.mainFieldBody')
const player = {
    name: '',
    gender: '',
    inventory: [],
    health: 100,
    attacks: [
        {
            name: "Удар рукой",
            get damagePoints() {
                this._damage = getRandomInteger(0, 5);
                return this._damage
            },
            get text() {
                if (this._damage === 0) return 'Вы промахнулись';
                return `Вы тыкаете кулаком по противнику. Он получает ${this._damage} урона`

            },
        },
        {
            name: "Пинок",
            get damagePoints() {
                this._damage = getRandomInteger(0, 5);
                return this._damage
            },
            get text() {
                if (this._damage === 0) return 'Вы промахнулись';
                return `Удар ногой наносит ${this._damage} урона`

            },
        },

    ]
}




goToStoryCard(intro, 0);

