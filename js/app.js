// player select button event handler
const selectButtons = document.getElementsByClassName('select-btn');
for (const selectButton of selectButtons) {
    selectButton.addEventListener('click', function (event) {
        // get player name and set selected player list
        const playerName = event.target.parentNode.parentNode.children[1].innerText;
        const allSelectedPlayers = document.getElementById('selected-players');
        const selectedPlayer = document.createElement('li');
        selectedPlayer.innerText = playerName;
        selectedPlayer.classList.add('mt-3');
        // Set conditions
        if (allSelectedPlayers.children.length > 4) {
            return alert('You cannot select more than five player');
        }
        else {
            allSelectedPlayers.appendChild(selectedPlayer);
        }
        // disable button
        selectButton.style.backgroundColor = '#C0C0C0';
        selectButton.disabled = true;
    })
}

// player expenses calculate event handler
document.getElementById('calculate-btn').addEventListener('click', function () {
    const allSelectedPlayers = document.getElementById('selected-players');
    const playerNumberString = allSelectedPlayers.children.length;
    const totalPlayers = parseInt(playerNumberString)
    const perPlayerExpenses = getInputValue('per-player-expenses');
    errorMessage('per-player-expenses');
    const totalPlayersExpenses = totalPlayers * perPlayerExpenses;
    displayInnerText('total-player-expenses', totalPlayersExpenses);
});

// total expenses calculate event handler
document.getElementById('total-expenses-btn').addEventListener('click', function () {
    const totalPlayerExpenses = document.getElementById('total-player-expenses');
    const totalPlayerExpensesString = totalPlayerExpenses.innerText;
    const totalPlayerExpensesAmount = parseInt(totalPlayerExpensesString)
    const managerExpenses = getInputValue('manager-expenses');
    const coachExpenses = getInputValue('coach-expenses')
    errorMessage('manager-expenses');
    errorMessage('coach-expenses');
    const totalExpenses = totalPlayerExpensesAmount + managerExpenses + coachExpenses;
    displayInnerText('total-expenses', totalExpenses);
})
