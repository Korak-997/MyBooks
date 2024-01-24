<script>
	import { page } from '$app/stores';
	const id = $page.params.slug;
	import BookForm from '$lib/components/BookForm.svelte';
	import BooksStore from '$lib/stores/BooksStore';
	let currentBook;
	BooksStore.subscribe((data) => {
		currentBook = data.filter((book) => book.id == id)[0];
	});
</script>

<svelte:head>
	<title>MyBooks | Book</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center shadow-xl shadow-black justify-center flex-col gap-6 w-11/12 my-6">
	<BookForm newBook={false} currentBook={currentBook.data} id={currentBook.id} />
</div>
