'use strict';
import { goToChapter1, agreeName, chooseSex } from './intro_actions.js';
import player from '../../characters/player.js';

const intro = [
    {
        name: 'introCard0',
        get text () {
            return 'Приветствую тебя, добрый молодец! Али ты девица красная? Подслеповат я к старости стал, уж не серчай на старика.';
        },
        buttons: [
            {
                nameButton: 'Добрый молодец',
                functionButton: chooseSex,
                arg: ['Добрый молодец']
            },
            {
                nameButton: 'Красна девица',
                functionButton: chooseSex,
                arg: ['Красна девица']
            }
        ]
    },
    {
        name: 'introCard1',
        get text () {
            return `${player.gender} значит. Ну а зовут-то тебя как?`;
        },
        buttons: [
            {
                nameButton: 'Подтвердить',
                functionButton: agreeName
            }
        ]
    },

    {
        name: 'introCard2',
        get text () {
            return `${player.name}, ну что ж. В общем, здесь на лубочно-клюквенном языке мы и закончим. Это тебе не сказка и даже не быль. Это кошмар, в котором тебе не повезло оказаться.`;
        },
        buttons: [
            {
                nameButton: 'Продолжить',
                functionButton: goToChapter1
            }
        ]
    }
];

export default intro;
// mainfield__body.classList.add('animationText', 1000)
