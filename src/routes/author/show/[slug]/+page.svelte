<script>
	import { page } from '$app/stores';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	import dummyProfile from '$lib/images/dummy-face.png';
	let author;
	import Icon from '@iconify/svelte';
	AuthorsStore.subscribe((data) => {
		author = data.filter((item) => item.id == $page.params.slug)[0];
	});
</script>

<svelte:head>
	<title>MyBooks | Author</title>
	<meta name="description" content="A personal Library" />
</svelte:head>
<div class="flex items-center justify-center flex-col gap-6 w-11/12">
	<h1 class="text-2xl w-full text-center my-4 font-extrabold text-primary shadow-xl shadow-black">
		{author.name}
	</h1>
	<img src={author.image || dummyProfile} alt={author.name + 'cover'} class="w-2/3" />
	<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
		<div class="flex w-48 items-center justify-between">
			<Icon icon="fluent-emoji-high-contrast:id-button" class="text-2xl" />
			<p class="text-xl">{author.id}</p>
		</div>
		<div class="flex w-48 items-center justify-between">
			<p>Born:</p>
			<p class="text-xl">{author.born}</p>
		</div>
		<div class="flex w-48 items-center justify-between">
			<p>Died:</p>
			<p class="text-xl">{author.died}</p>
		</div>
		<div class="flex w-48 items-center justify-between">
			<p>Birth Place:</p>
			<p class="text-xl">{author.birth_place}</p>
		</div>
	</div>
	<div class="flex items-center justify-around w-11/12 shadow-xl shadow-black p-4 flex-wrap">
		<button class="btn btn-error"><Icon icon="mdi:delete-outline" class="text-2xl" /></button>
		<button class="btn btn-warning"><Icon icon="tabler:edit" class="text-2xl" /></button>
	</div>
</div>
