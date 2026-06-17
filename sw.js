const APP_VERSION='313.16';
const CACHE='hcq-v313-16-branding';
const ASSETS=['./','./index.html','./manifest.webmanifest?v=31316-hcq','./icon-192.png?v=31316-hcq','./icon-512.png?v=31316-hcq','./apple-touch-icon.png?v=31316-hcq','./logo-hcq.png?v=31316-hcq'];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).catch(()=>{}));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
    const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of clients){client.postMessage({type:'APP_UPDATED',version:APP_VERSION});}
  })());
});

self.addEventListener('message',event=>{
  if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(req.mode==='navigate' || url.pathname.endsWith('/index.html')){
    event.respondWith(fetch(req,{cache:'no-store'}).then(resp=>{
      const copy=resp.clone();
      caches.open(CACHE).then(cache=>cache.put('./index.html',copy)).catch(()=>{});
      return resp;
    }).catch(()=>caches.match('./index.html')));
    return;
  }
  if(url.pathname.endsWith('/sw.js') || url.pathname.endsWith('/manifest.webmanifest')){
    event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match(req)));
    return;
  }
  event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match(req)));
});
