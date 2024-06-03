<script lang="ts">
	import MenuButton from './MenuButton.svelte';
	import ColumnTitle from './ColumnTitle.svelte';
	import { menuState } from '$lib/store/menu-state';
</script>

<ColumnTitle>Select Resume</ColumnTitle>

<MenuButton
	active={$menuState.previewMenu === 'item' &&
		$menuState.previewId === 'item-1'}
	onClick={() => menuState.toggle.previewMenu.btnItem('item-1')}
>
	Temporary Preview #1
</MenuButton>

<MenuButton
	active={$menuState.previewMenu === 'item' &&
		$menuState.previewId === 'item-2'}
	onClick={() => menuState.toggle.previewMenu.btnItem('item-2')}
>
	Temporary Preview #2
</MenuButton>
