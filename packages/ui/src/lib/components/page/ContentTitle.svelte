<script lang="ts">
	export let title: string;
	export let margin = '';
</script>

<div class="content-title" style:margin>
	<div class="left line"></div>
	<h2>{title}</h2>
	<div class="right line"></div>
</div>

<style>
	.content-title {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.line {
		display: flex;
		background-color: var(--fg02);
		height: 0.5rem;
	}

	.left {
		width: 1rem;
	}
	.right {
		width: 100%;
	}

	h2 {
		color: #ddd;
	}
</style>
