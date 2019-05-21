function fetchOnLoad(url, type) {
	try {
		if (type.toUpperCase() === "GET") {
			return fetchGet(url);
		} else if (type.toUpperCase() === "GET") {
			return fetchPost(url);
		} else {
			throw new Error("Not a valid type.");
		}
	} catch (error) {
		return error;
	}
}

function fetchGet(url) {
	var options = {
		method: "GET",
	};
	return fetch(url, options);
}

function fetchPost(url) {
	var options = {
		method: "POST",
	};
	return fetch(url, options);
}

var fetchedLoad = fetchOnLoad(
	"http://localhost:5001/jessica-calculator/us-central1/helloWorld",
	"get"
); // run a test load
fetchedLoad
	.then(function(response) {
		console.log(response.body);
		console.log("Front End: " + response);

		if (response.status > 200) {
			throw new Error("BAD RESPONSE");
		}
	})
	.catch(function(error) {
		console.error(error); // error.message
	});
