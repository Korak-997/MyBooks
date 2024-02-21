import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

//author methods

export const getAuthorsFromCloud = async () => {
	const { data: authors, error } = await supabase
		.from('my-books-demo-authors')
		.select('*')
		.order('created_at', { ascending: false });
	return error || authors == null ? { status: false, msg: error } : authors;
};
export const addAuthorToCloud = async (author) => {
	const { error } = await supabase.from('my-books-demo-authors').insert([author]);
	return error ? { status: false, msg: error } : { status: true };
};

export const updateAuthorInCloud = async (author, id) => {
	const { data, error } = await supabase
		.from('my-books-demo-authors')
		.update(author)
		.eq('id', id)
		.select();
	return error ? { status: false, msg: error } : { status: true, data };
};

export const deleteAuthorInCloud = async (id) => {
	const { error } = await supabase.from('my-books-demo-authors').delete().eq('id', id);
	return error ? { status: false, msg: error } : { status: true };
};

//book methods

export const getFinishedBooks = async () => {
	let { data: finished, error } = await supabase
		.from('my-books-demo-books')
		.select('*')
		// Filters
		.neq('finished', null);
	return error ? false : finished.length;
};
export const getStartedBooks = async () => {
	let { data: started, error } = await supabase
		.from('my-books-demo-books')
		.select('*')
		.neq('started', null);
	return error ? false : started.length;
};

export const getBooksFromCloud = async () => {
	const { data: books, error } = await supabase
		.from('my-books-demo-books')
		.select('*')
		.order('created_at', { ascending: false });
	return error || books == null ? { status: false, msg: error } : books;
};
export const updateBookInCloud = async (book, id) => {
	const { data, error } = await supabase
		.from('my-books-demo-books')
		.update(book)
		.eq('id', id)
		.select();
	return error ? { status: false, msg: error } : { status: true, data };
};
export const addBookToCloud = async (book) => {
	const { error } = await supabase.from('my-books-demo-books').insert([book]);
	return error ? { status: false, msg: error } : { status: true };
};

export const deleteBookInCloud = async (id) => {
	const { error } = await supabase.from('my-books-demo-books').delete().eq('id', id);
	return error ? { status: false, msg: error } : { status: true };
};
