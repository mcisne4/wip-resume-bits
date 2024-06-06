<script lang="ts">
	import Content from '$lib/components/page/Content.svelte';
	import SectionDirections from '$lib/components/page/SectionDirections.svelte';
	import SectionDetails from '$lib/components/page/SectionDetails.svelte';
</script>

<Content gap="0.2rem">
	<h1 style:text-align="center">Data Selection</h1>

	<SectionDirections
		text={`To enter data, select a **Data Type** from the left **Menu**`}
	/>
</Content>

<Content gap="0.5rem">
	<h2>Data Types</h2>

	<SectionDetails
		title="Names"
		text={`
			Enter your name and any alternate names you would like to use in your
			resumes. Are you *'John Smith'* aka *'Mr. Bob Smith'*?.
		`}
	/>

	<SectionDetails
		title="Job Titles"
		text={`
			Enter any job titles you are interested in showcasing in your resumes. These
			serve as a quick description of what you do. Something like *'Software Developer'*,
			*'Senior Recruitable Candidate'*, or *'HTMX CEO'*.
		`}
	/>

	<SectionDetails
		title="Addresses"
		text={`
			Enter any personal addresses you would like to use in your resumes. This can
			help recruiters locate you and determine if a specific job is in your
			geographic area.
		`}
	/>

	<SectionDetails
		title="Contacts"
		text={`
			Add all the different ways someone can get in touch with you. These can
			include *'phone numbers'*, *'email addresses'*, *'social media' profiles*, and more.
		`}
	/>

	<SectionDetails
		title="Statements"
		text={`
			Craft a compelling summary statement highlighting your key skills and career
			objectives. Summary statements are a few sentences long, and are used to
			introduce yourself to potential employers.
		`}
	/>

	<SectionDetails
		title="Work Experiences"
		text={`
			Enter any current and previous work experiences. This information is crucial
			in showing employers what roles you have filled, what responsibilities you
			have had, and what skills you have acquired.
		`}
	/>

	<SectionDetails
		title="Education"
		text={`
			Enter any academic degrees, certifications, or training courses that you
			have obtained. This will help recruiters determine if you have the proper
			qualifications, knowledge, and training to fill a specific role.
		`}
	/>

	<SectionDetails
		title="Skills"
		text={`
			This is where you shine. Enter a list of skills to highlight your expertise.
			Are you skilled in *'Visual Design'* using software like *'Figma'* or
			*'Photoshop'*?
		`}
	/>

	<SectionDetails
		title="Languages"
		text={`
			Enter any languages you can speak, read, or write. This can be helpful in
			showcasing your ability to communicate with different audiences.
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
