function updateProductNumber(product, isNumberIncreasing, price) {
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = parseInt(caseInput.value);
    if (isNumberIncreasing == true) {
        caseNumber = caseNumber + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = caseNumber - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;

    calculateTotal();
}

function calculateTotal() {
    const phoneTotal = parseInt(document.getElementById('phone-total').innerText);
    const caseTotal = parseInt(document.getElementById('case-total').innerText);
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
});
