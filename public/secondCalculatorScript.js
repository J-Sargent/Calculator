window.preNumbers = "";
window.savedNumbers = [];
window.savedOperators = [];
window.currentFullNumber = "";
window.answer = null;
window.operatorSymbol = "";
window.equationString = [];
window.symbolKeys = ["/", "*", "-", "+"];
var equationBox = document.getElementById("equationBox");
var order = [["parentheses"], ["exponenents"], ["*", "/"], ["+", "-"]];

//key captures
function keyPress(e) {
	var key = e.key;
	if (!isNaN(key)) {
		// Consider using Number.isInteger()
		captureNumber(key);
		console.log("you pressed a number");
	} else if (symbolKeys.indexOf(key) >= 0) {
		// I prefer > -1 instead of >= 0
		console.log("you pressed an operator");
		nextOperator(key);
	} else if (key == "Enter") {
		console.log("you pressed enter");
		displayAnswer();
	} else if (key == "Backspace") {
		console.log("you pressed backspace");
		undo();
	} else if (key == ".") {
		console.log("you pressed a decimal");
		captureNumber(key);
	}
}

addEventListener("keydown", keyPress); // Move this to the top

//Use backspace button to remove last number/operator
function undo() {
	// If every single option ends with popDisplay(), then have that run at the end after all of the if/else statements
	if (currentFullNumber) {
		console.log(
			"current full number before: " +
				currentFullNumber +
				"with length: " +
				currentFullNumber.length
		);
		if ((currentFullNumber.length = 1)) {
			// double parens, and that should be ==
			console.log("length is one");
			currentFullNumber = "";
			popDisplay();
		} else {
			var sliceCurrentFullNumber = currentFullNumber.slice(0, -1);
			currentFullNumber = sliceCurrentFullNumber; // You can safely write currentFullNumber = currentFullNumber.slice(0, -1); without breaking it
			popDisplay();
			console.log("currentFullNumber after: " + currentFullNumber);
		}
	} else if (savedOperators.length == savedNumbers.length) {
		console.log("operators before pop: " + savedOperators);
		savedOperators.pop();
		popDisplay();
		console.log("operators after pop: " + savedOperators);
	} else {
		console.log("savednumbers before pop: " + savedNumbers);
		savedNumbers.pop();
		popDisplay();
		console.log("savedNumbersa after pop: " + savedNumbers);
	}
}

// removes focus from button that was clicked last, to prevent interference if enter key is pressed wile a number is in focus.
function removeFocus() {
	var x = document.getElementsByTagName("button"); // More descriptive variable name here please.
	for (i = 0; i < x.length; i++) {
		// please use var i here. Otherwise you're declaring i in the global scope.
		x[i].blur();
	}
}

// If reset button is clicked, clear ALL information from fields.  Also used in displayAnswer to erase everything and then replace certain variables.
function reset() {
	preNumbers = "";
	savedNumbers = [];
	savedOperators = [];
	currentFullNumber = "";
	answer = null;
	operatorSymbol = "";
	equationString = [];
	equationBox.innerHTML = "Please type/click a number/decimal";
	console.log("calculator reset");
	//document.getElementById("resetButton").blur();
	removeFocus();
}

//capture numbers
function captureNumber(a) {
	currentFullNumber += a;
	pushDisplay(a);
	removeFocus();
}

//capture operators
function nextOperator(a) {
	if (currentFullNumber) {
		//this does the same thing as currentFullNumber !== null
		savedNumbers.push(parseFloat(currentFullNumber));
	}
	operatorSymbol = a;
	pushDisplay(" " + operatorSymbol + " ");
	preNumbers = [];
	currentFullNumber = "";
	savedOperators.push(operatorSymbol);
	removeFocus();
}

//decides order of operations
function getOrder() {
	savedNumbers.push(parseFloat(currentFullNumber)); // This is really weird here. Can we move this farther up the execution order?
	for (var x = 0; x < order.length; x++) {
		var operatorRow = order[x];
		for (var y = 0; y < savedOperators.length; y++) {
			currentOperator = savedOperators[y];
			if (operatorRow.indexOf(currentOperator) > -1) {
				calculate(currentOperator);
			}
		}
	}
}

//calculates based on getOrder
function calculate(calculateOperator) {
	operatorIndex = savedOperators.indexOf(calculateOperator);
	switch (calculateOperator) {
		case "*":
			console.log("multiply");
			answer = savedNumbers[operatorIndex] * savedNumbers[operatorIndex + 1];
			break;
		case "/":
			console.log("divide");
			answer = savedNumbers[operatorIndex] / savedNumbers[operatorIndex + 1];
			break;
		case "+":
			console.log("add");
			answer = savedNumbers[operatorIndex] + savedNumbers[operatorIndex + 1];
			break;
		case "-":
			console.log("subtract");
			answer = savedNumbers[operatorIndex] - savedNumbers[operatorIndex + 1];
			break;
		default:
			console.log("woops, something went wrong");
			return;
	}
	savedNumbers.splice(operatorIndex, 2, answer);
	savedOperators.splice(operatorIndex, 1);
	console.log("current answer is: " + answer);
}

//adds numbers/operators to display
function pushDisplay(b) {
	equationString.push(b);
	equationBox.textContent = equationString.join("");
}

//removes numbers/operators to display
function popDisplay() {
	equationString.pop();
	equationBox.textContent = equationString.join("");
}

//runs functions to get total, display it, erase fields, and replace fields for continued calculations.
function displayAnswer() {
	if (savedNumbers.length >= 1) {
		// > 0 also works here, and implies what you're avoiding more easily
		getOrder();
		console.log(equationString);
		console.log(answer);
		var move = answer; // Leave a note here explaining this, and rename this to something more explicit
		reset();
		savedNumbers = [move];
		pushDisplay(move);
	} else {
		//this handles things if there isn't anything in savedNumbers because an operator hasn't been hit yet
		savedNumbers.push(parseFloat(currentFullNumber));
		currentFullNumber = "";
		console.log(savedNumbers);
	}
}
