'use strict'
let textCard = document.querySelector('.textCard')
let buttonsBlock = document.querySelector('.buttons');

let player = {
    name: '',
    gender: '',
    inventory: [],
}


let story = {
    goToStoryCard (storyCard) {
        textCard.innerHTML = ' ' + `${storyCard.text}`;
        buttonsBlock.innerHTML = ' ';
        let actionsArray = storyCard.actions.names;
        for (let action of actionsArray) {
            let buttonName = storyCard.actions[action]._name;
            let button = makeButton(buttonName, storyCard.actions[action]);
            buttonsBlock.append(button);
        }
    },

    storyCard0: {
        text: 'Приветствую тебя, добрый молодец! Али ты девица красная? Проходи, не стесняйся, о себе расскажи, не тушайся. Мы тута всем рады, для каждого и хлеб, и соль найдется, а коли не найдется так чем богаты, тем и рады будем.',
        actions: {
            chooseSex (sex) {
            player.gender = sex;
            story.goToStoryCard(story.storyCard1);
                
        }
    },

    },
    storyCard1: {
        get text () { return `${player.gender}, ну что ж. В общем, здесь на лубочно-клюквенном языке мы и закончим. Это тебе не сказка и даже не быль. Это кошмар, в котором тебе не повезло оказаться.`},
        actions: {
            get names () {
                this.goToNext._name = "Продолжить";
                Object.defineProperty(this, "names", {
                    enumerable: false
                  });
                return Object.keys(this);
            },
            goToNext() {
                story.goToStoryCard(story.storyCard2);                
            }

        }
    },
    storyCard2: {
        get text () { return `Ты находишь в темной бревенчатой комнате, единственный свет – из узкого, как бойница, окна, через который видно краешек серой хмари. В нос бьет сильный запах плесени и влажного мха, который утыкан между старыми потемневшими брёвнами. По центру стоит печь, достаточно большая, чтобы туда поместился человек, но чья кладка рассыпается как будто прямо на глазах, обнажая тёмное и пугающее нутро. Также видна дверь, к которой можно подойти.`},
        actions: {
            get names () {
                this.lookAround._name = "Оглядеться";
                this.comeToDoor._name = "Подойти к двери"; 
                this.inspectOven._name = "Осмотреть печь";
                Object.defineProperty(this, "names", {
                    enumerable: false
                  });
                return Object.keys(this);
            },    
            /* можно сделать функцию итератор, которая будет выдавать по одному _name при обращении для создания, тогда не придется вызывать функцию*/
            lookAround () {
                alert(this.lookAround._name)                    
            },
            comeToDoor () {
                 
            },

            inspectOven () {
            },
        }
    }
}


function makeButton (name, func) {
   let button = document.createElement('div');
   button.classList.add('button');
   button.textContent = `${name}`;
   button.onclick = func;
  return button
}

