window.preNumbers = "";
window.savedNumbers =[];
window.savedOperators =[];
window.currentFullNumber = null;
window.answer = null;
window.operatorSymbols;
window.equationString = "The equation is "; //turn this into an array next arrayName.join(" ");
window.symbolKeys = ['/','*','-','+'];
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
	var displayBox = document.getElementById("displayBox");
	displayBox.textContent = "";
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
	savedNumbers.push(currentFullNumber);
	for (var x = 0; x < order.length;x++) {
		var operatorRow = order[x];
		for (var y = 0; y < savedOperators.length; y++){
			console.log("y = " + y);
			currentOperator = savedOperators[y];
			if (operatorRow.indexOf(currentOperator) >-1){
				calculate(currentOperator);
			}
		}
	}
}


function calculate(calculateOperator){
	console.log("calculate called. calculateOperator is " + calculateOperator);
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

function displayAnswer(){
	getOrder();
	console.log("the final answer is: " + answer);
	var answerBox = document.getElementById("answerBox");
	answerBox.innerHTML = answer;
}
