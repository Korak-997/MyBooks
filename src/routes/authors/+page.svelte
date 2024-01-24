<script>
	import AuthorsStore from '$lib/stores/AuthorsStore';
	import Author from '$lib/components/Author.svelte';
	import Icon from '@iconify/svelte';
	let authors;
	AuthorsStore.subscribe((data) => {
		authors = data;
	});
</script>

<svelte:head>
	<title>MyBooks | Authors</title>
	<meta name="description" content="A personal Library" />
</svelte:head>

<div class="flex items-center justify-around gap-6 flex-col w-11/12">
	<div class="flex w-11/12 shadow-xl shadow-black items-center justify-around flex-wrap">
		<h2 class="text-secondary font-extrabold text-2xl">Authors</h2>
		<a href={'/author/new/'} class="btn btn-success btn-sm"
			><Icon icon="ic:baseline-plus" class="text-2xl" /></a
		>
	</div>
	<div class="flex items-center justify-around gap-6 w-11/12 p-4 flex-wrap">
		{#each authors as author}
			<Author author={author.data} />
		{/each}
	</div>
</div>
