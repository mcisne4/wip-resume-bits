<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import { ScreenType, pageType } from '$lib/store/page-type';
</script>

<main>
	<div class="menu-container">
		<Menu />
	</div>

	<div class="page-container" class:printable={$pageType === ScreenType.Print}>
		<h1>Page Content</h1>
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
		.menu-container {
			display: flex;
		}
		.page-container {
			display: flex;
		}
	}

	@media print {
		main {
			padding: 0;
			gap: 0;
		}
		.menu-container {
			display: none;
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

	.menu-container {
		flex-direction: column;
		min-width: 1rem;
		background-color: #212121;
	}
	.page-container {
		flex-direction: column;
		// width: 8.5in;
		min-width: 1rem;
		background-color: #212121;
	}
</style>
