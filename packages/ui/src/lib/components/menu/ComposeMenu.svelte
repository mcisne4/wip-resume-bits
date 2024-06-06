<script lang="ts">
	import { fade } from 'svelte/transition';
	import MenuButton from './MenuButton.svelte';
	import MenuGhostButton from './MenuGhostButton.svelte';
	import ColumnTitle from './ColumnTitle.svelte';
	import { menuState } from '$lib/store/menu-state';
</script>

<ColumnTitle>My Resumes</ColumnTitle>

<MenuButton
	active={$menuState.composeMenu === 'item' &&
		$menuState.composeId === 'item-1'}
	onClick={() => menuState.toggle.composeMenu.btnItem('item-1')}
>
	Temporary #1
</MenuButton>

<MenuButton
	active={$menuState.composeMenu === 'item' &&
		$menuState.composeId === 'item-2'}
	onClick={() => menuState.toggle.composeMenu.btnItem('item-2')}
>
	Temporary #2
</MenuButton>

<ColumnTitle>New Resume</ColumnTitle>

<MenuGhostButton
	active={$menuState.composeMenu === 'add'}
	onClick={menuState.toggle.composeMenu.btnAdd}
>
	+ Add
</MenuGhostButton>
