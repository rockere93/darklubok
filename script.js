'use strict'
let textCard = document.querySelector('.textCard')
let buttonsBlock = document.querySelector('.buttons');
let mainField = document.querySelector('.mainfield')
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
        get text () { return `Ты находишь в темной бревенчатой комнате, единственный свет - из узкого, как бойница, окна, через который видно краешек серой хмари. В нос бьет сильный запах плесени и влажного мха, который утыкан между старыми потемневшими брёвнами. По центру стоит печь, достаточно большая, чтобы туда поместился человек, но чья кладка рассыпается как будто прямо на глазах, обнажая тёмное и пугающее нутро. Также видна дверь, к которой можно подойти.`},
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
            lookAround () {
                story.goToStoryCard(story.storyCard3);                    
            },
           
            inspectOven () {
                story.goToStoryCard(story.storyCard4);   
            },
           
            comeToDoor () {
                 
            },

           
        }
    },
    storyCard3: {
        get text () {
            return `Вы старательно осматриваете комнату, но видите только кучи разломанной деревянной мебели и посуды, какие-то ржавые куски металла. Ничего полезного.`
        },

        actions: {
            get names () {
                this.comeToDoor._name = "Подойти к двери"; 
                this.inspectOven._name = "Осмотреть печь";
                Object.defineProperty(this, "names", {
                    enumerable: false
                  });
                return Object.keys(this);
            },    
            
            inspectOven () {
                story.goToStoryCard(story.storyCard4);   
            },

            comeToDoor () {
                 
            },

            
        }
    },

    storyCard4: {
        get text () {
            return `Когда вы подходите ближе к печи, вы ощущаете липкое чувство страха в груди, руки начинают непроизвольно дрожать, но вы пересиливаете себя и погружаете руки в утробу печи. Она полна пепла, всё глубже погружая в него руки, вы нащупываете твердые фрагменты неровной формы, а также какие-то небольшой гладкий округлый предмет.`
        },

        actions: {
            get names () {
                this.takeFragments._name = "Взять фрагменты"; 
                this.takeRoundedObject._name = "Взять округлый предмет";
                this.leaveOven._name = "Уйти от печи";
                Object.defineProperty(this, "names", {
                    enumerable: false
                  });
                return Object.keys(this);
            },    
            takeFragments () {
                story.goToStoryCard(story.storyCard5);
            },

            takeRoundedObject () {
                story.goToStoryCard(story.storyCard6);
                player.inventory.push({name: 'Амулет с надписью "Алёна"',});
                console.log(player.inventory)   
            },

            leaveOven () {
                story.goToStoryCard(story.storyCard2);   
            },
        }
    },
    storyCard5: {
        get text () {
            return `Чтобы разглядеть, что у вас в руках вы подходите к окну и с ужасом понимаете, что это кости. Присмотревшись, вы осознаете, что это фаланги чьих-то пальцев. Вы с омерзением роняете их на пол. Вы не находите в себе сил, чтобы еще раз подойти к печи.`
        },

        actions: {
            get names () {
                this.comeToDoor._name = "Подойти к двери"; 
                Object.defineProperty(this, "names", {
                    enumerable: false
                  });
                return Object.keys(this);
            },    
            
            comeToDoor () {
                 
            },
        }
    },
    storyCard6: {
        get text () {
            return `Подойдя к окну, вы понимаете, что держите в руках простой медальон. Он хоть немного оплавлен, но на нём еще можно разглядеть именную надпись «Алёна». Предмет попадает к вам в инвентарь.`
        },

        actions: {
            get names () {
                this.comeToDoor._name = "Подойти к двери"; 
                Object.defineProperty(this, "names", {
                    enumerable: false
                  });
                return Object.keys(this);
            },    
            
            comeToDoor () {
                 
            },
        }
    },

}


function makeButton (name, func) {
   let button = document.createElement('div');
   button.classList.add('button');
   button.textContent = `${name}`;
   button.onclick = func;
  return button
}
