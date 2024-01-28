<script>
	import { page } from '$app/stores';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	import AuthorEditStore from '$lib/stores/AuthorEditStore';
	import dummyProfile from '$lib/images/dummy-face.png';
	import EditAuthorItem from '$lib/components/EditAuthorItem.svelte';
	import { deleteAuthorInCloud } from '$lib/helpers/db';
	import Icon from '@iconify/svelte';
	let author;

	AuthorsStore.subscribe((data) => {
		author = data.filter((item) => item.$id == $page.params.slug)[0];
	});

	let showSuccess = false;
	let showEditModal = false;

	const handleEdit = (item) => {
		AuthorEditStore.update(() => {
			return { edit: item };
		});
		showEditModal = true;
	};
	const handleDelete = async () => {
		if (window.confirm('You really want to delete this author?')) {
			await deleteAuthorInCloud(author.$id);
			location.href = '/';
		}
	};
	const handleSuccess = () => {
		showEditModal = false;
		showSuccess = true;
		setTimeout(() => (showSuccess = false), 1500);
	};
</script>

<svelte:head>
	<title>MyBooks | Author</title>
	<meta name="description" content="A personal Library" />
</svelte:head>

{#if showSuccess}
	<div class="toast toast-top toast-center">
		<div class="alert alert-success">
			<span>Author updated Successfully.</span>
		</div>
	</div>
{/if}
<input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={showEditModal} />
<div class="modal" role="dialog">
	<div class="modal-box">
		<EditAuthorItem authorId={author.$id} on:success={handleSuccess} />
		<div class="modal-action">
			<label for="my_modal_6" class="btn btn-error btn-sm"
				><Icon icon="material-symbols:close" class="text-2xl" /></label
			>
		</div>
	</div>
</div>
<div class="flex items-center justify-center flex-col gap-6 w-11/12">
	<div class="flex items-center justify-between w-11/12 my-6 p-4 shadow-xl shadow-black">
		<h1 class="text-2xl w-full text-center font-extrabold text-primary">
			{author.name}
		</h1>
		<button on:click={handleDelete} class="btn btn-error"
			><Icon icon="mdi:delete-outline" class="text-2xl" /></button
		>
	</div>
	<div class="flex items-center justify-center p-4 shadow-xl shadow-black gap-6 flex-wrap">
		<img src={author.image || dummyProfile} alt={author.name + 'cover'} class="rounded-full" />
		<div class="flex items-center justify-center flex-col gap-6">
			<div class="flex items-center justify-between m-2 w-full">
				<p class="font-bold leadi lg:text-6xl md:text-4xl text-xl">Born</p>
				<p class="text-sm sm:text-base">{author.born}</p>
				<div class="m-2">
					<button class="btn btn-circle btn-sm btn-warning" on:click={() => handleEdit('born')}
						><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
					>
				</div>
			</div>
			<div class="flex items-center justify-between m-2 w-full">
				<p class="font-bold leadi lg:text-6xl md:text-4xl text-xl">Died</p>
				<p class="text-sm sm:text-base">{author.died}</p>
				<div class="m-2">
					<button class="btn btn-circle btn-sm btn-warning" on:click={() => handleEdit('died')}
						><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
					>
				</div>
			</div>
			<div class="flex items-center justify-between m-2 w-full">
				<p class="font-bold leadi lg:text-6xl md:text-4xl text-xl">Birth Place</p>
				<p class="text-sm sm:text-base">{author.birth_place}</p>
				<div class="m-2">
					<button class="btn btn-circle btn-sm btn-warning" on:click={() => handleEdit('birth')}
						><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></button
					>
				</div>
			</div>
		</div>
	</div>
</div>
