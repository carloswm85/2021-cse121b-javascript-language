function hey() {
	alert('hey');
}
/* Lesson 3 */
/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2) {
	return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
// Step 4: Assign the return value to an HTML form element with an ID of sum
function addNumbers() {
	let addend1 = document.getElementById("addend1").value;
	let addend2 = document.getElementById("addend2").value;
	let addend1_parsed = parseInt(addend1);
	let addend2_parsed = parseInt(addend2);
	console.log(addend1_parsed);
	console.log(addend2_parsed);
	let addition = add(addend1_parsed, addend2_parsed);
	let additionSt = addition.toString();
	console.log(addition);
	console.log(additionSt);
	sumHtml.value = additionSt;
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const button = document.getElementById("addNumbers");
const sumHtml = document.getElementById("sum");
button.addEventListener("click", addNumbers);

/* ============================================= */
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
/** Substract */
function subtract(number1, number2) {
	return number1 - number2;
}

function subtractNumbers() {
	let num1 = parseInt(document.getElementById("minuend").value);
	let num2 = parseInt(document.getElementById("subtrahend").value);
	let result = subtract(num1, num2);
	let resultString = result.toString();
	outputSub.value = resultString;
}
const outputSub = document.getElementById("difference");
const buttonSub = document.getElementById("subtractNumbers");
buttonSub.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2) {
	return number1 * number2;
}

function mulitplyNumbers() {
	let num1 = parseInt(document.getElementById("factor1").value);
	let num2 = parseInt(document.getElementById("factor2").value);
	let result = multiply(num1, num2);
	let resultString = result.toString();
	outputProd.value = resultString;
}
const outputProd = document.getElementById("product");
const buttonProd = document.getElementById("multiplyNumbers");
buttonProd.addEventListener("click", mulitplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
	return number1 / number2;
}

function divideNumbers() {
	let num1 = parseInt(document.getElementById("dividend").value);
	let num2 = parseInt(document.getElementById("divisor").value);
	let result = divide(num1, num2);
	let resultString = result.toString();
	outputDiv.value = resultString;
}
const outputDiv = document.getElementById("quotient");
const buttonDiv = document.getElementById("divideNumbers");
buttonDiv.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.
// DONE

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let date = new Date();
console.log(date);

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = date.getFullYear();
console.log(currentYear);

// Step 4: Assign the current year variable to an HTML form element with an ID of year
let yearOutput = document.getElementById('year');
yearOutput.innerText = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let myArray = [];
for (let index = 0; index < 26; index++) {
	myArray.push(index);
}
console.log(myArray);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
let array = document.getElementById('array');
array.innerText = myArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = document.getElementById('odds');
newOdds = myArray.filter(
	function (number) {
		if (number % 2 != 0)
			return number;
	}
);
odds.innerText = newOdds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = document.getElementById('evens');
newEvens = myArray.filter(
	function (number) {
		if (number % 2 == 0)
			return number;
	}
);
evens.innerText = newEvens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = document.getElementById('sumOfArray');
totalSumOfArray = myArray.reduce(
	function (total, number) {
		return total + number;
	}
);
sumOfArray.innerText = totalSumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplied = document.getElementById('multiplied');
multipliedArray = myArray.map(
	function (number) {
		return 2 * number;
	}
);
multiplied.innerText = multipliedArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = document.getElementById('sumOfMultiplied');
sumOfMultipliedArray =
	myArray
	.map(
		function (number) {
			return 2 * number;
		}
	)
	.reduce(
		function (total, number) {
			return total + number;
		}
	);
sumOfMultiplied.innerText = sumOfMultipliedArray;