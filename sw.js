const APP_VERSION='315.14';
const CACHE='hcq-v315-14-clean-cache';

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async()=>{
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
    await self.clients.claim();
    const clients = await self.clients.matchAll({type:'window', includeUncontrolled:true});
    for (const client of clients) {
      client.postMessage({type:'APP_UPDATED', version:APP_VERSION, forceReload:true});
    }
  })());
});

self.addEventListener('message', event => {
  if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting();
  if(event.data && event.data.type==='CLEAR_HCQ_CACHE'){
    event.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))));
  }
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  event.respondWith(fetch(req, {cache:'no-store'}).catch(()=>caches.match(req)));
});
