function logThis(){
	console.log('function called');
	event.preventDefault();
	console.log(document.getElementById('firstNumber').value);
	var firstNumber = (document.getElementById('firstNumber').value);

		
	var secondNumber = (document.getElementById('secondNumber').value);
	var sum = firstNumber + secondNumber;
	console.log(sum);
}
