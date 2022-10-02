function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
};


function displayInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}