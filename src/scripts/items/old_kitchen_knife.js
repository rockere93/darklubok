import getRandomInteger from '../main/getRandomInteger';

const oldKitchenKnife = {
    name: 'Старый кухонный нож',
    description: 'Небольшой нож с выщербленным лезвием и перемотанной полосками кожи деревянной ручкой.',
    img: require('../../img/items/old_kitchen_knife.png'),
    weaponAttaсks: [
        {
            name: 'Ударить кухонным ножом',
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            },
            get text () {
                if (this._damage === 0) return 'ВЫ промахнулись';
                return `Вы бьете ножом, как умеете и наносите ${this._damage} урона`;
            }
        },
        {
            name: 'Порез ножом',
            get damagePoints () {
                this._damage = getRandomInteger(0, 5);
                return this._damage;
            },
            get text () {
                if (this._damage === 0) return 'ВЫ промахнулись';
                return `Вы попали, но выщербленное лезвие слегка ранит противника на ${this._damage} урона`;
            }
        }
    ]
};

export default oldKitchenKnife;
