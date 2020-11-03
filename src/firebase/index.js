import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'
import 'firebase/storage'

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

	doCreateProduct = async ({...product}) => {
		const refProducts = this.firebase.database().ref('products');
		const imageUrlResponse = this.doUploadImageAndGetUrl(product.image);
		
		const createProductAndGetkey = await refProducts.push(product)
		.then(data => data.key);
		
		imageUrlResponse
		.then(imageUrl => {
			if(imageUrl) {
				refProducts.child(createProductAndGetkey).set({
					...product,
					image: imageUrl
				})
			}
		})
	}

	doUploadImageAndGetUrl = async (image) => {
		if(!image) return;

		const storageRef = await firebase.storage().ref(`products/${image.name}`);
		return await storageRef.put(image)
		.then(snapshot => {
			return snapshot.ref.getDownloadURL();
		})
	}


	doLoadProductById = (productKey) => {
		const firebaseDb = this.firebase.database();

		return new Promise(
			function(resolve, reject) {
				firebaseDb.ref('products/'+productKey).once('value')
				.then(response => {
					const product = response.val();

					if(product) {
						return resolve(product)
					} else {
						reject(new Error('Error product info'));
					}
				})
			}
		)
	}

	doLoadProductsFb = () => {
		const firebaseDb = this.firebase.database()

		return new Promise(
			function(resolve, reject) {
				firebaseDb.ref('products')
				.once('value', function(snapshot) {
					const products = snapshot.val();
					const arrayOfProducts = [];

					if(products != null) {
						for(let key in products) {
							arrayOfProducts.push({
								key: key,
								...products[key]
							})
						}

						return resolve(arrayOfProducts);
						
					} else {
						reject([]);
					}
				})
			}
		)
	}


}

const fb = new Firebase();

export default fb;