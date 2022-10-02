function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
};

// error handler
function errorMessage(inputId) {
    const inputValue = getInputValue(inputId);
    if (inputValue < 0 || isNaN(inputValue)) {
        alert('Please enter a valid input numbar');
        return;
    }
}

function displayInnerText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}