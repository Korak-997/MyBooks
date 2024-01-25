<script>
	import Logo from '$lib/images/logo.png';
	import { page } from '$app/stores';
</script>

<header>
	<div
		class="bg-base-100 shadow-md shadow-black flex items-center lg:justify-between md:justify-between justify-center p-4 mb-6"
	>
		<a class="hover:shadow-2xl" href="/"><img src={Logo} alt="Logo" class="w-10" /></a>
		<div class="lg:flex md:flex hidden">
			<ul class="menu menu-horizontal px-1 text-2xl">
				<li>
					<a class="hover:text-secondary" href="/" class:text-secondary={$page.url.pathname == '/'}
						>Books</a
					>
				</li>
				<li>
					<a
						class="hover:text-secondary"
						href="/authors"
						class:text-secondary={$page.url.pathname == '/authors'}>Authors</a
					>
				</li>
			</ul>
		</div>
	</div>
</header>
