<script lang="ts">
	export let id: string;
	export let label: string;
	export let inputType: 'text' | 'number' = 'text';
	export let placeholder = '';
	export let size = 10;
	export let required = false;

	export let maxWidth = '';
	export let height = '';
	export let paddng = '';
	export let margin = '';

	export let withError = false;
	export let value = '';

	const props: Record<string, string | number | boolean> = {
		id,
		label,
		name: id,
		input: inputType,
		size: size.toString(),
	};
	if (placeholder.length > 0) props.placeholder = placeholder;
	if (required) props.required = true;

	let style = '';
	if (maxWidth.length > 0) style += `max-width: ${maxWidth};`;
	if (height.length > 0) style += `height: ${height};`;
	if (paddng.length > 0) style += `padding: ${paddng};`;
	if (margin.length > 0) style += `margin: ${margin};`;
</script>

<label for={id} {style}>
	<span>
		{#if required}
			{label}<sup>*</sup>
		{:else}
			{label}
		{/if}
	</span>

	<input
		class:with-error={withError}
		{...props}
		bind:value
		on:change={() => (withError = false)}
	/>
</label>

<style>
	label {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-size: 0.8rem;
		text-align: center;
	}

	input {
		font-size: 0.9rem;
		padding: 0.25rem 0.5rem;
	}

	.with-error {
		border: 1px solid var(--fg04);
		box-shadow: 0 0.1rem 0.4rem 0.2rem var(--fg04);
		color: var(--fg04);
		font-weight: 500;
	}

	label:has(.with-error) {
		color: var(--fg04);
	}
</style>
