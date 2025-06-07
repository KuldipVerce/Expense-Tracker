import * as firebase from "firebase";
require("dotenv").config();

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// }

export const firebaseConfig = {
	apiKey: "AIzaSyDT5__YGy6kzj7mz1DYoH1zi1Fxs0Dh4Qc",
	authDomain: "expense-tracker-c3880.firebaseapp.com",
	projectId: "expense-tracker-c3880",
	storageBucket: "expense-tracker-c3880.firebasestorage.app",
	messagingSenderId: "1013124492851",
	appId: "1:1013124492851:web:ee506c7544423920d7bd46",
	measurementId: "G-N3YZ804L0G",
	databaseURL: "https://expense-tracker-c3880-default-rtdb.firebaseio.com",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export default firebase;
