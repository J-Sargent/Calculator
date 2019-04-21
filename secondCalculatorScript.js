


/*
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
*/


window.preNumbers = [];
window.savedNumbers =[];
window.clickNumber = 0;
window.currentFullNumber = null;

function reset(){
	preNumbers =[];
	//clear out displayBox
}

function getButtons(){
	var a = event.target.value;
	//console.log(a);
	preNumbers.push(a);
	clickNumber++;
	//console.log("clicks: " + clickNumber);
	currentFullNumber = parseInt(preNumbers.join(''));
	document.getElementById("displayBox").innerHTML = currentFullNumber;
}

function sumNumbers(){
	console.log("CurrentFullNumber is " +currentFullNumber);
	savedNumbers.push(currentFullNumber);
	console.log("0 position of savedNumbers is " + savedNumbers[0]);
	reset();

}





//var fullNumber = parseInt(preNumbers.join(''));

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
