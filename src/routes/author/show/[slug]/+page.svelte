<script>
	import { page } from '$app/stores';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	import dummyProfile from '$lib/images/dummy-face.png';
	let author;
	import { deleteAuthorInCloud } from '$lib/helpers/db';
	import Icon from '@iconify/svelte';
	AuthorsStore.subscribe((data) => {
		author = data.filter((item) => item.$id == $page.params.slug)[0];
	});
	const handleDelete = async () => {
		if (window.confirm('You really want to delete this author?')) {
			await deleteAuthorInCloud(author.$id);
			location.href = '/';
		}
	};
</script>

<svelte:head>
	<title>MyBooks | Author</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
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
		<img src={author.image || dummyProfile} alt={author.name + 'cover'} class="w-1/3" />
		<div class="stats stats-vertical w-2/3">
			<div class="stat place-items-center">
				<div class="stat-title">Born</div>
				<div class="stat-value">{author.born}</div>
			</div>
			<div class="stat place-items-center">
				<div class="stat-title">Died</div>
				<div class="stat-value">{author.died}</div>
			</div>
			<div class="stat place-items-center">
				<div class="stat-title">Birth Place</div>
				<div class="stat-value">{author.birth_place}</div>
			</div>
		</div>
	</div>
</div>
