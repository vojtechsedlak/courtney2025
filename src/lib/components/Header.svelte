<script>
	import { page } from '$app/stores';
	import { trackBookingClick } from '$lib/utils/analytics.js';
	
	let showOffcanvas = false;
	
	function toggleOffcanvas() {
		showOffcanvas = !showOffcanvas;
	}
	
	function closeOffcanvas() {
		showOffcanvas = false;
	}
</script>

<style>
	.navbar {
		padding: 20px 0;
	}
	
	.navbar-brand img {
		height: 100px;
	}
	
	.navbar-nav {
		margin: 0 auto;
	}
	
	.navbar-nav .nav-link {
		font-family: 'Glacial Indifference', sans-serif;
		font-weight: 500;
		color: #4b7166 !important;
		margin: 0 25px;
		position: relative;
		transition: all 0.3s ease;
		font-size: 1.3rem;
	}
	
	.navbar-nav .nav-link:hover {
		color: #4b7166 !important;
	}
	
	.navbar-nav .nav-link::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -5px;
		left: 50%;
		background-color: #4b7166;
		transition: all 0.3s ease;
		transform: translateX(-50%);
	}
	
	.navbar-nav .nav-link:hover::after {
		width: 100%;
	}
	
	.btn-cta {
		background-color: #4b7166;
		border: none;
		color: #d1ebe3;
		font-family: 'Glacial Indifference', sans-serif;
		padding: 10px 25px;
		border-radius: 25px;
		text-decoration: none;
		transition: all 0.3s ease;
		font-size:1.3rem;
	}
	
	.btn-cta:hover {
		background-color: #3a5a52;
		color: #d1ebe3;
		transform: translateY(-2px);
	}
	
	.navbar-toggler {
		border: none;
		padding: 4px 8px;
	}
	
	.navbar-toggler:focus {
		box-shadow: none;
	}
	
	.offcanvas-header {
		border-bottom: 1px solid #e9ecef;
	}
	
	.offcanvas-body .nav-link {
		font-size: 1.5rem;
		padding: 15px 0;
		border-bottom: 1px solid #f8f9fa;
	}
	
	.offcanvas-body .btn-cta {
		margin-top: 20px;
		display: inline-block;
	}
</style>

<nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: #e8f4f0;">
	<div class="container">
		<a class="navbar-brand" href="/">
			<img src="/logo.svg" alt="Courtney Sedlak Logo" />
		</a>
		
		<button 
			class="navbar-toggler d-lg-none" 
			type="button" 
			on:click={toggleOffcanvas}
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		
		<div class="collapse navbar-collapse d-none d-lg-flex">
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="/my-approach" class:active={$page.url.pathname.startsWith('/myapproach')}>My Approach</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about-courtney" class:active={$page.url.pathname.startsWith('/aboutme')}>About Me</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact" class:active={$page.url.pathname.startsWith('/contact')}>Contact</a>
				</li>
			</ul>
			<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('header-desktop')}>
				Book a Session
			</a>
		</div>
	</div>
</nav>

<!-- Off-canvas menu for mobile -->
<div class="offcanvas offcanvas-end {showOffcanvas ? 'show' : ''}" tabindex="-1" style="visibility: {showOffcanvas ? 'visible' : 'hidden'};">
	<div class="offcanvas-header">
		<img src="/logo.svg" alt="Courtney Sedlak Logo" style="height: 60px;" />
		<button type="button" class="btn-close" on:click={closeOffcanvas} aria-label="Close"></button>
	</div>
	<div class="offcanvas-body">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link" href="/" on:click={closeOffcanvas}>Home</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/my-approach" on:click={closeOffcanvas}>My Approach</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/about-courtney" on:click={closeOffcanvas}>About Me</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/contact" on:click={closeOffcanvas}>Contact</a>
			</li>
		</ul>
		<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('header-mobile')}>
			Book a Session
		</a>
	</div>
</div>

{#if showOffcanvas}
	<div class="offcanvas-backdrop fade show" on:click={closeOffcanvas}></div>
{/if}
