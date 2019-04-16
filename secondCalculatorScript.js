function getNumbers(){
	console.log('function called');

	var firstInput = document.getElementById('firstNumber');
	var firstNumber = firstInput.value;
	var secondInput = document.getElementById('secondNumber');
	var secondNumber = secondInput.value;
	var numberCheck = [firstNumber,secondNumber];
	//numberCheck.forEach(isANumber);
	var newNumbers = numberCheck.map(makeANumber);
	//newNumbers.forEach(isANumber);
	var sumOne = newNumbers[0] + newNumbers[1];
	console.log(sumOne);
}



/*
array demo
var fruits = ["apple","bannana"];
fruits.forEach(function(item,index,array){console.log(item,index);});*/


/*checking to see if it is a number
function isANumber(item,index){
	if(typeof item =="number"){
		console.log(index + " is a number");
	} else {
		console.log(index + " is not a number");
	}
} */

function makeANumber(item,index){
		var parsed = parseFloat(item);
		return parsed;
}



//var a - parseFloat("10");
