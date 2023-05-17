function chooseSex(gender) {
    player.gender = gender;
    goToStoryCard(intro, 1);
    addInputName();
}

export default chooseSex