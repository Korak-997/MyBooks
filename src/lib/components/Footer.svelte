<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let isGoingDown = false;

	onMount(() => {
		let oldScrollY = window.scrollY;
		// Attach the scroll event listener when the component is mounted
		window.addEventListener('scroll', () => {
			isGoingDown = oldScrollY < window.scrollY;
			oldScrollY = window.scrollY;
		});

		// Clean up the event listener when the component is destroyed
		return () => {
			window.removeEventListener('scroll');
		};
	});
</script>

<footer class="btm-nav lg:hidden md:hidden" class:hidden={isGoingDown}>
	<a href="/" class="text-primary" class:active={$page.url.pathname == '/'}>
		<Icon icon="ph:books-thin" class="text-4xl" />
	</a>
	<a href="/authors" class="text-primary" class:active={$page.url.pathname == '/authors'}>
		<Icon icon="pepicons-pencil:persons" class="text-4xl" />
	</a>
</footer>
