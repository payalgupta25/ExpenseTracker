let totalAmount = 0;

function addItem() {
    const labelInput = document.getElementById('label');
    const amountInput = document.getElementById('amt');
    const itemsContainer = document.getElementById('items');
    const totalAmountButton = document.getElementById('totalAmount');

    const label = labelInput.value;
    const amount = parseFloat(amountInput.value);

    if (label === "" || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid label and amount.');
        return;
    }

    // Create a new item element
    const item = document.createElement('div');
    item.classList.add('item');
    item.textContent = `${label} : $${amount.toFixed(2)}`;  //Using toFixed(2) ensures that the amount is displayed with two decimal places,
    itemsContainer.appendChild(item);

    // Update the total amount
    totalAmount += amount;
    totalAmountButton.textContent = `$${totalAmount.toFixed(2)}`;

    // Clear the input fields
    labelInput.value = '';
    amountInput.value = '';
}

