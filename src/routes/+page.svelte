<script>
	import BooksStore from '$lib/stores/BooksStore';
	import Book from '../lib/components/Book.svelte';
	import Icon from '@iconify/svelte';
	import NoData from '$lib/images/NoData.svg';

	let showStats = false;
	let books;
	BooksStore.subscribe((data) => {
		books = data;
	});
	const booksData = books.map((book) => book.data) || false;
	const startedBooks = booksData.filter((book) => book.started).length || false;
	const finishedBooks = booksData.filter((book) => book.finished).length || false;
	const remainedBooks = booksData.filter((book) => !book.finished).length || false;
</script>

<svelte:head>
	<title>MyBooks | Books</title>
	<meta name="description" content="A personal Library" />
</svelte:head>

<div class="flex items-center justify-around gap-6 flex-col w-11/12">
	<div class="flex w-11/12 shadow-xl shadow-black items-center justify-around flex-wrap">
		<h2 class="text-secondary font-extrabold text-2xl">Books</h2>
		<a href={'/book/new/'} class="btn btn-success btn-sm"
			><Icon icon="ic:baseline-plus" class="text-2xl" /></a
		>
	</div>
	{#if books.length > 0}
		<div class="collapse shadow-xl shadow-black w-full">
			<input type="checkbox" bind:checked={showStats} />
			<div
				class="collapse-title text-2xl font-medium flex justify-around items-center w-full text-primary"
			>
				{#if !showStats}<Icon icon="mingcute:down-fill" class="text-2xl" /> Stats <Icon
						icon="mingcute:down-fill"
						class="text-2xl"
					/>
				{:else}
					<Icon icon="mingcute:up-fill" class="text-2xl" /> Stats <Icon
						icon="mingcute:up-fill"
						class="text-2xl"
					/>
				{/if}
			</div>
			<div class="stats flex w-full items-center justify-around flex-wrap">
				<div class="stat place-items-center">
					<div class="stat-title">All Books</div>
					<div class="stat-value">{books.length}</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-title">Started</div>
					<div class="stat-value">{startedBooks}</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-title">Finished</div>
					<div class="stat-value">{finishedBooks}</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-title">Remained</div>
					<div class="stat-value">{remainedBooks}</div>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-around gap-6 w-11/12 p-4 flex-wrap">
			{#each books as book}
				<Book {book} />
			{/each}
		</div>
	{:else}
		<div class="w-11/12 shadow-xl shadow-black">
			<img class="w-full" src={NoData} alt="No data" />
		</div>
	{/if}
</div>
