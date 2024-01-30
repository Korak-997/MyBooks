<script>
	import Fuse from 'fuse.js';
	import BooksStore from '$lib/stores/BooksStore';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	export let item;
	export let list;
	const options = {
		includeScore: false,
		keys: item == 'books' ? ['title'] : ['name']
	};
	let searchText = '';
	const search = () => {
		const fuse = new Fuse(list, options);
		if (item == 'books') {
			let authors = '';
			AuthorsStore.subscribe((data) => {
				authors = data;
			});
			BooksStore.update(() =>
				fuse
					.search(searchText)
					.map((result) => result.item)
					.map(
						(book) =>
							(book = {
								author: authors.filter((author) => author.id == book.authorId)[0],
								...book
							})
					)
			);
		} else {
			AuthorsStore.update(() => fuse.search(searchText).map((result) => result.item));
		}
	};
	const clearSearch = () => {
		location.reload();
	};
</script>

<div class="join m-4">
	<input
		type="text"
		name="search"
		id="search"
		bind:value={searchText}
		on:input={search}
		class="input input-secondary input-sm join-item"
		placeholder={item == 'books' ? 'Search with Book title' : 'Search with Author name'}
	/>
	<button on:click={clearSearch} class="btn btn-accent join-item btn-sm rounded-r-full"
		>Clear</button
	>
</div>
