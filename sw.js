self.addEventListener('install',e=>{
  e.waitUntil(caches.open('sportlearn-v1').then(c=>c.addAll([
    'index.html','styles.css','script.js','video-tutorials.html','visualization.html'
  ])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
