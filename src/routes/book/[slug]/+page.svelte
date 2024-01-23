<script>
	import { page } from '$app/stores';
	import BooksStore from '../../../stores/Store';
	import dummyCover from '$lib/images/dummy-cover.png';
	let book;
	import Icon from '@iconify/svelte';
	BooksStore.subscribe((data) => {
		book = data.filter((item) => item.id == $page.params.slug)[0];
	});
</script>

<svelte:head>
	<title>MyBooks | Book</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center justify-center flex-col gap-6 w-11/12">
	<h1 class="text-2xl w-full text-center my-4 font-extrabold text-primary shadow-xl shadow-black">
		{book.title}
	</h1>
	<img src={book.cover || dummyCover} alt={book.title + 'cover'} class="w-2/3" />
	<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
		<div class="flex w-48 items-center justify-between">
			<Icon icon="fluent-emoji-high-contrast:id-button" class="text-2xl" />
			<p class="text-xl">{book.id}</p>
		</div>
		<div class="flex w-48 items-center justify-between">
			<Icon icon="system-uicons:pages" class="text-2xl" />
			<p class="text-xl">{book.pages}</p>
		</div>

		<div class="flex w-48 items-center justify-between">
			<Icon icon="ion:language-sharp" class="text-2xl" />
			<p class="text-xl">{book.language}</p>
		</div>
	</div>
	<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
		<button class="btn btn-error"><Icon icon="mdi:delete-outline" class="text-2xl" /></button>
		<button class="btn btn-warning"><Icon icon="tabler:edit" class="text-2xl" /></button>
	</div>
	<div class="shadow-xl shadow-black p-4 w-11/12 text-left">
		<p class="text-xl">{book.description}</p>
	</div>
</div>
