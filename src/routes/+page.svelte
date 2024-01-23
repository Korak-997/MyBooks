<script>
	import BooksStore from '../stores/Store';
	import dummyCover from '$lib/images/dummy-cover.png';
	let books;
	import Icon from '@iconify/svelte';
	BooksStore.subscribe((data) => {
		books = data;
	});
</script>

<svelte:head>
	<title>MyBooks | Books</title>
	<meta name="description" content="A personal Library" />
</svelte:head>

<div class="flex items-center justify-around gap-6 w-11/12 p-4 flex-wrap">
	{#each books as book}
		<div class="card w-96 bg-base-100 shadow-xl shadow-black">
			<figure class="px-10 pt-10">
				<img src={book.cover || dummyCover} alt="Shoes" class="rounded-xl" />
			</figure>
			<div class="card-body items-center text-center">
				<h2 class="card-title text-2xl text-primary">{book.title}</h2>
				<h3 class="card-title text-xl text-secondary">By: {book.author}</h3>
				<div class="w-11/12">
					<p>{book.description.substring(0, 100) + ' ...'}</p>
				</div>
				<div class="card-actions">
					<a href={'/book/' + book.id} class="btn btn-info"
						><Icon icon="mdi:show" class="text-4xl" /></a
					>
					<button class="btn btn-warning"><Icon icon="tabler:edit" class="text-4xl" /></button>
				</div>
			</div>
		</div>
	{/each}
</div>
