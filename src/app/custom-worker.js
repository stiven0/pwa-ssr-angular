
self.addEventListener('fetch', (event) => {
    
    const request = event.request;
    event.respondWith( fetch(request) );

});

importScripts('./ngsw-worker.js');