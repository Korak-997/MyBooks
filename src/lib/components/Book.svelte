<script>
	export let book;
	import dummyCover from '$lib/images/dummy-cover.png';
	import Tag from '$lib/components/Tag.svelte';
	let language = book.language && book.language.toLowerCase();
</script>

<a href={'/book/show/' + book.id} class="cursor-pointer">
	<div
		class="card w-96 bg-base-100 shadow-xl shadow-black hover:shadow-secondary hover:shadow-md transition-shadow ease-in-out"
	>
		<figure class="px-10 pt-10">
			<img src={book.cover || dummyCover} alt={book.title} class="rounded-xl w-80 h-96" />
		</figure>
		<div class="card-body items-center text-center">
			<h2 class:font-kurdish={language == 'kurdish'} class="card-title text-2xl text-primary">
				{book.title}
			</h2>
			<h3 class="card-title text-xl text-secondary">By: {book.author.name}</h3>
			{#if book.tags}
				<div class="flex w-11/12 items-center justify-around gap-2 flex-wrap">
					{#each book.tags.split(',') as name}
						<Tag {name} />
					{/each}
				</div>
			{/if}
			{#if book.description}
				<div class="w-11/12">
					<p class:font-kurdish={language == 'kurdish'}>
						{book.description && book.description.substring(0, 100) + ' ...'}
					</p>
				</div>
			{/if}
		</div>
	</div>
</a>
