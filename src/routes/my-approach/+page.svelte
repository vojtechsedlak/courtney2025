<script>
	import Header from '$lib/components/Header.svelte';
	import SimpleHero from '$lib/components/SimpleHero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { trackBookingClick } from '$lib/utils/analytics.js';
</script>

<svelte:head>
	<title>My Approach - Courtney Sedlak - Eating Disorder Counselling in Greater Victoria, BC</title>
	<meta name="description" content="Learn about my compassionate, evidence-based approach to eating disorder recovery." />
</svelte:head>

<style>
	.content-section {
		padding: 80px 0;
		background-color: #ffffff;
	}
	
	.content {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1.3rem;
		line-height: 1.8;
		color: #4b7166;
		max-width: 800px;
		margin: 0 auto;
	}
	
	
	.content p {
		margin-bottom: 1.5rem;
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
		margin-top: 2rem;
	}
	
	.btn-cta:hover {
		background-color: #c0e0d6;
		color: #4b7166;
		transform: translateY(-3px);
		box-shadow: 0 8px 25px rgba(75, 113, 102, 0.2);
	}
	
	@media (max-width: 768px) {
		.content-section {
			padding: 60px 0;
		}
		
		.content {
			font-size: 1rem;
		}
		
		.content h2 {
			font-size: 1.8rem;
		}
		
		.btn-cta {
			padding: 12px 28px;
			font-size: 1rem;
		}
	}
</style>

<Header />
<SimpleHero 
	title="A Tailored Approach" 
	subtitle="I recognize all individuals come to counselling with different personalities, temperaments, cultural backgrounds, needs, and past experiences—even if their struggles sometimes look similar from the outside."
/>

<section class="content-section">
	<div class="container">
		<div class="content">
			<p>In keeping with my trauma-informed, Neurodiversity-affirming, Health at Every SizeⓇ approach, I work with you to blend a variety of counselling modalities and techniques that best suit your specific needs. I meet you where you are at in your recovery journey. </p> 
<p>When it comes to disordered eating and eating disorder recovery I take a full assessment of where you are at with your eating, movement, and mood. We talk about your history and your hopes for therapy, and then get to work on a plan that will get you closer to where you'd like to be and how you'd like to feel. I give you the knowledge and  tried and true tools you need for making real progress in your recovery.</p>
<p>It is my belief that eating disorder/disordered eating behaviours develop not as a result of “self-sabotage” or “self-destruction” but as a means of necessary adaptation and survival. Honouring and showing compassion to the parts of ourselves that coped in whatever way they could with the limited resources and information they had available to them is a necessary step in healing. When we know better, have the right support, and learn to be kind to ourselves, we can do better. </p>
<p>Some therapeutic tools I frequently use with clients include CBT and exposure work, “parts” work (Internal Family Systems), emotion-focused strategies, somatic (body-based) interventions, and values-based cognitive approaches. I also offer Family Based Treatment for youth with eating disorders.</p>


			<div class="text-center">
				<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('myapproach-page')}>
					Book a Session
				</a>
			</div>
		</div>
	</div>
</section>

<Footer />
