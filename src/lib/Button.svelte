<script lang="ts">
	const { label, variant = 'primary', icon, onclick } = $props();
	let count = $state(0);
	const Component = icon;

	function handleClick() {
		count = count + 1;
	}
</script>

<button
	class={`flex items-center gap-2 rounded-lg px-3 py-2 font-medium transition ${
		variant === 'primary'
			? 'bg-blue-600 text-white hover:bg-blue-500'
			: variant === 'ghost'
				? 'bg-transparent text-blue-500 hover:bg-blue-50'
				: 'bg-transparent text-blue-500 hover:bg-blue-50'
	}`}
	onclick={onclick}
>
	{#if icon}
		<Component />
	{/if}
	{label}
	<span class="ml-2 text-xs">{count}</span>
</button>
