<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
</script>

<footer class="btm-nav lg:hidden md:hidden">
	<a href="/" class="text-primary" class:active={$page.url.pathname == '/'}>
		<Icon icon="tabler:books" class="text-4xl" />
	</a>
	<a href="/authors" class="text-primary" class:active={$page.url.pathname == '/authors'}>
		<Icon icon="pepicons-pop:persons" class="text-4xl" />
	</a>
</footer>
