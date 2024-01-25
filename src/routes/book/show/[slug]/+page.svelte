<script>
	import { page } from '$app/stores';
	import BooksStore from '$lib/stores/BooksStore';
	import dummyCover from '$lib/images/dummy-cover.png';
	let book;
	import { deleteBookInCloud } from '$lib/helpers/db';
	import Icon from '@iconify/svelte';
	BooksStore.subscribe((data) => {
		book = data.filter((item) => item.$id == $page.params.slug)[0];
	});
	const handleDelete = () => {
		if (window.confirm('You really want to delete this book?')) {
			deleteBookInCloud(book.$id);
			location.href = '/';
		}
	};
	let language = book.language.toLowerCase();
</script>

<svelte:head>
	<title>MyBooks | Book</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center justify-center flex-col gap-6 w-11/12">
	<h1
		class:font-kurdish={language == 'kurdish'}
		class="text-2xl w-full text-center my-4 font-extrabold text-primary shadow-xl shadow-black"
	>
		{book.title}
	</h1>
	<img src={book.cover || dummyCover} alt={book.title + 'cover'} class="w-80 h-96" />
	<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
		{#if book.pages}
			<div class="flex w-48 items-center justify-between">
				<Icon icon="system-uicons:pages" class="text-2xl" />
				<p class="text-xl">{book.pages}</p>
			</div>
		{/if}
		{#if book.language}
			<div class="flex w-48 items-center justify-between">
				<Icon icon="ion:language-sharp" class="text-2xl" />
				<p class="text-xl">{book.language}</p>
			</div>
		{/if}
	</div>
	{#if book.genres}
		<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
			{#each book.genres.split(',') as genre}
				<p class="bg-primary p-2 m-1 text-black rounded-full shadow-xl shadow-black">{genre}</p>
			{/each}
		</div>
	{/if}
	<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
		<button on:click={handleDelete} class="btn btn-error"
			><Icon icon="mdi:delete-outline" class="text-2xl" /></button
		>
	</div>
	{#if book.description}
		<div class="shadow-xl shadow-black p-6 w-11/12 text-left">
			<p class:font-kurdish={language == 'kurdish'} class="text-xl">{book.description}</p>
		</div>
	{/if}
</div>
