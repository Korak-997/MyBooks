<script>
	import Icon from '@iconify/svelte';
	import { updateBookInCloud } from '$lib/helpers/db';
	import { createEventDispatcher } from 'svelte';
	import BooksEditStore from '$lib/stores/BookEditStore';
	export let bookId;
	let item;
	BooksEditStore.subscribe((data) => (item = data));
	let itemValue;

	const dispatch = createEventDispatcher();
	const handleUpdate = async () => {
		let saved;
		if (item.edit == 'pages') {
			saved = await updateBookInCloud({ pages: itemValue }, bookId);
		} else if (item.edit == 'language') {
			saved = await updateBookInCloud({ languages: itemValue }, bookId);
		} else if (item.edit == 'started') {
			saved = await updateBookInCloud({ started: itemValue }, bookId);
		} else if (item.edit == 'finished') {
			saved = await updateBookInCloud({ finished: itemValue }, bookId);
		} else if (item.edit == 'genres') {
			saved = await updateBookInCloud({ genres: itemValue }, bookId);
		} else if (item.edit == 'description') {
			saved = await updateBookInCloud({ description: itemValue }, bookId);
		}
		if (saved.succeed) {
			dispatch('success');
		}
	};
</script>

<div class="flex items-center justify-center gap-6 flex-col">
	{#if item.edit == 'pages'}
		<input
			class="input input-bordered join-item"
			bind:value={itemValue}
			type="number"
			name="item"
			id="item"
		/>
	{:else if item.edit == 'description'}
		<textarea
			placeholder="Description"
			class="textarea textarea-bordered textarea-lg w-full max-w-xs"
			bind:value={itemValue}
			name="item"
			id="item"
		/>
	{:else}
		<input
			class="input input-bordered join-item"
			bind:value={itemValue}
			type="text"
			name="item"
			id="item"
		/>
	{/if}
	<button class="btn btn-success btn-sm" on:click={handleUpdate}
		><Icon icon="material-symbols-light:save-outline" class="text-2xl" /></button
	>
</div>
