<script lang="ts">
	const { children, variant = 'primary' } = $props();
	let count = $state(0);

	function handleClick() {
		count = count + 1;
	}
</script>

<button
	class={`rounded-lg px-3 py-2 font-medium transition ${
		variant === 'primary'
			? 'bg-blue-600 text-white hover:bg-blue-700'
			: variant === 'ghost'
				? 'bg-transparent text-blue-700 hover:bg-blue-100'
				: 'bg-transparent text-blue-700 hover:bg-blue-100'
	}`}
	onclick={handleClick}
>
	{@render children()}
	<span class="ml-2 text-xs">{count}</span>
</button>
