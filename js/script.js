// ***** FUNCTION *****
/**
 * color cell when cliked
 */
function clickHandle() {
    this.classList.toggle("l-blue");
}

/**
 * create cell and add correct class to cell element
 * @param {number} n
 * @param {string} cl
 * @returns {any}
 */
function createCell (n, cl) {
    const newCell = document.createElement("div");
    newCell.innerHTML = n;
    newCell.classList.add(cl);
    return newCell;
}



// ***** MAIN CODE *****
document.querySelector("button").addEventListener("click", function() {
    const difficulty = document.getElementById("diff").value;
    document.querySelector(".grid").innerHTML = "";
    switch(difficulty) {
        case "hard":
            for (let i = 1; i <= 49; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle);
                document.querySelector(".grid").append(cell);
            }
            break;
        case "mid":
            for (let i = 1; i <= 81; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle) 
                document.querySelector(".grid").append(cell);
            }
            break;
        default:
            for (let i = 1; i <= 100; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle);
                document.querySelector(".grid").append(cell);
            }
            break;
    } 
    
})


