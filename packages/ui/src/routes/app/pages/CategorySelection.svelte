<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import SectionDirections from '$lib/components/page/SectionDirections.svelte';
	import SectionDetails from '$lib/components/page/SectionDetails.svelte';
</script>

<Content gap="0.2rem">
	<h1 style:text-align="center">Category Selection</h1>

	<SectionDirections text={`Select a **Category** from the left **Menu**`} />
</Content>

<Content gap="0.5rem">
	<h2>Categories</h2>

	<SectionDetails
		title="Enter Data"
		text={`
			This is where you will enter your different personal data for your resume.
			Think of it as your collection of all the bits of information that could
			potentially go into your resume.
		`}
	/>

	<SectionDetails
		title="Compose Resume"
		text={`
			This is where you will compose your resumes. In here, you select which
			pieces from your collection of data you want in your resume. Use different
			strategies to compose a vast variety of resumes.
		`}
	/>

	<SectionDetails
		title="Preview Resume"
		text={`
			This is where you can view, print, or export the different resumes that you
			have created.
		`}
	/>
</Content>

<style>
	h2 {
		color: var(--fg01);
		border-bottom: 4px solid var(--fg01);
		margin-bottom: 1rem;
	}
</style>
