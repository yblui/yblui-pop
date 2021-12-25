var playerOnePlaying = true, xCoords = 0, dotsRemaining = 30, playerOneName = "Player 1", playerTwoName = "Player 2";

function clk(element) {
    if (!xCoords) xCoords = Number(element.dataset.xcoordinate);
    if (Number(element.dataset.xcoordinate) != xCoords) return;
    if (element.style.backgroundColor == "gray") return;
    element.style.backgroundColor = "gray";
    dotsRemaining--;
    if (!dotsRemaining) document.getElementById("player").innerText = "Game Over."
}

function togglePlayer() {
    if (!xCoords) return;
    playerOnePlaying = !playerOnePlaying;
    xCoords = 0;
    if (playerOnePlaying) document.getElementById("player").innerText = playerOneName + " Playing";
    else document.getElementById("player").innerText = playerTwoName + " Playing";
}

function play(p1name, p2name) {
    playerOneName = p1name;
    playerTwoName = p2name;
    document.getElementById("settings").style.top = "-110%";
}