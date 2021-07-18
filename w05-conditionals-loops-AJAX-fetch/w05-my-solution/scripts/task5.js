/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message1;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek > 0 && dayOfWeek < 6) {
	message1 = 'Hang in there!';
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
	message1 = 'Woohoo!  It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
	case 0:
		message2 = 'Sunday';
		break;
	case 1:
		message2 = 'Monday';
		break;
	case 2:
		message2 = 'Tuesday';
		break;
	case 3:
		message2 = 'Wednesday';
		break;
	case 4:
		message2 = 'T';
		break;
	case 5:
		message2 = 'Friday';
		break;
	case 6:
		message2 = 'Saturday';
		break;
	default:
		message2 = 'Something Went Wrong';
		break;
}

/* OUTPUT */
const dg = element => document.getElementById(element);
// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
dg('message1').innerHTML = message1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
dg('message2').innerHTML = message2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
const ct = tag => document.createElement(tag);
const sa = (tag, attribute, value) => tag.setAttribute(attribute, value);
let temples_array = [{
		"templeName": "Bountiful Utah Temple",
		"location": "Bountiful, Utah, United States",
		"dedicated": "8 January 1995",
		"imageUrl": "https://assets.ldscdn.org/b3/1f/b31f8fc3892ce063cfbd0607cd53980290fcc0ae/aba_nigeria_temple_lds.jpeg"
	},
	{
		"templeName": "Brigham City Utah Temple",
		"location": "Brigham City, Utah, United States",
		"dedicated": "23 September 2012",
		"imageUrl": "https://assets.ldscdn.org/93/92/9392e6adee3d1aa025548de1a852a27ad8ea40f4/brigham_city_utah_temple_dawn.jpeg"
	}
];

// console.log(temples_array); // Example

const output = (array) => {
	array.forEach(element => {
		let article = ct('article');
		let h3 = ct('h3');
		let h4a = ct('h4');
		let h4b = ct('h4');
		let img = ct('img');

		h3.innerHTML = element.templeName;
		h4a.innerHTML = element.location;
		h4b.innerHTML = element.dedicated;
		sa(img, 'src', element.imageUrl);
		sa(img, 'alt', element.templeName);

		article.append(h3, h4a, h4b, img);
		document.querySelector('#temples').appendChild(article);
	});
}

// output(temples_array); // Example

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';

fetch(url)
	// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
	.then(urlResponse => urlResponse.json())
	// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
	.then(temples_list => {
		// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable
		temples = temples_list;
		// Step 7: Finally, call the output function and pass it the list of temples
		output(temples);
	});

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

const reset = () => {
	const mainNode = document.querySelector("#temples");
	while (mainNode.firstChild) {
		mainNode.removeChild(mainNode.lastChild);
	}
}

function compare(a, b) {
	if (a.name > b.name) {
		return 1;
	} else if (a.name < b.name) {
		return -1;
	} else return 0;
}

// Step 9: Declare a function named sortBy that does the following:
const sortBy = () => {
	// - Calls the reset function
	reset();

	// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
	let value = dg('sortBy').value;
	let temples_sorted = [];

	if (value === 'templeNameAscending') {
		temples_sorted = temples.sort(compare);
	} else if (value === 'templeNameDescending') {
		temples_sorted = temples.reverse(compare);
	} else {
		console.log('Something went muy mal');
	}

	// - Calls the output function passing in the sorted list of temples
	output(temples_sorted);
	console.log(temples_sorted);
}

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
dg('sortBy').addEventListener('change', sortBy);


/* STRETCH */
// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files