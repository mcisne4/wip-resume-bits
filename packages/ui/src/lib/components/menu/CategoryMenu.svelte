<script lang="ts">
	import MenuButton from './MenuButton.svelte';
	import ColumnTitle from './ColumnTitle.svelte';
	import { menuState } from '$lib/store/menu-state';
</script>

<ColumnTitle>Category</ColumnTitle>

<MenuButton
	active={$menuState.category === 'data'}
	onClick={menuState.toggle.categoryMenu.btnData}
>
	<div class="stacked">
		<p>Enter</p>
		<p>Data</p>
	</div>
</MenuButton>

<MenuButton
	active={$menuState.category === 'compose'}
	onClick={menuState.toggle.categoryMenu.btnCompose}
>
	<div class="stacked">
		<p>Compose</p>
		<p>Resume</p>
	</div>
</MenuButton>

<MenuButton
	active={$menuState.category === 'preview'}
	onClick={menuState.toggle.categoryMenu.btnPreview}
>
	<div class="stacked">
		<p>Preview</p>
		<p>Resume</p>
	</div>
</MenuButton>
