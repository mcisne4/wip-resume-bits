<script lang="ts">
	export let onClick: (() => void) | null = null;
	export let active = false;
	export let margin = '';
	export let padding = '';
	export let gap = '';
	export let width = '';
	export let height = '';
</script>

{#if onClick === null}
	<button
		class:active
		style:margin
		style:padding
		style:gap
		style:width
		style:height
	>
		<slot />
	</button>
{:else}
	<button
		on:click={onClick}
		class:active
		style:margin
		style:padding
		style:gap
		style:width
		style:height
	>
		<slot />
	</button>
{/if}

<style>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: hsl(120, 100%, 50%);
		border: 1px solid hsl(120, 100%, 50%);
		border-radius: 0.5rem;
		padding: 0.5rem 0.75rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		font-size: 0.9rem;
	}
</style>
