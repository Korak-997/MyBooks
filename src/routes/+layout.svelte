<script>
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import BookStore from '$lib/stores/Store';
	import { onMount } from 'svelte';

	onMount(() => {
		fetch('/books.json')
			.then((response) => response.json())
			.then((json) => {
				BookStore.update(() => {
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
