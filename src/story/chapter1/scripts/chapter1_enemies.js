import { goToIntro, gusDefeat } from './chapter1_actions';
import getRandomInteger from '../../../scripts/main/getRandomInteger';

const gus = {
    name: 'Гусь-лебедь',
    img: '',
    description: '',
    health: 10,
    attacks: [
        {
            name: 'щипок',
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            },
            get text () {
                if (this._damage === 0) return 'Гусь промахнулся';
                return `Гусь-лебедь, словно змея, резко выбросил свою головув и сильно ущипнул вас. Получено ${this._damage} урона`;
            }
        },
        {
            get text () {
                if (this._damage === 0) return 'Гусь промахнулся';
                return `Гусь-лебедь привстает на лапах и начинает хлестать вас своими крыльями. Вы получаете ${this._damage} урона`;
            },
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            }
        },
        {
            name: 'удар в полете',
            get text () {
                if (this._damage === 0) return 'Гусь промахнулся';
                return `Взлетев перед вами, он обрушивает всю мощь своих перепончатых лап, раздирая вашу кожу. Вы получаете ${this._damage} урона`;
            },
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            }
        }
    ],
    buttonsDefeat: [
        {
            nameButton: 'Начать заново',
            functionButton: goToIntro
        }
    ],
    buttonsWin: [
        {
            nameButton: 'Продолжить',
            functionButton: gusDefeat
        }
    ]
};

export default gus;
