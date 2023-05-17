function hitDamage(subject, object, indexAttack) {
    object.health -= subject.attacks[indexAttack].damagePoints;
    let fightString = document.createElement('p');
    fightString.textContent = `${subject.attacks[indexAttack].text}. ` + `Осталось здоровья: ${object.health}`
    fightString.classList.add('fightString', '_opacityZero');
    textCard.append(fightString);
    fightString = mainFieldBody.querySelector('.textCard > p:last-child')
    animationText(fightString, 1000)
};

export default hitDamage