<script lang="ts">
	export let title: string;
	export let subtitle: string = '';
</script>

<style>
	.simple-hero {
		background-color: #4b7166;
		color: white;
		padding: 100px 0 80px;
		text-align: center;
	}
	
	.simple-hero h1 {
		font-family: 'The Seasons', serif;
		font-size: 3rem;
		font-weight: 400;
		margin-bottom: 1rem;
		line-height: 1.2;
	}
	
	.simple-hero p {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1.2rem;
		font-weight: 400;
		opacity: 0.9;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}
	
	@media (max-width: 768px) {
		.simple-hero {
			padding: 80px 0 60px;
		}
		
		.simple-hero h1 {
			font-size: 2.2rem;
		}
		
		.simple-hero p {
			font-size: 1.1rem;
		}
	}
	
	@media (max-width: 576px) {
		.simple-hero h1 {
			font-size: 1.8rem;
		}
		
		.simple-hero p {
			font-size: 1rem;
		}
	}
</style>

<section class="simple-hero">
	<div class="container">
		<h1>{title}</h1>
		{#if subtitle}
			<p>{subtitle}</p>
		{/if}
	</div>
</section>
