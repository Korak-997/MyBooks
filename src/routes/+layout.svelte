<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import BooksStore from '$lib/stores/BooksStore';
	import AuthorsStore from '$lib/stores/AuthorsStore';
	import { onMount } from 'svelte';

	onMount(() => {
		fetch('/books.json')
			.then((response) => response.json())
			.then((json) => {
				BooksStore.update(() => {
					return json;
				});
			});
		fetch('/authors.json')
			.then((response) => response.json())
			.then((json) => {
				AuthorsStore.update(() => {
					return json;
				});
			});
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
