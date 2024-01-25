<script>
	export let author;
	import dummyProfile from '$lib/images/dummy-face.png';
	import Icon from '@iconify/svelte';
</script>

<div class="card w-96 bg-base-100 shadow-xl shadow-black">
	<figure class="px-10 pt-10">
		<img src={author.image || dummyProfile} alt="Shoes" class="rounded-xl" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class="card-title text-2xl text-primary">{author.name}</h2>
		<div class="w-11/12 flex items-center justify-around shadow-xl shadow-black">
			<p>Born:</p>
			<p>{author.born}</p>
		</div>
		<div class="w-11/12 flex items-center justify-around shadow-xl shadow-black">
			<p>Died:</p>
			<p>{author.died}</p>
		</div>
		<div class="w-11/12 flex items-center justify-around shadow-xl shadow-black">
			<p>Birth Place:</p>
			<p>{author.birth_place}</p>
		</div>
		<div class="card-actions">
			<a href={'/author/show/' + author.$id} class="btn btn-info"
				><Icon icon="mdi:show" class="text-4xl" /></a
			>
			<a href={'/author/edit/' + author.$id} class="btn btn-warning"
				><Icon icon="tabler:edit" class="text-4xl" /></a
			>
		</div>
	</div>
</div>
