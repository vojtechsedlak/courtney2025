export function trackBookingClick(location) {
	try {
		if (typeof window !== 'undefined') {
			// Access gtag from the global window object using bracket notation
			const gtag = window['gtag'];
			if (gtag) {
				gtag('event', 'book_session_click', {
					event_category: 'engagement',
					event_label: location,
					value: 1
				});
			}
		}
	} catch (error) {
		console.warn('Analytics tracking failed:', error);
	}
}
