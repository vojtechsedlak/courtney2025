<script>
	import Header from '$lib/components/Header.svelte';
	import SimpleHero from '$lib/components/SimpleHero.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { trackBookingClick } from '$lib/utils/analytics.js';
</script>

<svelte:head>
	<title>About Me - Courtney Sedlak - Eating Disorder Counselling in Greater Victoria, BC</title>
	<meta name="description" content="Learn more about Courtney Sedlak, Registered Clinical Counsellor specializing in eating disorder recovery and perinatal counseling." />
</svelte:head>

<style>
	.content-section {
		padding: 80px 0;
		background-color: #ffffff;
	}
	
	.about-content {
		max-width: 1000px;
		margin: 0 auto;
	}
	
	.about-image {
		width: 100%;
		max-width: 400px;
		height: auto;
		object-fit: contain;
	}
	
	.content {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1.3rem;
		line-height: 1.8;
		color: #4b7166;
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
		
		.about-image {
			max-width: 280px;
			height: 280px;
		}
		
		.content {
			font-size: 1rem;
		}
		
		.content h2 {
			font-size: 1.8rem;
		}
		
		.credentials {
			padding: 1.5rem;
		}
		
		.btn-cta {
			padding: 12px 28px;
			font-size: 1rem;
		}
	}
</style>

<Header />
<SimpleHero 
	title="About Me" 
	subtitle="My journey to becoming a counsellor was not a linear one"
/>

<section class="content-section">
	<div class="container">
		<div class="about-content">
			<div class="row align-items-start">
				<div class="col-lg-4 col-md-5 mb-4 mb-md-0 text-center">
					<img src="/courtney2.jpg" alt="Courtney Sedlak, Registered Clinical Counsellor" class="about-image" />
				</div>
				<div class="col-lg-8 col-md-7 content">
					<p>After completing my undergrad degree in English I decided to head to culinary and pastry school for a creative and more hands-on education. I then worked in Vancouver as a personal chef and holistic nutritionist, helping others in their relationships with food. It was this experience, along with my personal history of struggling with an eating disorder, that led me to pursue a career in counselling. In doing so, I was able to expand and deepen my knowledge about the complex relationships we humans have with food, our bodies, and our emotions so that I could better help people struggling with all three.</p>
<p>Since completing my Master of Counselling degree in 2020 from City University of Seattle in Vancouver, where I focused my thesis research on orthorexia, I've worked on multidisciplinary teams with youth, adults and families in community-based eating disorder programs and in private practice.</p>
<p>In the past few years I've expanded my area of focus to include Neurodivergence, as I'm passionate about working with Autistic and ADHD folks. This interest was the natural evolution of specializing in working with people struggling with disordered eating and eating disorders—a mental health and physical challenge that disproportionately impacts Neurodivergent people. </p>
<p>Just as my lived experience with an eating disorder has informed my work, so has my first-hand experience with postpartum anxiety after the birth of my son in 2021. In my own attempt to understand my suffering I developed a deep curiosity about perinatal mental health and decided to pursue specialized training and certification in this area. Since then, I've thoroughly enjoyed supporting folks who are pregnant, postpartum, or in the process of starting a family. </p>
<p>When I am not with clients, you can find me exploring the city and surrounding nature with my kiddo and partner, connecting with close friends, organizing playdates, and trying desperately to focus for long enough to read a book. </p>
				</div>

				<div class="text-center">
					<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('aboutme-page')}>
						Book a Session
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<Footer />
