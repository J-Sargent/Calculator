const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("../jessica-calculator-firebase-adminsdk-lheer-388a33efcf.json");
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://jessica-calculator.firebaseio.com",
});
const db = admin.database();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
	console.log("Back end: helloWorld");
	res.send("Hello from Firebase!");
});

// POST
// body: { item: calculatorResult }
exports.addHistoryItem = functions.https.onRequest((req, res) => {
	console.log("addHistoryItem");
	const body = JSON.parse(req.body);
	const { item } = body;
	db.ref("history")
		.push(data)
		.then(() =>
			res
				.status(200)
				.send({ status: "New history item was pushed to Firebase." })
		)
		.catch(error => res.status(400).send({ status: error.message }));
});

exports.resetHistory = functions.https.onRequest((req, res) => {
	console.log("resetHistory");
	db.ref("history")
		.set({})
		.then(() => res.status(200).send({ message: "History reset." }))
		.catch(error => res.status(400).send({ status: error.message }));
});
