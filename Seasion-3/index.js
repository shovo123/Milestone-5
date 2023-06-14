// For First Card : 
let count = 0 ;
document.getElementById("first-card").addEventListener("click", function(){
    const productName = document.getElementById("first-name").innerText;
    const productPrice = document.getElementById("first-price").innerText;
    const productQuantity = document.getElementById("first-quantity").innerText;
//    console.log(productName, productQuantity, productPrice)

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(typeof priceTotal)

        // Show the data :
        displayData(productName, productPrice, productQuantity, priceTotal);

    })

    // For Second Card - using event object from browser
    
    document.getElementById('second-card').addEventListener("click", function(event){
        // console.log(event.target.parentNode.parentNode.children[0].innerText)

        const productName = event.target.parentNode.parentNode.children[0].innerText;
        // console.log(productName);
    const productPrice =  event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity =  event.target.parentNode.parentNode.children[3].children[0].innerText;

        console.log(productName, productPrice, productQuantity)

        const priceTotal = parseInt(productPrice) + parseInt(productQuantity);

        // Show the data :
        displayData(productName, productPrice, productQuantity, priceTotal);
    })
    // For Third Card - using event object from browser
    
    document.getElementById('third-card').addEventListener("click", function(event){
        // console.log(event.target.parentNode.parentNode.children[0].innerText)

        const productName = event.target.parentNode.parentNode.children[0].innerText;
        // console.log(productName);
    const productPrice =  event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity =  event.target.parentNode.parentNode.children[3].children[0].innerText;

        console.log(productName, productPrice, productQuantity)

        const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

        // Show the data :
        displayData(productName, productPrice, productQuantity, priceTotal);
    })
    // For Fourth Card - using event object from browser
    
    document.getElementById('fourth-card').addEventListener("click", function(event){
        // console.log(event.target.parentNode.parentNode.children[0].innerText)

        const productName = event.target.parentNode.parentNode.children[0].innerText;
        // console.log(productName);
    const productPrice =  event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity =  event.target.parentNode.parentNode.children[3].children[0].innerText;

        console.log(productName, productPrice, productQuantity)

        const priceTotal = parseInt(productPrice) - parseInt(productQuantity);

        // Show the data :
        displayData(productName, productPrice, productQuantity, priceTotal);
    })

    // Last Card 
    document.getElementById('last-card').addEventListener("click", function(){
        // console.log("CLICKED")

        const productName = document.getElementById('last-title').innerText;
        // console.log(productName)
        const productPrice = document.getElementById('first-input').value;
        // console.log(productPrice)
        const productQuantity = document.getElementById('second-input').value;

        // console.log(productQuantity)

        const priceTotal = parseInt(productPrice) / parseInt(productQuantity);

        // Show the data :
        displayData(productName, productPrice, productQuantity, priceTotal);
             document.getElementById("last-card").setAttribute('disabled', true);
             
    })

    // Common Function to display data : 
function displayData(productName, productPrice, productQuantity, priceTotal){
    const container = document.getElementById("table-container");

    count++;
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    <button class="btn btn-outline btn-primary btn-sm mt-3 btn-delete">Delete</button>
    `
    container.appendChild(tr);

    
}





// 1 ghonta + 50 min......