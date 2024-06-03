<script lang="ts">
	import ButtonLink from './ButtonLink.svelte';
	import { menuState } from '$lib/store/menu-state';
	import CategoryMenu from './CategoryMenu.svelte';
	import DataMenu from './DataMenu.svelte';
	import ComposeMenu from './ComposeMenu.svelte';
	import PreviewMenu from './PreviewMenu.svelte';
</script>

<div class="menu-container nonprint">
	<p class="section-title">Menu</p>

	<div class="section">
		<div class="column left" class:focus={$menuState.category === null}>
			<CategoryMenu />
		</div>

		<div class="column right" class:focus={$menuState.category !== null}>
			{#if $menuState.category === 'data'}
				<DataMenu />
			{:else if $menuState.category === 'compose'}
				<ComposeMenu />
			{:else if $menuState.category === 'preview'}
				<PreviewMenu />
			{/if}
		</div>
	</div>

	<p class="section-title separated">Options</p>
	<div class="section">
		<ButtonLink href="/" margin="0 0.2rem">Home</ButtonLink>
		<ButtonLink href="/settings" margin="0 0.2rem">Settings</ButtonLink>
	</div>
</div>

<style lang="scss">
	@media screen {
		.menu-container {
			display: flex;
		}
	}
	@media print {
		.menu-container {
			display: none;
		}
	}
	.menu-container {
		--bg01: #212121;
		--bg02: #323232;
		--fg01: #aaa;

		--btn-inactive-bg: hsl(182, 60%, 14%);
		--btn-inactive-fg: hsl(182, 70%, 90%);
		--btn-inactive-border: hsl(182, 60%, 25%);

		--btn-hover-bg: hsl(182, 100%, 35%);
		--btn-hover-fg: hsl(182, 90%, 95%);
		--btn-hover-border: hsl(182, 80%, 50%);

		--btn-active-bg: hsl(182, 70%, 30%);
		--btn-active-fg: hsl(182, 100%, 95%);
		--btn-active-border: hsl(182, 100%, 50%);

		--ghost-btn-inactive-bg: hsl(182, 60%, 12%);
		--ghost-btn-inactive-fg: hsl(182, 70%, 90%);
		--ghost-btn-inactive-border: hsl(182, 60%, 30%);

		flex-direction: column;
		gap: 0.25rem;
		background-color: var(--bg01);
	}

	.section-title {
		background-color: var(--bg02);
		color: var(--fg01);
		font-weight: 500;
		font-size: 0.8rem;
		text-align: center;
		padding: 0.25rem 0.5rem;
	}
	.separated {
		margin-top: auto;
	}

	.section {
		display: flex;
		justify-content: center;
		padding: 0.25rem;
	}

	.column {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		max-height: 40rem;
		max-height: calc(100vh - 7.8rem);
		overflow-y: scroll;

		&.left {
			width: 7rem;

			transition: width 0.3s ease;

			&.focus {
				width: 12rem;

				transition: width 0.3s ease;
			}
		}

		&.right {
			margin-left: 0;
			width: 0;

			transition:
				width 0.3s ease,
				margin-left 0.3s ease;

			&.focus {
				margin-left: 0.4rem;
				width: 12rem;

				transition:
					width 0.3s ease,
					margin-left 0.3s ease;
			}
		}
	}
</style>
