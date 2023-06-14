function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    // console.log(pin)
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTyprNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTyprNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = previousTyprNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function(){
    // console.log("ADDED")
    const displayPinField = document.getElementById('display-pin').value;
    const pinField = document.getElementById('typed-numbers').value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if(displayPinField === pinField){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})