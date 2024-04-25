const container = document.querySelector(".container");


function createGrid(size = 16) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = "gridRow";
        container.appendChild(gridRow);

        for (let j = 0; j < size; j++) {
            const gridCell = document.createElement("div");
            gridCell.className = "cell";
            gridRow.appendChild(gridCell);
        }
    }
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getRandomColor();
            if (cell.style.opacity < 1) {
                cell.style.opacity  = +cell.style.opacity + 0.1;
            }
        });
    });
}

createGrid();


function getRandomColor () {
    let letters = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



const gridSizeBtn = document.querySelector(".gridSize");

gridSizeBtn.addEventListener("click", () => {
    container.replaceChildren();
    size = prompt("How many rows and cols do you want?") 
    if (size > 100) {
        alert("The number is too high, please enter a valid number");
    } else {
        createGrid(size);
    }
});



