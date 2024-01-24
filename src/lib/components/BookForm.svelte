<script>
	export let newBook;
	export let id;
	import BooksStore from '$lib/stores/BooksStore';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	import { addBookToCloud } from '$lib/helpers/db';
	let book;
	import Icon from '@iconify/svelte';
	const getDataFromStore = (id) => {
		BooksStore.subscribe((data) => {
			return data.filter((item) => item.id == id)[0];
		});
	};

	let authors;
	AuthorsStore.subscribe((data) => {
		authors = data;
	});
	let showSuccess = false;
	const handleImageUpload = (e) => {
		// Scale down image on image upload
		//Convert to base64 String on image upload
		const reader = new FileReader();
		reader.onload = function (e) {
			const img = new Image();
			img.src = e.target.result;
			//scales down image to be
			// 250px X 250px
			img.onload = function () {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				canvas.width = 250;
				canvas.height = 250;
				ctx.drawImage(img, 0, 0, 250, 250);
				const resizedBase64 = canvas.toDataURL('image/png');
				//author_image source to base64 string
				//so author_image be saved in database
				book.cover = resizedBase64;
			};
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	book = newBook
		? {
				title: '',
				author_id: '',
				language: '',
				genres: '',
				tags: '',
				started: '',
				finished: '',
				cover: '',
				description: '',
				pages: ''
			}
		: getDataFromStore(id);
	const saveBook = () => addBookToCloud(book);
</script>

<div class="join">
	<label for="title" class="btn join-item rounded-l-full">Title</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.title}
		type="text"
		name="title"
		id="title"
	/>
</div>
<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">Pick Author</span>
	</div>
	<select bind:value={book.author_id} class="select select-bordered">
		<option disabled selected></option>
		{#each authors as author}
			<option value={author.id}>{author.data.name}</option>
		{/each}
	</select>
	<div class="label">
		<span class="label-text-alt text-secondary"
			>If needed Author is not available then <a href="author/new">add new author</a></span
		>
	</div>
</label>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text" for="cover">Add Cover</span>
	</div>
	<input
		type="file"
		class="file-input file-input-bordered w-full max-w-xs"
		name="cover"
		id="cover"
		on:change={handleImageUpload}
	/>
</label>
<div class="join">
	<label for="pages" class="btn join-item rounded-l-full">Pages</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.pages}
		type="number"
		name="pages"
		id="pages"
	/>
</div>
<div class="join">
	<label for="language" class="btn join-item rounded-l-full">Language</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.language}
		type="text"
		name="language"
		id="language"
	/>
</div>
<textarea
	placeholder="Description"
	class="textarea textarea-bordered textarea-lg w-full max-w-xs"
	name="description"
	id="description">{book.description}</textarea
>

<div class="join">
	<label for="genres" class="btn join-item rounded-l-full">Genres</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.genres}
		type="text"
		name="genres"
		id="genres"
	/>
</div>
<div class="join">
	<label for="tags" class="btn join-item rounded-l-full">Tags</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.tags}
		type="text"
		name="tags"
		id="tags"
	/>
</div>
<div class="join">
	<label for="started" class="btn join-item rounded-l-full">Started</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.started}
		type="date"
		name="started"
		id="started"
	/>
</div>
<div class="join">
	<label for="finished" class="btn join-item rounded-l-full">Finished</label>
	<input
		class="input input-bordered join-item"
		bind:value={book.finished}
		type="date"
		name="finished"
		id="finished"
	/>
</div>

<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
	<button class="btn btn-error"><Icon icon="iconoir:cancel" class="text-2xl" /></button>
	<button on:click={saveBook} class="btn btn-success"
		><Icon icon="material-symbols:save-outline" class="text-2xl" /></button
	>
</div>
