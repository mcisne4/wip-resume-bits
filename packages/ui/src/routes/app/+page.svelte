<script lang="ts">
	import Menu from '$lib/components/menu/Menu.svelte';
	import Page from '$lib/components/page/Page.svelte';
	import NoContent from '$lib/components/page/NoContent.svelte';
	import PageSelection from './pages/PageSelection.svelte';
	import { menuState } from '$lib/store/menu-state';

	menuState.reset();
</script>

<main
	class:full={$menuState.previewMenu !== 'item'}
	class:min={$menuState.previewMenu === 'item'}
>
	<Menu />

	<Page>
		<PageSelection />
	</Page>

	<NoContent />
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		gap: 0.25rem;
		padding: 0.25rem;
	}
	.full {
		padding: 0.25rem;
		height: 100vh;
	}
	@media screen {
		.full {
			padding: 0.25rem;
			height: 100vh;
		}
	}
	@media print {
		.full {
			padding: 0;
			height: auto;
		}
	}
</style>
