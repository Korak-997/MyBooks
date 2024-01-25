<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import BooksStore from '$lib/stores/BooksStore';
	import AuthorsStore from '$lib/stores/AuthorsStore';

	import { getAuthorsFromCloud, getBooksFromCloud } from '$lib/helpers/db';
	import { onMount } from 'svelte';

	onMount(async () => {
		const authors = await getAuthorsFromCloud();
		AuthorsStore.update(() => authors);
		const books = await getBooksFromCloud();
		BooksStore.update(() =>
			books.map(
				(book) =>
					(book = { author: authors.filter((author) => author.$id == book.authorId)[0], ...book })
			)
		);
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
