function goToFight(player, enemy) {
    mainFieldBody.classList.remove('_opacityZero');
    textCard.innerHTML = ' ';
    buttonsBlock.innerHTML = ' ';
    let fightHead = document.createElement('div');
    fightHead.classList.add('fightHead');
    fightHead.textContent = `БОЙ`;
    textCard.append(fightHead);
    fightRound(player, enemy);
}

export default goToFight