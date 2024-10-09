let gameOver = new Audio("gameover.mp3")
let turnAudio = new Audio("ting.mp3")
let music = new Audio("music.mp3")
let turn = "X"
let isGameOver = false;

// Function for turn
const changeTurn = () => {
    return turn === "X"?"O" : "X";
}

// Function to check for win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,-45]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText ) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('#infoText').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[[3]]}vw, ${e[[4]]}vw) rotate(${e[[5]]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!isGameOver){
                document.getElementById("infoText").innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick Event Listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    isGameOver = false
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".line").style.width = "0px";
    
})