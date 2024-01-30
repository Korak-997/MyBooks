<script>
	export let name;
	name = name.trim();
</script>

{#if name == 'Finished'}
	<span
		class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset m-2 text-green-700 ring-green-600/10 bg-green-300"
		>{name}</span
	>
{/if}
{#if name == 'Started'}
	<span
		class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset m-2 text-indigo-700 ring-indigo-600/10 bg-indigo-300"
		>{name}</span
	>
{/if}
