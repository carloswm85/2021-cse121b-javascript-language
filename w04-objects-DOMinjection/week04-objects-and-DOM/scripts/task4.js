/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const personal = {}

// Step 2: Inside of the object, add a property named name with a value of your name as a string
personal['name'] = "Carlos W. Mercado";
console.log(personal);

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
personal['photo'] = "images/me-w04.jpg"; /* HEADS UP! This picture is called from the task4.html file, that's why it has that path. */
console.log(personal);

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
personal['favoriteFoods'] = ['milanesas', 'tortafritas', 'niños envueltos', 'empanadas', 'asado', 'guiso de lentejas', 'facturas', 'galletitas saladas', 'helado de chocolate negro'];
console.log(personal);

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
personal['hobbies'] = ['programming', 'Church', 'reading the Scriptures'];
console.log(personal);

// Step 6: Add another property named placesLived with a value of an empty array
personal['placesLived'] = [];
console.log(personal);

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
let place1 = {
	place: 'Zapala, Neuquen',
	length: '7 years'
};
personal['placesLived'].push(place1);
console.log(personal);

// Step 9: Add additional objects with the same properties for each place you've lived
let place2 = {
	place: 'Neuquen, Neuquen',
	length: '2 years'
};
personal['placesLived'].push(place2);
console.log(personal);

let place3 = {
	place: 'Mars, Solar System',
	length: '125 years'
};
personal['placesLived'].push(place3);

/** CONSOLE FINAL OUTPUT
{
	name: 'Carlos W. Mercado',
	photo: 'images/me-w04.jpg',
	favoriteFoods: ['milanesas', 'tortafritas', 'niños envueltos', ETC],
	hobbies: ['programming', 'Church', 'reading the Scriptures'],
	placesLived: [
		{
			place: 'Zapala',
			length: '34 years'
		},
		{
			place: 'Neuquen',
			length: '2 years'
		}
	]
}

> Which is assigned to the 'personal' variable.
**/

/* ====================================================================== */
/* FRONTEND OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const dc = (element) => document.getElementById(element);
dc("name").innerText = personal.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const imgAtt = (element, attribute, value) => {
	dc(element).setAttribute(attribute, value);
}
imgAtt('photo', 'src', personal.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
imgAtt('photo', 'alt', personal.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
const listBuilder = (content, target) => {
	content.forEach(element => {
		let listItem = document.createElement('li');
		listItem.textContent = element;
		dc(target).appendChild(listItem);
	})
}
listBuilder(personal.favoriteFoods, 'favorite-foods');

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
listBuilder(personal.hobbies, 'hobbies');


// Step 8: For each object in the placesLived property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
/*
- The <dl> (description list) tag is used in conjunction with <dt> (defines terms/names) and <dd> (describes each term/name).
<dl>
	<dt> Coffee </dt>
	<dd> Black hot drink </dd>
	etc
</dl>
*/
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const pl = dc('places-lived');
personal.placesLived.forEach(element => {
	console.log(element);
	const term = document.createElement('dt');
	term.textContent = element.place;
	pl.appendChild(term);
	const description = document.createElement('dd');
	description.textContent = element.length;
	pl.appendChild(description);
});
