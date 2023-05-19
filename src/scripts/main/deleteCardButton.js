function deleteCardButton (arrayButtons, buttonName) {
    const index = arrayButtons.findIndex((button) => button.nameButton === buttonName);
    if (index > -1) arrayButtons.splice(index, 1);
}

export default deleteCardButton;
