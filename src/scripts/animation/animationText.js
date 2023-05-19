function animationText (divClass, ms) {
    if (divClass.classList.contains('animationText')) {
        divClass.classList.remove('animationText');
    };
    setTimeout(() => divClass.classList.add('animationText'), ms);
}

export default animationText;
