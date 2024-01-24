<script>
	import { page } from '$app/stores';
	const id = $page.params.slug;
	import BookForm from '$lib/components/BookForm.svelte';
</script>

<svelte:head>
	<title>MyBooks | Book</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center shadow-xl shadow-black justify-center flex-col gap-6 w-11/12 my-6">
	<BookForm newBook={true} id={false} />
</div>
