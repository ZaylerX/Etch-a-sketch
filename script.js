const container = document.querySelector(".container");
let gridCell;
let rowContainer;

function createRows () {
    for (i = 0; i < 16; i++) {
        rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");
        container.appendChild(rowContainer);
        createCell();
        }
    }

    function createCell() {
        for (j = 0; j < 16; j++) {
            gridCell = document.createElement("div");
            gridCell.classList.add("gridSquare");
            rowContainer.appendChild(gridCell);
            }    
    }


createRows();


let rdmColor;
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }  
rdmColor = color; 
} 

document.querySelectorAll(".gridSquare").forEach(el => el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "blue";
}));




