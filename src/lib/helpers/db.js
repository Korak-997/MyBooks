// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore, getDocs } from 'firebase/firestore';
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

export const addBookToCloud = async (book) => {
	try {
		const docRef = await addDoc(collection(db, 'books'), book);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const addAuthorToCloud = async (author) => {
	try {
		const docRef = await addDoc(collection(db, 'authors'), author);
		console.log('Document written with ID: ', docRef.id);
		return { succeed: true };
	} catch (e) {
		console.error('Error adding document: ', e);
		return { succeed: false, error: e };
	}
};

export const getBooksFromCloud = async () => {
	const books = [];
	try {
		const querySnapshot = await getDocs(collection(db, 'books'));
		querySnapshot.forEach((doc) => {
			books.push({ id: doc.id, data: doc.data() });
		});
		return books;
	} catch (e) {
		console.error('Error getting books: ', e);
	}
};

export const getAuthorsFromCloud = async () => {
	const authors = [];
	try {
		const querySnapshot = await getDocs(collection(db, 'authors'));
		querySnapshot.forEach((doc) => {
			authors.push({ id: doc.id, data: doc.data() });
		});
		return authors;
	} catch (e) {
		console.error('Error getting authors: ', e);
	}
};
