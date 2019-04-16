console.log("hi");

//var a = 3;
//var b = 5;
//alert("Sum is "+ (a + b));

//var a = prompt();
//var b = 5;
//alert("Sum is "+ (a + b));

//function test()
//{
//var firstName = document.getElementByID(firstName).value;
//console.log(firstName);
//}

function submitForm(event){
	console.log('function called');
	event.preventDefault();
	console.log('Prevented reload');
	firstNameInput();
}

function firstNameInput() {
	var firstName = document.getElementById("firstName").value;
	console.log(firstName);
}
