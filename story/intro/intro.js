'use strict'
function chooseSex() {
    player.gender = "Добрый молодец";
    goToStoryCard(introCard1);
    animationDark();
}



function buttonsfi () {
    alert("затычка")}

const introCard0 = {
    get text() { 
        return `Приветствую тебя, добрый молодец! Али ты девица красная? Подслеповат я к старости стал уж не серчай на старика.`},
    buttons: [
        {
            nameButton: 'Добрый молодец',
            functionButton: chooseSex,
            arguments: 'Добрый молодец',
        },
        {
            nameButton: 'Красна девица',
            functionButton: chooseSex,
            arguments: 'Красна девица',
        },
    ]
}


const introCard1 = {
    get text() { 
        return `${player.gender} значит. Ну а зовут-то тебя как?`},
    buttons: [
        {
            nameButton: 'Продолжить',
            functionButton: buttonsfi,
        },
    ]
};



const introCard2 = {
    get text() { 
        return `${player.name}, ну что ж. В общем, здесь на лубочно-клюквенном языке мы и закончим. Это тебе не сказка и даже не быль. Это кошмар, в котором тебе не повезло оказаться.` },
    buttons: [
        {
            nameButton: 'Продолжить',
            functionButton: buttonsfi,
        },
    ]
};


goToStoryCard(introCard0);
setTimeout(() => mainFieldBody.classList.add('animationText'), 1000)