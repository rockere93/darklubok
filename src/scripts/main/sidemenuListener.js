
function sidemenuListener () {
    const characterWindow = document.querySelector('.character-window');
    const characterButton = document.querySelector('.sideMenu__button, .character');

    function openPopup (popup) {
        popup.classList.remove('hidden');
        function closedPopup (evt) {
            if (evt.code === 'Escape' || evt.pointerId === 1) {
                popup.classList.add('hidden');
                document.removeEventListener('keydown', closedPopup);
            }
        };
        document.addEventListener('keydown', closedPopup);
        const buttonClosed = popup.querySelector('.button__closed');
        buttonClosed.addEventListener('click', closedPopup);
    }

    characterButton.addEventListener('click', function () {
        openPopup(characterWindow);
    });
}

export default sidemenuListener;
