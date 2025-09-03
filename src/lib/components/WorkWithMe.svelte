<script lang="ts">
	import { trackBookingClick } from '$lib/utils/analytics.js';
	
	let activeTab = 'eating-disorders';
	
	function setActiveTab(tab: string) {
		activeTab = tab;
	}
</script>

<style>
	.work-with-me {
		padding: 80px 0;
		background-color: #e8f4f0;
	}
	
	.section-title {
		font-family: 'The Seasons', serif;
		font-size: 4rem;
		color: #4b7166;
		text-align: center;
		margin-bottom: 3rem;
		font-weight: 400;
	}
	
	.tab-pills {
		display: flex;
		justify-content: center;
		margin-bottom: 3rem;
		background-color: #f8f9fa;
		border-radius: 30px;
		padding: 4px;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}
	
	.tab-pill {
		background-color: transparent;
		border: none;
		color: #4b7166;
		font-family: 'Glacial Indifference', sans-serif;
		font-weight: 600;
		padding: 12px 25px;
		border-radius: 26px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 1rem;
		flex: 1;
		text-align: center;
	}
	
	.tab-pill:hover {
		background-color: rgba(75, 113, 102, 0.1);
		color: #4b7166;
	}
	
	.tab-pill.active {
		background-color: #4b7166;
		color: white;
		box-shadow: 0 2px 8px rgba(75, 113, 102, 0.3);
	}
	
	.tab-content {
		max-width: 1000px;
		margin: 0 auto;
	}
	
	.tab-pane {
		display: none;
		animation: fadeIn 0.3s ease-in;
	}
	
	.tab-pane.active {
		display: block;
	}
	
	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
	
	.tab-row {
		display: flex;
		align-items: flex-start;
		gap: 3rem;
	}
	
	.content {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 1.3rem;
		line-height: 1.8;
		color: #4b7166;
		text-align: left;
		flex: 1;
	}
	
	.tab-image {
		flex: 0 0 300px;
		width: 300px;
		height: 400px;
		object-fit: cover;
		border-radius: 15px;
	}
	
	.content p {
		margin-bottom: 1.3rem;
	}
	
	.content ul {
		text-align: left;
		max-width: 600px;
		margin: 2rem auto;
		padding-left: 0;
		list-style: none;
	}
	
	.content li {
		margin-bottom: 0.8rem;
		padding-left: 1.5rem;
		position: relative;
	}
	
	.content li::before {
		content: '•';
		color: #4b7166;
		font-weight: bold;
		position: absolute;
		left: 0;
	}
	
	.btn-cta {
		background-color: #4b7166;
		border: none;
		color: #d1ebe3;
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
		background-color: #3a5a52;
		color: #d1ebe3;
		transform: translateY(-2px);
	}
	
	@media (max-width: 768px) {
		.work-with-me {
			padding: 60px 0;
		}
		
		.section-title {
			font-size: 2rem;
			margin-bottom: 2rem;
		}
		
		.tab-pills {
			max-width: 350px;
			padding: 3px;
		}
		
		.tab-pill {
			font-size: 0.9rem;
			padding: 10px 15px;
		}
		
		.tab-pane {
			min-height: 400px;
		}
		
		.tab-row {
			flex-direction: column;
			gap: 2rem;
		}
		
		.content {
			font-size: 1rem;
			padding: 0 30px;
			max-width: none;
		}
		
		.tab-image {
			flex: none;
			width: 100%;
			max-width: 400px;
			height: 300px;
			margin: 0 auto;
		}
		
		.btn-cta {
			padding: 12px 28px;
			font-size: 1rem;
		}
	}
</style>

<section class="work-with-me">
	<div class="container">
		<h2 class="section-title">Work With Me</h2>
		
		<div class="tab-pills">
			<button 
				class="tab-pill {activeTab === 'eating-disorders' ? 'active' : ''}"
				on:click={() => setActiveTab('eating-disorders')}
			>
				Eating Disorders
			</button>
			<button 
				class="tab-pill {activeTab === 'anxiety-ocd' ? 'active' : ''}"
				on:click={() => setActiveTab('anxiety-ocd')}
			>
				Anxiety & OCD
			</button>
		</div>
		
		<div class="tab-content">
			<div class="tab-pane eating-disorders {activeTab === 'eating-disorders' ? 'active' : ''}">
				<div class="tab-row">
					<div class="content">
						<p>Struggling with disordered eating or eating disorders is <b>SO HARD</b>. Your mind is a muddled mess of constant thoughts about food and your body. And whatever you do, you just can't seem to shut them off. </p>
<p><i>Maybe I'll skip lunch with my friends because it's just too stressful to eat food I didn't cook myself. </i></p>
<p><i>I need to eat as little as possible today to make up for that shameful binge last night. </i></p>
<p><i>I have got to stop purging after meals but if I do I'm going to gain weight. </i></p>
<p>Perhaps you are tired of being <b>stuck in cycles of restriction</b>, fed up with avoiding your favourite foods because you're fearful you'll binge, or sick of making yourself sick. Maybe you're finding yourself exhausted from the intense workout schedule you feel you have to stick to in order to feel okay in your body or to “deserve” your next meal. </p>
<p>You probably feel like you've tried everything to recover. You've done hours of research, you've watched every recovery TikTok video there is, and you've even tried to eat intuitively. You are trying SO HARD to feel better but nothing seems to work–at least not for very long. This all leaves you in a series of anxiety spirals and hopeless holes. </p>
<p>I've been there. It's horrible. That's why I'm passionate about helping clients make real and sustainable progress in their recovery journeys. I believe that full recovery from disordered eating and eating disorders is possible not only because I have done it, but I've worked with many, many clients who have done it too. </p>
<p>Food freedom and a better relationship with your body are possible for you, even if right now that feels totally out of reach. Together we can come up with a holistic plan that addresses the physical, emotional, and psychological aspects of recovery so that you can start eating what you want and living the life you desire. A life that isn't dictated by rigid restriction, post-binge shame spirals, or skipping social events because you can only eat your “safe foods.” </p>

						<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('work-with-me-eating-disorders')}>
							Book a Session
						</a>
					</div>
					<img src="/bg1.jpg" alt="Eating Disorders Support" class="tab-image" />
				</div>
			</div>
			
			<div class="tab-pane anxiety {activeTab === 'anxiety-ocd' ? 'active' : ''}">
				<div class="tab-row">
					<div class="content">
						<p>Anxiety disorders can feel terrifying. Your threat response is going off ALL THE TIME. Maybe you feel like you can’t relax–like you are stuck in overdrive and cannot for the life of you slow down. Or, maybe you are plagued with intense physical symptoms like heart palpitations, nausea, bloating, dizziness, and can’t shake the feeling that something is medically wrong, despite all your medical tests coming back normal. </p>
<p>Perhaps you’ve even stopped doing the things you used to love to do–your world has shrunk and doing absolutely anything fills you with a sense of complete overwhelm. And maybe on top of it all your mind is filled with intrusive thoughts that you keep trying to push away but they just keep on looping. </p>
<p>Unfortunately, there is so much misinformation out there telling us how to “regulate” our nervous systems or “how to stop” anxiety in 10 seconds. Or we are bombarded with ads that convince us that if we spend hundreds of dollars on the latest vagus nerve stimulating device or supplement regime we can finally be free and feel calm. </p>
<p>The paradox about anxiety is that the more that we try to make it go away, the worse it gets. That’s why I’m passionate about using evidence-based treatment modalities like CBT and ERP for treating disordered anxiety, anxiety disorders, and OCD.  </p>


						<a href="https://courtneysedlak.janeapp.com/#/staff_member/1" class="btn-cta" target="_blank" rel="noopener noreferrer" on:click={() => trackBookingClick('work-with-me-anxiety')}>
							Book a Session
						</a>
					</div>
					<img src="/bg2.jpeg" alt="Anxiety & OCD Counselling Support" class="tab-image" />
				</div>
			</div>
		</div>
	</div>
</section>
