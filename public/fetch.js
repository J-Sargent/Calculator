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
	fetch(url, options);
}

function fetchPost(url) {
	var options = {
		method: "POST",
	};
	fetch(url, options);
}

fetchOnLoad(
	"http://localhost:5001/jessica-calculator/us-central1/helloWorld",
	"get"
); // run a test load
