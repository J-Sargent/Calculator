window.preNumbers = [];
window.savedNumbers =[];
window.currentFullNumber = null;
window.answer = null;
window.textOperator;

function reset(){
	preNumbers = [];
	//clear out displayBox
}

function getButtons(){
	var a = event.target.value;
	preNumbers.push(a);
	currentFullNumber = parseInt(preNumbers.join(''));
	document.getElementById("displayBox").innerHTML = currentFullNumber;
}

function nextOperator(){
	savedNumbers.push(currentFullNumber);
	textOperator = event.target.value;
	reset();
}

function displayAnswer(){
	savedNumbers.push(currentFullNumber);

	switch(textOperator) {
		case "plus":
		answer = savedNumbers[0] + savedNumbers[1];
		parseInt(answer);
		break;

		case "minus":
		answer = savedNumbers[0] - savedNumbers[1];
		parseInt(answer);
		break;

		case "multiply":
		answer = savedNumbers[0] * savedNumbers[1];
		parseInt(answer);
		break;

		case "divide":
		answer = savedNumbers[0] / savedNumbers[1];
		parseInt(answer);
		break;

		default:
		console.log("It did not work");
	}
savedNumbers = [];
savedNumbers.push(answer);
	document.getElementById("displayAnswer").innerHTML = "The final answer is: " + answer;
}
