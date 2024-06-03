<div class="content">
	{#each Array(14).keys() as x}
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam
			nihil natus laboriosam praesentium possimus aut nobis quae, fugiat ex
			adipisci harum consectetur id officiis atque, earum exercitationem
			corrupti totam.
		</p>
	{/each}
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}
</style>
