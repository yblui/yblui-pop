var playerOnePlaying = true, xCoords = 0, dotsRemaining = 30, playerOneName = "Player 1", playerTwoName = "Player 2", playerOneScore = 0,
    playerTwoScore = 0, firstTo = 0, winBy = 0;

function clk(element) {
    if (!xCoords) xCoords = Number(element.dataset.xcoordinate);
    if (Number(element.dataset.xcoordinate) != xCoords) return;
    if (element.style.backgroundColor == "gray") return;
    element.style.backgroundColor = "gray";
    dotsRemaining--;
    if (!dotsRemaining) {
        if (playerOnePlaying) {
            document.getElementById("player").innerText = playerTwoName + " Won";
            playerTwoScore++;
        } else {
            document.getElementById("player").innerText = playerOneName + " Won";
            playerOneScore++;
        }
        if (playerOneScore > firstTo && playerOneScore >= playerTwoScore + winBy) document.getElementById("player").innerText = "Winner! " + playerOneName;
        if (playerTwoScore > firstTo && playerTwoScore >= playerOneScore + winBy) document.getElementById("player").innerText = "Winner! " + playerTwoName;
        xCoords = 0;
        dotsRemaining = 30;
        for (var x of document.getElementsByTagName("div")) {
            if (x.style.backgroundColor == "gray") x.style.backgroundColor = ""
        }
    }
}

function togglePlayer() {
    if (!xCoords) return;
    playerOnePlaying = !playerOnePlaying;
    xCoords = 0;
    if (playerOnePlaying) document.getElementById("player").innerText = playerOneName + " is Playing";
    else document.getElementById("player").innerText = playerTwoName + " is Playing";
}

function play(p1name, p2name, ft, wb) {
    playerOneName = p1name;
    playerTwoName = p2name;
    firstTo = ft;
    winBy = wb;
    document.getElementById("settings").style.top = "-110%";
}
