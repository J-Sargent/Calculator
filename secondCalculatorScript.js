window.preNumbers = "";
window.savedNumbers =[];
window.currentFullNumber = null;
window.answer = null;
window.textOperator;
window.keyThatWasPressed = null;

//typing
function keyPress(e){
	var key = e.key;
	makeNumber(key);
}
addEventListener('keydown', keyPress);

//reset
function reset(){
	preNumbers = [];
	savedNumbers = [];
	currentFullNumber = null;
	answer = null;
	//clear out displayBox
}

//capture numbers
function makeNumber(a){
	preNumbers += a;
	currentFullNumber = parseInt(preNumbers);
	var displayBox = document.getElementById("displayBox");
	displayBox.textContent = currentFullNumber + " "; //fix display at some point
}

//capture operators
function nextOperator(){
	textOperator = "huh";
	if (currentFullNumber) {	//this does the same thing as currentFullNumber !== null
		savedNumbers.push(currentFullNumber);
	}
	textOperator = event.target.value;
	displayBox.textContent += textOperator + " ";
	preNumbers = [];
	currentFullNumber = null;
}

//maths
function displayAnswer(){
	savedNumbers.push(currentFullNumber);
	switch(textOperator) {
		case "+":
		answer = savedNumbers[0] + savedNumbers[1];
		parseInt(answer);
		break;

		case "-":
		answer = savedNumbers[0] - savedNumbers[1];
		parseInt(answer);
		break;

		case "*":
		answer = savedNumbers[0] * savedNumbers[1];
		parseInt(answer);
		break;

		case "/":
		answer = savedNumbers[0] / savedNumbers[1];
		parseInt(answer);
		break;

		default:
		console.log("It did not work");
	}

	document.getElementById("displayAnswer").innerHTML = "The final answer is: " + answer;
	savedNumbers = [];
	savedNumbers.push(answer);
	preNumbers = 0;
	currentFullNumber = null;
}
