var numberSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.getElementById("message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0; i<modeButtons.length; ++i)
	{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i=0; i<squares.length; ++i) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor)
			{
				messageDisplay.textContent = "Correct !";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!!";
		}
	});	
	}
}


function reset(){
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	//change color display to match pickedColor
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i=0; i<squares.length; ++i) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	h1.style.backgroundColor = "steelblue";
}
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for(var i=0; i<squares.length; ++i) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	//picks number between 0 and 1
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	//add num random colors to array
	//return that array
	var arr = [];

	for(var i=0; i<num; ++i)
	{
		//get random colors
		//arr.push(randomColor());
		arr[i] = randomColor();
	}

	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);

	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);

	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}