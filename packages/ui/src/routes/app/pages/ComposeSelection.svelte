<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import SectionDirections from '$lib/components/page/SectionDirections.svelte';
	import SectionDetails from '$lib/components/page/SectionDetails.svelte';
</script>

<Content gap="0.2rem">
	<h1 style:text-align="center">Compose Selection</h1>

	<SectionDirections
		text={`
			From the left menu, select either an existing resume from the **My Resumes** section
			or select to **Add** a new resume from the **New Resume** section
		`}
	/>
</Content>

<Content gap="0.5rem">
	<h2>Composing a Resume</h2>

	<SectionDetails
		title="Resume Identifier"
		text={[
			`
			The first step in composing a resume is to create a unique **identifier** *(a name)*
			for your resume.
			`,
			`
			This **identifier** is used to identify different composition strategies from one
			another. You are not limited to composing a single resume, but can create as many
			resume variations as you want.
			`,
			`
			The resume alias should be short and descriptive. Something like *'2022 Caffeteria
			Manager'* or *'Just Exploring Posibilities 6/2024'* would work well.
			`,
		]}
	/>

	<SectionDetails
		title="Composition Strategy"
		text={[
			`
		The resume composing strategy is where you select which pieces of information you
		want in your resume.
		`,
			`
		All the different pieces of information that you entered in the **Enter Data** step
		will be available to use. By default, no data is automatically selected. This means
		that you have to select which pieces of information will go into your resume.
		`,
			`
		The final part of the composition strategy is selecting a **theme**. This determines
		the look and feel of your resume.
		`,
		]}
	/>
</Content>

<style>
	h2 {
		color: var(--fg01);
		border-bottom: 4px solid var(--fg01);
	}
</style>
