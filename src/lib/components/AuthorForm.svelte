<script>
	export let newAuthor;
	export let id;
	import AuthorsStore from '$lib/stores/AuthorsStore';

	let author;
	import Icon from '@iconify/svelte';
	const getDataFromStore = (id) => {
		AuthorsStore.subscribe((data) => {
			return data.filter((item) => item.id == id)[0];
		});
	};

	author = newAuthor
		? {
				name: '',
				born: '',
				died: '',
				birth_place: '',
				image: ''
			}
		: getDataFromStore(id);
</script>

<div class="join">
	<label for="name" class="btn join-item rounded-l-full">Name</label>
	<input
		class="input input-bordered join-item"
		value={author.name}
		type="text"
		name="name"
		id="name"
	/>
</div>
<div class="join">
	<label for="born" class="btn join-item rounded-l-full">Born</label>
	<input
		class="input input-bordered join-item"
		value={author.born}
		type="text"
		name="born"
		id="born"
	/>
</div>
<div class="join">
	<label for="birth_place" class="btn join-item rounded-l-full">Birth Place</label>
	<input
		class="input input-bordered join-item"
		value={author.language}
		type="text"
		name="birth_place"
		id="birth_place"
	/>
</div>
<div class="join">
	<label for="died" class="btn join-item rounded-l-full">Died</label>
	<input
		class="input input-bordered join-item"
		value={author.died}
		type="text"
		name="died"
		id="died"
	/>
</div>
<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text" for="cover">Add Image</span>
	</div>
	<input
		type="file"
		class="file-input file-input-bordered w-full max-w-xs"
		value={author.image}
		name="image"
		id="image"
	/>
</label>

<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
	<button class="btn btn-error"><Icon icon="iconoir:cancel" class="text-2xl" /></button>
	<button class="btn btn-success"
		><Icon icon="material-symbols:save-outline" class="text-2xl" /></button
	>
</div>
