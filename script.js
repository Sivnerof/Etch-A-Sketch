/* Grab Elements */
const resetButton = document.querySelector('#reset-button');
const grid_Div = document.querySelector('#sketch-grid');
const form = document.querySelector('form');

/* Functions */
function createGrid(num=16){
    num = num > 100 || num < 16 ? 16 : num;
    for (let i = 0; i < num; i++){
        const row_Div = document.createElement('div');
        row_Div.classList.add('row-div');
        grid_Div.appendChild(row_Div);

        for (let j = 0; j < num; j++){
            const col_Div = document.createElement('div');
            col_Div.classList.add('col-div');
            row_Div.appendChild(col_Div);
        }

        if (i == num - 1){
            createTrail();
        }
    }
}

function deleteGrid(){
    const gridSize = +(window.prompt('Enter Grid Size: '));
    document.querySelectorAll('.row-div').forEach(e => e.remove());
    createGrid(gridSize);
}

function createTrail (){
    const trail_Divs = document.querySelectorAll(".col-div");
    const trail_Color = document.querySelector('#trail-color').value;
    const shading = document.querySelector('input[name="trail-shade"]:checked').value;
    trail_Divs.forEach((e) => {
        e.addEventListener('mouseover', () => {
            if (shading == "on"){
                if(e.classList.contains('shaded-trail')){
                    e.style.opacity -= -0.1
                } else {
                    e.className += ' shaded-trail';
                }
            }
            e.style.backgroundColor = `${trail_Color}`;
        });
    });
}

/* Run Program For First Time Page Load */
createGrid();

/* Event Listeners */
resetButton.addEventListener('click', () => {
   deleteGrid();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    deleteGrid();
});