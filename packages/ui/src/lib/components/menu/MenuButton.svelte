<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	export let onClick: () => void;
	export let active: boolean;
</script>

<button on:click={onClick} class:active in:fade={{ delay: 300, duration: 300 }}>
	<slot />
</button>

<style lang="scss">
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		border-radius: 0.5rem;
		padding: 0.5rem 0.75rem;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		font-size: 0.9rem;

		color: var(--btn-inactive-fg);
		background-color: var(--btn-inactive-bg);
		border: 1px solid var(--btn-inactive-border);

		&:hover {
			color: var(--btn-hover-fg);
			background-color: var(--btn-hover-bg);
			border: 1px solid var(--btn-hover-border);
		}
	}

	.active {
		color: var(--btn-active-fg);
		background-color: var(--btn-active-bg);
		border: 1px solid var(--btn-active-border);
	}
</style>
