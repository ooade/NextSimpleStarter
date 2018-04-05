const path = require('path')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
	webpack: (config, { buildId, dev }) => {
		/**
		 * Install and Update our Service worker
		 * on our main entry file :)
		 * Reason: https://github.com/ooade/NextSimpleStarter/issues/32
		 */
		const oldEntry = config.entry

		config.entry = () =>
			oldEntry().then(entry => {
				entry['main.js'] &&
					entry['main.js'].push(path.resolve('./utils/offline'))
				return entry
			})

		/* Enable only in Production */
		if (!dev) {
			// Service Worker
			config.plugins.push(
				new WorkboxPlugin.GenerateSW({
					cacheId: buildId,
					importWorkboxFrom: 'cdn',
					globDirectory: path.resolve('static/img'),
					globPatterns: ['**/*.{html,js,css}'],
					swDest: path.resolve('static', 'sw.js'),
					runtimeCaching: [
						// Example with different handlers
						{
							handler: 'staleWhileRevalidate',
							urlPattern: /[.](png|jpg|css)/
						},
						{
							handler: 'networkFirst',
							urlPattern: /^http.*/ //cache all files
						}
					]
				})
			)
		}

		return config
	}
}
