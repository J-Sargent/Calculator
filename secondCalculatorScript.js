function getNumbers(){
	console.log('function called');

	var firstInput = document.getElementById('firstNumber');
	var firstNumber = firstInput.value;
	var secondInput = document.getElementById('secondNumber');
	var secondNumber = secondInput.value;
	var numberCheck = [firstNumber,secondNumber];
	numberCheck.forEach(isANumber);
	var numberCheck = [1,2];
	numberCheck.forEach(makeANumber);
	var sum = firstNumber + secondNumber;
	console.log(sum);
}



/*
array demo
var fruits = ["apple","bannana"];
fruits.forEach(function(item,index,array){console.log(item,index);});*/


function isANumber(item,index){
	if(typeof item =="number"){
		console.log(index + " is a number");
	} else {
		console.log(index + " is not a number");
	}
}

function makeANumber(item,index){
		Number(item);
		isANumber(item,index);
}



//var a - parseFloat("10");
