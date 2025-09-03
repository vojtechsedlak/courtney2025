<script>
	import { trackBookingClick } from '$lib/utils/analytics.js';
</script>

<style>
	.hero {
		position: relative;
		height: 70vh;
		min-height: 500px;
		background-image: url('/background.jpeg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 100px 0 100px 0;
	}
	
	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #d1ebe3;
		opacity: 0.25;
		z-index: 1;
	}
	
	.hero-content {
		position: relative;
		z-index: 2;
		text-align: center;
		color: #4b7166;
		max-width: 800px;
		padding: 0 20px;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
	
	.hero h1 {
		font-family: 'The Seasons', serif;
		font-size: 3.5rem;
		font-weight: 400;
		margin-bottom: auto;
		line-height: 1.2;
		margin-top: 0;
	}
	
	.hero p {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1.3rem;
		font-weight: 400;
		margin-bottom: 2rem;
		line-height: 1.6;
	}
	
	.btn-cta {
		background-color: #d1ebe3;
		border: none;
		color: #4b7166;
		font-family: 'Glacial Indifference', sans-serif;
		padding: 15px 35px;
		border-radius: 30px;
		text-decoration: none;
		font-size: 1.3rem;
		transition: all 0.3s ease;
		display: inline-block;
	}
	
	.btn-cta:hover {
		background-color: #c0e0d6;
		color: #4b7166;
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(75, 113, 102, 0.2);
	}
	
	@media (max-width: 768px) {
		.hero {
			height: 60vh;
			min-height: 400px;
			padding: 60px 0 40px 0;
		}
		
		.hero h1 {
			font-size: 2.5rem;
		}
		
		.hero p {
			font-size: 1.1rem;
		}
		
		.btn-cta {
			padding: 12px 28px;
			font-size: 1rem;
		}
	}
	
	@media (max-width: 576px) {
		.hero h1 {
			font-size: 2rem;
		}
		
		.hero p {
			font-size: 1rem;
		}
	}
</style>

<section class="hero">
	<div class="hero-content">
		<h1>Eating Disorder Counselling<br>in Greater Victoria, BC</h1>
		<div style="margin-top: auto;">
			<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('hero')}>
				Book a Session
			</a>
		</div>
	</div>
</section>
