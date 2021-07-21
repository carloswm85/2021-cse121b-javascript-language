/* EXAMPLE 1 AND 2 */
const apiKey01 = 'S3TVWWW2JK7ASITG';
const apiKey02 = '5JCFFREDQ8M128O7';
const apiKeyCurrent = apiKey02; // Extra keys were required because of 500 API calls limit per day from the AlphaVantage API.
const sampleUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=ARS&apikey=${apiKeyCurrent}`;
const localCurrencyDataList = "data/physical_currency.json";

// Get data frpm the API
async function getData(source) {
	try {
		let res = await fetch(source);
		return await res.json();
	} catch (error) {
		console.log(error);
		let res = await fetch(sampleUrl);
		return await res.json();
	}
}

// Fetch remote data into the select list.
// For "From" and "To" lists.
async function currenciesToList(list) {
	const parentElement_from = document.querySelector('#from_select');
	const parentElement_to = document.querySelector('#to_select');
	let result = await getData(list);
	result.forEach((element) => {
		const option_from = document.createElement("option");
		const option_to = document.createElement("option");
		let name = element.name;
		let code = element.code;
		let code_name = code + " - " + name;
		option_from.text = code_name;
		option_to.text = code_name;
		option_from.value = code;
		option_to.value = code;
		parentElement_from.appendChild(option_from);
		parentElement_to.appendChild(option_to);
	});
}

// Clears any content in the main table, every time is necessary.
const clearDisplay = () => {
	document.getElementById('data-table').innerHTML = '';
}

// Sets the remote data from the currency pairs, into the table.
function retrieveData(dataObject) {

	try {
		const extracted_value = Object.values(dataObject)[0];
	
		const table = document.getElementById("data-table");
		const thead = document.createElement("thead");
		const tr1 = document.createElement("tr");
		const th1 = document.createElement("th");
		const th2 = document.createElement("th");
	
		th1.innerHTML = "Field";
		th2.innerHTML = "Description";
		tr1.appendChild(th1);
		tr1.appendChild(th2);
	
		thead.appendChild(tr1);
		table.appendChild(thead);
	
		const tbody = document.createElement("tbody");
	
		for (const [key, value] of Object.entries(extracted_value)) {
			const tr = document.createElement("tr");
			const td1 = document.createElement("td");
			const td2 = document.createElement("td");
			td1.innerHTML = `${key}`;
			td2.innerHTML = `${value}`;
			tr.appendChild(td1);
			tr.appendChild(td2);
			tbody.appendChild(tr);
		}
	
		table.appendChild(tbody);
	} catch (error) {
		console.log(error);
	}
}

/**
 * - Clears the table
 * - Gets the selections from the list.
 * - Retrieves the data from the remote API, using a new url.
 */
async function displayData() {
	clearDisplay();
	const value_from = document.getElementById("from_select").value;
	const value_to = document.getElementById("to_select").value;

	let urlString = buildUrl(value_from, value_to);

	let object = await getData(urlString);
	retrieveData(object);

	// Buils a new url for getting and fetching the API data.
	function buildUrl(value_from, value_to) {
		const message = document.getElementById("message");
		if (value_from === "no-value" || value_to === "no-value") {
			builtUrl = "This is an error message. <br> Please, select a proper currency pair from the lists, and try again. <br> What you see below is an example table.";
			message.innerHTML = builtUrl;
		} else {
			message.innerHTML = `Exchange rate from ${value_from} to ${value_to}.`;
			builtUrl = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" + `${value_from}` + "&to_currency=" + `${value_to}` + "&apikey=" + `${apiKeyCurrent}`;
		}
		console.log(builtUrl);
		return builtUrl;
	}

}

// Sets the select lists, with the remote data.
currenciesToList(localCurrencyDataList);

// Adds the listener to the only button in the app.
document.querySelector('#button').addEventListener('click', displayData);
