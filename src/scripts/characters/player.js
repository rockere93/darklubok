import getRandomInteger from '../main/getRandomInteger';

const player = {
    name: '',
    gender: '',
    inventory: [],
    avatar: require('../../img/characters/man.jpg'),
    maxhealth: 35,
    health: 35,
    attacks: [
        {
            name: 'Удар рукой',
            get text () {
                if (this._isHit) return `Вы бьёте противника кулаком. Он получает ${this._damage} урона`; 
                return 'Вы промахнулись';
                
            },
            get damagePoints () {
                this._damage = getRandomInteger(1, 5);
                return this._damage;
            },
            get isHit () {
                this._chanceHit = 25;
                if (getRandomInteger(0, 100) <= this._chanceHit) {
                    return this._isHit = true;
                }
                return this._isHit = false;
            }
        },
        {
            name: 'Пинок',
            get text () {
                if (this._isHit) return `Вы попали по противнику и нанесли ${this._damage} урона`; 
                return 'Вы промахнулись';
            },
            get damagePoints () {
                this._damage = getRandomInteger(3, 10);
                return this._damage;
            },
            get isHit () {
                this._chanceHit = 70;
                if (getRandomInteger(0, 100) <= this._chanceHit) {
                    return this._isHit = true;
                }
                return this._isHit = false
            }
        }

    ]
};

export default player;
