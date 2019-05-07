var order = [
	['()'],
	['exponent'],
	['*','/'],
	['+', '-']
];
var savedOperators = ['*','-','+','/'];

function checkArray(){
console.log("checkArray is called");
		for (var x = 0; x < order.length; x++) {
			var operatorRow = order[x];
			for (var y = 0; y < savedOperators.length; y++){
				currentOperator = savedOperators[y];
				if (operatorRow.indexOf(currentOperator >-1)){
					calculate(currentOperator);
				}
					else {console.log("something went wrong");
				}
			}
		}

}

function calculate(){
	console.log("calculate called. currentOperator is " + currentOperator);
}
	//var operatorIndex = operatorRow.indexOf('/');
