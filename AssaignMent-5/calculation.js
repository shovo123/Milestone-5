// change color on mouseHover
function mouseOver() {
    const cards = document.getElementsByClassName('card');
    for (let card of cards) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        const clsList = card.classList;
        clsList.add(`hover:bg-[${ randomColor }]`);
    }
}
// blog button event
function blogBtn() {
    location.href = 'blog.html';
}


let serial = 0;
// common functions
// get the card title, equation input value
function getTheElement(idTitle, idValue1, idValue2) {
    const title = document.getElementById(idTitle).innerText;
    const value1String = document.getElementById(idValue1);
    const value1 = value1String.value;
    value1String.value = '';
    const value2String = document.getElementById(idValue2);
    const value2 = value2String.value;
    value2String.value = '';
    if ((parseInt(value1) || parseInt(value2)) < 0) {
        alert('enter positive number please');
    } else {
        return equationValue = {
            cardTitle: title,
            equationFirstValue: value1,
            equationSecondValue: value2
        };
    }
}
// input value validation
function areaCalc(area, cardTitle) {
    if (isNaN(area) || area < 0) {
        alert('enter a valid number');
    } else {
        serial += 1;
        setTableValue(serial, cardTitle, area.toFixed(2));
    }
}
// set the table row value
function setTableValue(serial, title, area) {
    const table = document.getElementById('table-body');
    const li = document.createElement('tr');
    li.innerHTML = `
    <tr>
     <th>${serial}</th>
     <td>${title}</td>
     <td><span id="conversion-result">${area}</span> <span id="converion-perameter">cm</span><sup>2</sup></td>
     <td><button id="conversion-btn" class="btn btn-info normal-case text-base inline">Convert to m<sup>2</sup></a></button></td>
    </tr>
    `
    table.appendChild(li);
}

// <------ ALL Event On Cards ------> 

// triangle Calculation
document.getElementById('btn-triangle').addEventListener('click', function() {
    const values = getTheElement('title-triangle', 'base-triangle', 'height-triangle');
    const area = .5 * parseFloat(values.equationFirstValue) * parseFloat(values.equationSecondValue);
    areaCalc(area, values.cardTitle);
})
// Rectangle Calculation
document.getElementById('btn-rectangle').addEventListener('click', function() {
    const values = getTheElement('title-rectangle', 'width-rectangle', 'length-rectangle');
    const area = parseFloat(values.equationFirstValue) * parseFloat(values.equationSecondValue);
    areaCalc(area, values.cardTitle);
})
// Parallelogram Calculation
function parallelogramCalculation() {
    const values = getTheElement('title-parallelogram', 'base-parallelogram', 'height-parallelogram')
    const area = parseFloat(values.equationFirstValue) * parseFloat(values.equationSecondValue);
    areaCalc(area, values.cardTitle);
}
// Rhombus calculation
function rhombusCalc() {
    const values = getTheElement('title-rhombus', 'd1-rhombus', 'd2-rhombus')
    const area = .5 * parseFloat(values.equationFirstValue) * parseFloat(values.equationSecondValue);
    areaCalc(area, values.cardTitle);
}





// pentagon calculation
function pentagonCalc() {
    const values = getTheElement('title-pentagon', 'p-pentagon', 'a-pentagon')
    const area = .5 * parseFloat(values.equationFirstValue) * parseFloat(values.equationSecondValue);
    areaCalc(area, values.cardTitle);
}
// ellipse calculation
function ellipseCalc() {
    const values = getTheElement('title-ellipse', 'a-ellipse', 'b-ellipse')
    const area = Math.PI * parseFloat(values.equationFirstValue) * parseFloat(values.equationSecondValue);
    areaCalc(area, values.cardTitle);
}

