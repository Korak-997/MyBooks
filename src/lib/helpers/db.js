// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_apiKey,
	authDomain: import.meta.env.VITE_authDomain,
	projectId: import.meta.env.VITE_projectId,
	storageBucket: import.meta.env.VITE_storageBucket,
	messagingSenderId: import.meta.env.VITE_messagingSenderId,
	appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getAuthorsFromCloud = () => {
	db.collection('authors')
		.get()
		.then((querySnapshot) => {
			return querySnapshot;
		});
};

export const getBooksFromCloud = () => {
	db.collection('books')
		.get()
		.then((querySnapshot) => {
			return querySnapshot;
		});
};

export const addBookToCloud = (book) => {
	db.collection('books')
		.add(book)
		.then((docRef) => {
			console.log('Document written with ID: ', docRef.id);
		})
		.catch((error) => {
			console.error('Error adding document: ', error);
		});
};

export const addAuthorToCloud = async (author) => {
	try {
		const docRef = await addDoc(collection(db, 'authors'), author);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};
