let homeScore = 0
let guestScore = 0
let homeScorePar = document.getElementById("home-score")
let guestScorePar = document.getElementById("guest-score")


function add1Home() {
    homeScore += 1
    homeScorePar.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeScorePar.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homeScorePar.textContent = homeScore
}

function add1Guest() {
    guestScore += 1
    guestScorePar.textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    guestScorePar.textContent = guestScore
}

function add3Guest() {
    guestScore += 3
    guestScorePar.textContent = guestScore
}

function resetGame() {
    homeScore = 0;
    guestScore = 0;
    homeScorePar.textContent = 0
    guestScorePar.textContent = 0
}