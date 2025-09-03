<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { trackBookingClick } from '$lib/utils/analytics.js';
	
	let isSubmitting = false;
	let isSubmitted = false;
	
	function updateButton() {
		isSubmitted = true;
	}
</script>

<svelte:head>
	<title>Contact - Courtney Sedlak - Eating Disorder Counselling in Greater Victoria, BC</title>
	<meta name="description" content="Get in touch with Courtney Sedlak, Registered Clinical Counsellor. Book a session or learn more about eating disorder recovery and intuitive eating counseling." />
</svelte:head>

<style>
	.content-section {
		padding: 80px 0;
		background-color: #ffffff;
	}
	
	.contact-content {
		max-width: 800px;
		margin: 0 auto;
	}
	
	.content {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1.1rem;
		line-height: 1.8;
		color: #333;
	}
	
	.content h2 {
		font-family: 'The Seasons', serif;
		font-size: 2.6rem;
		color: #4b7166;
		margin-bottom: 1.5rem;
		font-weight: 400;
		text-align: center;
	}
	
	.content p {
		margin-bottom: 1.8rem;
		text-align: center;
		color: #4b7166;
	}
	
	.contact-card {
		background-color: #e8f4f0;
		padding: 3rem 2rem;
		border-radius: 20px;
		text-align: center;
		margin: 3rem 0;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}
	
	.contact-card h3 {
		font-family: 'The Seasons', serif;
		font-size: 1.8rem;
		color: #4b7166;
		margin-bottom: 1.5rem;
		font-weight: 400;
	}
	
	.btn-cta {
		background-color: #4b7166;
		border: none;
		color: #d1ebe3;
		font-family: 'Glacial Indifference', sans-serif;
		padding: 18px 40px;
		border-radius: 30px;
		text-decoration: none;
		font-size: 1.3rem;
		transition: all 0.3s ease;
		display: inline-block;
		margin: 1rem 0;
	}
	
	.btn-cta:hover {
		background-color: #3a5a52;
		color: #d1ebe3;
		transform: translateY(-2px);
	}
	
	.info-section {
		background-color: #f8f9fa;
		padding: 2rem;
		border-radius: 15px;
		margin: 2rem 0;
	}
	
	.info-section h3 {
		font-family: 'The Seasons', serif;
		font-size: 1.6rem;
		color: #4b7166;
		margin-bottom: 1rem;
		font-weight: 400;
	}
	
	.info-section ul {
		margin: 1rem 0;
		padding-left: 0;
		list-style: none;
	}
	
	.info-section li {
		margin-bottom: 0.8rem;
		padding-left: 1.5rem;
		position: relative;
	}
	
	.info-section li::before {
		content: '•';
		color: #4b7166;
		font-weight: bold;
		position: absolute;
		left: 0;
	}
	
	.contact-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin: 2rem 0;
		text-align: center;
	}
	
	.contact-item h3 {
		font-family: 'The Seasons', serif;
		font-size: 1.6rem;
		color: #4b7166;
		margin-bottom: 0.5rem;
		font-weight: 400;
	}
	
	.contact-item a {
		color: #4b7166;
		text-decoration: none;
		font-weight: 500;
	}
	
	.contact-item a:hover {
		text-decoration: underline;
	}
	
	.contact-form-section {
		background-color: #f8f9fa;
		padding: 2rem;
		border-radius: 15px;
		margin: 2rem 0;
	}
	
	.contact-form-section h3 {
		font-family: 'The Seasons', serif;
		font-size: 1.6rem;
		color: #4b7166;
		margin-bottom: 1.5rem;
		font-weight: 400;
		text-align: center;
	}
	
	.contact-form {
		max-width: 500px;
		margin: 0 auto;
	}
	
	.form-group {
		margin-bottom: 1.5rem;
	}
	
	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: #4b7166;
	}
	
	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 12px 15px;
		border: 2px solid #e9ecef;
		border-radius: 8px;
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1rem;
		transition: border-color 0.3s ease;
	}
	
	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #4b7166;
	}
	
	.contact-form .btn-cta {
		width: 100%;
		margin-top: 1rem;
		cursor: pointer;
		border: none;
	}
	
	.locations-section {
		margin: 3rem 0;
	}
	
	.locations-section h3 {
		font-family: 'The Seasons', serif;
		font-size: 1.8rem;
		color: #4b7166;
		margin-bottom: 1.5rem;
		font-weight: 400;
		text-align: center;
	}
	
	.map-container {
		margin: 2rem 0;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
		overflow: hidden;
	}
	
	.location-details {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-top: 2rem;
	}
	
	.location {
		text-align: center;
		padding: 1.5rem;
		background-color: #f8f9fa;
		border-radius: 15px;
	}
	
	.location h4 {
		font-family: 'The Seasons', serif;
		font-size: 1.4rem;
		color: #4b7166;
		margin-bottom: 0.5rem;
		font-weight: 400;
	}
	
	.location p {
		margin: 0;
		line-height: 1.6;
	}
	
	@media (max-width: 768px) {
		.content-section {
			padding: 60px 0;
		}
		
		.contact-card {
			padding: 2rem 1.5rem;
			margin: 2rem 0;
		}
		
		.contact-card h3 {
			font-size: 1.5rem;
		}
		
		.content {
			font-size: 1rem;
		}
		
		.content h2 {
			font-size: 1.8rem;
		}
		
		.btn-cta {
			padding: 15px 32px;
			font-size: 1.1rem;
		}
		
		.info-section {
			padding: 1.5rem;
		}
		
		.info-section h3 {
			font-size: 1.4rem;
		}
		
		.contact-info {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		
		.location-details {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		
		.contact-form-section {
			padding: 1.5rem;
		}
		
		.map-container iframe {
			height: 250px;
		}
	}
</style>

<Header />

<section class="content-section">
	<div class="container">
		<div class="contact-content">
			<div class="content">
				<h2>Contact Courtney</h2>
				<p>
					Counselling is a deeply personal experience and finding a counsellor who feels like a good fit for you is an important first step. If you'd like to connect before booking your first session to make sure I am the right person to work with you, feel free to contact me via phone or email, or schedule a free 20-minute phone/video consultation with me.
				</p>
				
				<div class="contact-info">
					<div class="contact-item">
						<h3>Phone</h3>
						<p><a href="tel:6043738381">(604) 373-8381</a></p>
					</div>
					<div class="contact-item">
						<h3>Email</h3>
						<p><a href="mailto:courtney@courtneysedlak.com">courtney@courtneysedlak.com</a></p>
					</div>
				</div>
				
				<div class="contact-card">
					<h3>Schedule Online</h3>
					<p>The easiest way to book your appointment is through my online booking system. You can view available times and choose what works best for your schedule.</p>
					<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('contact-page')}>
						Book a Session
					</a>
				</div>

				<div class="locations-section">
					<h3>Office Locations</h3>
					<div class="location-details">
						<div class="location">
							<h4>Primary Location</h4>
							<p>1834A Oak Bay Avenue<br>Victoria, BC V8R 1C2</p>
						</div>
						<div class="location">
							<h4>Additional Location</h4>
							<p>The Neurodiversity Family Centre<br>1175 Cook Street, Unit 318<br>Victoria, BC V8V 4A1</p>
						</div>
					</div>
					
					<div class="map-container">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5289.6!2d-123.3!3d48.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f738bdcf2b5e5%3A0x2b1b1b1b1b1b1b1b!2s1834A%20Oak%20Bay%20Ave%2C%20Victoria%2C%20BC!5e0!3m2!1sen!2sca!4v1234567890"
							width="100%" 
							height="300" 
							style="border:0; border-radius: 15px;" 
							allowfullscreen={true}
							loading="lazy" 
							referrerpolicy="no-referrer-when-downgrade">
						</iframe>
					</div>
					
					
				</div>
				
			<!--	<div class="contact-form-section">
					<h3>Send a Message</h3>
					<iframe title="dummy" name="dummy" id="dummy" style="display: none;"></iframe>
					<form target="dummy" method="POST" action="https://script.google.com/macros/s/AKfycbyquQpUmIy_2v4lRKhgxbBEWoOAxTvl88iw_REdTirbXyGj_KGzHpjy135MnRDyfGstiQ/exec" class="contact-form">
						<div class="form-group">
							<label for="name">Name</label>
							<input type="text" id="name" name="name" required disabled={isSubmitting || isSubmitted}>
						</div>
						<div class="form-group">
							<label for="email">Email</label>
							<input type="email" id="email" name="email" required disabled={isSubmitting || isSubmitted}>
						</div>
						<div class="form-group">
							<label for="message">Your Message</label>
							<textarea id="message" name="message" rows="5" required disabled={isSubmitting || isSubmitted}></textarea>
						</div>
						<button type="submit" class="btn-cta" on:click={updateButton} disabled={isSubmitting || isSubmitted}>
							{#if isSubmitting}
								Sending...
							{:else if isSubmitted}
								Message Sent!
							{:else}
								Send Message
							{/if}
						</button>
					</form>
				</div>-->
				
				
			</div>
		</div>
	</div>
</section>

<Footer />
