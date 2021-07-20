/* EXAMPLE 1 AND 2 */
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;
let pokeList = null;

function convertToJson(response) {
	if (response.ok) {
		return response.json();
	} else {
		console.log("error:", response);
	}
}

function doStuff(data) {
	const outputElement = document.querySelector('#output');
	results = data;
	const html = `<h2>${results.name}</h2>
			<img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
	outputElement.innerHTML = html;
	console.log("first: ", results);
}

function doStuffList(data) {
	console.log(data);
	const pokeListElement = document.querySelector('#outputList');
	pokeList = data.results;
	pokeList.forEach((currentItem) => {
		const html = `<li>${currentItem.name}</li>`;
		// note the += here...
		pokeListElement.innerHTML += html;
	})
	console.log("firstList2: ", pokeList);
}

fetch(url).then(convertToJson).then(doStuff);
fetch(urlList).then(convertToJson).then(doStuffList);
console.log("second: ", results);
console.log("secondList2: ", pokeList);


/* EXAMPLE 3 */
let pokeList3 = null;

function compare(a, b) {
	if (a.name > b.name) {
		// sort b before a
		return 1;
	} else if (a.name < b.name) {
		// a and b different but unchanged (already in the correct order)
		return -1;
	} else return 0; // a and b are equal
}

function sortPokemon(list) {
	let sortedList = list.sort(compare);
	return sortedList;
}

function doStuffList3(data) {
	console.log(data);
	const pokeListElement = document.querySelector('#outputList3');
	pokeList3 = data.results;
	console.log(pokeList3);
	// sort our list before output it
	pokeList3 = sortPokemon(pokeList3);
	pokeList3.forEach((currentItem) => {
		const html = `<li>${currentItem.name}</li>`;
		//note the += here
		pokeListElement.innerHTML += html;
	})
	console.log("firstList3: ", pokeList3);
}

console.log("secondList3: ", pokeList3);
fetch(urlList).then(convertToJson).then(doStuffList3);