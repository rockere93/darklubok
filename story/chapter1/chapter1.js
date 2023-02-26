'use strict'

const gus = {
    name: "Гусь-лебедь",
    description: '',
    health: 5,
    actions: [
        {
            name: "щипок",
            set text (value) {
                this._text = value
            },
            get text () {
                if (this._text === 0) return 'Гусь промахнулся';
                return `Гусь-лебедь, словно змея, резко выбросил свою головув и сильно ущипнул вас. Получено ${this._text} урона`

            },
            get attack () {
                return getRandomInteger(0,5)
            }
        },
        {
            name: "удар крылом",
            set text (value) {
                this._text = value
            },
            get text () {
                if (this._text === 0) return 'Гусь промахнулся';
                return `Гусь-лебедь привстает на лапах и начинает хлестать вас своими крыльями. Вы получаете ${this._text} урона`

            },
            get attack () {
                return getRandomInteger(0,5)
            }
        },
        {
            name: "удар в полете",
            set text (value) {
                this._text = value
            },
            get text () {
                if (this._text === 0) return 'Гусь промахнулся';
                return `Взлетев перед вами, он обрушивает всю мощь своих перепончатых лап, раздирая вашу кожу. Вы получаете ${this._text} урона`

            },
            get attack () {
                return getRandomInteger(0,5)
            }
        }
    ]
}

function attackGus(index) {
    alert(gus.actions[index].name)

} 

function fight (index) {
    let damage = gus.actions[index].attack;
    gus.actions[index].text = damage;
    alert(gus.actions[index].text)
}

while (true) {
    let random = getRandomInteger(0,2)
    fight(random)
}

const part1 = [
    {
        name: 'storyCard0',
        get text() {
            return `Ты находишься в темной бревенчатой комнате, единственный свет - из узкого, как бойница, окна, через который видно краешек серой хмари. В нос бьет сильный запах плесени и влажного мха, который утыкан между старыми потемневшими брёвнами. По центру стоит печь, достаточно большая, чтобы туда поместился человек, но чья кладка рассыпается как будто прямо на глазах, обнажая тёмное и пугающее нутро. Возле стен свалены кучи какого-то хлама. Также видна массивная дверь, неровно примыкающая к косяку.`
        },
        buttons: [
            {
                nameButton: 'Оглядеться',
                functionButton: goToStoryCard,
                arg: [1,],
            },
            {
                nameButton: 'Осмотреть печь',
                functionButton: goToStoryCard,
                arg: [3,]
            },
            {
                nameButton: 'Подойти к двери',
                functionButton: goToStoryCard,
                arg: [6,]
            },
        ]
    },

    {
        name: 'storyCard1',
        get text() {
            return `Вы старательно осматриваете комнату, но видите только кучи разломанной деревянной мебели и посуды, какие-то ржавые куски металла. Ничего полезного. Ваше внимание привлекает только обрушившийся со стены шкафчик, закиданный всяким хламом.`
        },

        buttons: [
            {
                nameButton: 'Попытаться открыть дверь шкафчика',
                functionButton: openLockerDoor,
            },
            {
                nameButton: 'Осмотреть печь',
                functionButton: goToStoryCard,
                arg: [3],
            },
            {
                nameButton: 'Подойти к двери',
                functionButton: goToStoryCard,
                arg: [6,]
            },
        ]
    },

    {
        name: 'storyCard2',
        get text() {
            return `Вы неловко откидываете хлам, мешающий открыть дверцы. И отворачиваете одну створку. Внутри, видимо, хранилась посуда, которая сейчас из себя представляет лишь глиняные черепки. Немного покопавшись вы натыкаетесь на небольшой нож, старый, выщербленный, с перемотанным полосками кожи деревянной ручкой.`
        },

        buttons: [
            {
                nameButton: 'Осмотреть печь',
                functionButton: goToStoryCard,
                arg: [3,],
            },
            {
                nameButton: 'Подойти к двери',
                functionButton: goToStoryCard,
                arg: [6,]
            },
        ]
    },

    {
        name: 'storyCard3',
        get text() {
            return `Когда вы подходите ближе к печи, вы ощущаете липкое чувство страха в груди, руки начинают непроизвольно дрожать, но вы пересиливаете себя и опускаете руки в утробу печи. Она полна пепла, всё глубже погружая в него руки, вы нащупываете твердые фрагменты неровной формы, как крупные, так и совсем небольшие, а также какой-то небольшой гладкий и округлый предмет.`
        },

        buttons: [
            {
                nameButton: 'Вытащить округлый предмет',
                functionButton: takeRoundedObject,
            },
            {
                nameButton: 'Вытащить фрагменты неровной формы',
                functionButton: takeFragments,
            },
            {
                nameButton: 'Уйти от печи',
                functionButton: goToStoryCard,
                arg: [0,]
            },
        ]
    },
    {
        name: 'storyCard4',
        get text() {
            return `Слишком темно, чтобы разглядеть. Вы подходите к окну и видите, что держите в руках простой медальон. Он хоть и немного оплавлен, но на нём еще можно разглядеть именную надпись «Алёна». Предмет попадает к вам в инвентарь.`
        },

        buttons: [
            {
                nameButton: 'Вытащить фрагменты неровной формы',
                functionButton: takeFragments,
            },
            {
                nameButton: 'Уйти от печи',
                functionButton: goToStoryCard,
                arg: [0,]
            },
        ]
    },

    {
        name: 'storyCard5',
        get text() {
            return `Чтобы разглядеть, что у вас в руках, вы подходите к окошку. При тусклом свете от окна вы понимаете, что держите в руках фрагменты костей и человеческие зубы, вы с ужасом роняете их на пол. Вы не можете заставить себя снова вернуться к печи.`
        },

        buttons: [
            {
                nameButton: 'Продолжить',
                functionButton: goToStoryCard,
                arg: [0,],
            },
        ]
    },

    {
        name: 'storyCard6',
        get text() {
            return `Массивная и тяжелая дверь перекосилась, оставляя узкие щели, через которые проникает слабый свет. Петель уже нет, разбухшую от влаги дверь просто вбили в старый косяк. На улице за дверью слышно странное шипение, перемежающее другими резкими и неприятными звуками, а также хлопанье массивных крыльев.`
        },

        buttons: [
            {
                nameButton: 'Попытаться открыть дверь',
                functionButton: tryOpenDoor,
            },
            {
                nameButton: 'Разбежаться и попытаться выбить дверь наружу',
                functionButton: endPart1,
            },
            {
                nameButton: 'Отойти от двери',
                functionButton: goToStoryCard,
                arg: [0,]
            },
        ]
    },

    {
        name: 'storyCard7',
        get text() {
            return `Вы дергаете дверь за чудом сохранившуюся ручку. Чуду конец, ручка остается у вас в руках. Вы пробуете толкнуть дверь, она немного поддаётся.`
        },

        buttons: [
            {
                nameButton: 'Разбежаться и попытаться выбить дверь наружу',
                functionButton: endPart1,
            },
            {
                nameButton: 'Отойти от двери',
                functionButton: goToStoryCard,
                arg: [0,]
            },
        ]
    },
]

function openLockerDoor() {
    player.inventory.push({ name: 'Старый кухонный нож', });
    deleteCardButton(part1[0].buttons, 'Оглядеться');
    goToStoryCard(part1, 2)
}

function takeFragments() {
    deleteCardButton(part1[0].buttons, 'Осмотреть печь');
    deleteCardButton(part1[1].buttons, 'Осмотреть печь');
    deleteCardButton(part1[2].buttons, 'Осмотреть печь')
    goToStoryCard(part1, 5);
}

function takeRoundedObject() {
    deleteCardButton(part1[3].buttons, 'Вытащить округлый предмет');
    goToStoryCard(part1, 4);
    player.inventory.push({ name: 'Амулет с надписью "Алёна"', });
    
}

function tryOpenDoor () {
    deleteCardButton(part1[6].buttons, 'Попытаться открыть дверь');
    goToStoryCard(part1, 7)
}

function endPart1 () {
    alert('Поздравляю!')
}

goToStoryCard(part1, 0)

