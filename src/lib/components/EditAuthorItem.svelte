<script>
	import Icon from '@iconify/svelte';
	import { updateAuthorInCloud } from '$lib/helpers/db';
	import { createEventDispatcher } from 'svelte';
	import AuthorsEditStore from '$lib/stores/AuthorEditStore';
	export let authorId;
	let item;
	AuthorsEditStore.subscribe((data) => (item = data));
	let itemValue;

	const dispatch = createEventDispatcher();
	const handleUpdate = async () => {
		let saved;
		if (item.edit == 'born') {
			saved = await updateAuthorInCloud({ born: itemValue }, authorId);
		} else if (item.edit == 'died') {
			saved = await updateAuthorInCloud({ died: itemValue }, authorId);
		} else if (item.edit == 'birth') {
			saved = await updateAuthorInCloud({ birth_place: itemValue }, authorId);
		}
		if (saved.succeed) {
			dispatch('success');
		}
	};
</script>

<div class="flex items-center justify-center gap-6 flex-col">
	<input
		class="input input-bordered join-item"
		bind:value={itemValue}
		type="text"
		name="item"
		id="item"
	/>
	<button class="btn btn-success btn-sm" on:click={handleUpdate}
		><Icon icon="material-symbols-light:save-outline" class="text-2xl" /></button
	>
</div>
