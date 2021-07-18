// reusable!
const foodsElement = document.querySelector('#favorite-foods');
const placesElement = document.querySelector('#places-lived');

function generateListMarkup(list, templateCallback) {
	const htmlList = list.map(templateCallback);
	return htmlList.join('');
}

function foodsTemplate(food) {
	return `<li>${food}</li>`;
}

function placesTemplate(place) {
	return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodsTemplate);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placesTemplate);

// https://byui-cse.github.io/cse121b-course/week05/2-loops.html