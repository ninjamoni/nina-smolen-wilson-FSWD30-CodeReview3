function calculateInsurance() {

var Name = document.getElementById("name").value;
var Age = document.getElementById("age").value;
var Country = document.getElementById("country").value;
var Horse_power = document.getElementById("horsepower").value;


var insuranceFormula = Horse_power * 100 / Age +150;
var insurancePrice = (Math.round(insuranceFormula *100)/100).toFixed(2); //rounds to two numbers after comma


if(Name == 0) {
	document.getElementById("finalPrice").innerHTML = "Please enter your name";
} else if(Age < 16) {
	document.getElementById("finalPrice").innerHTML = "Please enter correct age"; 
} else if(Horse_power <10) {
	document.getElementById("finalPrice").innerHTML = "Enter the horsepower of your car";
} else {
document.getElementById("finalPrice").innerHTML = "The price of your car insurance will be " + insurancePrice + "€ per year.";
}
}



