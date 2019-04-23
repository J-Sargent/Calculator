window.preNumbers = 0;
window.savedNumbers =[];
window.currentFullNumber = null;
window.answer = null;
window.textOperator;

function reset(){
	preNumbers = [];
	savedNumbers = [];
	currentFullNumber = null;
	answer = null;
	//clear out displayBox
}

function getButtons(){
	var a = event.target.value;
	preNumbers += a;
	currentFullNumber = parseInt(preNumbers);
	var displayBox = document.getElementById("displayBox");
	displayBox.textContent += currentFullNumber + " ";
}

function nextOperator(){
	textOperator = "huh";
	if (currentFullNumber == null) {

	} else {
		savedNumbers.push(currentFullNumber);
	}
	textOperator = event.target.value;
	displayBox.textContent += textOperator + " ";
	preNumbers = [];
	currentFullNumber = null;
}

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
