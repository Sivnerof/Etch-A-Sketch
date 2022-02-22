/* Grab Elements */
resetButton = document.querySelector('#reset-button');

function createGrid(num=16){
    num = num > 100 || num < 16 ? 16 : num;

    for (let i = 0; i < num; i++){
        const sixteenGrid = document.querySelector('#sketch-grid');
        const div = document.createElement('div');
        div.classList.add('horizontal-div');
        div.textContent = `${i + 1}`;
        sixteenGrid.appendChild(div);
    }
}

createGrid();

resetButton.addEventListener('click', () => {
   gridSize = +(window.prompt('Enter Grid Size: '));
   /* Delete original grid */
   createGrid(gridSize); 
});