const withPWA = require('next-pwa');

module.exports = withPWA({
	dest: 'static',
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === 'development',
	sw: '/service-worker.js',
	runtimeCaching: [
		{
			urlPattern: /[.](png|jpg|ico|css)/,
			handler: 'CacheFirst',
			options: {
			cacheName: 'assets-cache',
			cacheableResponse: {
					statuses: [0, 200],
				},
			},
		},
		{
			urlPattern: /^http.*/,
			handler: 'NetworkFirst',
			options: {
				cacheName: 'http-cache',
			},
		},
	],
});
