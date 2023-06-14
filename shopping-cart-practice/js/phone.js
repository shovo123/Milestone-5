// document.getElementById('btn-phone-plus').addEventListener('click', function(){
//     // console.log("CLICKED");
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberFieldString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberFieldString);
//     const newPhoneNumber = previousPhoneNumber + 1;
//     phoneNumberField.value = newPhoneNumber;
// })

// ..........Using Function.........

function updatePhoneNumber(isIncrese){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberFieldString);
   
    let newPhoneNumber;
    if(isIncrese === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;

    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalprice(newPhoneNumber){
        const totalPhonePrice = newPhoneNumber * 1219;
       const totalPrice = document.getElementById('phone-total');
       totalPrice.innerText = totalPhonePrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    // console.log("CLICKED");
   const newPhoneNumber = updatePhoneNumber(true);
//    const totalPhonePrice = newPhoneNumber * 59;
//    const totalPrice = document.getElementById('phone-total');
//    totalPrice.innerText = totalPhonePrice;
//    Function Call : 

    updatePhoneTotalprice(newPhoneNumber);
    calculateSubTotal();

  

})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    // console.log("CLICKED");
//    updatePhoneNumber(false);

   const newPhoneNumber = updatePhoneNumber(false);
//    const totalPhonePrice = newPhoneNumber * 59;
//    const totalPrice = document.getElementById('phone-total');
//    totalPrice.innerText = totalPhonePrice;
// Function Call : 

        updatePhoneTotalprice(newPhoneNumber);

        calculateSubTotal();

})