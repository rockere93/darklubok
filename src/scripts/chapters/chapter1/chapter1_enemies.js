import { goToIntro, gusDefeat } from './chapter1_actions';
import getRandomInteger from '../../../scripts/main/getRandomInteger';

const gus = {
    name: 'Гусь-лебедь',
    avatar: require('../../../img/chapter1/gus-lebed.jpg'),
    description: '',
    maxhealth: 5,
    health: 5,
    attacks: [
        {
            name: 'щипок',
            get text () {
                if (this._isHit) return `Гусь-лебедь, словно змея, резко выбросил свою голову и сильно ущипнул вас. Получено ${this._damage} урона`;
                return 'Гусь промахнулся';
            },
            get damagePoints () {
                this._damage = getRandomInteger(1, 5);
                return this._damage;
            },
            get isHit () {
                this._chanceHit = 95;
                if (getRandomInteger(0, 100) <= this._chanceHit) {
                    return this._isHit = true;
                }
                return this._isHit = false
            }
        },
        {
            get text () {
                if (this.isHit) return `Гусь-лебедь привстает на лапах и начинает хлестать вас своими крыльями. Вы получаете ${this._damage} урона`; 
                return 'Гусь промахнулся';
            },
            get damagePoints () {
                this._damage = getRandomInteger(1, 5);
                return this._damage;
            },
            get isHit () {
                this._chanceHit = 95;
                if (getRandomInteger(0, 100) <= this._chanceHit) {
                    return this._isHit = true;
                }
                return this._isHit = false
            }
        },
        {
            name: 'удар в полете',
            get text () {
                if (this._isHit) return `Взлетев перед вами, он обрушивает всю мощь своих перепончатых лап, раздирая вашу кожу. Вы получаете ${this._damage} урона`;
                return 'Гусь промахнулся';
            },
            get damagePoints () {
                this._damage = getRandomInteger(1, 5);
                return this._damage;
            },
            get isHit () {
                this._chanceHit = 95;
                if (getRandomInteger(0, 100) <= this._chanceHit) {
                    return this._isHit = true;
                }
                return this._isHit = false
            }
        },
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
