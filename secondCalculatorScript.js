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
if (!isNaN(key)) {makeNumber(key);}
else if(symbolKeys.indexOf(key) >= 0) {
	keyOperator(key);	}
else if (e.keyCode === 13) { console.log("you pressed enter");
//displayAnswer();
calculate();
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

function calculate(){
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
	//document.getElementById("equationBox").innerHTML = currentFullNumber + operatorSymbols;
}
