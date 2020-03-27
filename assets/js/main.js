let numSquares = 5;
let colors =[
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 255, 0)",
	"rgb(0, 0, 255)",
    "rgb(255, 0, 255)"]; 
let colorDisplay = document.getElementById("colorDisplay");
let pickedColor;
let messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let modeButtons = document.querySelectorAll(".mode");
let squares = document.querySelectorAll(".square");
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
return "rgb(" + r + ", " + g + ", " + b + ")";
}
init();
function init (){
        setupModeButtons();
        setupSquares();
        reset();
    }
function setupModeButtons() {
for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
        this.classList.add("selected");
        reset();
        });
    }
}
function setupSquares() {
for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("click", function() {
                let clickedColor = (this.style.backgroundColor);
                if (clickedColor === pickedColor) {
                    messageDisplay.textContent = "Win!";
                    resetButton.textContent = "Retry ?"
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                } else {
                    this.style.backgroundColor = "#3dd7ac";
                    messageDisplay.textContent = "Try again!";
                }
            });
        }
    }
    function reset() {
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "PLAY";
        messageDisplay.textContent = "";
        for (let i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = "none";
        }
    }
        h1.style.backgroundColor = "rgb(9, 14, 45)"
    }
    resetButton.addEventListener("click", function() {
    reset();
    })
    function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    }
    function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    function generateRandomColors(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
            arr.push(randomColor())
        }
    return arr;
}