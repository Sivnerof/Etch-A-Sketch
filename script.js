/* Grab Elements */


for (let i = 0; i < 16; i++){
    const containerDiv = document.querySelector("#container");
    const verticalDiv = document.createElement('div');
    verticalDiv.classList.add('vertical-div');
    containerDiv.appendChild(verticalDiv);
    for (let j = 0; j < 16; j++){
        const containerDiv = document.querySelector("#container");
        const horizontalDiv = document.createElement('div');
        const para = document.createElement('p');
        para.innerText = `${j} of ${i}`;
        horizontalDiv.appendChild(para);
        horizontalDiv.classList.add('horizontal-div');
        containerDiv.appendChild(horizontalDiv);
    }
}