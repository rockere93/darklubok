'use strict'
const intro = [
    {
        name: 'introCard0',
        get text() {
            return `Приветствую тебя, добрый молодец! Али ты девица красная? Подслеповат я к старости стал, уж не серчай на старика.`
        },
        buttons: [
            {
                nameButton: 'Добрый молодец',
                functionButton: chooseSex,
                arg: ['Добрый молодец',],
            },
            {
                nameButton: 'Красна девица',
                functionButton: chooseSex,
                arg: ['Красна девица',],
            },
        ]
    },
    {
        name: 'introCard1',
        get text() {
            return `${player.gender} значит. Ну а зовут-то тебя как?`
        },
        buttons: [
            {
                nameButton: 'Подтвердить',
                functionButton: agreeName,
            },
        ]
    },


    {
        name: 'introCard2',
        get text() {
            return `${player.name}, ну что ж. В общем, здесь на лубочно-клюквенном языке мы и закончим. Это тебе не сказка и даже не быль. Это кошмар, в котором тебе не повезло оказаться.`
        },
        buttons: [
            {
                nameButton: 'Продолжить',
                functionButton: goToNextChapter,
            },
        ]
    },
];

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
    dowloadChapterScript('story/chapter1/chapter1.js', 'Глава 1');
}

goToStoryCard(intro, 0);
mainFieldBody.classList.add('animationText', 1000)