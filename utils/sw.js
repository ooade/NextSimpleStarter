workbox.core.setCacheNameDetails({ prefix: 'next-ss' })

workbox.skipWaiting()
workbox.clientsClaim()

workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
	/[.](png|jpg|css)/,
	workbox.strategies.cacheFirst({
		cacheName: 'assets-cache',
		cacheableResponse: {
			statuses: [0, 200]
		}
	}),
	'GET'
)

workbox.routing.registerRoute(
	/^http.*/,
	workbox.strategies.networkFirst({
		cacheName: 'http-cache'
	}),
	'GET'
)
