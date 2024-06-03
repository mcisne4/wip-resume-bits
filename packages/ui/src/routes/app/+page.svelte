<script lang="ts">
	import Menu from '$lib/components/menu/Menu.svelte';
	import { ScreenType, pageType } from '$lib/store/page-type';
	import { menuState } from '$lib/store/menu-state';

	menuState.reset();
</script>

<main>
	<Menu />

	<div class="page-container" class:printable={$pageType === ScreenType.Print}>
		<h1>Page Content</h1>
		<p>{$menuState.page}</p>
	</div>
</main>

<style lang="scss">
	main {
		display: flex;
		justify-content: center;
		gap: 0.25rem;
		padding: 0.25rem;
		height: 100vh;
	}

	@media screen {
		.page-container {
			display: flex;
		}
	}

	@media print {
		main {
			padding: 0;
			gap: 0;
		}
		.page-container {
			display: none;
		}
		.printable {
			display: flex;
			width: 8.5in;
			height: 11in;
		}
	}

	.page-container {
		flex-direction: column;
		min-width: 1rem;
		background-color: #212121;
	}
</style>
