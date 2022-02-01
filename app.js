//increase and decrease clicks events
function updateProductNumber(productInputId, priceId, price, increasing){
    const phoneInput = document.getElementById(productInputId)
    if(increasing == true){
        const inputInt = parseInt(phoneInput.value) + 1
        document.getElementById(productInputId).value = inputInt;
    }
    if(increasing == false && phoneInput.value > 0){
        const inputInt = parseInt(phoneInput.value) - 1
        document.getElementById(productInputId).value = inputInt;
    }
    const phoneCount = document.getElementById(productInputId).value
    document.getElementById(priceId).innerText = phoneCount * price
    updateTotalPrice()
}
//update price of cart and total price
function updateTotalPrice(productInputId, priceId, price){
    const PhonePrice = document.getElementById('phone-price').innerText
    const phoneInt = parseInt(PhonePrice)
    const casePrice = document.getElementById('case-price').innerText
    const caseInt = parseInt(casePrice)
    const subTotal = phoneInt + caseInt
    document.getElementById('subtotal-price').innerText = subTotal
    const tax = document.getElementById('tax-price').innerText = subTotal / 10
    document.getElementById('total-price').innerText = subTotal + tax
}
//addeventlistener click functions 
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone-input', 'phone-price', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone-input', 'phone-price', 1219, false)
})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case-input', 'case-price', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case-input', 'case-price', 59, false)
})