/* Grab Elements */

function originalGrid(num=16){
    for (let i = 0; i < num; i++){
        const sixteenGrid = document.querySelector('#sketch-grid');
        const div = document.createElement('div');
        div.textContent = `${i + 1}`;
        sixteenGrid.appendChild(div);
    }
}

originalGrid();