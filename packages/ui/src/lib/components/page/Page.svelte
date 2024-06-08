<script lang="ts">
	import { menuState } from '$lib/store/menu-state';
</script>

<div
	class="page-container"
	class:print={$menuState.previewMenu === 'item'}
	class:nonprint={$menuState.previewMenu === null}
>
	{#if $menuState.previewMenu === 'item'}
		<div class="page">
			<slot />
		</div>
	{:else}
		<div class="page">
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
	@media screen {
		.nonprint {
			display: flex;
			background-color: var(--bg01);
		}
		.print {
			display: flex;
			background-color: white;
		}
	}
	@media print {
		.nonprint {
			display: none;
		}
		.print {
			display: flex;
		}
	}
	.page-container {
		--bg01: #212121;
		--bg02: #323232;
		--bg03: #434343;
		--fg01: #aaa;
		--fg02: teal;
		--fg03: #e050e0;
		--fg04: hsl(0, 100%, 60%);

		flex-direction: column;
		overflow: scroll;
	}

	.page {
		display: flex;
		flex-direction: column;
		width: 8.5in;
		flex-grow: 1;
	}
</style>
