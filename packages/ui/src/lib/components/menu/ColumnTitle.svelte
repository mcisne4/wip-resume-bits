<script lang="ts">
	import { fade } from 'svelte/transition';

	export let paddingTop = '';
	export let paddingBottom = '';

	const style = `padding-top: ${paddingTop}; padding-bottom: ${paddingBottom};`;
</script>

<p in:fade={{ delay: 300, duration: 300 }} {style}>
	<slot />
</p>

<style>
	p {
		text-align: center;
		font-size: 0.8rem;
		color: var(--fg01);
	}
</style>
