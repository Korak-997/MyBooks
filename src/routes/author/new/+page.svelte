<script>
	import { page } from '$app/stores';
	const id = $page.params.slug;
	import AuthorForm from '$lib/components/AuthorForm.svelte';
</script>

<svelte:head>
	<title>MyBooks | Author</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center shadow-xl shadow-black justify-center flex-col gap-6 w-11/12 my-6">
	<AuthorForm newAuthor={true} id={false} />
</div>
