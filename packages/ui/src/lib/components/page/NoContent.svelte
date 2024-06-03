<script lang="ts">
	import { menuState } from '$lib/store/menu-state';
</script>

{#if $menuState.previewMenu !== 'item'}
	<div class="no-content">
		<h1>No</h1>
		<h1>Printable</h1>
		<h1>Content</h1>
	</div>
{/if}

<style>
	@media screen {
		.no-content {
			display: none;
		}
	}
	@media print {
		.no-content {
			display: flex;
			flex-direction: column;
			color: #aaa;
			justify-content: center;
			align-items: center;
		}
	}
</style>
