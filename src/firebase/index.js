import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'
import actions from '../redux/actions';

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
		this.firebase = firebase;
	}

	// *** Auth API ***
	doCreateUserWithEmailAndPassword = (email, password) => {
		return this.auth.createUserWithEmailAndPassword(email, password)
	}

	doSignInUserWithEmailAndPassword = (email, password) => {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	doCreateProduct = (...product) => {
		const productRef = this.firebase.database().ref('products');
		productRef.push(...product)
		.then(data => {
			return data.key;
		})
	}

	doLoadProductsFb = () => {
		const firebaseDb = this.firebase.database()

		return new Promise(
			function(resolve, reject) {
				firebaseDb.ref('products')
				.on('value', function(snapshot) {
					if(snapshot) {
						return resolve(Object.values(snapshot.val()))
					} else {
						reject(new Error('Error data'));
					}
				})
			}
		)
	}
}

const fb = new Firebase();

export default fb;