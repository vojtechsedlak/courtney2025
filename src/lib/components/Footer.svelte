<script>
	import { trackBookingClick } from '$lib/utils/analytics.js';
</script>

<style>
	.footer {
		background-color: #4b7166;
		color: white;
		padding: 60px 0 30px;
	}
	
	.footer-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
	}
	
	.footer-left {
		flex: 1;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.footer-logo {
		height: 100px;
	}
	
	.footer-center {
		flex: 1;
		text-align: center;
	}
	
	.footer-text {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}
	
	.footer-badges {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		flex-wrap: wrap;
	}
	
	.footer-badge {
		height: 60px;
		opacity: 0.9;
		transition: opacity 0.3s ease;
	}
	
	.footer-badge:hover {
		opacity: 1;
	}
	
	.footer-right {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	
	.btn-cta {
		background-color: #d1ebe3;
		border: none;
		color: #4b7166;
		font-family: 'Glacial Indifference', sans-serif;
		padding: 12px 30px;
		border-radius: 25px;
		text-decoration: none;
		font-size: 1.3rem;
		transition: all 0.3s ease;
		display: inline-block;
	}
	
	.btn-cta:hover {
		background-color: #c0e0d6;
		color: #4b7166;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(209, 235, 227, 0.3);
	}
	
	.footer-bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		padding-top: 2rem;
		margin-top: 2rem;
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 0.9rem;
		opacity: 0.8;
		text-align:center;
	}

	.footer-psych {
			text-align:center;
			margin:auto;
			width:146px;
		}
	
	@media (max-width: 768px) {
		.footer {
			padding: 40px 0 20px;
		}
		
		.footer-content {
			flex-direction: column;
			text-align: center;
			gap: 2rem;
		}
		
		.footer-left,
		.footer-center,
		.footer-right {
			flex: none;
		}
		
		.footer-logo {
			height: 50px;
		}
		
		.footer-text {
			font-size: 0.9rem;
			margin-bottom: 1.5rem;
		}
		
		.footer-badges {
			gap: 1rem;
		}
		
		.footer-badge {
			height: 50px;
		}

	}
</style>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-left">
				<img src="/logo_white.svg" alt="Courtney Sedlak Logo" class="footer-logo" />
			</div>
			
			<div class="footer-center">
				<p class="footer-text">
					I respectfully acknowledge that I live and work on the ancestral, traditional and unceded territory of the lək̓ʷəŋən and WSÁNEĆ peoples.
				</p>
				
				<div class="footer-badges">
					<img src="/footer_lgbt.png" alt="LGBTQ+ Affirming" class="footer-badge" />
					<img src="/footer_nd.png" alt="Neurodiversity Affirming" class="footer-badge" />
				</div>

			</div>
			
			<div class="footer-right">
				<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('footer')}>
					Book a Session
				</a>
			</div>
		</div>
		
		<div class="footer-bottom">
			<p>&copy; 2025 Courtney Sedlak. All rights reserved.</p>
			<div class="footer-psych">
					<!-- Professional verification provided by Psychology Today -->
<a href="https://www.psychologytoday.com/profile/787436" class="sx-verified-seal"></a>
<script type="text/javascript" src="https://member.psychologytoday.com/verified-seal.js" data-badge="13" data-id="787436" data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzc4NzQzNj9jYWxsYmFjaz1zeGNhbGxiYWNr"></script>
<!-- End Verification -->
				</div>
		</div>
	</div>
</footer>
