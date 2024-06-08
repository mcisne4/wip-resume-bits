<script lang="ts">
	import { enhance } from '$app/forms';

	import PageTitle from '$lib/components/page/PageTitle.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import ContentTitle from '$lib/components/page/ContentTitle.svelte';

	import InputColumn from '$lib/components/forms/InputColumn.svelte';
	import GreenBtn from '$lib/components/buttons/GreenBtn.svelte';
</script>

<PageTitle section="DATA" pageName="Names" />

<ContentTitle title="Existing" />

<Content>
	<div class="table">
		<p>First_Name</p>
		<p>Middle_Name</p>
		<p>Last Name</p>
	</div>
</Content>

<ContentTitle title="Add" margin="auto 0 0" />

<Content>
	<form class="add" action="?/add_name" method="post" use:enhance>
		<div class="row">
			<InputColumn
				id="fname"
				label="First Name"
				placeholder="John"
				size={14}
				required={true}
				withError={true}
			/>

			<InputColumn id="mname" label="Middle Name" placeholder="M." size={7} />

			<InputColumn
				id="lname"
				label="Last Name"
				placeholder="Smith"
				size={14}
				required={true}
			/>

			<InputColumn id="suffix" label="Suffix" placeholder="Jr" size={6} />

			<GreenBtn
				padding="0.4rem"
				width="4.5rem"
				height="2.2rem"
				margin="auto 0 0 0.5rem">Add</GreenBtn
			>
		</div>

		<p class="note"><span>*</span> - Required field</p>

		<div class="errors">
			<p>The <span>First Name</span> field is required</p>
		</div>
	</form>
</Content>

<style lang="scss">
	form.add {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem auto 12rem;
		padding: 0 0 0.5rem;

		& .row {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
		}

		& .note {
			font-size: 0.9rem;
			font-style: italic;
			text-align: center;
			span {
				color: white;
				font-weight: 600;
			}
		}

		& .errors {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			font-size: 0.9rem;
			color: var(--fg04);
			text-align: center;
			font-style: italic;

			& span {
				font-weight: 600;
				font-style: normal;
				margin: 0 0.1rem;
			}
		}
	}
</style>
