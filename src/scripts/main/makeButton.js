function makeButton (name, func, ...arg) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${name}`;
    button.addEventListener('click', function () {
        func(...arg);
    });
    return button;
}

export default makeButton;
