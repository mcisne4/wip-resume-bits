<script lang="ts">
	export let href: string;
	export let margin = '';
</script>

<a {href} style="margin: {margin};">
	<slot />
</a>

<style lang="scss">
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
		color: var(--btn-inactive-fg);
		border: 1px solid var(--btn-inactive-border);
		border-radius: 0.5rem;
		background-color: var(--btn-inactive-bg);
		padding: 0.25rem 0.5rem;
		font-size: 0.9rem;

		&:hover {
			color: var(--btn-hover-fg);
			border: 1px solid var(--btn-hover-border);
			background-color: var(--btn-hover-bg);
		}
	}
</style>
