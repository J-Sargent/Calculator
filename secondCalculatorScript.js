window.preNumbers = "";
window.savedNumbers =[];
window.savedOperators =[];
window.currentFullNumber = "";
window.answer = null;
window.operatorSymbols;
window.equationString = []; //turn this into an array next arrayName.join(" ");
window.symbolKeys = ['/','*','-','+'];
var equationBox = document.getElementById("equationBox");
var displayBox = document.getElementById("displayBox");
var order = [
	['parentheses'],
	['exponenents'],
	['*','/'],
	['+', '-']
];



//typing
function keyPress(e){
	var key = e.key;
	console.log("var key is " + key);
	if (!isNaN(key)) {makeNumber(key);
		console.log("you pressed a number");
	}
		else if(symbolKeys.indexOf(key) >= 0) {
				console.log("you pressed an operator");
				keyOperator(key);
		}
				else if(key == "Enter") {
					console.log("you pressed enter");
					displayAnswer();
				}
					else if(key == "Backspace") {
						console.log("you pressed backspace");
						undo();
					}
}
addEventListener('keydown', keyPress);

function undo(){
	console.log("savedOperators.length " + savedOperators.length);
	console.log("savedNumbers.length " + savedOperators.length);

	if(currentFullNumber){
			if(currentFullNumber.length = 1){
				currentFullNumber = "";
				console.log("currentFullNumber's length was one, it is now" + currentFullNumber);
				displayBox.textContent = currentFullNumber;
			}
				else{
					var sliceCurrentFullNumber = currentFullNumber.slice(0,-1);
					console.log("sliceCurrentFullNumber after slice: " + sliceCurrentFullNumber);
					currentFullNumber =sliceCurrentFullNumber;
				}
	}
		else if(savedOperators.length == savedNumbers.length){
		console.log("operators before pop: " + savedOperators);
		savedOperators.pop();
		equationString.pop();
		equationBox.textContent = equationString.join(" ");
	}
				else {
				savedNumbers.pop();
				equationString.pop();
				equationBox.textContent = equationString.join(" ");
			}
}


//reset
function reset(){
	preNumbers = [];
	savedNumbers = [];
	currentFullNumber = "";
	answer = null;
	//clear out displayBox
}

//capture numbers
function makeNumber(a){
	currentFullNumber += a;
	displayBox.innerHTML = currentFullNumber;

}

//capture operators
function nextOperator(){
	if (currentFullNumber) {	//this does the same thing as currentFullNumber !== null
		savedNumbers.push(parseFloat(currentFullNumber));
		updateDisplay(currentFullNumber);
	}
	operatorSymbols = event.target.value;
	updateDisplay(operatorSymbols);
	preNumbers = [];
	currentFullNumber = "";
	savedOperators.push(operatorSymbols);
	var displayBox = document.getElementById("displayBox");
	displayBox.textContent = "";
}

function keyOperator(key){
	if (currentFullNumber) {
		savedNumbers.push(parseFloat(currentFullNumber));
		updateDisplay(currentFullNumber); //may need removed if equationString array doesnot work
	}
	operatorSymbols = key;
	updateDisplay(operatorSymbols);
	preNumbers = [];
	currentFullNumber = "";
	savedOperators.push(operatorSymbols);
	var displayBox = document.getElementById("displayBox");
	displayBox.textContent = "";
}

//maths

/*function calculate(){
	console.log("Called calculate()");
	operatorLength = savedOperators.length;
	if (operatorLength > 0){orderCalculate()}
	else {console.log("The final answer is: " + answer);}
}

function orderTest(a,b){
	var priorityOperatorPosition = a;
	var secondaryOperatorPosition = b;
	if(secondaryOperatorPosition>priorityOperatorPosition && secondaryOperatorPosition>=0){return true;}
		else{return false;}
}


function orderCalculate(){
	savedNumbers.push(currentFullNumber);
	console.log("The list of savedNumbers is: " + savedNumbers);
	console.log("The list of savedOperators is: " + savedOperators);

if (orderTest(savedOperators.indexOf('+'),savedOperators.indexOf('-'))){
	operatorIndex = savedOperators.indexOf('-');
	answer = savedNumbers[operatorIndex] - savedNumbers[operatorIndex+1];
	console.log("the answer is " + answer);
	savedNumbers.splice(operatorIndex, 2, answer);
	savedOperators.splice(operatorIndex,1);
	calculate();
}
else{console.log("something went wrong");}
}*/

function getOrder(){
	updateDisplay(currentFullNumber);
	savedNumbers.push(parseFloat(currentFullNumber));
	for (var x = 0; x < order.length;x++) {
		var operatorRow = order[x];
		for (var y = 0; y < savedOperators.length; y++){
			currentOperator = savedOperators[y];
			if (operatorRow.indexOf(currentOperator) >-1){
				calculate(currentOperator);
			}
		}
	}
}


function calculate(calculateOperator){
	operatorIndex = savedOperators.indexOf(calculateOperator);
	switch (calculateOperator){
		case "*":
			console.log("multiply");
			answer = savedNumbers[operatorIndex] * savedNumbers[operatorIndex+1];
			break;
		case "/":
			console.log("divide");
			answer = savedNumbers[operatorIndex] / savedNumbers[operatorIndex+1];
			break;
		case "+":
			console.log("add");
			answer = savedNumbers[operatorIndex] + savedNumbers[operatorIndex+1];
			break;
		case "-":
			console.log("subtract");
			answer = savedNumbers[operatorIndex] - savedNumbers[operatorIndex+1];
			break;
		default:
			console.log("woops, something went wrong");
			return;
	}
	savedNumbers.splice(operatorIndex, 2, answer);
	savedOperators.splice(operatorIndex,1);
	console.log("current answer is: " + answer);
}


function updateDisplay(b){
	equationString.push(b);
	equationBox.textContent = equationString.join(" ");
}

function displayAnswer(){
	getOrder();
	var answerBox = document.getElementById("answerBox");
	answerBox.innerHTML = answer;
}
