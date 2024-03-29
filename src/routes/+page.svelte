<script>
	import BooksStore from '$lib/stores/BooksStore';
	import Book from '../lib/components/Book.svelte';
	import Icon from '@iconify/svelte';
	import NoData from '$lib/images/NoData.svg';
	import Search from '$lib/components/Search.svelte';
	import { getFinishedBooks, getStartedBooks } from '$lib/helpers/db';
	import { onMount } from 'svelte';
	let showStats = false;
	let books;
	BooksStore.subscribe((data) => {
		books = data;
	});
	let startedBooks;
	let finishedBooks;
	onMount(async () => {
		startedBooks = (await getStartedBooks()) || 0;
		finishedBooks = (await getFinishedBooks()) || 0;
	});
	let showFilter = false;
	let filters = {
		onlyFinished: false,
		onlyStarted: false,
		onlyUnknownAuthor: false
	};
	const resetFilters = () => {
		BooksStore.subscribe((data) => {
			books = data;
		});
	};
	const showOnlyFinished = () => {
		filters.onlyFinished ? (books = books.filter((book) => book.finished != null)) : resetFilters();
	};
	const showOnlyUnknownAuthor = () => {
		filters.onlyUnknownAuthor
			? (books = books.filter((book) => book.author.name == 'Unknown'))
			: resetFilters();
	};
	const showOnlyStarted = () => {
		filters.onlyStarted
			? (books = books.filter((book) => book.started != null && book.finished == null))
			: resetFilters();
	};
</script>

<svelte:head>
	<title>MyBooks | Books</title>
	<meta name="description" content="A personal Library" />
</svelte:head>

<div class="flex items-center justify-around gap-6 flex-col w-11/12">
	<div
		class="flex w-11/12 shadow-xl shadow-black items-center justify-around flex-wrap p-4 rounded-xl"
	>
		<h2 class="text-secondary font-extrabold text-2xl">Books</h2>
		<Search item={'books'} list={books} />
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
			<div class="stats stats-vertical lg:stats-horizontal md:stats-horizontal">
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
					<div class="stat-value">{books.length - finishedBooks}</div>
				</div>
			</div>
		</div>
		<div class="collapse shadow-xl shadow-black w-full">
			<input type="checkbox" bind:checked={showFilter} />
			<div
				class="collapse-title text-2xl font-medium flex justify-around items-center w-full text-primary"
			>
				{#if !showFilter}<Icon icon="mingcute:down-fill" class="text-2xl" /> Filters <Icon
						icon="mingcute:down-fill"
						class="text-2xl"
					/>
				{:else}
					<Icon icon="mingcute:up-fill" class="text-2xl" /> Filters <Icon
						icon="mingcute:up-fill"
						class="text-2xl"
					/>
				{/if}
			</div>
			<div class="stats stats-vertical lg:stats-horizontal md:stats-horizontal">
				<div class="stat place-items-center">
					<div class="stat-value">
						<div class="form-control w-52">
							<label class="cursor-pointer label">
								<span class="label-text">Finished</span>
								<input
									type="checkbox"
									class="toggle toggle-primary"
									bind:checked={filters.onlyFinished}
									on:change={showOnlyFinished}
								/>
							</label>
						</div>
					</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-value">
						<div class="form-control w-52">
							<label class="cursor-pointer label">
								<span class="label-text">Started</span>
								<input
									type="checkbox"
									class="toggle toggle-primary"
									bind:checked={filters.onlyStarted}
									on:change={showOnlyStarted}
								/>
							</label>
						</div>
					</div>
				</div>
				<div class="stat place-items-center">
					<div class="stat-value">
						<div class="form-control w-52">
							<label class="cursor-pointer label">
								<span class="label-text">Unknown Author</span>
								<input
									type="checkbox"
									class="toggle toggle-primary"
									bind:checked={filters.onlyUnknownAuthor}
									on:change={showOnlyUnknownAuthor}
								/>
							</label>
						</div>
					</div>
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
