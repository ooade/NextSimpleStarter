const withOffline = require('next-offline')

module.exports = withOffline({
	target: 'serverless',
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /[.](png|jpg|ico|css)/,
				handler: 'cacheFirst',
				options: {
					cacheName: 'assets-cache',
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			},
			{
				urlPattern: /^https:\/\/code\.getmdl\.io.*/,
				handler: 'cacheFirst',
				options: {
					cacheName: 'lib-cache'
				}
			},
			{
				urlPattern: /^http.*/,
				handler: 'networkFirst',
				options: {
					cacheName: 'http-cache'
				}
			}
		]
	}
})
