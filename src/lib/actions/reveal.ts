export function reveal(node: HTMLElement, options: { threshold?: number; delay?: number } = {}) {
	const threshold = options.threshold || 0.15;

	node.classList.add('reveal');

	if (options.delay) {
		node.style.transitionDelay = `${options.delay}ms`;
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				node.classList.add('in-view');
				// Unobserve so it stays visible and doesn't re-animate on every scroll
				observer.unobserve(node);
			}
		});
	}, {
		threshold
	});

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
