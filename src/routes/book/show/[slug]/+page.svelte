<script>
	import { page } from '$app/stores';
	import BooksStore from '$lib/stores/BooksStore';
	import dummyCover from '$lib/images/dummy-cover.png';
	let book;
	import BookEditStore from '$lib/stores/BookEditStore';
	import { deleteBookInCloud } from '$lib/helpers/db';
	import Icon from '@iconify/svelte';
	import EditBookItem from '$lib/components/EditBookItem.svelte';
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
	let showSuccess = false;
	let showEditModal = false;

	const handleEdit = (item) => {
		BookEditStore.update(() => {
			return { edit: item };
		});
		showEditModal = true;
	};
	const handleSuccess = () => {
		showEditModal = false;
		showSuccess = true;
		setTimeout(() => (showSuccess = false), 1500);
	};
</script>

<svelte:head>
	<title>MyBooks | Book</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
{#if showSuccess}
	<div class="toast toast-top toast-center">
		<div class="alert alert-success">
			<span>Book updated Successfully.</span>
		</div>
	</div>
{/if}
<input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={showEditModal} />
<div class="modal" role="dialog">
	<div class="modal-box">
		<EditBookItem bookId={book.$id} on:success={handleSuccess} />
		<div class="modal-action">
			<label for="my_modal_6" class="btn btn-error btn-sm"
				><Icon icon="material-symbols:close" class="text-2xl" /></label
			>
		</div>
	</div>
</div>
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
		{:else}
			<div class="flex items-center justify-between w-11/12 shadow-xl shadow-black p-4">
				<h3>Pages:</h3>
				<button class="btn btn-sm btn-warning btn-circle" on:click={() => handleEdit('pages')}
					><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
				>
			</div>
		{/if}
		{#if book.language}
			<div class="flex w-48 items-center justify-between">
				<Icon icon="ion:language-sharp" class="text-2xl" />
				<p class="text-xl">{book.language}</p>
			</div>
		{:else}
			<div class="flex items-center justify-between w-11/12 shadow-xl shadow-black p-4">
				<h3>Languages:</h3>
				<button class="btn btn-sm btn-warning btn-circle" on:click={() => handleEdit('languages')}
					><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
				>
			</div>
		{/if}
		{#if book.started}
			<div class="flex w-48 items-center justify-between">
				Started:
				<p class="text-xl">{book.started}</p>
			</div>
		{:else}
			<div class="flex items-center justify-between w-11/12 shadow-xl shadow-black p-4">
				<h3>Started:</h3>
				<button class="btn btn-sm btn-warning btn-circle" on:click={() => handleEdit('started')}
					><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
				>
			</div>
		{/if}
		{#if book.finished}
			<div class="flex w-48 items-center justify-between">
				Finished:
				<p class="text-xl">{book.finished}</p>
			</div>
		{:else}
			<div class="flex items-center justify-between w-11/12 shadow-xl shadow-black p-4">
				<h3>Finished:</h3>
				<button class="btn btn-sm btn-warning btn-circle" on:click={() => handleEdit('finished')}
					><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
				>
			</div>
		{/if}
	</div>
	{#if book.genres}
		<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
			{#each book.genres.split(',') as genre}
				<p class="bg-primary p-2 m-1 text-black rounded-full shadow-xl shadow-black">{genre}</p>
			{/each}
		</div>
	{:else}
		<div class="flex items-center justify-between w-11/12 shadow-xl shadow-black p-4">
			<h3>Genres:</h3>
			<button class="btn btn-sm btn-warning btn-circle" on:click={() => handleEdit('genres')}
				><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
			>
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
	{:else}
		<div class="flex items-center justify-between w-11/12 shadow-xl shadow-black p-4">
			<h3>Description:</h3>
			<button class="btn btn-sm btn-warning btn-circle" on:click={() => handleEdit('description')}
				><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
			>
		</div>
	{/if}
</div>
