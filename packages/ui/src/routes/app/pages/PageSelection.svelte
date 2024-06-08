<script lang="ts">
	import TempContent from './TempContent.svelte';

	import { menuState } from '$lib/store/menu-state';
	import CategorySelection from './CategorySelection.svelte';
	import DataSelection from './DataSelection.svelte';
	import ComposeSelection from './ComposeSelection.svelte';
	import PreviewSelection from './PreviewSelection.svelte';
	import DataNames from './DataNames.svelte';
</script>

{#if $menuState.page === 'Select_Category'}
	<CategorySelection />
{:else if $menuState.page === 'Select_Data'}
	<DataSelection />
{:else if $menuState.page === 'Select_Compose'}
	<ComposeSelection />
{:else if $menuState.page === 'Select_Preview'}
	<PreviewSelection />
{:else if $menuState.page === 'Data_Person'}
	<DataNames />
{:else if $menuState.page === 'Data_JobTitle'}
	<TempContent />
{:else if $menuState.page === 'Data_Address'}
	<TempContent />
{:else if $menuState.page === 'Data_Contact'}
	<TempContent />
{:else if $menuState.page === 'Data_Statement'}
	<TempContent />
{:else if $menuState.page === 'Data_WorkExperience'}
	<TempContent />
{:else if $menuState.page === 'Data_Education'}
	<TempContent />
{:else if $menuState.page === 'Data_Skill'}
	<TempContent />
{:else if $menuState.page === 'Data_Language'}
	<TempContent />
{:else if $menuState.page === 'Compose_Item'}
	<TempContent />
{:else if $menuState.page === 'Compose_Add'}
	<TempContent />
{:else if $menuState.page === 'Preview_Item'}
	<TempContent />
{/if}
