import player from "../characters/player";
const inventory = document.querySelector('.character-window__inventory');


function addItemInventory(item) {
    player.inventory.push(item);
    if (item.weaponAttaсks) {
        for (let attack of item.weaponAttaсks) {
            player.attacks.push(attack);
        }
    };

    const item_cell = document.createElement('div');
    item_cell.classList.add('inventory__item-block2');
    item_cell.style.backgroundColor = `black`;
    inventory.append(item_cell);
    console.log(player.attacks)
}

export default addItemInventory


