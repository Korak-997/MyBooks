<script>
	import Logo from '$lib/images/logo.png';
</script>

<header>
	<div class="navbar bg-base-100 shadow-md shadow-black">
		<div class="navbar-start">
			<a class="hover:shadow-2xl" href="/"><img src={Logo} alt="Logo" class="w-16" /></a>
		</div>
		<div class="navbar-center flex">
			<ul class="menu menu-horizontal px-1 text-2xl">
				<li><a class="hover:text-secondary" href="/">Books</a></li>
				<li><a class="hover:text-secondary" href="/authors">Authors</a></li>
			</ul>
		</div>
		<div class="navbar-end"></div>
	</div>
</header>
