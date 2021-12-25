var playerOnePlaying = true, xCoords=0;

function clk(element) {
    if(!xCoords) xCoords=Number(element.dataset.xcoordinate);
    if(Number(element.dataset.xcoordinate)!=xCoords) return;
    element.style.backgroundColor = "gray";
}

function togglePlayer(){
    playerOnePlaying = !playerOnePlaying;
    xCoords = 0;
}