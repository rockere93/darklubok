
function sidemenuListener () {
    const characterWindow = document.querySelector('.character-window');
    const characterButton = document.querySelector('.sideMenu__button, .inventory');

    characterButton.addEventListener('click', function () {
        characterWindow.style.display = 'block';
        window.addEventListener('keydown', function (evt) {
            if (evt.code === 'Escape') {
                characterWindow.style.display = 'none';
            }
        }, { once: true });
    });
}

export default sidemenuListener;
