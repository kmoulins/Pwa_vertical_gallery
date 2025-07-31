const CACHE_NAME = 'simple-vertical-gallery-cache-v1'
const urls_to_cache=[
	'index.html',
	'styles.css',
	'script.js',
	'manifest.json',
	'icon.png'
]

self.addEventListener('install', e=>{
	e.waitUntil(
		caches.open(CACHE_NAME).then(c=>{
			return c.addAll(urls_to_cache);
		})
	);
	
});
self.addEventListener('fetch', e=>{
	e.respondWith(
		caches.match(e.request).then(r=>{
			return r || fetch(e.request);
		})
	);
	
});