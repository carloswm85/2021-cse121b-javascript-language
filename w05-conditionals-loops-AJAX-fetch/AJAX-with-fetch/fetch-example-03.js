// Explanation: https://byui-cse.github.io/cse121b-course/week05/3-fetch.html
// Pokemon API: https://pokeapi.co/

// case 03
const url03 = 'https://pokeapi.co/api/v2/pokemon/ditto';
let results03 = null;
fetch(url03)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error:", response);
    }
  })
  .then((data) => {
    results03 = data;
    console.log("first: ", results03);
  });
console.log('second: ', results03);

// In english I would read that code as: "Make a request to the URL, when it finishes THEN take the response, convert it to JSON and return it; when that finishes THEN set the results variable equal to the JSON data, and log results out".

// Using promises
/*

  promise.then(onFulfilled[, onRejected]);

  promise.then(value => {
  	// fulfillment
  }, reason => {
  	// rejection
  });

*/

