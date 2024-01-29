<script>
	import { page } from '$app/stores';
	import AuthorForm from '$lib/components/AuthorForm.svelte';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	let author;
	const id = $page.params.slug;
	AuthorsStore.subscribe((data) => {
		author = data.filter((item) => item.id == id)[0];
	});
</script>

<svelte:head>
	<title>MyBooks | Author</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center shadow-xl shadow-black justify-center flex-col gap-6 w-11/12 my-6">
	<AuthorForm newAuthor={false} {id} currentAuthor={author} />
</div>
