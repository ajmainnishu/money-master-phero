document.getElementById('btn-calculate').addEventListener('click', function () {
    const totalExpenses = getTotalExpenses();
    const totalBalance = getTotalBalance()
    displayValue('display-total-expenses', totalExpenses);
    displayValue('display-balance', totalBalance);
})


document.getElementById('btn-save').addEventListener('click', function () {
    const inputIncomeValue = getInputValueField('input-income-field');
    const inputSaveValue = getInputValueField('input-save-field');
    const savingAmount = (inputIncomeValue * inputSaveValue) / 100;
    displayValue('saving-amount', savingAmount);
    const totalBalance = getTotalBalance();
    const remainingBalance = totalBalance - savingAmount;
    displayValue('remaining-balance', remainingBalance);
})