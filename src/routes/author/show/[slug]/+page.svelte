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
		<img src={author.image || dummyProfile} alt={author.name + 'cover'} class="rounded-full" />
		<section class="p-6">
			<div class="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
				<div class="flex flex-col justify-start m-2 lg:m-6">
					<p class="font-bold leadi lg:text-6xl md:text-4xl text-xl">Born</p>
					<p class="text-sm sm:text-base">{author.born}</p>
				</div>
				<div class="flex flex-col justify-start m-2 lg:m-6">
					<p class="font-bold leadi lg:text-6xl md:text-4xl text-xl">Died</p>
					<p class="text-sm sm:text-base">{author.died}</p>
				</div>
				<div class="flex flex-col justify-start m-2 lg:m-6">
					<p class="font-bold leadi lg:text-6xl md:text-4xl text-xl">Birth Place</p>
					<p class="text-sm sm:text-base">{author.birth_place}</p>
				</div>
			</div>
		</section>
	</div>
</div>
