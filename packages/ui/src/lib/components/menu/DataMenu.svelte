<script lang="ts">
	import MenuButton from './MenuButton.svelte';
	import ColumnTitle from './ColumnTitle.svelte';
	import { menuState } from '$lib/store/menu-state';
</script>

<ColumnTitle>Data Type</ColumnTitle>

<MenuButton
	active={$menuState.dataMenu === 'person'}
	onClick={menuState.toggle.dataMenu.btnPerson}
>
	Names
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'job-title'}
	onClick={menuState.toggle.dataMenu.btnJobTitle}
>
	Job Titles
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'address'}
	onClick={menuState.toggle.dataMenu.btnAddress}
>
	Addresses
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'contact'}
	onClick={menuState.toggle.dataMenu.btnContact}
>
	Contacts
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'statement'}
	onClick={menuState.toggle.dataMenu.btnStatement}
>
	Statements
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'work-experience'}
	onClick={menuState.toggle.dataMenu.btnWorkExperience}
>
	Work Experiences
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'education'}
	onClick={menuState.toggle.dataMenu.btnEducation}
>
	Education
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'skill'}
	onClick={menuState.toggle.dataMenu.btnSkill}
>
	Skills
</MenuButton>

<MenuButton
	active={$menuState.dataMenu === 'language'}
	onClick={menuState.toggle.dataMenu.btnLanguage}
>
	Languages
</MenuButton>
