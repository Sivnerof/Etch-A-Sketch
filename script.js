/* Grab Elements */
const resetButton = document.querySelector('#reset-button');
const grid_Div = document.querySelector('#sketch-grid');

/* Functions */
function createGrid(num=16){
    num = num > 100 || num < 16 ? 16 : num;

    for (let i = 0; i < num; i++){
        const row_Div = document.createElement('div');
        row_Div.classList.add('row-div');
        row_Div.textContent = `Row Number: ${i + 1}`;
        grid_Div.appendChild(row_Div);

        for (let j = 0; j < num; j++){
            const col_Div = document.createElement('div');
            col_Div.classList.add('col-div');
            col_Div.textContent = `Column Number: ${j + 1}`;
            row_Div.appendChild(col_Div);
        }
    }
}

function deleteGrid(){
    document.querySelectorAll('.row-div').forEach(e => e.remove());
}

/* Run Program For First Time Page Load */
createGrid();

/* Event Listeners */
resetButton.addEventListener('click', () => {
   gridSize = +(window.prompt('Enter Grid Size: '));
   deleteGrid();
   createGrid(gridSize); 
});