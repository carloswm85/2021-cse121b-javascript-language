console.log("Array of strings:");
//sorting an array
let fruit = ['banana', 'apple', 'orange'];

fruit.sort();
console.log(fruit);

console.log("Array of objects:");
//now it's an array of objects 
let autos = [{
		name: 'Porche',
		color: 'red',
		top_speed: '120mph'
	},
	{
		name: 'Bentley',
		color: 'green',
		top_speed: '110mph'
	},
	{
		name: 'Jeep',
		color: 'blue',
		top_speed: '100mph'
	}
];

//now the sort method needs a callback function which takes 2 parameters 
//so first the 1st and 2nd items are sent in as a and b 
//-1, 1 and 0 tell it the sort order precedence 
//we need to let it know which property to sort we used .name 
//try a.color and b.color 
function obj_sort(a, b) {
	console.log('a: ' + a.name);
	console.log('b: ' + b.name);
	if (a.name < b.name) {
		let c = a.name < b.name;
		console.log('Bool lesser "a": ' + c);
		return -1;
	} else if (a.name > b.name) {
		let c = a.name > b.name;
		console.log('Bool greater "a": ' + c);
		return 1;
	} else {
		let c = a.name == b.name;
		console.log('Bool equal "a": ' + c);
		return 0;
	};
};


console.log(autos);
autos.sort(obj_sort); // callback function
console.log(autos);