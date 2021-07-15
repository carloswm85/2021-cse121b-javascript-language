const aCourse = {
	code: 'CSE121b',
	name: 'Javascript Language',
}

// Convert JS Object to JSON (Javascript Object Notation), which is a string
const element = JSON.stringify(aCourse);
console.log('\nNUMBER 01: Stringed');
console.log(element);

// Some data that we got from a server; JSON string into an Object
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
function getSomeExternalDataFromServer(text) {
	return text;
}
const response02 = getSomeExternalDataFromServer(text);
console.log('\nNUMBER 02: String');
console.log(response02);

const objectWeCanUse = JSON.parse(response02);
console.log('\nNUMBER 03: Parsed string into object');
console.log(objectWeCanUse);

// JSON coming from a fetch call; JSON string into an Object
const urlSome = 'https://raw.githubusercontent.com/carloswm85/resources-examples/master/json-files/latter-day-prophets.json';
const fetch = require("node-fetch");

const getJSON = async url => {
	try {
		const response = await fetch(url);
		if (!response.ok) // check if response worked (no 404 errors etc...)
			throw new Error(response.statusText);

		const data = await response.json(); // get JSON from the response
		return data; // returns a promise, which resolves to this data value
	} catch (error) {
		return error;
	}
}

console.log("Fetching data...");
getJSON(urlSome).then(data => {
	console.log(data);
}).catch(error => {
	console.error(error);
});