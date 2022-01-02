var playerOnePlaying = true, xCoords = 0, dotsRemaining = 30, playerOneName = "Player 1", playerTwoName = "Player 2", playerOneScore = 0,
    playerTwoScore = 0, firstTo = 0, winBy = 0;

function clk(element) {
    if (!xCoords) xCoords = Number(element.dataset.xcoordinate);
    if (Number(element.dataset.xcoordinate) != xCoords) return;
    if (element.style.backgroundColor == "gray") return;
    element.style.backgroundColor = "gray";
    dotsRemaining--;
    if (dotsRemaining) return;
    if (playerOnePlaying) playerTwoScore++;
    else playerOneScore++;
    showPoint();
    checkWin();
    xCoords = 0;
    dotsRemaining = 30;
    for (var x of document.getElementsByTagName("div")) {
        if (x.style.backgroundColor == "gray") x.style.backgroundColor = "";
    }
}

function refreshPlayer() {
    if (playerOnePlaying) document.getElementById("player").innerText = playerOneName + " is Playing";
    else document.getElementById("player").innerText = playerTwoName + " is Playing";
}

function togglePlayer() {
    if (!xCoords) return;
    playerOnePlaying = !playerOnePlaying;
    xCoords = 0;
    refreshPlayer();
}

function play(p1name, p2name, ft, wb, numMode) {
    playerOneName = p1name;
    playerTwoName = p2name;
    document.getElementById("player1").innerText = p1name;
    document.getElementById("player2").innerText = p2name;
    firstTo = ft;
    winBy = wb;
    document.getElementById("settings").style.top = "-110%";
    refreshPlayer();
    if (numMode) {
        document.getElementById("numberMode").style.display = "block";
        document.getElementById("boardMode").style.display = "none";
    } else {
        document.getElementById("numberMode").style.display = "none";
        document.getElementById("boardMode").style.display = "block";
    }
}

function clkNumber(element) {
    if (!xCoords) xCoords = Number(element.dataset.xcoordinate);
    if (Number(element.dataset.xcoordinate) != xCoords) return;
    if (Number(element.innerText) != 0) {
        element.innerText = Number(element.innerText) - 1;
        dotsRemaining--;
    }
    if (!dotsRemaining) {
        dotsRemaining = 30;
        if (playerOnePlaying) playerTwoScore++;
        else playerOneScore++;
        for (var x of document.getElementsByClassName("number")) {
            x.innerText = x.dataset.num;
        }
        showPoint();
        xCoords = 0;
    }
    checkWin();
}

function checkWin() {
    if (playerOneScore >= firstTo && playerOneScore >= playerTwoScore + winBy) {
        document.getElementById("winnerName").innerText = playerOneName;
        document.getElementById("winner").style.left = "0";
        document.getElementById("settings").style.top = "0";
        playerOneScore=0;
        playerTwoScore=0;
        setTimeout(function () {
            document.getElementById("winner").style.left = "100%";
        }, 3000)
    } else if (playerTwoScore >= firstTo && playerTwoScore >= playerOneScore + winBy) {
        document.getElementById("winnerName").innerText = playerTwoName;
        document.getElementById("winner").style.left = "0";
        document.getElementById("settings").style.top = "0";
        playerOneScore=0;
        playerTwoScore=0;
        setTimeout(function () {
            document.getElementById("winner").style.left = "100%";
        }, 3000)
    }
}

function showPoint() {
    document.getElementById("playerOnePoint").innerText = playerOneScore;
    document.getElementById("playerTwoPoint").innerText = playerTwoScore;
    document.getElementById("points").style.left = "0";
    setTimeout(function () {
        document.getElementById("points").style.left = "100%";
    }, 3000)
}