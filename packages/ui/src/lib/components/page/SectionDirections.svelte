<script lang="ts">
	export let text: string;

	const content = text.replace(
		/\*\*\b(\w+(?:\s\w+)*)\b\*\*/g,
		'<strong>$1</strong>',
	);
</script>

<div class="section-directions">
	<p>Directions:</p>
	<p>{@html content}</p>
</div>

<style>
	.section-directions {
		text-align: center;
	}

	p:first-child {
		font-size: 0.9rem;
		color: var(--fg01);
	}
	p:last-child {
		font-style: italic;
		color: var(--fg02);
	}

	.section-directions :global(strong) {
		font-style: normal;
		font-weight: 600;
	}
</style>
