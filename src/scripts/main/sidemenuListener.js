
function sidemenuListener () {
    const characterWindow = document.querySelector('.character-window');
    const characterButton = document.querySelector('.sideMenu__button, .character');

// -----------ФУНКЦИЯ ДЛЯ НАЗНАЧЕНИЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ОКНА---------- //

    function openPopup (popup) {
        popup.classList.remove('hidden');
        function closedPopup (evt) {
            if (evt.code === 'Escape' || evt.pointerId === 1 || evt.pointerId === 0) {
                popup.classList.add('hidden');
                document.removeEventListener('keydown', closedPopup);
                buttonClosed.removeEventListener('click', closedPopup);
            }
        };
        document.addEventListener('keydown', closedPopup);
        const buttonClosed = popup.querySelector('.button__closed');
        buttonClosed.addEventListener('click', closedPopup);
    }


// -----------НАЗНАЧАЕМ СЛУШАТЕЛЕЙ НА КНОПКИ---------- //

    characterButton.addEventListener('click', function () {
        openPopup(characterWindow);
    });
}

export default sidemenuListener;
