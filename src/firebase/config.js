// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBQWz6vyuWWfWiU9WeeuS71EHGTmrFHobE",
	authDomain: "whattocodeapp.firebaseapp.com",
	projectId: "whattocodeapp",
	storageBucket: "whattocodeapp.appspot.com",
	messagingSenderId: "676116299439",
	appId: "1:676116299439:web:b941024450a15d354f5e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
