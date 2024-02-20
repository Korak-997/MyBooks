<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	let isGoingDown = false;
	let oldScrollY;
	const handleScroll = () => {
		isGoingDown = oldScrollY < window.scrollY;
		oldScrollY = window.scrollY;
	};
</script>

<svelte:window bind:scrollY={oldScrollY} on:scroll={handleScroll} />
<footer class="btm-nav lg:hidden md:hidden z-20" class:hidden={isGoingDown}>
	<a href="/" class="text-primary" class:active={$page.url.pathname == '/'}>
		<Icon icon="ph:books-thin" class="text-4xl" />
	</a>
	<a href="/authors" class="text-primary" class:active={$page.url.pathname == '/authors'}>
		<Icon icon="pepicons-pencil:persons" class="text-4xl" />
	</a>
</footer>
