import getRandomInteger from '../main/getRandomInteger';

const player = {
    name: '',
    gender: '',
    inventory: [],
    health: 100,
    attacks: [
        {
            name: 'Удар рукой',
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            },
            get text () {
                if (this._damage === 0) return 'Вы промахнулись';
                return `Вы тыкаете кулаком по противнику. Он получает ${this._damage} урона`;
            }
        },
        {
            name: 'Пинок',
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            },
            get text () {
                if (this._damage === 0) return 'Вы промахнулись';
                return `Удар ногой наносит ${this._damage} урона`;
            }
        }

    ]
};

export default player;
