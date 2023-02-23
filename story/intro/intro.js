'use strict'
function chooseSex(gender) {
    player.gender = gender;
    goToStoryCard(introCard1);
    addInputName ();
}

function addInputName () {
    let input = document.createElement('input');
    input.id = "inputName";
    input.placeholder = "Нажмите сюда, чтобы ввести имя";
    buttonsBlock.prepend(input);
}

function agreeName () {
    let input = buttonsBlock.querySelector('input');
    player.name = input.value;
    goToStoryCard(introCard2);
    animationDark();
}



function goToNextChapter () {
    dowloadChapterScript ('story/chapter1/chapter1.js', 'Глава 1');
}

function buttonsfi () {
    alert("затычка")}

const introCard0 = {
    get text() { 
        return `Приветствую тебя, добрый молодец! Али ты девица красная? Подслеповат я к старости стал, уж не серчай на старика.`},
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
}


const introCard1 = {
    get text() { 
        return `${player.gender} значит. Ну а зовут-то тебя как?`},
    buttons: [
        {
            nameButton: 'Подтвердить',
            functionButton: agreeName,
        },
    ]
};



const introCard2 = {
    get text() { 
        return `${player.name}, ну что ж. В общем, здесь на лубочно-клюквенном языке мы и закончим. Это тебе не сказка и даже не быль. Это кошмар, в котором тебе не повезло оказаться.` },
    buttons: [
        {
            nameButton: 'Продолжить',
            functionButton: goToNextChapter,
        },
    ]
};


goToStoryCard(introCard0);
setTimeout(() => mainFieldBody.classList.add('animationText'), 1000)