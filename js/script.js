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
        loss();
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

/**
 * EVENTS AFTER LOST
 */
function loss () {
    const cells = document.querySelectorAll(`.${difficulty}`)
    for (let i = 0; i < cells.length; i++) {
        if (bombs.includes(parseInt(cells[i].innerHTML))){
            cells[i].classList.add("red");
        }
    }
    let newPhrase = document.querySelector(`.win-lose-phrase`);
    newPhrase.classList.remove("hidden");
    newPhrase.innerHTML = document.createElement("h2").innerHTML = `HAI PERSO - GIOCA ANCORA`;
    newPhrase.classList.add("size");
    document.querySelector(`.game-area`).classList.remove(`.game`);
    document.querySelector(`.game-area`).classList.add(`.lose`);
}


// ***** MAIN CODE *****
let bombs;
let verifyBomb;
let clicked = [];
let difficulty = "";
let newPhrase = document.querySelector(`.win-lose-phrase`);

document.querySelector("button").addEventListener("click", function() {

    // BOMB RESET
    verifyBomb = false;

    // LOOS RESET
    newPhrase.classList.add("hidden");
    document.querySelector(`.game-area`).classList.remove(`.lose`);
    document.querySelector(`.game-area`).classList.add(`.game`);

    // CLICKED CELL RESET
    clicked = [];

    // GRID RESET
    document.querySelector(".grid").innerHTML = "";

    // DIFFICULTY CHECK
    difficulty = document.getElementById("diff").value;
    switch(difficulty) {
        case "hard":
            bombs = generatesBomb(49);
            console.log(bombs);

            for (let i = 1; i <= 49; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle);
                document.querySelector(".grid").append(cell);
            }
            break;
        case "mid":
            bombs = generatesBomb(81);
            console.log(bombs);

            for (let i = 1; i <= 81; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle) 
                document.querySelector(".grid").append(cell);
            }
            break;
        default:
            bombs = generatesBomb(100);
            console.log(bombs);
            for (let i = 1; i <= 100; i++) {
                const cell = createCell(i, difficulty);
                cell.addEventListener("click", clickHandle);
                document.querySelector(".grid").append(cell);
            }
            break;
    } 
    
})


