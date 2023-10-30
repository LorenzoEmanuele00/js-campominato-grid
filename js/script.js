// ***** FUNCTION *****

/**
 * Generates random number
 * @param {number} min
 * @param {number} max
 * @returns {number} 
 */
function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * generate bombs
 * @param {number} max
 * @returns {array}
 */
function generatesBomb(max) {
    const results = [];
    while (results.length < 16) {
        const rndNum = rng(1, max);
        if (!results.includes(rndNum)) {
            results.push(rndNum);
        }
    }
    return results;
}

/**
 * cell controll for color and bomb
 */
function clickHandle() {
    let verifyClick = false;
    
    if (bombs.includes(parseInt(this.innerHTML)) && !verifyBomb){
        this.classList.add("red");
        console.log("sconfitta");
        verifyBomb = true;
    }

    if (clicked.includes(parseInt(this.innerHTML)) && !verifyBomb) {
        verifyClick = true;
    } else if (!verifyBomb) {
        clicked.push(parseInt(this.innerHTML));
        console.log(clicked);
    }

    if (!verifyBomb && !verifyClick && 49 - (clicked.length + 16) === 0) {
        this.classList.add("l-blue");
        console.log("vittota");
    } else if (!verifyBomb && !verifyClick) {
        this.classList.add("l-blue");
        console.log("nuovo numero");
    }   
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
let bombs;
let verifyBomb = false;
let clicked = [];
let cells;

document.querySelector("button").addEventListener("click", function() {
    const difficulty = document.getElementById("diff").value;
    clicked = [];
    document.querySelector(".grid").innerHTML = "";
    switch(difficulty) {
        case "hard":
            bombs = generatesBomb(16);
            console.log(bombs);

            for (let i = 1; i <= 49; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle);
                document.querySelector(".grid").append(cell);
                cells++;
            }
            break;
        case "mid":
            bombs = generatesBomb(81);
            console.log(bombs);

            for (let i = 1; i <= 81; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle) 
                document.querySelector(".grid").append(cell);
                cells++;
            }
            break;
        default:
            bombs = generatesBomb(100);
            console.log(bombs);
            for (let i = 1; i <= 100; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle);
                document.querySelector(".grid").append(cell);
                cells++;
            }
            break;
    } 
    
})


