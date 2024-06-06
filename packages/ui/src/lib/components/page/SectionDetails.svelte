<script lang="ts">
	export let title: string;
	export let text: string | string[];

	if (!title.endsWith(':')) title += ':';

	if (typeof text === 'string') text = [text];

	const contents = text.map((t) =>
		t
			.replace(/\n/g, ' ')
			.replace(/\t/g, ' ')
			.replace(/(?<!\\)\*\*(.*?)(?<!\\)\*\*/g, '<strong>$1</strong>')
			.replace(/(?<!\\)\*(.*?)(?<!\\)\*/g, '<i>$1</i>')
			.replace(/(?<!\\)\_(.*?)(?<!\\)\_/g, '<i>$1</i>')
			.replace(/  /g, ' '),
	);
</script>

<h3>{title}</h3>
{#each contents as content}
	<p>{@html content}</p>
{/each}

<style>
	h3 {
		color: var(--fg02);
		margin-top: 0.2rem;
	}

	p {
		line-height: 1.6;
		padding: 0 1rem;
		color: var(--fg01);
	}

	p :global(strong) {
		font-style: normal;
		font-weight: 600;
		color: var(--fg03);
	}

	p :global(i) {
		font-style: italic;
		font-weight: 300;
		color: var(--fg03);
	}

	p :global(strong > i) {
		font-weight: 700;
		color: var(--fg03);
	}
</style>
