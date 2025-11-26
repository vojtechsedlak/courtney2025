<script lang="ts">
	interface BreadcrumbItem {
		text: string;
		url?: string;
	}
	
	export let items: BreadcrumbItem[] = [];
</script>

<style>
	.breadcrumb-container {
		background-color: #f8faf9;
		padding: 1rem 0;
		border-bottom: 1px solid #e8f4f0;
	}
	
	.breadcrumb {
		font-family: 'Glacial Indifference', sans-serif;
		font-size: 0.9rem;
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		align-items: center;
		color: #4b7166;
	}
	
	.breadcrumb-item {
		display: flex;
		align-items: center;
	}
	

	
	.breadcrumb-link {
		color: #4b7166;
		text-decoration: none;
		transition: color 0.2s ease;
	}
	
	.breadcrumb-link:hover {
		color: #3a5a52;
		text-decoration: underline;
	}
	
	.breadcrumb-current {
		color: #6b7280;
		font-weight: 500;
	}
	
	@media (max-width: 768px) {
		.breadcrumb-container {
			padding: 0.75rem 0;
		}
		
		.breadcrumb {
			font-size: 0.8rem;
		}
	}
</style>

{#if items && items.length > 0}
<nav class="breadcrumb-container" aria-label="Breadcrumb">
	<div class="container">
		<ol class="breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList">
			{#each items as item, index}
				<li class="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
					{#if item.url && index < items.length - 1}
						<a href={item.url} class="breadcrumb-link" itemProp="item">
							<span itemProp="name">{item.text}</span>
						</a>
					{:else}
						<span class="breadcrumb-current" itemProp="name">{item.text}</span>
					{/if}
					<meta itemProp="position" content={(index + 1).toString()} />
				</li>
			{/each}
		</ol>
	</div>
</nav>
{/if}
