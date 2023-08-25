// const withOffline = require('next-offline');

const withPwa= require('next-pwa')



module.exports = withPwa({
	dest: 'public',
	register:true,
	skipWaiting:true,
	disable: process.env.NODE_ENV === 'development',
	swDest: 'static/service-worker.js',
	runtimeCaching: [
		{
			urlPattern: /[.](png|jpg|ico|css)/,
			handler: 'CacheFirst',
			options: {
			cacheName: 'assets-cache',
			cacheableResponse: {
					tatuses: [0, 200],
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
	
})
