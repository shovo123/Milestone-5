// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     // console.log("CLICKED");
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberFieldString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberFieldString);
//     const newCaseNumber = previousCaseNumber + 1;
//     caseNumberField.value = newCaseNumber;
// })

// ..........Using Function.........

function updateCaseNumber(isIncrese){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberFieldString);
   
    let newCaseNumber;
    if(isIncrese === true){
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;

    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalprice(newCaseNumber){
        const totalCasePrice = newCaseNumber * 59;
       const totalPrice = document.getElementById('case-total');
       totalPrice.innerText = totalCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    // console.log("CLICKED");
   const newCaseNumber = updateCaseNumber(true);
//    const totalCasePrice = newCaseNumber * 59;
//    const totalPrice = document.getElementById('case-total');
//    totalPrice.innerText = totalCasePrice;
//    Function Call : 

    updateCaseTotalprice(newCaseNumber);
    calculateSubTotal();

})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    // console.log("CLICKED");
//    updateCaseNumber(false);

   const newCaseNumber = updateCaseNumber(false);
//    const totalCasePrice = newCaseNumber * 59;
//    const totalPrice = document.getElementById('case-total');
//    totalPrice.innerText = totalCasePrice;
// Function Call : 

        updateCaseTotalprice(newCaseNumber);
        calculateSubTotal();

})
