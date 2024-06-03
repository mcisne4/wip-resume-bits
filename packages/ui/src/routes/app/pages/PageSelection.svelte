<script lang="ts">
	import TempContent from './TempContent.svelte';
	import { menuState } from '$lib/store/menu-state';
</script>

{#if $menuState.page === 'Select_Category'}
	<TempContent />
{:else if $menuState.page === 'Select_Data'}
	<TempContent />
{:else if $menuState.page === 'Select_Compose'}
	<TempContent />
{:else if $menuState.page === 'Select_Preview'}
	<TempContent />
{:else if $menuState.page === 'Data_Person'}
	<TempContent />
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
