<script>
	import Icon from '@iconify/svelte';

	export let book;
	import dummyCover from '$lib/images/dummy-cover.png';
	let language = book.language && book.language.toLowerCase();
</script>

<div class="flex items-center justify-center flex-col gap-4 shadow-xl shadow-black p-2">
	<div class="p-2 flex items-center justify-center flex-col book">
		<div class="book-bg w-full h-full">
			{#if book.description}
				<h6
					class="absolute text-center text-neutral p-4 h-full overflow-auto"
					class:font-kurdish={language == 'kurdish'}
				>
					{book.description}
				</h6>
			{/if}
			<div
				class:book-cover={book.description}
				class=" h-full w-full flex items-center justify-center z-10 text-right absolute bg-base-100"
				style={`background-image: url(${book.cover || dummyCover}); background-size:cover; background-repeat:no-repeat; background-position:center;`}
			/>
		</div>
	</div>
	<div class="flex items-center justify-around w-full">
		<a title="show book" href={'/book/show/' + book.id} class="btn btn-secondary"
			><Icon icon="mdi:show-outline" class="text-2xl" /></a
		>
		<a title="edit book" href={'/book/edit/' + book.id} class="btn btn-warning"
			><Icon icon="material-symbols-light:edit-outline" class="text-2xl" /></a
		>
	</div>
</div>
<style scoped>
	:root {
		--width: 250px;
		--height: 350px;
	}
	.book {
		width: var(--width);
		height: var(--height);
	}
	.book-bg {
		position: relative;
		background: transparent;
		transform-style: preserve-3d;
		perspective: 900px;
		vertical-align: center;
		box-sizing: border-box;
	}

	.book-cover {
		transform-origin: 0 50%;
		transition: all 1s linear;
		width: var(--width);
		height: var(--height);
	}

	.book-bg:hover .book-cover {
		transform: rotateY(-85deg);
		transform-style: preserve-3d;
	}
</style>
