window.preNumbers = "";
window.savedNumbers =[];
window.savedOperators =[];
window.currentFullNumber = null;
window.answer = null;
window.operatorSymbols;
window.equationString = "The equation is "; //turn this into an array next arrayName.join(" ");
window.symbolKeys = ['/','*','-','+'];


//typing
function keyPress(e){
	var key = e.key;
if (!isNaN(key)) {makeNumber(key);}
else if(symbolKeys.indexOf(key) >= 0) {
	keyOperator(key);	}
else if (e.keyCode === 13) { console.log("you pressed enter");
//displayAnswer();
orderCalculations();
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
	updateDisplay(a);
}

//capture operators
function nextOperator(){
	if (currentFullNumber) {	//this does the same thing as currentFullNumber !== null
		savedNumbers.push(currentFullNumber);
	}
	operatorSymbols = event.target.value;
	updateDisplay(operatorSymbols);
	preNumbers = [];
	currentFullNumber = null;
	savedOperators.push(operatorSymbols);
}

function keyOperator(key){
	if (currentFullNumber) {
		savedNumbers.push(currentFullNumber);
	}
	operatorSymbols = key;
	updateDisplay(operatorSymbols);
	preNumbers = [];
	currentFullNumber = null;
	savedOperators.push(operatorSymbols);
}

//maths

function orderCalculations(){
	savedNumbers.push(currentFullNumber);
	console.log(savedNumbers);
	console.log(savedOperators);

	while(savedOperators.length > 0){
		console.log("top");
	if ((savedOperators.indexOf('*') <= savedOperators.indexOf('/') || null) && savedOperators.indexOf('*') >= 0){
console.log("if started");
		operatorIndex = savedOperators.indexOf('*');
		answer = savedNumbers[operatorIndex] * savedNumbers[operatorIndex+1];
		console.log("You multipled " + savedNumbers[operatorIndex] + " by " + savedNumbers[operatorIndex+1] + " to get " + answer);
		savedNumbers.splice(operatorIndex, 2, answer);
		savedOperators.splice(operatorIndex,1);
		}
		else {console.log("fuck"); return;}
			/*(savedOperators.indexOf('/') >= 0){
			operatorIndex = savedOperators.indexOf('/');
			answer = savedNumbers[operatorIndex] / savedNumbers[operatorIndex+1];
			console.log("You divided " + savedNumbers[operatorIndex] + " by " + savedNumbers[operatorIndex+1] + " to get " + answer);
			savedNumbers.splice(operatorIndex, 2, answer);
			savedOperators.splice(operatorIndex,1);
			console.log("savedOperators after divide " +savedOperators);*/
				}
}
/*
	else if (savedOperators.indexOf('+') < savedOperators.indexOf('-') && savedOperators.indexOf('+') >= 0){
			operatorIndex = savedOperators.indexOf('+');
			answer = savedNumbers[operatorIndex] + savedNumbers[operatorIndex+1];
			savedNumbers.splice(operatorIndex, 2, answer);
			savedOperators.splice(operatorIndex,1);
			}
	else if (savedOperators.indexOf('-') >= 0){
			operatorIndex = savedOperators.indexOf('-');
			answer = savedNumbers[operatorIndex] - savedNumbers[operatorIndex+1];
			savedNumbers.splice(operatorIndex, 2, answer);
			savedOperators.splice(operatorIndex,1);
		}*/

	document.getElementById("displayAnswer").innerHTML = "The final answer is: " + answer;
}

/*function displayAnswer(){
	savedNumbers.push(currentFullNumber);
	switch(operatorSymbols) {
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
*/


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
	//document.getElementById("equationBox").innerHTML = currentFullNumber + operatorSymbols;
}
