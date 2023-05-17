function makeButton(name, func, ...arg) {
    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = `${name}`;
    button.onclick = function () { func(...arg)};
    return button
}

export default makeButton