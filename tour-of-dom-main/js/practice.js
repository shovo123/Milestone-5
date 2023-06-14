const allli = document.getElementsByTagName('li');
console.log(allli);

const title = document.getElementsByClassName('title');
console.log(title);

const secondSection = document.getElementById('second-section');
console.log(secondSection);

secondSection.style.backgroundColor = 'tomato';
secondSection.style.borderRadius = '10px';
secondSection.style.padding = '20px';

const newadded = document.getElementById('new');

const li = document.createElement('li');
li.innerText= "My Dynamic Side";
newadded.appendChild(li);


const newSection = document.getElementById('container');
const section = document.createElement('section');
section.innerHTML= `
<h1 id="dynamic">Dynamic Section</h1>
            <ul id="dynamic-2">
            <h3>
                <li>BANGLADESH Booking Side - 1</li>
                <li>BANGLADESH Booking Side - 2</li>
                <li>BANGLADESH Booking Side - 3</li>
                <li>BANGLADESH Booking Side - 4</li>
                <li>BANGLADESH Booking Side - 5</li>
                <li>BANGLADESH Booking Side - 6</li>
                </h3>
            </ul>
`
newSection.appendChild(section);



// First Section Style

const firstSection = document.getElementById('first-section');
firstSection.style.backgroundColor = 'green';
firstSection.style.borderRadius = '8px';
firstSection.style.padding = '8px';


const dynamicSection = document.getElementById('dynamic');
dynamicSection.style.backgroundColor = 'yellow';
dynamicSection.style.borderRadius = '8px';
dynamicSection.style.padding = '8px';


const colorSection = document.getElementById('dynamic-2');
colorSection.style.backgroundColor = 'yellow';
colorSection.style.borderRadius = '8px';
colorSection.style.padding = '8px';

