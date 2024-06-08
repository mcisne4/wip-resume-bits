<script lang="ts">
	export let section: 'DATA' | undefined = undefined;
	export let pageName: string;
</script>

<div class="page-title">
	<h1>
		{#if section}
			<span>{section} {'>'}</span>
		{/if}
		{pageName}
	</h1>
</div>

<style>
	.page-title {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0.25rem 0.5rem;
		/* height: 1.75rem; */
		background-color: var(--bg02);
	}
	h1 {
		display: flex;
		gap: 0.5rem;
		font-size: 0.8rem;
		font-style: italic;
		font-weight: 400;
	}
	span {
		font-style: normal;
		font-weight: 600;
	}
</style>
