let count = 0;
document.getElementById('input-btn').addEventListener('click', function(){
    // console.log("Shovo");
    count = count + 1;
    const myInput = document.getElementById('input-value').value;
    // console.log(myInput);
    const parent = document.getElementById('content-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr>
                <td>${count}</td>
                <td>${myInput}</td>
                <td>
                <button class="btn btn-danger btn-delete"> Delete </button>
                <button class="btn btn-primary"> Done </button>
                </td>
              </tr>
    `
    parent.appendChild(tr);
    // document.getElementById('input-value').value = ''
    const inputValue = document.getElementById('input-value');
    inputValue.value='';

    const elements = document.getElementsByClassName('btn-delete');
    // console.log(elements);
for(const value of elements){
    // console.log(value);
    value.addEventListener('click', function(event){
        // console.log(event.target.parentNode.parentNode);
        event.target.parentNode.parentNode.style.display = "none";
    })
}
})
    document.getElementById("clear-btn").addEventListener('click', function(event){
        event.target.parentNode.style.display = "none";
        console.log(event.target.parentNode);
    })

