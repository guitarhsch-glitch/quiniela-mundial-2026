const APP_VERSION='315.11';
const CACHE='hcq-v315-11-realtime';
const ASSETS=[
  './?v=31511-realtime',
  './index.html?v=31511-realtime',
  './manifest.webmanifest?v=31511-realtime',
  './icon-192-v31333-debug-api.png?v=31511-realtime',
  './icon-512-v31333-debug-api.png?v=31511-realtime',
  './apple-touch-icon-v31333-debug-api.png?v=31511-realtime',
  './favicon-v31333-debug-api.ico?v=31511-realtime',
  './logo-hcq-login-v31317.png?v=31511-realtime'
];

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
    for(const client of clients){ client.postMessage({type:'APP_UPDATED',version:APP_VERSION,forceIconRefresh:true}); }
  })());
});

self.addEventListener('message',event=>{ if(event.data && event.data.type==='SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  const isAppShell=req.mode==='navigate'||url.pathname.endsWith('/index.html');
  const isFreshAsset=url.pathname.endsWith('/sw.js')||url.pathname.endsWith('/manifest.webmanifest')||/icon-|apple-touch-icon|favicon/.test(url.pathname);
  const isFlag=url.hostname==='flagcdn.com';
  if(isAppShell||isFreshAsset){
    event.respondWith(fetch(req,{cache:'reload'}).then(resp=>{const copy=resp.clone(); caches.open(CACHE).then(cache=>cache.put(req,copy)).catch(()=>{}); return resp;}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html?v=31511-realtime'))));
    return;
  }
  if(isFlag){
    event.respondWith(caches.match(req).then(cached=>cached||fetch(req,{mode:'no-cors',cache:'force-cache'}).then(resp=>{const copy=resp.clone(); caches.open(CACHE).then(cache=>cache.put(req,copy)).catch(()=>{}); return resp;})).catch(()=>fetch(req)));
    return;
  }
  event.respondWith(fetch(req,{cache:'no-store'}).catch(()=>caches.match(req)));
});
