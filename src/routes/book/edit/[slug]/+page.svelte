<script>
	import { page } from '$app/stores';
	import BookForm from '$lib/components/BookForm.svelte';
	import BooksStore from '$lib/stores/BooksStore';
	let book;
	const id = $page.params.slug;
	BooksStore.subscribe((data) => {
		book = data.filter((item) => item.id == id)[0];
	});
</script>

<svelte:head>
	<title>MyBooks | Book</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center shadow-xl shadow-black justify-center flex-col gap-6 w-11/12 my-6">
	<BookForm newBook={false} {id} currentBook={book} />
</div>
