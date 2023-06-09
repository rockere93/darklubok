import player from '../characters/player';

function addItemInventory (item) {
    
    player.inventory.push(item);
    if (item.weaponAttaсks) {
        for (const attack of item.weaponAttaсks) {
            player.attacks.push(attack);
        }
    };
    const inventory = document.querySelector('.character-window__inventory');
    const itemCell = document.createElement('div');
    const itemImg = document.createElement('img');
    const itemDescription = document.createElement('div');
    itemCell.classList.add('inventory__item-block');
    itemImg.src = item.img;
    itemCell.append(itemImg);
    itemDescription.classList.add('inventory__item-description');
    itemDescription.textContent = item.description;
    itemCell.append(itemDescription);
    inventory.append(itemCell);
}

export default addItemInventory;
