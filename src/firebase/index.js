import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZ-JEfYmnSQSmcKj2g-zIlmeh5CGTiyYg",
    authDomain: "react-catalog-app.firebaseapp.com",
    databaseURL: "https://react-catalog-app.firebaseio.com",
    projectId: "react-catalog-app",
    storageBucket: "react-catalog-app.appspot.com",
    messagingSenderId: "247002031703",
    appId: "1:247002031703:web:46bf91591e3ff7a2cf6512",
    measurementId: "G-17XS3CR9FB"
};
 
class Firebase {
	constructor() {
		firebase.initializeApp(firebaseConfig);
		this.auth = firebase.auth();
	}

	// *** Auth API ***
	doCreateUserWithEmailAndPassword = (email, password) => {
		return this.auth.createUserWithEmailAndPassword(email, password)
	}

	doSignInUserWithEmailAndPassword = (email, password) => {
		return this.auth.signInWithEmailAndPassword(email, password)
	}
}

const fb = new Firebase();

export default fb;