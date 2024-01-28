<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let isScrolledToBottom = false;

	const handleScroll = () => {
		const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;

		// Check if the user has scrolled to the bottom
		isScrolledToBottom = scrollTop + clientHeight >= scrollHeight;
	};

	onMount(() => {
		// Attach the scroll event listener when the component is mounted
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component is destroyed
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<footer class="btm-nav lg:hidden md:hidden" class:hidden={isScrolledToBottom}>
	<a href="/" class="text-primary" class:active={$page.url.pathname == '/'}>
		<Icon icon="tabler:books" class="text-4xl" />
	</a>
	<a href="/authors" class="text-primary" class:active={$page.url.pathname == '/authors'}>
		<Icon icon="pepicons-pop:persons" class="text-4xl" />
	</a>
</footer>
