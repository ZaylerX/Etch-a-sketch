const container = document.querySelector(".container");
let div;

function createDivs() {
    for (i = 0; i < 64; i++) {
    div = document.createElement("div");
    console.log(div.nodeType);
    div.classList.add("gridDiv");
    div.textContent = "Aaa";
    container.appendChild(div);
    }    
}
createDivs()

