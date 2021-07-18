// Explanation: https://byui-cse.github.io/cse121b-course/week05/3-fetch.html
// Pokemon API: https://pokeapi.co/

// Using promises
/*

  promise.then(onFulfilled[, onRejected]);

  promise.then(value => {
  	// fulfillment
  }, reason => {
  	// rejection
  });

*/

// case 02
const url02 = "https://pokeapi.co/api/v2/pokemon/ditto";
let results02 = null;
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
	if (response.ok) {
		return response.json();
	} else {
		console.log("error:", response);
	}
}
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
	results02 = data;
	console.log("first: ", results02);
}

// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff
fetch(url02).then(convertToJson).then(doStuff);
// meanwhile...continue with the rest of the program...
console.log("second: ", results02);

//Note that the second console.log ran first...then the first one. Remember that in async programming Javascript does not wait for everything to finish before moving on. If we had tried to use results immediately it would have failed. Instead we do whatever we need to do with results in the callback that gets called by .then().