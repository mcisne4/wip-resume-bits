<script lang="ts">
	export let padding = '0.5rem 1rem';
	export let gap = '0';
</script>

<div class="content" style:padding style:gap>
	<slot />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		color: var(--fg01);
	}
</style>
