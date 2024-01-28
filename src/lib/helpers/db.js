import { Client, Databases, ID } from 'appwrite';

const client = new Client()
	.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
	.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

//author methods

export const addAuthorToCloud = async (author) => {
	try {
		await databases.createDocument('my-books', 'authors', ID.unique(), author);
		return { succeed: true };
	} catch (error) {
		return { succeed: false, error: error };
	}
};

export const updateAuthorInCloud = async (item, id) => {
	try {
		await databases.updateDocument('my-books', 'authors', id, item);
		return { succeed: true };
	} catch (error) {
		return { succeed: false, error: error };
	}
};

export const getAuthorsFromCloud = async () => {
	try {
		const response = await databases.listDocuments('my-books', 'authors');
		if (response.total > 0) {
			return [...response.documents];
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error getting authors: ', error);
	}
};

export const deleteAuthorInCloud = async (id) => {
	try {
		databases.deleteDocument('my-books', 'authors', id);
	} catch (error) {
		console.error('Error getting authors: ', error);
	}
};

//book methods

export const getBooksFromCloud = async () => {
	try {
		const response = await databases.listDocuments('my-books', 'books');
		if (response.total > 0) {
			return [...response.documents];
		} else {
			return [];
		}
	} catch (error) {
		console.error('Error getting books: ', error);
	}
};
export const updateBookInCloud = async (item, id) => {
	try {
		await databases.updateDocument('my-books', 'books', id, item);
		return { succeed: true };
	} catch (error) {
		return { succeed: false, error: error };
	}
};
export const addBookToCloud = async (book) => {
	try {
		await databases.createDocument('my-books', 'books', ID.unique(), book);
		return { succeed: true };
	} catch (e) {
		console.error('Error adding document: ', e);
		return { succeed: false, error: e };
	}
};

export const deleteBookInCloud = async (id) => {
	try {
		databases.deleteDocument('my-books', 'books', id);
	} catch (e) {
		console.error('Error deleting book: ', e);
	}
};
