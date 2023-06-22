import getRandomInteger from '../main/getRandomInteger';

const oldKitchenKnife = {
    name: 'Старый кухонный нож',
    description: 'Небольшой нож с выщербленным лезвием и перемотанной полосками кожи деревянной ручкой.',
    img: require('../../img/items/old_kitchen_knife.png'),
    weaponAttaсks: [
        {
            name: 'Ударить кухонным ножом',
            get text () {
                if (this._isHit)return `Вы бьете ножом, как умеете и наносите ${this._damage} урона`;
                return 'ВЫ промахнулись';
            },
            get damagePoints () {
                this._damage = getRandomInteger(4, 9);
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
            name: 'Порез ножом',
            get damagePoints () {
                this._damage = getRandomInteger(3, 8);
                return this._damage;
            },
            get text () {
                if (this._isHit) return `Вы попали, но выщербленное лезвие слегка ранит противника на ${this._damage} урона`;
                return 'ВЫ промахнулись';
            },
            get isHit () {
                this._chanceHit = 95;
                if (getRandomInteger(0, 100) <= this._chanceHit) {
                    return this._isHit = true;
                }
                return this._isHit = false
            }
        }
    ]
};

export default oldKitchenKnife;
