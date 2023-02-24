'use strict'

function goToNext() {
    goToStoryCard(storyCard2);
}

function lookAround() {
    goToStoryCard(storyCard1);
}

function inspectOven() {
    goToStoryCard(storyCard4);
}

function comeToDoor() {

}

function takeFragments() {
    goToStoryCard(storyCard5);
}

function takeRoundedObject() {
    goToStoryCard(storyCard6);
    player.inventory.push({ name: 'Амулет с надписью "Алёна"', });
}

function leaveOven() {
    goToStoryCard(storyCard2);
}

const storyCard0 = {
    get text() { 
        return `Ты находишь в темной бревенчатой комнате, единственный свет – из узкого, как бойница, окна, через который видно краешек серой хмари. В нос бьет сильный запах плесени и влажного мха, который утыкан между старыми потемневшими брёвнами. По центру стоит печь, достаточно большая, чтобы туда поместился человек, но чья кладка рассыпается как будто прямо на глазах, обнажая тёмное и пугающее нутро. Возле стен свалены кучи какого-то хлама. Также видна массивная дверь, неровно примыкающая к косяку.` },
    buttons: [
        {
            nameButton: 'Оглядеться',
            functionButton: goToStoryCard,
            arg: [storyCard1,],
        },
        {
            nameButton: 'Осмотреть печь',
            functionButton: inspectOven,
        },
        {   
            nameButton: 'Подойти к двери',
            functionButton: comeToDoor,
        },
    ]
}

var storyCard1 = {
    get text() {
        return `Вы старательно осматриваете комнату, но видите только кучи разломанной деревянной мебели и посуды, какие-то ржавые куски металла. Ничего полезного.`
    },

    buttons: [
        {
            nameButton: 'Осмотреть печь',
            functionButton: inspectOven,
        },
        {   
            nameButton: 'Подойти к двери',
            functionButton: comeToDoor,
        },
    ]
}

const storyCard4 = {
    get text() {
        return `Когда вы подходите ближе к печи, вы ощущаете липкое чувство страха в груди, руки начинают непроизвольно дрожать, но вы пересиливаете себя и погружаете руки в утробу печи. Она полна пепла, всё глубже погружая в него руки, вы нащупываете твердые фрагменты неровной формы, а также какие-то небольшой гладкий округлый предмет.`
    },

    buttons: [
        {
            nameButton: 'Взять фрагменты',
            functionButton: takeFragments,
        },
        {
            nameButton: 'Взять округлый предмет',
            functionButton:  takeRoundedObject,
        },

        {
            nameButton: 'Отойти от печи',
            functionButton: leaveOven,
        },
    ]
}

const storyCard5 = {
    get text() {
        return `Чтобы разглядеть, что у вас в руках вы подходите к окну и с ужасом понимаете, что это кости. Присмотревшись, вы осознаете, что это фаланги чьих-то пальцев. Вы с омерзением роняете их на пол. Вы не находите в себе сил, чтобы еще раз подойти к печи.`
    },

    buttons: [
        {   
            nameButton: 'Подойти к двери',
            functionButton: comeToDoor,
        },
    ]
}

const storyCard6 = {
    get text() {
        return `Подойдя к окну, вы понимаете, что держите в руках простой медальон. Он хоть немного оплавлен, но на нём еще можно разглядеть именную надпись «Алёна». Предмет попадает к вам в инвентарь.`
    },

    buttons: [
        {   
            nameButton: 'Подойти к двери',
            functionButton: comeToDoor,
        },
    ]
}



function goTo (array, id) {
    console.log(array[id])
    animationText();
    textCard.innerHTML = ' ' + `${array[id].text}`;
    buttonsBlock.innerHTML = ' ';
    let buttonsArray = array[id].buttons;
    for (let button of buttonsArray) {
        let buttonsArray = [];
        if (button.arg) { buttonsArray = button.arg}  
        let newButton = makeButton(button.nameButton, button.functionButton, array, buttonsArray);
        buttonsBlock.append(newButton);
    };
}

function test () {
    console.log(this)
}

let story = [
    {
        name: 'storyCard0',
        get text () {
        return 'История номер 1'
    },
        buttons: [
            {
            nameButton: "Действие 1",
            functionButton: goTo,
            arg: [1],
            }
    ]
    }, 
    {
        name: 'storyCard1',
            get text () {
               return 'История номер 2'
            },
            buttons: [
            {
                nameButton: "Действие 2",
                functionButton: lookAround,
            }
        ]
        
    },
    {
        name: 'storyCard2',
            get text () {
               return 'История номер 3'
            },
            buttons: [
            {
                nameButton: "Действие 3",
                functionButton: goTo,
                arg: [0],
            }
        ]
        
    }
]

goTo (story, 0)

