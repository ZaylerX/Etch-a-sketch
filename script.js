const container = document.querySelector(".container");
let gridSquare;
let rowContainer;

function createRows () {
    for (i = 0; i < 16; i++) {
        rowContainer = document.createElement("div");
        rowContainer.classList.add("rowContainer");
        container.appendChild(rowContainer);
    }
}

function createDivs() {
    for (i = 0; i < 16; i++) {
    gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.textContent = "Aaa";
    rowContainer.appendChild(gridSquare);
    }    
}

createRows();
rowContainer.forEach(createDivs());

