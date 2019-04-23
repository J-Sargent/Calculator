window.preNumbers = "";
window.savedNumbers =[];
window.currentFullNumber = null;
window.answer = null;
window.textOperator;
window.keyThatWasPressed = null;
window.equationString = "The equation is "; //turn this into an array next arrayName.join(" ");
window.symbols = ['/','*','-','+'];

//typing

function keyPress(e){
	var key = e.key;
if (!isNaN(key)) {makeNumber(key);
}
else if(symbols.indexOf(key) >= 0) {
	console.log("a symbol" + key)
	keyOperator(key);
	}
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
	displayBox.textContent = currentFullNumber + " ";
	updateDisplay(a); //fix display at some point
}

//capture operators
function nextOperator(){
	//console.log("nextOperator called with key " + key);
	if (currentFullNumber) {	//this does the same thing as currentFullNumber !== null
		savedNumbers.push(currentFullNumber);
	}
	textOperator = event.target.value;
	updateDisplay(textOperator);
	preNumbers = [];
	currentFullNumber = null;
}

function keyOperator(key){
	if (currentFullNumber) {	//this does the same thing as currentFullNumber !== null
		savedNumbers.push(currentFullNumber);
	}
	textOperator = key;
  console.log("in keyOperator the textOperator is " + textOperator);
	updateDisplay(textOperator);
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

//display update

function updateDisplay(b){
	equationString += b;
	var equationBox = document.getElementById("equationBox");
	equationBox.textContent = equationString;
	//document.getElementById("equationBox").innerHTML = equationString;
	//console.log("updateDisplay called");
	//var count;
	//console.log("count before iteration is " +count);
	//count = count++;
	//console.log(count);
	//document.getElementById("equationBox").innerHTML = currentFullNumber + textOperator;
}
