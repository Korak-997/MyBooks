<script>
	export let author;
	import dummyProfile from '$lib/images/dummy-face.png';
</script>

<a href={'/author/show/' + author.id} class="cursor-pointer">
	<div
		class="card w-96 bg-base-100 shadow-xl shadow-black hover:shadow-secondary hover:shadow-md transition-shadow ease-in-out"
	>
		<figure class="px-10 pt-10">
			<img src={author.image || dummyProfile} alt="Shoes" class="rounded-full" />
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title text-2xl text-primary">{author.name}</h2>
			<div class="w-11/12 flex items-center justify-around">
				<p>Born:</p>
				<p>{author.born}</p>
			</div>
			<div class="w-11/12 flex items-center justify-around">
				<p>Died:</p>
				<p>{author.died}</p>
			</div>
			<div class="w-11/12 flex items-center justify-around">
				<p>Birth Place:</p>
				<p>{author.birth_place}</p>
			</div>
		</div>
	</div>
</a>
