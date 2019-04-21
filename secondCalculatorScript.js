
/*+NEXT STEP IS CHANGING THE WHOLE FUCKING THING TO USE HTML CLASS TAG TO GET
ALL OF THE NUMBERS FROM THE PAGE AT ONCE */
function getNumbers(){
	console.log('function called');

	var firstInput = document.getElementById('firstBoxNumber');
	var firstNumber = firstInput.value;
	var secondInput = document.getElementById('secondBoxNumber');
	var secondNumber = secondInput.value;
	var numberCheck = [firstNumber,secondNumber];
	//numberCheck.forEach(isANumber);
	var newNumbers = numberCheck.map(makeANumber);
	//newNumbers.forEach(isANumber);
	var sumOne = newNumbers[0] + newNumbers[1];
	console.log(sumOne);
}

function getButtons(){
	console.log("getbuttons was called");
	var numberButtons = [];
	numberButtons = document.getElementsByClassName('numberButtons');
	console.log(numberButtons.item(0) + ", " + numberButtons.item(1));
}
//one lineI  can replace getNumbers lns 4-8


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
