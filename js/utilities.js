function getInputValueField (elementId) {
    const inputValueField = document.getElementById(elementId);
    const inputValueFieldString = inputValueField.value;
    const inputValue = parseInt(inputValueFieldString);
    // inputValueField.value = '';
    return inputValue;
}


function displayValue (elementId, valueId) {
    const displayElementValue = document.getElementById(elementId);
    displayElementValue.innerText = valueId;
}


function getTotalExpenses () {
    const inputFoodValue = getInputValueField('input-food-field');
    const inputRentValue = getInputValueField('input-rent-field');
    const inputClothesValue = getInputValueField('input-clothes-field');
    const totalExpenses = inputFoodValue + inputRentValue + inputClothesValue;
    return totalExpenses;
}

function getTotalBalance () {
    const inputIncomeValue = getInputValueField('input-income-field');
    const totalExpenses = getTotalExpenses();
    const totalBalance = inputIncomeValue - totalExpenses;
    return totalBalance;
}

function inputFieldClear() {
    
}