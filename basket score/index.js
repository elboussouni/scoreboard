let countHome = document.getElementById("home-score");
let countGuest = document.getElementById("guest-score");
let resetGame = document.getElementById("reset-button");
 
let countH = 0;
let countG = 0;

function add1Home() {
    countH += 1;
    countHome.textContent = countH;
}

function add2Home() {
    countH += 2;
    countHome.textContent = countH;
}

function add3Home() {
    countH += 3;
    countHome.textContent = countH;
}

function add1Guest() {
    countG += 1;
    countGuest.textContent = countG;
}

function add2Guest() {
    countG += 2;
    countGuest.textContent = countG;
}

function add3Guest() {
    countG += 3;
    countGuest.textContent = countG;
}

function reset() {
    countH = 0;
    countG = 0;
    countHome.textContent = countH;
    countGuest.textContent = countG;
}