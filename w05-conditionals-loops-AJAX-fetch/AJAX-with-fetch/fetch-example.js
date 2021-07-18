// Explanation: https://byui-cse.github.io/cse121b-course/week05/3-fetch.html
// Pokemon API: https://pokeapi.co/

// case 01
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const results = fetch(url);
console.log(results);
// fetch does not return usable data initially. Instead we have to tell it what we were expecting...and ask it to convert the response into the right kind of data. The three types it understands are json(), text() (HTML and XML would be considered text), and blob() (blob is anything that isn't text or json). We are expecting JSON back from the api we made the request to. So we should convert it to that.


// Using promises
/*

  promise.then(onFulfilled[, onRejected]);

  promise.then(value => {
  	// fulfillment
  }, reason => {
  	// rejection
  });

*/

