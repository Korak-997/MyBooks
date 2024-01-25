<script>
	export let book;
	import dummyCover from '$lib/images/dummy-cover.png';
	import Icon from '@iconify/svelte';
	let language = book.language.toLowerCase();
</script>

<div class="card w-96 bg-base-100 shadow-xl shadow-black">
	<figure class="px-10 pt-10">
		<img src={book.cover || dummyCover} alt={book.title} class="rounded-xl w-80 h-96" />
	</figure>
	<div class="card-body items-center text-center">
		<h2 class:font-kurdish={language == 'kurdish'} class="card-title text-2xl text-primary">
			{book.title}
		</h2>
		<h3 class="card-title text-xl text-secondary">By: {book.author.name}</h3>
		<div class="w-11/12">
			<p class:font-kurdish={language == 'kurdish'}>
				{book.description.substring(0, 100) + ' ...'}
			</p>
		</div>
		<div class="card-actions">
			<a href={'/book/show/' + book.$id} class="btn btn-info"
				><Icon icon="mdi:show" class="text-4xl" /></a
			>
		</div>
	</div>
</div>
