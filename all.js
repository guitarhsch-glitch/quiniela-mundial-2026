


(function(){
  const img=new Image();
  img.src='logo-hcq-login-v31317.png?v=31328-ux-lag';
  if(img.decode) img.decode().catch(()=>{});
})();
const DEFAULT_URL=['https://','kwezracgftuzctzwejlt','.supabase','.co'].join('');
const EMBED_KEY='sb_publishable_-O5P9UDDqqkcbkWK4TkXbQ_XRXt_kqD'; // Clave publicable integrada para no pedir configuración en celulares.
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
const teams=[["Grupo A","México","🇲🇽"],["Grupo A","Sudáfrica","🇿🇦"],["Grupo A","Corea del Sur","🇰🇷"],["Grupo A","Chequia","🇨🇿"],["Grupo B","Canadá","🇨🇦"],["Grupo B","Suiza","🇨🇭"],["Grupo B","Catar","🇶🇦"],["Grupo B","Bosnia y Herzegovina","🇧🇦"],["Grupo C","Brasil","🇧🇷"],["Grupo C","Marruecos","🇲🇦"],["Grupo C","Haití","🇭🇹"],["Grupo C","Escocia","🏴"],["Grupo D","Estados Unidos","🇺🇸"],["Grupo D","Paraguay","🇵🇾"],["Grupo D","Australia","🇦🇺"],["Grupo D","Turquía","🇹🇷"],["Grupo E","Alemania","🇩🇪"],["Grupo E","Curazao","🇨🇼"],["Grupo E","Costa de Marfil","🇨🇮"],["Grupo E","Ecuador","🇪🇨"],["Grupo F","Países Bajos","🇳🇱"],["Grupo F","Japón","🇯🇵"],["Grupo F","Túnez","🇹🇳"],["Grupo F","Suecia","🇸🇪"],["Grupo G","Bélgica","🇧🇪"],["Grupo G","Egipto","🇪🇬"],["Grupo G","Irán","🇮🇷"],["Grupo G","Nueva Zelanda","🇳🇿"],["Grupo H","España","🇪🇸"],["Grupo H","Cabo Verde","🇨🇻"],["Grupo H","Arabia Saudita","🇸🇦"],["Grupo H","Uruguay","🇺🇾"],["Grupo I","Francia","🇫🇷"],["Grupo I","Senegal","🇸🇳"],["Grupo I","Noruega","🇳🇴"],["Grupo I","Irak","🇮🇶"],["Grupo J","Argentina","🇦🇷"],["Grupo J","Argelia","🇩🇿"],["Grupo J","Austria","🇦🇹"],["Grupo J","Jordania","🇯🇴"],["Grupo K","Portugal","🇵🇹"],["Grupo K","Uzbekistán","🇺🇿"],["Grupo K","Colombia","🇨🇴"],["Grupo K","Congo RD","🇨🇩"],["Grupo L","Inglaterra","🏴"],["Grupo L","Croacia","🇭🇷"],["Grupo L","Ghana","🇬🇭"],["Grupo L","Panamá","🇵🇦"]];
const flagOf=n=>(teams.find(t=>t[1]===n)||['','','🏳️'])[2], allTeamNames=[...new Set(teams.map(t=>t[1]))].sort();
const flagCodes={"México":"mx","Sudáfrica":"za","Corea del Sur":"kr","Chequia":"cz","Canadá":"ca","Suiza":"ch","Catar":"qa","Bosnia y Herzegovina":"ba","Brasil":"br","Marruecos":"ma","Haití":"ht","Escocia":"gb-sct","Estados Unidos":"us","Paraguay":"py","Australia":"au","Turquía":"tr","Alemania":"de","Curazao":"cw","Costa de Marfil":"ci","Ecuador":"ec","Países Bajos":"nl","Japón":"jp","Túnez":"tn","Suecia":"se","Bélgica":"be","Egipto":"eg","Irán":"ir","Nueva Zelanda":"nz","España":"es","Cabo Verde":"cv","Arabia Saudita":"sa","Uruguay":"uy","Francia":"fr","Senegal":"sn","Noruega":"no","Irak":"iq","Argentina":"ar","Argelia":"dz","Austria":"at","Jordania":"jo","Portugal":"pt","Uzbekistán":"uz","Colombia":"co","Congo RD":"cd","Inglaterra":"gb-eng","Croacia":"hr","Ghana":"gh","Panamá":"pa"};
function flagImg(name,cls='flag-img'){
 const code=flagCodes[name];
 if(!code)return `<span class="flag small-flag">${flagOf(name)}</span>`;
 const priority=cls==='flag-img'?'auto':'low';
 return `<img class="${cls}" src="https://flagcdn.com/w40/${code}.png" srcset="https://flagcdn.com/w80/${code}.png 2x" alt="Bandera de ${esc(name)}" loading="lazy" decoding="async" fetchpriority="${priority}" onload="this.classList.add('is-loaded')" onerror="this.outerHTML='<span class=&quot;flag small-flag&quot;>${flagOf(name)}</span>'">`;
}
function teamLabel(name,inline=false){return `${flagImg(name,inline?'flag-inline':'flag-img')}${esc(name)}`;}
function preloadCriticalFlags(){try{ const names=[...new Set([...liveMatches(),...upcomingMatches().slice(0,8)].flatMap(m=>[m.home,m.away]))]; names.forEach(name=>{const code=flagCodes[name]; if(!code) return; const img=new Image(); img.decoding='async'; img.src=`https://flagcdn.com/w80/${code}.png`;}); }catch(e){}}

const groupMatches=[{"id":"g1","phase":"groups","date":"2026-06-11T13:00:00-06:00","home":"México","away":"Sudáfrica","group":"Grupo A","venue":"Estadio Azteca, Ciudad de México"},{"id":"g2","phase":"groups","date":"2026-06-11T20:00:00-06:00","home":"Corea del Sur","away":"Chequia","group":"Grupo A","venue":"Estadio Akron, Guadalajara"},{"id":"g3","phase":"groups","date":"2026-06-12T13:00:00-06:00","home":"Canadá","away":"Bosnia y Herzegovina","group":"Grupo B","venue":"BMO Field, Toronto"},{"id":"g4","phase":"groups","date":"2026-06-12T19:00:00-06:00","home":"Estados Unidos","away":"Paraguay","group":"Grupo D","venue":"SoFi Stadium, Los Ángeles"},{"id":"g5","phase":"groups","date":"2026-06-13T13:00:00-06:00","home":"Catar","away":"Suiza","group":"Grupo B","venue":"Levi’s Stadium, Santa Clara"},{"id":"g6","phase":"groups","date":"2026-06-13T16:00:00-06:00","home":"Brasil","away":"Marruecos","group":"Grupo C","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g7","phase":"groups","date":"2026-06-13T19:00:00-06:00","home":"Haití","away":"Escocia","group":"Grupo C","venue":"Gillette Stadium, Boston"},{"id":"g8","phase":"groups","date":"2026-06-13T22:00:00-06:00","home":"Australia","away":"Turquía","group":"Grupo D","venue":"BC Place, Vancouver"},{"id":"g9","phase":"groups","date":"2026-06-14T11:00:00-06:00","home":"Alemania","away":"Curazao","group":"Grupo E","venue":"NRG Stadium, Houston"},{"id":"g10","phase":"groups","date":"2026-06-14T14:00:00-06:00","home":"Países Bajos","away":"Japón","group":"Grupo F","venue":"AT&T Stadium, Dallas"},{"id":"g11","phase":"groups","date":"2026-06-14T17:00:00-06:00","home":"Costa de Marfil","away":"Ecuador","group":"Grupo E","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g12","phase":"groups","date":"2026-06-14T20:00:00-06:00","home":"Suecia","away":"Túnez","group":"Grupo F","venue":"Estadio BBVA, Monterrey"},{"id":"g13","phase":"groups","date":"2026-06-15T10:00:00-06:00","home":"España","away":"Cabo Verde","group":"Grupo H","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g14","phase":"groups","date":"2026-06-15T13:00:00-06:00","home":"Bélgica","away":"Egipto","group":"Grupo G","venue":"Lumen Field, Seattle"},{"id":"g15","phase":"groups","date":"2026-06-15T16:00:00-06:00","home":"Arabia Saudita","away":"Uruguay","group":"Grupo H","venue":"Hard Rock Stadium, Miami"},{"id":"g16","phase":"groups","date":"2026-06-15T19:00:00-06:00","home":"Irán","away":"Nueva Zelanda","group":"Grupo G","venue":"SoFi Stadium, Los Ángeles"},{"id":"g17","phase":"groups","date":"2026-06-16T13:00:00-06:00","home":"Francia","away":"Senegal","group":"Grupo I","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g18","phase":"groups","date":"2026-06-16T16:00:00-06:00","home":"Irak","away":"Noruega","group":"Grupo I","venue":"Gillette Stadium, Boston"},{"id":"g19","phase":"groups","date":"2026-06-16T19:00:00-06:00","home":"Argentina","away":"Argelia","group":"Grupo J","venue":"Arrowhead Stadium, Kansas City"},{"id":"g20","phase":"groups","date":"2026-06-16T22:00:00-06:00","home":"Austria","away":"Jordania","group":"Grupo J","venue":"Levi’s Stadium, Santa Clara"},{"id":"g21","phase":"groups","date":"2026-06-17T11:00:00-06:00","home":"Portugal","away":"Congo RD","group":"Grupo K","venue":"NRG Stadium, Houston"},{"id":"g22","phase":"groups","date":"2026-06-17T14:00:00-06:00","home":"Inglaterra","away":"Croacia","group":"Grupo L","venue":"AT&T Stadium, Dallas"},{"id":"g23","phase":"groups","date":"2026-06-17T17:00:00-06:00","home":"Ghana","away":"Panamá","group":"Grupo L","venue":"BMO Field, Toronto"},{"id":"g24","phase":"groups","date":"2026-06-17T20:00:00-06:00","home":"Uzbekistán","away":"Colombia","group":"Grupo K","venue":"Estadio Azteca, Ciudad de México"},{"id":"g25","phase":"groups","date":"2026-06-18T10:00:00-06:00","home":"Chequia","away":"Sudáfrica","group":"Grupo A","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g26","phase":"groups","date":"2026-06-18T13:00:00-06:00","home":"Suiza","away":"Bosnia y Herzegovina","group":"Grupo B","venue":"SoFi Stadium, Los Ángeles"},{"id":"g27","phase":"groups","date":"2026-06-18T16:00:00-06:00","home":"Canadá","away":"Catar","group":"Grupo B","venue":"BC Place, Vancouver"},{"id":"g28","phase":"groups","date":"2026-06-18T19:00:00-06:00","home":"México","away":"Corea del Sur","group":"Grupo A","venue":"Estadio Akron, Guadalajara"},{"id":"g29","phase":"groups","date":"2026-06-19T13:00:00-06:00","home":"Estados Unidos","away":"Australia","group":"Grupo D","venue":"Lumen Field, Seattle"},{"id":"g30","phase":"groups","date":"2026-06-19T16:00:00-06:00","home":"Escocia","away":"Marruecos","group":"Grupo C","venue":"Gillette Stadium, Boston"},{"id":"g31","phase":"groups","date":"2026-06-19T18:30:00-06:00","home":"Brasil","away":"Haití","group":"Grupo C","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g32","phase":"groups","date":"2026-06-19T21:00:00-06:00","home":"Turquía","away":"Paraguay","group":"Grupo D","venue":"Levi’s Stadium, Santa Clara"},{"id":"g33","phase":"groups","date":"2026-06-20T11:00:00-06:00","home":"Países Bajos","away":"Suecia","group":"Grupo F","venue":"NRG Stadium, Houston"},{"id":"g34","phase":"groups","date":"2026-06-20T14:00:00-06:00","home":"Alemania","away":"Costa de Marfil","group":"Grupo E","venue":"BMO Field, Toronto"},{"id":"g35","phase":"groups","date":"2026-06-20T18:00:00-06:00","home":"Ecuador","away":"Curazao","group":"Grupo E","venue":"Arrowhead Stadium, Kansas City"},{"id":"g36","phase":"groups","date":"2026-06-20T22:00:00-06:00","home":"Túnez","away":"Japón","group":"Grupo F","venue":"Estadio BBVA, Monterrey"},{"id":"g37","phase":"groups","date":"2026-06-21T10:00:00-06:00","home":"España","away":"Arabia Saudita","group":"Grupo H","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g38","phase":"groups","date":"2026-06-21T13:00:00-06:00","home":"Bélgica","away":"Irán","group":"Grupo G","venue":"SoFi Stadium, Los Ángeles"},{"id":"g39","phase":"groups","date":"2026-06-21T16:00:00-06:00","home":"Uruguay","away":"Cabo Verde","group":"Grupo H","venue":"Hard Rock Stadium, Miami"},{"id":"g40","phase":"groups","date":"2026-06-21T19:00:00-06:00","home":"Nueva Zelanda","away":"Egipto","group":"Grupo G","venue":"BC Place, Vancouver"},{"id":"g41","phase":"groups","date":"2026-06-22T11:00:00-06:00","home":"Argentina","away":"Austria","group":"Grupo J","venue":"AT&T Stadium, Dallas"},{"id":"g42","phase":"groups","date":"2026-06-22T15:00:00-06:00","home":"Francia","away":"Irak","group":"Grupo I","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g43","phase":"groups","date":"2026-06-22T18:00:00-06:00","home":"Noruega","away":"Senegal","group":"Grupo I","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g44","phase":"groups","date":"2026-06-22T21:00:00-06:00","home":"Jordania","away":"Argelia","group":"Grupo J","venue":"Levi’s Stadium, Santa Clara"},{"id":"g45","phase":"groups","date":"2026-06-23T11:00:00-06:00","home":"Portugal","away":"Uzbekistán","group":"Grupo K","venue":"NRG Stadium, Houston"},{"id":"g46","phase":"groups","date":"2026-06-23T14:00:00-06:00","home":"Inglaterra","away":"Ghana","group":"Grupo L","venue":"Gillette Stadium, Boston"},{"id":"g47","phase":"groups","date":"2026-06-23T17:00:00-06:00","home":"Panamá","away":"Croacia","group":"Grupo L","venue":"BMO Field, Toronto"},{"id":"g48","phase":"groups","date":"2026-06-23T20:00:00-06:00","home":"Colombia","away":"Congo RD","group":"Grupo K","venue":"Estadio Akron, Guadalajara"},{"id":"g49","phase":"groups","date":"2026-06-24T13:00:00-06:00","home":"Suiza","away":"Canadá","group":"Grupo B","venue":"BC Place, Vancouver"},{"id":"g50","phase":"groups","date":"2026-06-24T13:00:00-06:00","home":"Bosnia y Herzegovina","away":"Catar","group":"Grupo B","venue":"Lumen Field, Seattle"},{"id":"g51","phase":"groups","date":"2026-06-24T16:00:00-06:00","home":"Escocia","away":"Brasil","group":"Grupo C","venue":"Hard Rock Stadium, Miami"},{"id":"g52","phase":"groups","date":"2026-06-24T16:00:00-06:00","home":"Marruecos","away":"Haití","group":"Grupo C","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g53","phase":"groups","date":"2026-06-24T19:00:00-06:00","home":"Chequia","away":"México","group":"Grupo A","venue":"Estadio Azteca, Ciudad de México"},{"id":"g54","phase":"groups","date":"2026-06-24T19:00:00-06:00","home":"Sudáfrica","away":"Corea del Sur","group":"Grupo A","venue":"Estadio BBVA, Monterrey"},{"id":"g55","phase":"groups","date":"2026-06-25T14:00:00-06:00","home":"Ecuador","away":"Alemania","group":"Grupo E","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g56","phase":"groups","date":"2026-06-25T14:00:00-06:00","home":"Curazao","away":"Costa de Marfil","group":"Grupo E","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g57","phase":"groups","date":"2026-06-25T17:00:00-06:00","home":"Túnez","away":"Países Bajos","group":"Grupo F","venue":"Arrowhead Stadium, Kansas City"},{"id":"g58","phase":"groups","date":"2026-06-25T17:00:00-06:00","home":"Japón","away":"Suecia","group":"Grupo F","venue":"AT&T Stadium, Dallas"},{"id":"g59","phase":"groups","date":"2026-06-25T20:00:00-06:00","home":"Turquía","away":"Estados Unidos","group":"Grupo D","venue":"SoFi Stadium, Los Ángeles"},{"id":"g60","phase":"groups","date":"2026-06-25T20:00:00-06:00","home":"Paraguay","away":"Australia","group":"Grupo D","venue":"Levi’s Stadium, Santa Clara"},{"id":"g61","phase":"groups","date":"2026-06-26T13:00:00-06:00","home":"Noruega","away":"Francia","group":"Grupo I","venue":"Gillette Stadium, Boston"},{"id":"g62","phase":"groups","date":"2026-06-26T13:00:00-06:00","home":"Senegal","away":"Irak","group":"Grupo I","venue":"BMO Field, Toronto"},{"id":"g63","phase":"groups","date":"2026-06-26T18:00:00-06:00","home":"Uruguay","away":"España","group":"Grupo H","venue":"Estadio Akron, Guadalajara"},{"id":"g64","phase":"groups","date":"2026-06-26T18:00:00-06:00","home":"Cabo Verde","away":"Arabia Saudita","group":"Grupo H","venue":"NRG Stadium, Houston"},{"id":"g65","phase":"groups","date":"2026-06-26T21:00:00-06:00","home":"Nueva Zelanda","away":"Bélgica","group":"Grupo G","venue":"BC Place, Vancouver"},{"id":"g66","phase":"groups","date":"2026-06-26T21:00:00-06:00","home":"Egipto","away":"Irán","group":"Grupo G","venue":"Lumen Field, Seattle"},{"id":"g67","phase":"groups","date":"2026-06-27T15:00:00-06:00","home":"Panamá","away":"Inglaterra","group":"Grupo L","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g68","phase":"groups","date":"2026-06-27T15:00:00-06:00","home":"Croacia","away":"Ghana","group":"Grupo L","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g69","phase":"groups","date":"2026-06-27T17:30:00-06:00","home":"Colombia","away":"Portugal","group":"Grupo K","venue":"Hard Rock Stadium, Miami"},{"id":"g70","phase":"groups","date":"2026-06-27T17:30:00-06:00","home":"Congo RD","away":"Uzbekistán","group":"Grupo K","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g71","phase":"groups","date":"2026-06-27T20:00:00-06:00","home":"Jordania","away":"Argentina","group":"Grupo J","venue":"AT&T Stadium, Dallas"},{"id":"g72","phase":"groups","date":"2026-06-27T20:00:00-06:00","home":"Argelia","away":"Austria","group":"Grupo J","venue":"Arrowhead Stadium, Kansas City"}];
const knockoutMatches=[{"id":"k1","phase":"knockout","date":"2026-06-28T13:00:00-06:00","home":"2A","away":"2B","round":"Dieciseisavos","venue":"SoFi Stadium, Los Ángeles"},{"id":"k2","phase":"knockout","date":"2026-06-29T11:00:00-06:00","home":"1C","away":"2F","round":"Dieciseisavos","venue":"NRG Stadium, Houston"},{"id":"k3","phase":"knockout","date":"2026-06-29T14:30:00-06:00","home":"1E","away":"3ABCDF","round":"Dieciseisavos","venue":"Gillette Stadium, Boston"},{"id":"k4","phase":"knockout","date":"2026-06-29T19:00:00-06:00","home":"1F","away":"2C","round":"Dieciseisavos","venue":"Estadio BBVA, Monterrey"},{"id":"k5","phase":"knockout","date":"2026-06-30T11:00:00-06:00","home":"2E","away":"2I","round":"Dieciseisavos","venue":"AT&T Stadium, Dallas"},{"id":"k6","phase":"knockout","date":"2026-06-30T15:00:00-06:00","home":"1I","away":"3CDFGH","round":"Dieciseisavos","venue":"MetLife Stadium, New York/New Jersey"},{"id":"k7","phase":"knockout","date":"2026-06-30T19:00:00-06:00","home":"1A","away":"3CEFHI","round":"Dieciseisavos","venue":"Estadio Azteca, Ciudad de México"},{"id":"k8","phase":"knockout","date":"2026-07-01T10:00:00-06:00","home":"1L","away":"3EHIJK","round":"Dieciseisavos","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"k9","phase":"knockout","date":"2026-07-01T14:00:00-06:00","home":"1G","away":"3AEHIJ","round":"Dieciseisavos","venue":"Lumen Field, Seattle"},{"id":"k10","phase":"knockout","date":"2026-07-01T18:00:00-06:00","home":"1D","away":"3BEFIJ","round":"Dieciseisavos","venue":"Levi’s Stadium, Santa Clara"},{"id":"k11","phase":"knockout","date":"2026-07-02T13:00:00-06:00","home":"1H","away":"2J","round":"Dieciseisavos","venue":"SoFi Stadium, Los Ángeles"},{"id":"k12","phase":"knockout","date":"2026-07-02T17:00:00-06:00","home":"2K","away":"2L","round":"Dieciseisavos","venue":"BMO Field, Toronto"},{"id":"k13","phase":"knockout","date":"2026-07-02T21:00:00-06:00","home":"1B","away":"3EFGIJ","round":"Dieciseisavos","venue":"BC Place, Vancouver"},{"id":"k14","phase":"knockout","date":"2026-07-03T12:00:00-06:00","home":"2D","away":"2G","round":"Dieciseisavos","venue":"AT&T Stadium, Dallas"},{"id":"k15","phase":"knockout","date":"2026-07-03T16:00:00-06:00","home":"1J","away":"2H","round":"Dieciseisavos","venue":"Hard Rock Stadium, Miami"},{"id":"k16","phase":"knockout","date":"2026-07-03T19:30:00-06:00","home":"1K","away":"3DEIJL","round":"Dieciseisavos","venue":"Arrowhead Stadium, Kansas City"},{"id":"k17","phase":"knockout","date":"2026-07-04T11:00:00-06:00","home":"Ganador 73","away":"Ganador 75","round":"Octavos","venue":"NRG Stadium, Houston"},{"id":"k18","phase":"knockout","date":"2026-07-04T15:00:00-06:00","home":"Ganador 74","away":"Ganador 77","round":"Octavos","venue":"Lincoln Financial Field, Philadelphia"},{"id":"k19","phase":"knockout","date":"2026-07-05T14:00:00-06:00","home":"Ganador 76","away":"Ganador 78","round":"Octavos","venue":"MetLife Stadium, New York/New Jersey"},{"id":"k20","phase":"knockout","date":"2026-07-05T18:00:00-06:00","home":"Ganador 79","away":"Ganador 80","round":"Octavos","venue":"Estadio Azteca, Ciudad de México"},{"id":"k21","phase":"knockout","date":"2026-07-06T13:00:00-06:00","home":"Ganador 83","away":"Ganador 84","round":"Octavos","venue":"AT&T Stadium, Dallas"},{"id":"k22","phase":"knockout","date":"2026-07-06T18:00:00-06:00","home":"Ganador 81","away":"Ganador 82","round":"Octavos","venue":"Lumen Field, Seattle"},{"id":"k23","phase":"knockout","date":"2026-07-07T10:00:00-06:00","home":"Ganador 86","away":"Ganador 88","round":"Octavos","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"k24","phase":"knockout","date":"2026-07-07T14:00:00-06:00","home":"Ganador 85","away":"Ganador 87","round":"Octavos","venue":"BC Place, Vancouver"},{"id":"k25","phase":"knockout","date":"2026-07-09T14:00:00-06:00","home":"Ganador 89","away":"Ganador 90","round":"Cuartos","venue":"Gillette Stadium, Boston"},{"id":"k26","phase":"knockout","date":"2026-07-10T13:00:00-06:00","home":"Ganador 93","away":"Ganador 94","round":"Cuartos","venue":"SoFi Stadium, Los Ángeles"},{"id":"k27","phase":"knockout","date":"2026-07-11T15:00:00-06:00","home":"Ganador 91","away":"Ganador 92","round":"Cuartos","venue":"Hard Rock Stadium, Miami"},{"id":"k28","phase":"knockout","date":"2026-07-11T19:00:00-06:00","home":"Ganador 95","away":"Ganador 96","round":"Cuartos","venue":"Arrowhead Stadium, Kansas City"},{"id":"k29","phase":"knockout","date":"2026-07-14T13:00:00-06:00","home":"Ganador 97","away":"Ganador 98","round":"Semifinal","venue":"AT&T Stadium, Dallas"},{"id":"k30","phase":"knockout","date":"2026-07-15T13:00:00-06:00","home":"Ganador 99","away":"Ganador 100","round":"Semifinal","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"k31","phase":"knockout","date":"2026-07-18T15:00:00-06:00","home":"Perdedor 101","away":"Perdedor 102","round":"Tercer lugar","venue":"Hard Rock Stadium, Miami"},{"id":"k32","phase":"knockout","date":"2026-07-19T13:00:00-06:00","home":"Ganador 101","away":"Ganador 102","round":"Final","venue":"MetLife Stadium, New York/New Jersey"}];
const matches=[...groupMatches,...knockoutMatches];

let supa=null, session=null, state={groups:[],participants:[],members:[],predictions:[],results:[],settings:[]};
let refreshInFlight=null, refreshQueued=false, refreshRenderTimer=null, lastRefreshAt=0;
let lastChatPresenceWrite=0;
let configLoadedForGroup='';
function getCfg(){return {url:localStorage.getItem('v300_url')||DEFAULT_URL,key:localStorage.getItem('v300_key')||EMBED_KEY}}
function saveConfig(){localStorage.setItem('v300_url',cfgUrl.value.trim());localStorage.setItem('v300_key',cfgKey.value.trim());location.reload()}
function initClient(){const c=getCfg(); cfgUrl.value=c.url; if(c.key) cfgKey.value=c.key; if(!c.key){configBox.classList.remove('hidden'); loginMsg.className='status err'; loginMsg.textContent='Pega la clave publicable de Supabase para conectar.'; return false} supa=window.supabase.createClient(c.url,c.key); return true}
async function q(p){const r=await p; if(r.error) throw r.error; return r.data||[]}
async function refreshAll(){
  if(!supa) return;
  if(refreshInFlight){ refreshQueued=true; return refreshInFlight; }
  refreshInFlight=(async()=>{
    try{
      cloudState.textContent='Actualizando...';
      const [groups,participants,members,predictions,results,settings]=await Promise.all([
        q(supa.from('groups').select('*').order('name')),
        q(supa.from('participants').select('*').order('name')),
        q(supa.from('group_members').select('*')),
        q(supa.from('predictions').select('*')),
        q(supa.from('results').select('*')),
        q(supa.from('settings').select('*'))
      ]);
      state={groups,participants,members,predictions,results,settings};
      lastRefreshAt=Date.now();
      cloudState.textContent='Online'; cloudState.style.color='#bbf7d0';
      fillLoginGroups();
      if(session){
        clearTimeout(refreshRenderTimer);
        refreshRenderTimer=setTimeout(()=>renderAll(),120);
      }
    }catch(e){
      loginMsg.className='status err'; loginMsg.textContent='Error Supabase: '+e.message; cloudState.textContent='Error';
    }finally{
      refreshInFlight=null;
      if(refreshQueued){ refreshQueued=false; setTimeout(()=>refreshAll(),350); }
    }
  })();
  return refreshInFlight;
}
function subscribe(){
  if(!supa) return;
  let t=null;
  supa.channel('v31328-main').on('postgres_changes',{event:'*',schema:'public'},()=>{
    clearTimeout(t);
    t=setTimeout(()=>refreshAll(),1200);
  }).subscribe();
}
function fillLoginGroups(preserveValue){
  const selected = preserveValue || loginGroup.value || localStorage.getItem('v300_last_group') || '';
  loginGroup.innerHTML=state.groups.map(g=>`<option value="${esc(g.id)}">${esc(g.name)}</option>`).join('');
  if(!state.groups.length){ loginGroup.innerHTML='<option value="">No hay grupos</option>'; return; }
  if(selected && state.groups.some(g=>g.id===selected)) loginGroup.value=selected;
  if(loginMsg.textContent.includes('Cargando')) loginMsg.textContent='Listo. Admin inicial: admin / 1234';
}
function memberGroups(pid){return state.members.filter(m=>m.participant_id===pid).map(m=>m.group_id)}
function groupMembers(gid=currentGroupId()){let ids=state.members.filter(m=>m.group_id===gid).map(m=>m.participant_id); return state.participants.filter(p=>ids.includes(p.id))}
function currentGroupId(){return session?.group_id||loginGroup.value||state.groups[0]?.id}
function currentGroup(){return state.groups.find(g=>g.id===currentGroupId())||state.groups[0]||{id:'',name:'Sin grupo',fee:0,currency:'GTQ'}}
function settingValue(key, fallback=null){const row=state.settings.find(x=>x.key===key); return row&&row.value!==undefined?row.value:fallback}
async function saveSettingValue(key,value){
  const prev=settingValue(key,undefined);
  try{ if(JSON.stringify(prev)===JSON.stringify(value)) return; }catch(e){}
  const row={key,value,updated_at:new Date().toISOString()};
  await q(supa.from('settings').upsert(row));
  const i=state.settings.findIndex(x=>x.key===key);
  if(i>=0) state.settings[i]=row; else state.settings.push(row);
}
function fmtDateTime(d){try{return new Intl.DateTimeFormat('es-GT',{dateStyle:'medium',timeStyle:'short'}).format(new Date(d))}catch(e){return new Date(d).toLocaleString()}}

async function login(){try{
  const selectedGroupBeforeRefresh = loginGroup.value;
  await refreshAll();
  if(selectedGroupBeforeRefresh && state.groups.some(g=>g.id===selectedGroupBeforeRefresh)) loginGroup.value = selectedGroupBeforeRefresh;
  const u=loginUser.value.trim(), p=loginPass.value;
  const user=state.participants.find(x=>x.username===u&&x.password===p);
  if(!user) throw new Error('Usuario o contraseña incorrectos');
  const gid=loginGroup.value;
  if(!gid || !state.groups.some(g=>g.id===gid)) throw new Error('Selecciona un grupo válido');
  if(!user.is_super_admin && !state.members.some(m=>m.participant_id===user.id&&m.group_id===gid)) throw new Error('Este usuario no pertenece a este grupo');
  session={...user,group_id:gid};
  localStorage.setItem('v300_last_group', gid);
  loginScreen.classList.add('hidden'); app.classList.remove('hidden'); adminTab.style.display=isAdmin()?'block':'none'; fillDays(); forceHomeTab(); renderAll(); startLiveTimer(); initOneSignalForSession(); scheduleMatchPushes(); setTimeout(()=>window.scrollTo({top:0,behavior:'auto'}),20);
}catch(e){loginMsg.className='status err'; loginMsg.textContent=e.message}}
function logout(){if(liveTimer) clearInterval(liveTimer); session=null; app.classList.add('hidden'); loginScreen.classList.remove('hidden')}
function isAdmin(){return !!session?.is_super_admin || state.members.some(m=>m.group_id===currentGroupId()&&m.participant_id===session?.id&&m.is_group_admin)}
function forceHomeTab(){
  document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id==='inicio'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.sec==='inicio'));
}
function sessionGroups(){
  if(!session) return [];
  if(session.is_super_admin) return state.groups;
  const gids=state.members.filter(m=>m.participant_id===session.id).map(m=>m.group_id);
  return state.groups.filter(g=>gids.includes(g.id));
}
async function switchSessionGroup(gid){
  if(!session || !gid || gid===session.group_id) return;
  const allowed=sessionGroups().some(g=>g.id===gid);
  if(!allowed) return alert('No perteneces a ese grupo.');
  session.group_id=gid;
  loginGroup.value=gid;
  localStorage.setItem('v300_last_group',gid);
  adminTab.style.display=isAdmin()?'block':'none';
  fillDays();
  await refreshAll();
  renderAll();
  initOneSignalForSession(false);
  scheduleMatchPushes();
  setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),30);
}
async function setSec(id){
  if(id==='chat') markSeen('chat');
  if(id==='quiniela') markSeen('todos');
  document.querySelectorAll('.section').forEach(s=>s.classList.toggle('active',s.id===id));
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.dataset.sec===id));
  if(id==='quiniela') { resetDayToToday('predPhase','predDay'); setQuinielaTab('pronosticos'); }
  await refreshAll();
  if(id==='quiniela') { setQuinielaTab('pronosticos'); renderPred(); renderAllPreds(); renderChampion(); }
  if(id==='ranking') { setRankingTab('general'); renderRanking(); }
  if(id==='mundial') renderWorld();
  if(id==='retame') { setRetameTab('apuestas'); renderRetame(); }
  if(id==='chat') renderChat();
  if(id==='perfil') renderProfile();
  if(id==='admin') renderAdmin();
  setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),30);
}
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>setSec(b.dataset.sec));
document.addEventListener('change',e=>{ if(e.target&&e.target.id==='retameMatch') updateRetamePickOptions(); });
function setQuinielaTab(id){
  document.querySelectorAll('[data-qtab]').forEach(b=>b.classList.toggle('active',b.dataset.qtab===id));
  document.querySelectorAll('.q-panel').forEach(p=>p.classList.toggle('active',p.id==='qtab-'+id));
  if(id==='pronosticos') renderPred();
  if(id==='ver') renderAllPreds();
  if(id==='campeon') renderChampion();
}
function setRankingTab(id){
  document.querySelectorAll('[data-rtab]').forEach(b=>b.classList.toggle('active',b.dataset.rtab===id));
  document.querySelectorAll('.r-panel').forEach(p=>p.classList.toggle('active',p.id==='rtab-'+id));
  if(id==='general') renderRanking();
  if(id==='mis') document.getElementById('myStatsBox').innerHTML=myStatsHtml();
  if(id==='historial') document.getElementById('myHistoryBox').innerHTML=myHistoryHtml();
  if(id==='comparar') renderCompare();
  if(id==='records') document.getElementById('recordsBox').innerHTML=recordsHtml();
}
function setWorldTab(id){
  document.querySelectorAll('[data-wtab]').forEach(b=>b.classList.toggle('active',b.dataset.wtab===id));
  const wb=document.getElementById('worldBox');
  if(wb) wb.dataset.tab=id;
  renderWorld();
}

function setAdminTab(id){
  document.querySelectorAll('[data-atab]').forEach(b=>b.classList.toggle('active',b.dataset.atab===id));
  document.querySelectorAll('.a-panel').forEach(p=>p.classList.toggle('active',p.id==='atab-'+id));
  if(id==='grupos') renderGroupsAdmin();
  if(id==='participantes') renderAdminPlayers();
  if(id==='resultados') renderResultsAdmin();
  if(id==='pronosticos') renderAdminPredictions();
  if(id==='notificaciones') loadOneSignalConfig();
  if(id==='api') loadApiFootballConfig();
}
function currentWorldTab(){
  return document.getElementById('worldBox')?.dataset.tab || document.querySelector('[data-wtab].active')?.dataset.wtab || 'calendario';
}

function groupTimezone(){
  const n=(currentGroup()?.name||'').toLowerCase();
  if(n.includes('shelter')||n.includes('los angeles')||n.includes('angeles')||n.includes('california')||n==='la') return {tz:'America/Los_Angeles',label:'LA'};
  return {tz:'America/Guatemala',label:'GT'};
}
function fmtDate(d){const z=groupTimezone();return new Date(d).toLocaleString('es-GT',{timeZone:z.tz,weekday:'short',day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})+' '+z.label}
function dayKey(d){return new Date(d).toLocaleDateString('sv-SE',{timeZone:groupTimezone().tz})}
function todayKey(){return dayKey(new Date())}
function daysFor(phase){return [...new Set(matches.filter(m=>m.phase===phase).map(m=>dayKey(m.date)))].sort()}
function preferredDay(phase){const ds=daysFor(phase), t=todayKey(); return ds.includes(t)?t:(ds.find(d=>d>=t)||ds[0]||'')}
function resetDayToToday(phaseId,dayId){let pe=document.getElementById(phaseId), de=document.getElementById(dayId); if(pe&&de) de.value=preferredDay(pe.value);}
function fillDays(){[['predPhase','predDay'],['allPhase','allDay'],['resPhase','resDay'],['adminPredPhase','adminPredDay']].forEach(([p,d])=>{let pe=document.getElementById(p),de=document.getElementById(d); if(!pe||!de)return; let old=de.value, ds=daysFor(pe.value); de.innerHTML=ds.map(x=>`<option value="${x}">${x}${x===todayKey()?' · Hoy':''}</option>`).join(''); if(old&&ds.includes(old))de.value=old; else de.value=preferredDay(pe.value);})}
function matchList(phase,day){return matches.filter(m=>m.phase===phase && (!day||dayKey(m.date)===day))}
function predFor(pid,mid,gid=currentGroupId()){return state.predictions.find(p=>p.group_id===gid&&p.participant_id===pid&&p.match_id===mid)}
function resFor(mid){return state.results.find(r=>r.match_id===mid)}
function matchStarted(m){return Date.now() >= new Date(m.date).getTime()}
function hasRealResult(m){let r=resFor(m.id); return !!(r && r.home_score!==null && r.home_score!==undefined && r.away_score!==null && r.away_score!==undefined)}
function locked(m){return matchStarted(m) || hasRealResult(m)}
function lockReason(m){if(hasRealResult(m)) return 'Este partido ya tiene resultado real cargado.'; if(matchStarted(m)) return 'Este partido ya inició o ya pasó.'; return 'Este partido está bloqueado.'}
function matchCard(m,inner=''){let r=resFor(m.id); return `<div class="match"><div class="teams"><div class="team">${teamLabel(m.home)}</div><div class="mid">${fmtDate(m.date)}<br>${esc(m.group||m.round||'')}</div><div class="team">${teamLabel(m.away)}</div></div>${r?`<div class="status ok">Resultado real: <b>${r.home_score} - ${r.away_score}</b></div>`:''}${inner}</div>`}
function nextPredInputId(list,i,which){if(which==='home') return 'pa_'+list[i].id; const n=list[i+1]; return n?'ph_'+n.id:null}
let activePredInput=null;
function setActivePredInput(id){const el=document.getElementById(id); if(!el || el.disabled) return; document.querySelectorAll('.pred-score').forEach(x=>x.classList.remove('active-score')); el.classList.add('active-score'); activePredInput=id; setTimeout(()=>el.closest('.match')?.scrollIntoView({block:'center',behavior:'smooth'}),30);}
function nextInputFor(id){if(!id||!id.startsWith('ph_')&&!id.startsWith('pa_')) return null; if(id.startsWith('ph_')) return 'pa_'+id.slice(3); const mid=id.slice(3), cards=[...document.querySelectorAll('.pred-score[id^="ph_"]')].map(x=>x.id.slice(3)); const idx=cards.indexOf(mid); return cards[idx+1] ? 'ph_'+cards[idx+1] : null;}
function setPredDigit(mid,val){const h='ph_'+mid, a='pa_'+mid; let target=(activePredInput===h||activePredInput===a)?activePredInput:h; const el=document.getElementById(target); if(!el || el.disabled) return; el.value=val; el.dispatchEvent(new Event('input',{bubbles:true})); const next=nextInputFor(target); if(next) setActivePredInput(next);}
function backPredDigit(mid){const h='ph_'+mid, a='pa_'+mid; let target=(activePredInput===h||activePredInput===a)?activePredInput:h; const el=document.getElementById(target); if(!el || el.disabled) return; el.value=''; el.dispatchEvent(new Event('input',{bubbles:true})); setActivePredInput(target);}
function predNumPad(mid,dis){if(dis) return ''; const nums=[0,1,2,3,4,5,6,7,8,9]; return `<div class="num-pad">${nums.map(n=>`<button type="button" onclick="setPredDigit('${mid}',${n})">${n}</button>`).join('')}<button type="button" onclick="backPredDigit('${mid}')">⌫ Borrar</button></div><p class="small" style="text-align:center">Toca una casilla y luego un número. Avanza automáticamente a la siguiente casilla.</p>`}
async function savePred(mid){let m=matches.find(x=>x.id===mid), h=document.getElementById('ph_'+mid).value, a=document.getElementById('pa_'+mid).value, qv=document.getElementById('pq_'+mid)?.value||null; if(locked(m))return alert(lockReason(m)); await q(supa.from('predictions').upsert({group_id:currentGroupId(),participant_id:session.id,match_id:mid,home_score:h===''?null:+h,away_score:a===''?null:+a,qualifier:qv,updated_at:new Date().toISOString()})); notifyGroup('prediction','🎯 Pronóstico modificado',`${session.name} modificó ${m.home} vs ${m.away}.`).catch(()=>{}); await refreshAll();}
async function clearPred(mid){let m=matches.find(x=>x.id===mid); if(locked(m))return alert(lockReason(m)); await q(supa.from('predictions').delete().eq('group_id',currentGroupId()).eq('participant_id',session.id).eq('match_id',mid)); await refreshAll(); await saveRankingSnapshot()}
function renderPred(){ updateNavBadges(); let list=matchList(predPhase.value,predDay.value); activePredInput=null; predList.innerHTML=list.map((m,i)=>{let p=predFor(session.id,m.id)||{}; let isLocked=locked(m); let dis=isLocked?'disabled':''; let ro=isLocked?'':'readonly'; return matchCard(m,`<div class="score"><input class="pred-score" id="ph_${m.id}" type="text" inputmode="none" pattern="[0-9]*" maxlength="2" value="${p.home_score??''}" onclick="setActivePredInput('ph_${m.id}')" ${ro} ${dis}><b>-</b><input class="pred-score" id="pa_${m.id}" type="text" inputmode="none" pattern="[0-9]*" maxlength="2" value="${p.away_score??''}" onclick="setActivePredInput('pa_${m.id}')" ${ro} ${dis}></div>${predNumPad(m.id,isLocked)}${m.phase==='knockout'?`<label>Clasifica</label><select id="pq_${m.id}" ${dis}><option value="">Sin seleccionar</option><option ${p.qualifier===m.home?'selected':''}>${esc(m.home)}</option><option ${p.qualifier===m.away?'selected':''}>${esc(m.away)}</option></select>`:''}<div style="margin-top:10px;display:flex;gap:8px"><button class="primary" onclick="savePred('${m.id}')" ${dis}>Guardar</button><button onclick="clearPred('${m.id}')" ${dis}>Limpiar</button></div>${isLocked?`<div class="status err">${lockReason(m)}</div>`:''}`)}).join('')||'<p>No hay partidos.</p>'}
function predictionSaved(pr){return !!(pr && pr.home_score!==null && pr.home_score!==undefined && pr.away_score!==null && pr.away_score!==undefined)}
function publicPredictionText(m,pr){
  if(!predictionSaved(pr)) return 'Pendiente';
  if(!locked(m)) return '✅ Ya pronosticó';
  return `${pr.home_score} - ${pr.away_score}${pr?.qualifier?` · Clasifica ${esc(pr.qualifier)}`:''}`;
}
function renderAllPreds(){
  if(document.getElementById('todos')?.classList.contains('active')) markSeen('todos');
  let ps=groupMembers(), list=matchList(allPhase.value,allDay.value);
  allBox.innerHTML=list.map(m=>{
    const open=!locked(m);
    const note=open?'<div class="status privacy-note">🔒 Los marcadores están ocultos hasta que inicie el partido. Solo se muestra quién ya guardó pronóstico.</div>':'<div class="status ok">✅ Partido iniciado/bloqueado: pronósticos visibles para todos.</div>';
    return matchCard(m,`${note}<div class="players">${ps.map(p=>{let pr=predFor(p.id,m.id); return `<div class="row"><b>${esc(p.name)}</b><span>${publicPredictionText(m,pr)}</span></div>`}).join('')}</div>`);
  }).join('') || '<p>No hay partidos.</p>';
}
function championTeams(){return [...new Set(groupMatches.flatMap(m=>[m.home,m.away]))].sort((a,b)=>a.localeCompare(b,'es'))}
function championKey(pid=session?.id){return 'champion_'+currentGroupId()+'_'+pid}
function championPick(pid=session?.id){return settingValue(championKey(pid),null)}
function firstKnockoutDate(){return Math.min(...knockoutMatches.map(m=>new Date(m.date).getTime()))}
function championLocked(){return Date.now()>=firstKnockoutDate()}
function officialChampion(){let v=settingValue('official_champion_'+currentGroupId(),null); if(v) return v; const final=knockoutMatches.find(m=>m.round==='Final')||knockoutMatches[knockoutMatches.length-1]; const r=resFor(final?.id); return r?.qualifier||null}
function championBonus(pid){const off=officialChampion(), pick=championPick(pid); return off&&pick&&teamKey(off)===teamKey(pick)?10:0}
async function saveChampionPick(){try{if(championLocked() && !isAdmin()) return alert('El pronóstico de campeón ya está bloqueado.'); const v=championSelect.value; if(!v) return alert('Selecciona un campeón.'); await saveSettingValue(championKey(session.id),v); champMsg.className='status ok'; champMsg.textContent='Campeón guardado: '+v; await refreshAll();}catch(e){champMsg.className='status err'; champMsg.textContent='Error: '+e.message}}
async function clearChampionPick(){try{if(championLocked() && !isAdmin()) return alert('El pronóstico de campeón ya está bloqueado.'); await q(supa.from('settings').delete().eq('key',championKey(session.id))); state.settings=state.settings.filter(x=>x.key!==championKey(session.id)); await refreshAll();}catch(e){alert('Error: '+e.message)}}
async function saveOfficialChampion(){try{if(!isAdmin()) return alert('Solo administrador.'); const v=officialChampionSelect.value; await saveSettingValue('official_champion_'+currentGroupId(),v||null); await saveRankingSnapshot(); await refreshAll();}catch(e){alert('Error: '+e.message)}}
function renderChampion(){if(!document.getElementById('championBox')||!session) return; const teams=championTeams(), pick=championPick(session.id)||'', locked=championLocked(), off=officialChampion()||''; const visible=locked; championBox.innerHTML=`<div class="champion-card"><h3>🏆 Tu campeón de eliminatorias</h3><p class="muted">Debe guardarse antes del primer partido de eliminatorias: <b>${fmtDateTime(firstKnockoutDate())}</b>.</p><label>Selecciona campeón</label><select id="championSelect" ${locked&&!isAdmin()?'disabled':''}><option value="">Seleccionar...</option>${teams.map(t=>`<option value="${esc(t)}" ${teamKey(t)===teamKey(pick)?'selected':''}>${teamLabel(t)}</option>`).join('')}</select><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px"><button class="primary" onclick="saveChampionPick()" ${locked&&!isAdmin()?'disabled':''}>Guardar campeón</button><button onclick="clearChampionPick()" ${locked&&!isAdmin()?'disabled':''}>Limpiar</button></div>${pick?`<div class="open-note">Tu pronóstico: <span class="champion-pick">${teamLabel(pick)}</span></div>`:'<div class="status">Aún no has guardado campeón.</div>'}${locked?'<div class="locked-note">🔒 Pronóstico de campeón bloqueado.</div>':'<div class="open-note">✅ Todavía puedes cambiar tu campeón.</div>'}<div id="champMsg" class="status"></div></div>${isAdmin()?`<div class="card"><h3>⚙️ Admin · Campeón oficial</h3><p class="muted">Cuando termine la final, selecciona aquí el campeón oficial para sumar automáticamente los 10 puntos en el ranking de eliminatorias.</p><select id="officialChampionSelect"><option value="">Sin campeón oficial</option>${teams.map(t=>`<option value="${esc(t)}" ${teamKey(t)===teamKey(off)?'selected':''}>${teamLabel(t)}</option>`).join('')}</select><button class="good" onclick="saveOfficialChampion()" style="margin-top:10px">Guardar campeón oficial</button>${off?`<div class="open-note">Campeón oficial actual: <b>${teamLabel(off)}</b></div>`:''}</div>`:''}<div class="card"><h3>👥 Pronósticos de campeón del grupo</h3>${visible?`<div class="champion-list">${groupMembers().map(p=>{const cp=championPick(p.id); const bonus=championBonus(p.id); return `<div class="champion-row"><b>${esc(p.name)}</b><span>${cp?teamLabel(cp):'Pendiente'} ${bonus?'<span class="bonus-pill">+10 pts</span>':''}</span></div>`}).join('')}</div>`:'<p class="muted">Los campeones de los demás estarán ocultos hasta que se cierre el plazo de eliminatorias.</p>'}</div>`}
function pointsFor(p,m){let r=resFor(m.id); if(!r||r.home_score===null||r.away_score===null||!p||p.home_score===null||p.away_score===null)return 0; let pts=0; const sign=(h,a)=>h>a?'H':h<a?'A':'E'; if(sign(+p.home_score,+p.away_score)===sign(+r.home_score,+r.away_score)) pts+=1; if(+p.home_score===+r.home_score && +p.away_score===+r.away_score) pts=4; return pts}
function ranking(phase=null){const list=phase?matches.filter(m=>m.phase===phase):matches; return groupMembers().map(p=>{let pts=0, exact=0, played=0; list.forEach(m=>{let pr=predFor(p.id,m.id); let r=resFor(m.id); if(r&&r.home_score!==null&&r.away_score!==null) played++; pts+=pointsFor(pr,m); if(pr&&r&&+pr.home_score===+r.home_score&&+pr.away_score===+r.away_score) exact++;}); let champBonus=(phase==='knockout')?championBonus(p.id):0; pts+=champBonus; return {p,pts,exact,played,champBonus}}).sort((a,b)=>b.pts-a.pts||b.champBonus-a.champBonus||b.exact-a.exact)}
function previousPositions(phase){const h=settingValue('history_'+currentGroupId(),[])||[]; const last=h.length?h[h.length-1]:null; const arr=last?(phase==='groups'?last.groups:last.knockout)||[]:[]; const pos={}; arr.forEach((x,i)=>pos[x.id]=i+1); return pos;}
function moveBadge(pid,pos,phase){const prev=previousPositions(phase)[pid]; if(!prev) return '<span class="move-same">Nuevo</span>'; const diff=prev-pos; if(diff>0) return `<span class="move-up">↑${diff}</span>`; if(diff<0) return `<span class="move-down">↓${Math.abs(diff)}</span>`; return '<span class="move-same">—</span>';}

function rankMoodEmoji(pos,total,pid,phase){
  const mv=moveBadge(pid,pos,phase)||'';
  const n=parseInt(String(mv).replace(/[^0-9-]/g,''))||0;
  if(pos===1) return '😎';
  if(pos===2) return '🏃‍♂️💨';
  if(pos===3) return '👀';
  if(total>1 && pos===total) return '😢';
  if(mv.includes('↑')) return '🚀';
  if(mv.includes('↓')) return '😬';
  if(n===0) return '🏃';
  return '⚽';
}

function rankHtml(r,title,sub,showChampion=false,phase='groups'){return `<div class="card"><h2>${title}</h2><p class="muted">${sub}</p>${r.map((x,i)=>{let avg=x.played?((x.pts/x.played).toFixed(1)):0; const m=playerMetrics(x.p.id,phase); const mood=rankMoodEmoji(i+1,r.length,x.p.id,phase); const medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':''; return `<div class="rank-line ${i===0?'top1':''}"><div class="rank-points"><span class="rank-big-emoji">${mood}</span><span class="rank-score">${x.pts}</span><small>PTS</small></div><div><div class="rank-pos"><span class="rank-fun">${medal} ${i+1}.</span> ${esc(x.p.name)} <span class="pill">${moveBadge(x.p.id,i+1,phase)}</span></div><div class="rank-meta">${x.exact} exacto(s) · ${m.effectiveness}% efectividad · 🔥 racha ${m.currentStreak} / mejor ${m.bestStreak} · Promedio ${avg}${showChampion?` · Campeón +10: ${x.champBonus?'✅':'—'}`:''}</div></div><div class="pill rank-exact-pill">${showChampion?`👑 +10 ${x.champBonus?'✅':'—'}`:`🎯 ${x.exact}`}</div></div>`}).join('')||'<p>Sin participantes.</p>'}</div>`}
function playerMetrics(pid,phase=null){const list=(phase?matches.filter(m=>m.phase===phase):matches).slice().sort((a,b)=>new Date(a.date)-new Date(b.date)); let played=0,predicted=0,exact=0,winner=0,pts=0,bestDay={day:'',pts:-1,exact:0},byDay={},currentStreak=0,bestStreak=0; list.forEach(m=>{const r=resFor(m.id), pr=predFor(pid,m.id); if(pr&&pr.home_score!==null&&pr.away_score!==null) predicted++; if(r&&r.home_score!==null&&r.away_score!==null){played++; const got=pointsFor(pr,m); pts+=got; const dk=dayKey(m.date); byDay[dk]=byDay[dk]||{pts:0,exact:0}; byDay[dk].pts+=got; if(got>=1){winner++; currentStreak++; bestStreak=Math.max(bestStreak,currentStreak);} else {currentStreak=0;} if(got===4){exact++; byDay[dk].exact++;}}}); Object.entries(byDay).forEach(([day,v])=>{if(v.pts>bestDay.pts) bestDay={day,...v}}); return {played,predicted,exact,winner,pts,bestDay,currentStreak,bestStreak,effectiveness:played?Math.round((winner/played)*100):0,exactRate:played?Math.round((exact/played)*100):0};}
function badgesFor(pid){const m=playerMetrics(pid), rg=ranking('groups'), rk=ranking('knockout'), all=ranking(); const badges=[]; if(all[0]?.p.id===pid) badges.push('👑 Líder general'); if(rg[0]?.p.id===pid) badges.push('🏆 Líder grupos'); if(rk[0]?.p.id===pid) badges.push('⚔️ Líder eliminatorias'); if(m.exact>=1) badges.push('🎯 Primer exacto'); if(m.exact>=5) badges.push('💎 5 exactos'); if(m.winner>=10) badges.push('✅ 10 ganadores acertados'); if(m.currentStreak>=3) badges.push('🔥 Racha activa x3'); if(m.bestStreak>=5) badges.push('🚀 Racha x5'); if(m.effectiveness>=70&&m.played>=3) badges.push('🧠 Efectividad alta'); if(championBonus(pid)) badges.push('👑 Campeón acertado'); if(phaseComplete('groups')&&rg[0]?.p.id===pid) badges.push('🏆 Campeón fase de grupos'); if(phaseComplete('knockout')&&rk[0]?.p.id===pid) badges.push('🏆 Campeón eliminatorias'); return badges;}
function statsHtml(){const list=groupMembers().map(p=>({p,...playerMetrics(p.id)})).sort((a,b)=>b.pts-a.pts); return `<div class="stat-grid">${list.map(x=>`<div class="stat-card"><b>${x.pts}</b> pts<br><strong>${esc(x.p.name)}</strong><div class="small">✅ ${x.winner}/${x.played} ganador/empate · 🎯 ${x.exact} exactos · ${x.effectiveness}% efectividad · 🔥 mejor racha ${x.bestStreak}</div><div class="mini-bars"><div class="mini-bar"><span>Efectividad</span><div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min(100,x.effectiveness)}%"></div></div><b>${x.effectiveness}%</b></div><div class="mini-bar"><span>Exactos</span><div class="mini-bar-track"><div class="mini-bar-fill" style="width:${Math.min(100,x.exactRate)}%"></div></div><b>${x.exactRate}%</b></div></div></div>`).join('')||'<p>Sin datos.</p>'}</div>`}
function badgesHtml(){const ps=groupMembers(); return `<div class="stat-grid">${ps.map(p=>{const b=badgesFor(p.id); return `<div class="stat-card"><strong>${esc(p.name)}</strong><div class="badge-grid">${b.length?b.map(x=>`<span class="auto-badge">${x}</span>`).join(''):'<span class="muted">Sin insignias todavía</span>'}</div></div>`}).join('')||'<p>Sin participantes.</p>'}</div>`}
function currentMvp(){const days=[...new Set(matches.filter(m=>resFor(m.id)?.home_score!==null&&resFor(m.id)?.away_score!==null).map(m=>dayKey(m.date)))].sort(); const day=days[days.length-1]; if(!day) return null; const list=groupMembers().map(p=>{let pts=0, exact=0; matches.filter(m=>dayKey(m.date)===day).forEach(m=>{const got=pointsFor(predFor(p.id,m.id),m); pts+=got; if(got===4) exact++;}); return {p,pts,exact};}).sort((a,b)=>b.pts-a.pts||b.exact-a.exact); return {day,top:list[0],list};}
function mvpHtml(){const m=currentMvp(); if(!m||!m.top||m.top.pts<=0) return '<p class="muted">El MVP aparecerá cuando haya resultados cargados en una jornada.</p>'; return `<div class="mvp-card"><h3>⭐ MVP ${esc(m.day)}</h3><p><b>${esc(m.top.p.name)}</b> fue el mejor de la jornada con <b>${m.top.pts} puntos</b> y ${m.top.exact} exacto(s).</p><div class="small">Top jornada: ${m.list.slice(0,3).map((x,i)=>`${i+1}. ${esc(x.p.name)} ${x.pts} pts`).join(' · ')}</div></div>`}
function graphHtml(){const h=settingValue('history_'+currentGroupId(),[])||[]; if(h.length<2) return '<p class="muted">Aún falta historial para dibujar la evolución. Se irá llenando al guardar resultados.</p>'; const ps=groupMembers(); const chars='▁▂▃▄▅▆▇█'; return `<div class="history-list">${ps.map(p=>{const vals=h.slice(-12).map(s=>{const row=[...(s.groups||[]),...(s.knockout||[])].filter(x=>x.id===p.id).reduce((a,x)=>a+x.pts,0); return row;}); const max=Math.max(1,...vals); const line=vals.map(v=>chars[Math.min(chars.length-1,Math.round((v/max)*(chars.length-1)))]).join(''); return `<div class="history-item"><b>${esc(p.name)}</b><div class="sparkline">${line}</div><div class="small">Último puntaje registrado: ${vals[vals.length-1]||0}</div></div>`}).join('')}</div>`}
function hallHtml(){const key='hall_'+currentGroupId(); const saved=settingValue(key,[])||[]; const winners=[]; if(phaseComplete('groups')&&ranking('groups')[0]) winners.push({phase:'Fase de grupos',...ranking('groups')[0]}); if(phaseComplete('knockout')&&ranking('knockout')[0]) winners.push({phase:'Eliminatorias',...ranking('knockout')[0]}); const merged=[...saved,...winners.map(w=>({phase:w.phase,name:w.p.name,pts:w.pts,exact:w.exact,at:new Date().toISOString()}))]; const seen=new Set(); const rows=merged.filter(x=>{const k=x.phase+'_'+x.name+'_'+x.pts; if(seen.has(k)) return false; seen.add(k); return true;}); if(!rows.length) return '<p class="muted">El Salón de la Fama se llenará cuando se cierre una fase o eliminatoria.</p>'; return `<div class="hof-list">${rows.slice(-10).reverse().map(x=>`<div class="hof-row"><b>🏛️ ${esc(x.phase)}</b><span>${esc(x.name)} · ${x.pts} pts · ${x.exact||0} exactos</span></div>`).join('')}</div>`}
function recordsHtml(){const ps=groupMembers().map(p=>({p,...playerMetrics(p.id)})); if(!ps.length) return '<p class="muted">Sin participantes.</p>'; const bestPts=ps.slice().sort((a,b)=>b.bestDay.pts-a.bestDay.pts)[0]; const bestExact=ps.slice().sort((a,b)=>b.exact-a.exact)[0]; const bestEff=ps.filter(x=>x.played>0).sort((a,b)=>b.effectiveness-a.effectiveness)[0]; const bestStreak=ps.slice().sort((a,b)=>b.bestStreak-a.bestStreak)[0]; const rows=[['🏆 Mejor jornada',bestPts?.bestDay?.pts>=0?`${esc(bestPts.p.name)} · ${bestPts.bestDay.pts} pts (${bestPts.bestDay.day})`:'Pendiente'],['🎯 Más exactos',bestExact?`${esc(bestExact.p.name)} · ${bestExact.exact}`:'Pendiente'],['📊 Mejor efectividad',bestEff?`${esc(bestEff.p.name)} · ${bestEff.effectiveness}%`:'Pendiente'],['🔥 Mejor racha',bestStreak?`${esc(bestStreak.p.name)} · ${bestStreak.bestStreak}`:'Pendiente']]; return `<div class="history-list">${rows.map(r=>`<div class="record-row"><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div>`;}

function phaseName(m){return m.phase==='knockout'?'Eliminatorias':'Fase de grupos'}
function allPlayerMetrics(pid,phaseSel='all'){
  const phase=phaseSel==='all'?null:phaseSel;
  return playerMetrics(pid,phase);
}
function myStatsHtml(){
  if(!session) return '<p class="muted">Inicia sesión para ver tus estadísticas.</p>';
  const mg=playerMetrics(session.id,'groups'), mk=playerMetrics(session.id,'knockout'), mt=playerMetrics(session.id);
  const rows=[['Total',mt],['Fase de grupos',mg],['Eliminatorias',mk]];
  return `<div class="profile-kpi"><div class="status">Puntos totales<br><b>${mt.pts}</b></div><div class="status">Exactos<br><b>${mt.exact}</b></div><div class="status">Efectividad<br><b>${mt.effectiveness}%</b></div><div class="status">Mejor jornada<br><b>${mt.bestDay.pts<0?0:mt.bestDay.pts}</b></div></div><div class="history-list">${rows.map(([name,m])=>`<div class="history-item"><b>${name}</b><div class="small">${m.pts} pts · ${m.winner}/${m.played} aciertos de ganador/empate · ${m.exact} exactos · ${m.effectiveness}% efectividad · mejor racha ${m.bestStreak}</div><div class="small">Mejor jornada: ${m.bestDay.pts<0?'Pendiente':`${m.bestDay.day} · ${m.bestDay.pts} pts · ${m.bestDay.exact} exacto(s)`}</div></div>`).join('')}</div>`;
}
function myHistoryHtml(){
  if(!session) return '<p class="muted">Inicia sesión para ver tu historial.</p>';
  const rows=matches.slice().sort((a,b)=>new Date(b.date)-new Date(a.date)).map(m=>{
    const pr=predFor(session.id,m.id), rr=resFor(m.id), pts=pointsFor(pr,m);
    if(!pr && !(rr&&rr.home_score!=null&&rr.away_score!=null)) return '';
    const prText=pr&&pr.home_score!=null&&pr.away_score!=null?`${pr.home_score}-${pr.away_score}`:'Sin pronóstico';
    const rrText=rr&&rr.home_score!=null&&rr.away_score!=null?`${rr.home_score}-${rr.away_score}`:'Pendiente';
    const cls=pts===4?'good':pts>0?'ok':'muted';
    return `<div class="history-item"><b>${teamLabel(m.home,true)} vs ${teamLabel(m.away,true)}</b><div class="small">${phaseName(m)} · ${fmtDateTime(m.date)}</div><div class="row"><span>Mi pronóstico: <b>${prText}</b></span><span>Real: <b>${rrText}</b></span><span class="pill ${cls}">${pts} pts</span></div></div>`;
  }).filter(Boolean);
  return rows.length?`<div class="history-list">${rows.join('')}</div>`:'<p class="muted">Aún no tienes historial con pronósticos o resultados.</p>';
}
function compareOptionsHtml(){
  const others=groupMembers().filter(p=>p.id!==session?.id);
  return others.map(p=>`<option value="${esc(p.id)}">${esc(p.name)}</option>`).join('');
}
function compareRows(pidA,pidB,phaseSel){
  const phase=phaseSel==='all'?null:phaseSel;
  const list=(phase?matches.filter(m=>m.phase===phase):matches).filter(m=>resFor(m.id)?.home_score!=null&&resFor(m.id)?.away_score!=null);
  let same=0,different=0,aBetter=0,bBetter=0,ties=0;
  list.forEach(m=>{const pa=predFor(pidA,m.id), pb=predFor(pidB,m.id); if(pa&&pb&&pa.home_score!=null&&pb.home_score!=null){ if(+pa.home_score===+pb.home_score&&+pa.away_score===+pb.away_score) same++; else different++; } const sa=pointsFor(pa,m), sb=pointsFor(pb,m); if(sa>sb)aBetter++; else if(sb>sa)bBetter++; else ties++;});
  return {same,different,aBetter,bBetter,ties,played:list.length};
}
function renderCompare(){
  const sel=document.getElementById('comparePlayer'); if(!sel) return;
  const others=groupMembers().filter(p=>p.id!==session?.id);
  sel.innerHTML=compareOptionsHtml();
  if(!others.length){compareBox.innerHTML='<p class="muted">No hay otro participante para comparar.</p>'; return;}
  const otherId=sel.value||others[0].id; if(!sel.value) sel.value=otherId;
  const phaseSel=document.getElementById('comparePhase')?.value||'all';
  const other=groupMembers().find(p=>p.id===otherId)||others[0];
  const a=allPlayerMetrics(session.id,phaseSel), b=allPlayerMetrics(other.id,phaseSel), c=compareRows(session.id,other.id,phaseSel);
  compareBox.innerHTML=`<div class="grid2"><div class="stat-card"><h3>👤 ${esc(session.name)}</h3><b>${a.pts}</b> pts<div class="small">🎯 ${a.exact} exactos · ✅ ${a.winner}/${a.played} aciertos · ${a.effectiveness}% efectividad</div></div><div class="stat-card"><h3>👤 ${esc(other.name)}</h3><b>${b.pts}</b> pts<div class="small">🎯 ${b.exact} exactos · ✅ ${b.winner}/${b.played} aciertos · ${b.effectiveness}% efectividad</div></div></div><div class="history-list"><div class="record-row"><b>Partidos comparados</b><span>${c.played}</span></div><div class="record-row"><b>Pronósticos iguales</b><span>${c.same}</span></div><div class="record-row"><b>Pronósticos diferentes</b><span>${c.different}</span></div><div class="record-row"><b>Ganaste más puntos</b><span>${c.aBetter} partido(s)</span></div><div class="record-row"><b>${esc(other.name)} ganó más puntos</b><span>${c.bBetter} partido(s)</span></div><div class="record-row"><b>Empates</b><span>${c.ties} partido(s)</span></div></div>`;
}
function profileStatsHtml(){if(!session) return ''; const m=playerMetrics(session.id), bs=badgesFor(session.id); const trophies=[]; if(phaseComplete('groups')&&ranking('groups')[0]?.p.id===session.id) trophies.push(`🏆 Campeón fase de grupos · ${esc(currentGroup().name)}`); if(phaseComplete('knockout')&&ranking('knockout')[0]?.p.id===session.id) trophies.push(`👑 Campeón eliminatorias · ${esc(currentGroup().name)}`); return `<div class="profile-kpi"><div class="status">Puntos<br><b>${m.pts}</b></div><div class="status">Efectividad<br><b>${m.effectiveness}%</b></div><div class="status">Racha actual<br><b>${m.currentStreak}</b></div><div class="status">Mejor racha<br><b>${m.bestStreak}</b></div></div>${trophies.length?`<div class="trophy-box"><b>Trofeos virtuales</b><div>${trophies.join('<br>')}</div></div>`:''}<div class="badge-grid">${bs.length?bs.map(x=>`<span class="auto-badge">${x}</span>`).join(''):'<span class="muted">Aún no tienes insignias.</span>'}</div>`}
function autoSummaryHtml(){const rg=ranking('groups')[0], rk=ranking('knockout')[0], m=currentMvp(); const parts=[]; if(rg) parts.push(`En fase de grupos va líder <b>${esc(rg.p.name)}</b> con ${rg.pts} pts.`); if(rk) parts.push(`En eliminatorias va líder <b>${esc(rk.p.name)}</b> con ${rk.pts} pts.`); if(m?.top?.pts>0) parts.push(`El MVP de la última jornada fue <b>${esc(m.top.p.name)}</b> con ${m.top.pts} pts.`); const pool=(currentGroup().currency||'GTQ')+' '+((+currentGroup().fee||0)*groupMembers().length); parts.push(`La bolsa actual del grupo es <b>${pool}</b>.`); const cron=settingValue('api_football_cron_status',null); if(cron?.ok){ parts.push(`API Football: <b>${cron.hasLive?'cada 1 minuto con partido en vivo':'cada 2 minutos sin partido en vivo'}</b>. Última sync: ${fmtDateTime(cron.at)}. Modo: <b>${esc(cron.mode||'')}</b>, updates: <b>${cron.updates??0}</b>, fixtures: <b>${cron.fixtures??0}</b>, liveAll: <b>${cron.liveAll??0}</b>.`); if(isAdmin()&&cron.unmatched?.length) parts.push(`<br><span class="muted">No emparejados: ${esc(cron.unmatched.slice(0,3).join(' | '))}</span>`); if(isAdmin()&&cron.diag?.length) parts.push(`<br><span class="muted">Diag: ${esc(cron.diag.slice(-3).join(' | '))}</span>`); } return `<div class="summary-card">${parts.join(' ')}</div>`}
function historyHtml(){const h=settingValue('history_'+currentGroupId(),[])||[]; if(!h.length) return '<p class="muted">Aún no hay historial. Se guardará al cargar o corregir resultados.</p>'; return `<div class="history-list">${h.slice(-10).reverse().map(s=>`<div class="history-item"><b>${fmtDateTime(s.at)}</b><div class="small">Grupos: ${(s.groups||[]).slice(0,3).map((x,i)=>`${i+1}. ${esc(x.name)} ${x.pts}`).join(' · ')||'-'}</div><div class="small">Eliminatorias: ${(s.knockout||[]).slice(0,3).map((x,i)=>`${i+1}. ${esc(x.name)} ${x.pts}`).join(' · ')||'-'}</div></div>`).join('')}</div>`}
function renderRanking(){if(document.getElementById('rankBox')) rankBox.innerHTML=rankHtml(ranking('groups'),'Ranking fase de grupos','Puntaje solo de fase de grupos.',false,'groups')+rankHtml(ranking('knockout'),'Ranking eliminatorias','Puntaje de eliminatorias + bono de campeón (+10 pts si acierta).',true,'knockout'); if(document.getElementById('myStatsBox')) myStatsBox.innerHTML=myStatsHtml(); if(document.getElementById('myHistoryBox')) myHistoryBox.innerHTML=myHistoryHtml(); if(document.getElementById('recordsBox')) recordsBox.innerHTML=recordsHtml(); if(document.getElementById('profileStatsBox')) profileStatsBox.innerHTML=profileStatsHtml(); if(document.getElementById('comparePlayer')) renderCompare();}
async function saveRankingSnapshot(){if(!supa||!session) return; const key='history_'+currentGroupId(); const prev=settingValue(key,[])||[]; const snap={at:new Date().toISOString(),groups:ranking('groups').map(x=>({id:x.p.id,name:x.p.name,pts:x.pts,exact:x.exact})),knockout:ranking('knockout').map(x=>({id:x.p.id,name:x.p.name,pts:x.pts,exact:x.exact}))}; const sig=JSON.stringify(snap.groups.map(x=>[x.id,x.pts,x.exact]).concat(snap.knockout.map(x=>[x.id,x.pts,x.exact]))); const last=prev[prev.length-1]; const lastSig=last?JSON.stringify((last.groups||[]).map(x=>[x.id,x.pts,x.exact]).concat((last.knockout||[]).map(x=>[x.id,x.pts,x.exact]))):''; if(sig!==lastSig){await saveSettingValue(key,[...prev.slice(-39),snap]);}}

function statusBase(s){return String(s||'').split('|')[0].trim()}
function statusDetails(s){return String(s||'').split('|').slice(1).join('|').trim()}
function isLiveResult(r){const b=statusBase(r?.status).toLowerCase(); const raw=String(r?.status||'').toLowerCase(); return ['1t','2t','descanso','tiempo extra','descanso te','penales','interrumpido','en vivo','live','1h','2h','et','p','ht','bt','susp','int'].some(x=>b.startsWith(x)||raw.includes(x))}
function isFinishedResult(r){const b=statusBase(r?.status).toLowerCase(); const raw=String(r?.status||'').toLowerCase(); return !!(r&&r.home_score!==null&&r.home_score!==undefined&&r.away_score!==null&&r.away_score!==undefined) && (['finalizado','finalizado te','finalizado penales','final','ft','aet','pen'].some(x=>b===x||b.startsWith(x)||raw.includes(x)))}
function isScheduledLiveCandidate(m){
  try{
    const r=resFor(m.id);
    if(isLiveResult(r)||isFinishedResult(r)) return false;
    const start=new Date(m.date).getTime(), now=Date.now();
    const preWindow=2*60000, gameWindow=150*60000;
    return now >= start-preWindow && now <= start+gameWindow;
  }catch(e){return false;}
}
function liveMatches(){const byId=new Map(); matches.forEach(m=>{if(isLiveResult(resFor(m.id))||isScheduledLiveCandidate(m)) byId.set(m.id,m);}); return [...byId.values()].sort((a,b)=>new Date(a.date)-new Date(b.date))}
function liveFallbackNotice(m){const r=resFor(m.id); if(isLiveResult(r)) return ''; return '<div class="status ok live-state"><span class="live-badge">EN VIVO</span> Por horario · esperando marcador API</div><div class="small muted">El partido ya inició según calendario. El marcador aparecerá cuando API Football/Supabase lo confirme.</div>'}

function recentFinishedMatches(limit=1){const now=Date.now(); return matches.filter(m=>{const r=resFor(m.id); const t=new Date(m.date).getTime(); return isFinishedResult(r) && t<now && t>now-8*3600000;}).sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,limit)}
function upcomingMatches(){const now=Date.now(); return matches.filter(m=>new Date(m.date).getTime()>now && !hasRealResult(m)).sort((a,b)=>new Date(a.date)-new Date(b.date)).slice(0,6)}
function timeUntil(d){let ms=new Date(d).getTime()-Date.now(); if(ms<=0)return 'Iniciando'; let h=Math.floor(ms/3600000), mn=Math.floor((ms%3600000)/60000); if(h>=24){let days=Math.floor(h/24); return `Faltan ${days} día${days===1?'':'s'}`;} return `Faltan ${h}h ${mn}m`;}
function eventIconFromText(t){t=String(t||'').toLowerCase(); if(t.includes('⚽')||t.includes('goal')||t.includes('gol'))return '⚽'; if(t.includes('red card')||t.includes('roja'))return '🟥'; if(t.includes('card')||t.includes('yellow')||t.includes('amarilla'))return '🟨'; if(t.includes('penalty')||t.includes('penal'))return '🥅'; if(t.includes('var'))return '📺'; if(t.includes('subst')||t.includes('substitution')||t.includes('cambio'))return '🔁'; return '📌'}
function renderEventList(details){
  const parts=String(details||'').split(' · ').map(x=>x.trim()).filter(Boolean);
  if(!parts.length) return '<div class="live-events muted">Minuto/estado actualizado por API Football. Eventos aparecerán si la API los devuelve.</div>';
  return `<div class="live-events"><b>Eventos importantes</b><div class="event-list">${parts.map(ev=>`<div class="event-item"><div class="event-icon">${eventIconFromText(ev)}</div><div>${esc(ev)}</div></div>`).join('')}</div></div>`;
}
function renderLiveHome(){const lives=liveMatches(); if(!lives.length){const finished=recentFinishedMatches(1); if(finished.length){liveMatchBox.innerHTML=finished.map(m=>{let r=resFor(m.id)||{}, details=statusDetails(r.status); return matchCard(m,`<div class="status ok live-state"><span class="live-badge">TERMINADO</span> ${esc(statusBase(r.status)||'Finalizado')}</div><div class="live-score">${r.home_score??'-'} - ${r.away_score??'-'}</div>${details?renderEventList(details):'<div class="small muted">Marcador final confirmado.</div>'}`)}).join('')+(isAdmin()?'<button class="good" onclick="updateApiFootballLive(false)">Actualizar vivo ahora</button>':''); return;} liveMatchBox.innerHTML='<p class="muted">No hay partido en vivo en este momento.</p>'+(isAdmin()?'<button class="good" onclick="updateApiFootballLive(false)">Actualizar vivo ahora</button>':''); return;} liveMatchBox.innerHTML=lives.map(m=>{let r=resFor(m.id)||{}, details=statusDetails(r.status); const score=(r.home_score!=null&&r.away_score!=null)?`<div class="live-score">${r.home_score} - ${r.away_score}</div>`:'<div class="live-score">0 - 0</div><div class="small muted">Marcador pendiente de confirmar</div>'; const top=isLiveResult(r)?`<div class="status err live-state"><span class="live-badge">EN VIVO</span> ${esc(statusBase(r.status)||'En vivo')}</div>`:liveFallbackNotice(m); return matchCard(m,`${top}${score}${details?renderEventList(details):'<div class="live-events muted">Esperando actualización automática de API Football.</div>'}`)}).join('')+(isAdmin()?'<button class="good" onclick="updateApiFootballLive(false)">Actualizar vivo ahora</button>':'')}

function phaseMatches(phase){return matches.filter(m=>m.phase===phase)}
function phaseComplete(phase){const list=phaseMatches(phase); return list.length && list.every(m=>{const r=resFor(m.id); return r&&r.home_score!==null&&r.away_score!==null})}
function leaderBannerHtml(){const r=ranking('groups')[0]; if(!r) return ''; const m=playerMetrics(r.p.id,'groups'); return `<div class="leader-banner">👑 <b>Líder actual: ${esc(r.p.name)}</b><div>${r.pts} puntos · ${r.exact} exactos · ${m.effectiveness}% efectividad · 🔥 racha ${m.currentStreak}</div><div class="small">¡Felicidades al líder del grupo ${esc(currentGroup().name)}!</div></div>`;}
function winnerCardsHtml(){let html=''; const rg=ranking('groups')[0]; if(phaseComplete('groups')&&rg){html+=`<div class="winner-card"><div>🏆 Ganador fase de grupos</div><div class="winner-name">${esc(rg.p.name)}</div><div>${rg.pts} puntos · ${rg.exact} marcadores exactos</div></div>`} const rk=ranking('knockout')[0]; if(phaseComplete('knockout')&&rk){html+=`<div class="winner-card"><div>👑 Ganador eliminatorias</div><div class="winner-name">${esc(rk.p.name)}</div><div>${rk.pts} puntos · ${rk.exact} marcadores exactos</div></div>`} return html||'<p class="muted">Los ganadores aparecerán automáticamente cuando termine cada quiniela.</p>'}
function alertCardsHtml(){const now=Date.now(); const future=matches.filter(m=>new Date(m.date).getTime()>now).sort((a,b)=>new Date(a.date)-new Date(b.date)); const soon=future.filter(m=>new Date(m.date).getTime()-now<=6*3600000).slice(0,4); const live=liveMatches(); const missing=future.slice(0,8).filter(m=>{const p=predFor(session?.id,m.id); return !p||p.home_score===null||p.away_score===null}).slice(0,4); let arr=[]; if(live.length) arr.push(...live.map(m=>['🔴',`En vivo: ${teamLabel(m.home)} vs ${teamLabel(m.away)}`, statusBase(resFor(m.id)?.status)||'En juego'])); if(soon.length) arr.push(...soon.map(m=>['⏰',`Cierra pronto: ${teamLabel(m.home)} vs ${teamLabel(m.away)}`, timeUntil(m.date)])); if(missing.length) arr.push(...missing.map(m=>['🎯',`Pendiente de pronóstico: ${teamLabel(m.home)} vs ${teamLabel(m.away)}`, fmtDateTime(m.date)])); if(!arr.length) arr.push(['✅','Todo al día','No tienes alertas importantes por ahora.']); let btn=''; if('Notification' in window && Notification.permission!=='granted') btn='<button class="notify-btn" onclick="enableBrowserAlerts()">Activar avisos en este dispositivo</button>'; return `<div class="alert-grid">${arr.map(a=>`<div class="alert-item"><div class="alert-emoji">${a[0]}</div><div><b>${a[1]}</b><div class="small">${a[2]}</div></div></div>`).join('')}</div>${btn}`}
async function enableBrowserAlerts(){return enableExternalNotifications()}
function renderHome(){let g=currentGroup(), ps=groupMembers(), ranks=ranking('groups'), r=ranks[0]; currentGroupName.textContent=g.name; const gs=sessionGroups(); if(document.getElementById('homeGroupSwitch')){homeGroupSwitchBox.classList.toggle('hidden', gs.length<=1); homeGroupSwitch.innerHTML=gs.map(x=>`<option value="${esc(x.id)}" ${x.id===currentGroupId()?'selected':''}>${esc(x.name)}</option>`).join('');} if(document.getElementById('topGroupSwitch')){topGroupSwitchBox.classList.toggle('hidden', gs.length<=1); topGroupSwitch.innerHTML=gs.map(x=>`<option value="${esc(x.id)}" ${x.id===currentGroupId()?'selected':''}>${esc(x.name)}</option>`).join('');} statPlayers.textContent=ps.length; statPool.textContent=(g.currency||'GTQ')+' '+((+g.fee||0)*ps.length); statLeader.textContent=r?`${r.p.name} (${r.pts})`:'-'; if(document.getElementById('homeAlerts')) homeAlerts.innerHTML=leaderBannerHtml()+alertCardsHtml(); if(document.getElementById('winnerBox')) winnerBox.innerHTML=winnerCardsHtml(); if(document.getElementById('profileStatsBox')) profileStatsBox.innerHTML=profileStatsHtml(); renderLiveHome(); const prev=recentFinishedMatches(1); if(document.getElementById('previousMatchBox')) previousMatchBox.innerHTML=prev.length?prev.map(m=>{const rr=resFor(m.id)||{}; const details=statusDetails(rr.status); return matchCard(m,`<div class="status ok">Finalizado: <b>${rr.home_score??'-'} - ${rr.away_score??'-'}</b></div>${details?renderEventList(details):'<div class="small muted">Datos finales cargados.</div>'}`)}).join(''):'<p class="muted">Aún no hay partido anterior reciente.</p>'; const up=upcomingMatches(); if(document.getElementById('nextMatchBox')) nextMatchBox.innerHTML=up.length?matchCard(up[0],`<div class="countdown">${timeUntil(up[0].date)}</div>`):'<p class="muted">No hay próximo partido pendiente.</p>'; homePlayers.innerHTML=ranks.slice(0,3).map((x,i)=>`<div class="row ${i===0?'top1':''}"><b>${i===0?'😎🥇':i===1?'🏃‍♂️💨🥈':'👀🥉'} ${esc(x.p.name)}</b><span><b>${x.pts}</b> pts · ${x.exact} exactos</span></div>`).join('')||'<p>Sin participantes.</p>'; }
function groupStandings(){
  const tables={};
  groupMatches.forEach(m=>{const g=m.group||'Grupo'; tables[g]=tables[g]||{}; [m.home,m.away].forEach(t=>tables[g][t]=tables[g][t]||{team:t,pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,gd:0,pts:0}); const r=resFor(m.id); if(!r||r.home_score===null||r.away_score===null)return; const H=tables[g][m.home], A=tables[g][m.away], hs=+r.home_score, as=+r.away_score; H.pj++; A.pj++; H.gf+=hs; H.gc+=as; A.gf+=as; A.gc+=hs; if(hs>as){H.pg++;A.pp++;H.pts+=3}else if(hs<as){A.pg++;H.pp++;A.pts+=3}else{H.pe++;A.pe++;H.pts++;A.pts++;} H.gd=H.gf-H.gc; A.gd=A.gf-A.gc;});
  Object.keys(tables).forEach(g=>tables[g]=Object.values(tables[g]).sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf));
  return tables;
}
function renderGroupTables(){const tables=groupStandings(); return `<div class="card"><h2>Tablas de posiciones</h2><div class="world-grid">${Object.keys(tables).sort().map(g=>`<div class="bracket-round"><h3>${esc(g)}</h3><table class="table-mini"><thead><tr><th>Equipo</th><th>Pts</th><th>PJ</th><th>DG</th><th>GF</th></tr></thead><tbody>${tables[g].map(t=>`<tr><td>${teamLabel(t.team)}</td><td><b>${t.pts}</b></td><td>${t.pj}</td><td>${t.gd}</td><td>${t.gf}</td></tr>`).join('')}</tbody></table></div>`).join('')}</div></div>`}
function renderCalendarList(list){return `<div class="card"><h2>Calendario</h2>${list.map(m=>matchCard(m,dayKey(m.date)===todayKey()?'<span class="today-badge">HOY</span>':'' )).join('')||'<p>No hay partidos.</p>'}</div>`}
function renderBracket(){const rounds={}; knockoutMatches.forEach(m=>{rounds[m.round]=rounds[m.round]||[]; rounds[m.round].push(m)}); return `<div class="card"><h2>Llaves</h2><div class="bracket">${Object.keys(rounds).map(r=>`<div class="bracket-round"><h3>${esc(r)}</h3>${rounds[r].map(m=>matchCard(m)).join('')}</div>`).join('')}</div></div>`}
function finishedWorldMatches(){return matches.filter(m=>{const r=resFor(m.id); return r&&r.home_score!==null&&r.home_score!==undefined&&r.away_score!==null&&r.away_score!==undefined;});}
function teamTournamentStats(){
  const map={}; allTeamNames.forEach(t=>map[t]={team:t,pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,gd:0,pts:0,clean:0});
  finishedWorldMatches().forEach(m=>{const r=resFor(m.id), hs=+r.home_score, as=+r.away_score; const H=map[m.home]||(map[m.home]={team:m.home,pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,gd:0,pts:0,clean:0}); const A=map[m.away]||(map[m.away]={team:m.away,pj:0,pg:0,pe:0,pp:0,gf:0,gc:0,gd:0,pts:0,clean:0}); H.pj++;A.pj++;H.gf+=hs;H.gc+=as;A.gf+=as;A.gc+=hs;if(as===0)H.clean++; if(hs===0)A.clean++; if(hs>as){H.pg++;A.pp++;H.pts+=3}else if(hs<as){A.pg++;H.pp++;A.pts+=3}else{H.pe++;A.pe++;H.pts++;A.pts++;} H.gd=H.gf-H.gc; A.gd=A.gf-A.gc;});
  return Object.values(map).sort((a,b)=>b.pts-a.pts||b.gd-a.gd||b.gf-a.gf||a.team.localeCompare(b.team));
}
function renderWorldStats(){
  const done=finishedWorldMatches(); const goals=done.reduce((a,m)=>{const r=resFor(m.id);return a+(+r.home_score||0)+(+r.away_score||0)},0); const avg=done.length?(goals/done.length).toFixed(2):'0.00'; const teams=teamTournamentStats(); const mostGoals=teams.slice().sort((a,b)=>b.gf-a.gf)[0]; const bestDef=teams.filter(t=>t.pj).sort((a,b)=>a.gc-b.gc||b.pts-a.pts)[0]; const mostWins=teams.slice().sort((a,b)=>b.pg-a.pg||b.pts-a.pts)[0]; const draws=done.filter(m=>{const r=resFor(m.id); return +r.home_score===+r.away_score}).length;
  return `<div class="world-kpis"><div class="world-kpi"><b>${done.length}</b><span>Partidos jugados</span></div><div class="world-kpi"><b>${goals}</b><span>Goles</span></div><div class="world-kpi"><b>${avg}</b><span>Promedio goles</span></div><div class="world-kpi"><b>${draws}</b><span>Empates</span></div></div><div class="world-list"><div class="world-row"><b>🥅 Equipo más goleador</b><span>${mostGoals?teamLabel(mostGoals.team,true)+' · '+mostGoals.gf+' goles':'Pendiente'}</span></div><div class="world-row"><b>🧤 Mejor defensa</b><span>${bestDef?teamLabel(bestDef.team,true)+' · '+bestDef.gc+' goles recibidos':'Pendiente'}</span></div><div class="world-row"><b>📈 Más victorias</b><span>${mostWins?teamLabel(mostWins.team,true)+' · '+mostWins.pg+' victoria(s)':'Pendiente'}</span></div></div>`;
}
function renderPlayersWorld(){
  const teams=teamTournamentStats().filter(t=>t.gf>0).sort((a,b)=>b.gf-a.gf).slice(0,12);
  return `<div class="status">⚽ La app no recibe goleadores individuales desde la API actual. Mientras tanto, esta sección muestra goleadores por selección y queda lista para conectar estadísticas de jugadores cuando la API las envíe.</div><div class="world-list">${teams.map((t,i)=>`<div class="world-row"><div><span class="world-rank">${i+1}</span> ${teamLabel(t.team,true)}</div><b>${t.gf} goles</b></div>`).join('')||'<p class="muted">Aún no hay goles cargados.</p>'}</div>`;
}
function renderTeamsWorld(){
  const q=(document.getElementById('worldSearch')?.value||'').toLowerCase(); const stats=teamTournamentStats().filter(t=>!q||t.team.toLowerCase().includes(q));
  return `<div class="world-list">${stats.map(t=>{const next=matches.filter(m=>(m.home===t.team||m.away===t.team)&&new Date(m.date)>new Date()&&!hasRealResult(m)).sort((a,b)=>new Date(a.date)-new Date(b.date))[0]; const last=matches.filter(m=>(m.home===t.team||m.away===t.team)&&hasRealResult(m)).sort((a,b)=>new Date(b.date)-new Date(a.date))[0]; return `<div class="world-card"><div class="team-profile-head"><h3>${teamLabel(t.team,true)}</h3><span class="pill">${t.pts} pts · DG ${t.gd}</span></div><div class="small">PJ ${t.pj} · PG ${t.pg} · PE ${t.pe} · PP ${t.pp} · GF ${t.gf} · GC ${t.gc}</div><div class="small"><b>Último:</b> ${last?esc(last.home)+' vs '+esc(last.away)+' · '+(resFor(last.id)?.home_score??'-')+'-'+(resFor(last.id)?.away_score??'-'):'Pendiente'}</div><div class="small"><b>Próximo:</b> ${next?esc(next.home)+' vs '+esc(next.away)+' · '+fmtDateTime(next.date):'Sin próximo partido'}</div></div>`}).join('')||'<p class="muted">No encontré selecciones con ese filtro.</p>'}</div>`;
}
function renderWorldNews(){
  const live=liveMatches()[0], prev=recentFinishedMatches(1)[0], next=upcomingMatches()[0];
  const items=[]; if(live) items.push(['🔴 Partido en vivo',`${teamLabel(live.home,true)} vs ${teamLabel(live.away,true)} · ${statusBase(resFor(live.id)?.status)||'En vivo'}`]); if(prev){const r=resFor(prev.id); items.push(['✅ Último resultado',`${teamLabel(prev.home,true)} ${r.home_score}-${r.away_score} ${teamLabel(prev.away,true)}`]);} if(next) items.push(['⏳ Próximo partido',`${teamLabel(next.home,true)} vs ${teamLabel(next.away,true)} · ${fmtDateTime(next.date)}`]); items.push(['📰 Noticias externas','Sección preparada para conectar noticias del Mundial, lesiones, sanciones, clasificados y eliminados.']);
  return `<div class="world-list">${items.map(x=>`<div class="world-card news-card"><h3>${x[0]}</h3><div>${x[1]}</div></div>`).join('')}</div>`;
}
function renderWorldHistory(){
  const champs=[['2022','Argentina','Francia'],['2018','Francia','Croacia'],['2014','Alemania','Argentina'],['2010','España','Países Bajos'],['2006','Italia','Francia'],['2002','Brasil','Alemania'],['1998','Francia','Brasil'],['1994','Brasil','Italia'],['1990','Alemania','Argentina'],['1986','Argentina','Alemania']];
  return `<div class="world-list">${champs.map(c=>`<div class="world-row"><b>🏆 ${c[0]}</b><span>Campeón: ${esc(c[1])} · Subcampeón: ${esc(c[2])}</span></div>`).join('')}</div>`;
}
function renderWorldSurprises(){
  const done=finishedWorldMatches(); const biggest=done.map(m=>{const r=resFor(m.id), diff=Math.abs((+r.home_score||0)-(+r.away_score||0)); return {m,r,diff,total:(+r.home_score||0)+(+r.away_score||0)}}).sort((a,b)=>b.diff-a.diff)[0]; const mostGoals=done.map(m=>{const r=resFor(m.id); return {m,r,total:(+r.home_score||0)+(+r.away_score||0)}}).sort((a,b)=>b.total-a.total)[0]; const teams=teamTournamentStats(); const revelation=teams.filter(t=>t.pj).sort((a,b)=>b.pts-a.pts||b.gd-a.gd)[0]; const cold=teams.filter(t=>t.pj).sort((a,b)=>a.pts-b.pts||a.gd-b.gd)[0];
  const cards=[['📈 Revelación del torneo',revelation?teamLabel(revelation.team,true)+` · ${revelation.pts} pts`:'Pendiente'],['📉 Más complicado',cold?teamLabel(cold.team,true)+` · ${cold.pts} pts`:'Pendiente'],['⚽ Mayor goleada',biggest?`${teamLabel(biggest.m.home,true)} ${biggest.r.home_score}-${biggest.r.away_score} ${teamLabel(biggest.m.away,true)}`:'Pendiente'],['🔥 Partido con más goles',mostGoals?`${teamLabel(mostGoals.m.home,true)} ${mostGoals.r.home_score}-${mostGoals.r.away_score} ${teamLabel(mostGoals.m.away,true)} · ${mostGoals.total} goles`:'Pendiente']];
  return `<div class="world-list">${cards.map(c=>`<div class="world-card surprise-card"><h3>${c[0]}</h3><div>${c[1]}</div></div>`).join('')}</div>`;
}
function renderWorld(){
  if(!document.getElementById('worldBox')) return;
  const tab=currentWorldTab(); const phase=document.getElementById('worldPhase')?.value||'groups'; const s=(document.getElementById('worldSearch')?.value||'').toLowerCase(); const list=matches.filter(m=>m.phase===phase && (!s||m.home.toLowerCase().includes(s)||m.away.toLowerCase().includes(s)));
  if(tab==='calendario') worldBox.innerHTML=renderCalendarList(list);
  else if(tab==='grupos') worldBox.innerHTML=renderGroupTables();
  else if(tab==='eliminatorias') worldBox.innerHTML=renderBracket();
  else if(tab==='estadisticas') worldBox.innerHTML=renderWorldStats();
  else if(tab==='jugadores') worldBox.innerHTML=renderPlayersWorld();
  else if(tab==='selecciones') worldBox.innerHTML=renderTeamsWorld();
  else if(tab==='noticias') worldBox.innerHTML=renderWorldNews();
  else if(tab==='historico') worldBox.innerHTML=renderWorldHistory();
  else if(tab==='sorpresas') worldBox.innerHTML=renderWorldSurprises();
  else worldBox.innerHTML=renderCalendarList(list);
}
async function addGroup(){let name=newGroupName.value.trim(); if(!name)return; let id=name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,''); await q(supa.from('groups').upsert({id,name,currency:newGroupCurrency.value,fee:+newGroupFee.value||0})); await q(supa.from('group_members').upsert({group_id:id,participant_id:session.id,is_group_admin:true})); newGroupName.value=''; await refreshAll();}
async function saveGroup(gid){if(!isAdmin())return alert('Solo administrador.'); const name=document.getElementById('gname_'+gid).value.trim(); if(!name)return alert('Nombre requerido.'); await q(supa.from('groups').update({name,currency:document.getElementById('gcur_'+gid).value,fee:+document.getElementById('gfee_'+gid).value||0}).eq('id',gid)); await refreshAll();}
async function deleteGroup(gid){if(!isAdmin())return alert('Solo administrador.'); const g=state.groups.find(x=>x.id===gid); if(!confirm('Eliminar el grupo '+(g?.name||gid)+'? También se eliminarán sus membresías y pronósticos de ese grupo.'))return; await q(supa.from('groups').delete().eq('id',gid)); if(currentGroupId()===gid){localStorage.removeItem('v300_last_group'); await refreshAll(); logout(); return;} await refreshAll();}
function renderGroupsAdmin(){groupsBox.innerHTML=state.groups.map(g=>`<div class="row" style="align-items:flex-start"><div class="manage-grid"><div><label>Nombre</label><input id="gname_${esc(g.id)}" value="${esc(g.name)}"></div><div><label>Moneda</label><select id="gcur_${esc(g.id)}"><option ${g.currency==='GTQ'?'selected':''}>GTQ</option><option ${g.currency==='USD'?'selected':''}>USD</option></select></div><div><label>Costo</label><input id="gfee_${esc(g.id)}" type="number" value="${g.fee??0}"></div></div><div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end"><button class="primary" onclick="saveGroup('${esc(g.id)}')">Guardar</button><button class="danger" onclick="deleteGroup('${esc(g.id)}')">Eliminar</button></div></div>`).join(''); groupChecks.innerHTML='<b>Asignar a grupos:</b><br>'+state.groups.map(g=>`<label><input type="checkbox" class="gcheck" value="${esc(g.id)}" ${g.id===currentGroupId()?'checked':''}> ${esc(g.name)}</label>`).join('')}
async function addParticipant(){let name=newName.value.trim(), username=newUser.value.trim(), pass=newPass.value||'1234'; if(!name||!username)return alert('Falta nombre o usuario'); let id='p_'+username.toLowerCase().replace(/[^a-z0-9]+/g,'_'); await q(supa.from('participants').upsert({id,name,username,password:pass,is_super_admin:false})); let gids=[...document.querySelectorAll('.gcheck:checked')].map(x=>x.value); if(!gids.length)gids=[currentGroupId()]; await q(supa.from('group_members').upsert(gids.map(group_id=>({group_id,participant_id:id,is_group_admin:false})))); newName.value=newUser.value=''; newPass.value='1234'; await refreshAll();}
async function saveParticipantAdmin(pid){if(!isAdmin())return alert('Solo administrador.'); const upd={name:document.getElementById('pname_'+pid).value.trim(),username:document.getElementById('puser_'+pid).value.trim()}; const pass=document.getElementById('ppass_'+pid).value; if(pass) upd.password=pass; if(!upd.name||!upd.username)return alert('Nombre y usuario requeridos.'); await q(supa.from('participants').update(upd).eq('id',pid)); const gids=[...document.querySelectorAll('.pmem_'+CSS.escape(pid)+':checked')].map(x=>x.value); await q(supa.from('group_members').delete().eq('participant_id',pid)); if(gids.length) await q(supa.from('group_members').upsert(gids.map(group_id=>({group_id,participant_id:pid,is_group_admin:false})))); if(session?.id===pid){session={...session,...upd};} await refreshAll();}
async function deleteParticipantAdmin(pid){if(!isAdmin())return alert('Solo administrador.'); const p=state.participants.find(x=>x.id===pid); if(!p||p.is_super_admin)return alert('No se puede eliminar el super admin.'); if(!confirm('Eliminar participante '+p.name+'? También se eliminarán sus pronósticos.'))return; await q(supa.from('participants').delete().eq('id',pid)); await refreshAll();}
function renderAdminPlayers(){let ps=state.participants; adminPlayers.innerHTML=ps.map(p=>{const gids=memberGroups(p.id); return `<div class="card"><div class="grid3"><div><label>Nombre visible</label><input id="pname_${esc(p.id)}" value="${esc(p.name)}"></div><div><label>Usuario</label><input id="puser_${esc(p.id)}" value="${esc(p.username)}"></div><div><label>Nueva contraseña / reset</label><input id="ppass_${esc(p.id)}" placeholder="Dejar igual"></div></div><div class="status"><b>Grupos:</b><br>${state.groups.map(g=>`<label><input type="checkbox" class="pmem_${esc(p.id)}" value="${esc(g.id)}" ${gids.includes(g.id)?'checked':''}> ${esc(g.name)}</label>`).join('')}</div><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px"><button class="primary" onclick="saveParticipantAdmin('${esc(p.id)}')">Guardar participante</button>${p.is_super_admin?'<span class="pill">Super admin</span>':`<button class="danger" onclick="deleteParticipantAdmin('${esc(p.id)}')">Eliminar participante</button>`}</div></div>`}).join('')}
async function saveResult(mid){let h=document.getElementById('rh_'+mid).value,a=document.getElementById('ra_'+mid).value,qv=document.getElementById('rq_'+mid)?.value||null; await q(supa.from('results').upsert({match_id:mid,home_score:h===''?null:+h,away_score:a===''?null:+a,qualifier:qv,status:'final',updated_at:new Date().toISOString()})); await refreshAll(); await saveRankingSnapshot()}
function renderResultsAdmin(){let list=matchList(resPhase.value,resDay.value); resultsAdmin.innerHTML=list.map(m=>{let r=resFor(m.id)||{}; return matchCard(m,`<div class="score"><input id="rh_${m.id}" type="number" value="${r.home_score??''}"><b>-</b><input id="ra_${m.id}" type="number" value="${r.away_score??''}"></div>${m.phase==='knockout'?`<label>Clasificó</label><select id="rq_${m.id}"><option value="">Sin seleccionar</option><option ${r.qualifier===m.home?'selected':''}>${esc(m.home)}</option><option ${r.qualifier===m.away?'selected':''}>${esc(m.away)}</option></select>`:''}<button class="good" onclick="saveResult('${m.id}')">Guardar resultado</button>`)}).join('')}


async function deleteGroupPredictions(){
  if(!isAdmin()) return alert('Solo administrador.');
  const g=currentGroup();
  if(!confirm('¿Eliminar TODOS los pronósticos del grupo '+(g?.name||currentGroupId())+'? Esta acción no se puede deshacer.')) return;
  await q(supa.from('predictions').delete().eq('group_id',currentGroupId()));
  if(document.getElementById('cleanMsg')){cleanMsg.className='status ok';cleanMsg.textContent='Pronósticos del grupo eliminados.';}
  await refreshAll();
}
async function deleteAllPredictions(){
  if(!isAdmin()) return alert('Solo administrador.');
  if(!confirm('¿Eliminar TODOS los pronósticos de TODOS los grupos?')) return;
  if(!confirm('Confirmación final: se borrarán los pronósticos de SANCRIS, Shelter Clean y cualquier otro grupo.')) return;
  await q(supa.from('predictions').delete().neq('match_id','__NO_EXISTE__'));
  if(document.getElementById('cleanMsg')){cleanMsg.className='status ok';cleanMsg.textContent='Todos los pronósticos fueron eliminados.';}
  await refreshAll();
}
async function cleanWholeSystem(){
  if(!isAdmin()) return alert('Solo administrador.');
  const msg='LIMPIEZA TOTAL: borrará pronósticos, resultados y participantes no administradores. Mantiene grupos, admin y API Football. ¿Continuar?';
  if(!confirm(msg)) return;
  const typed=prompt('Escribe LIMPIAR para confirmar.');
  if(typed!=='LIMPIAR') return alert('Cancelado.');
  await q(supa.from('predictions').delete().neq('match_id','__NO_EXISTE__'));
  await q(supa.from('results').delete().neq('match_id','__NO_EXISTE__'));
  await q(supa.from('participants').delete().eq('is_super_admin',false));
  if(document.getElementById('cleanMsg')){cleanMsg.className='status ok';cleanMsg.textContent='Sistema limpio. Se conservaron grupos, admin y configuración.';}
  await refreshAll();
}

function fillAdminPredPlayers(){
  if(!isAdmin() || !document.getElementById('adminPredPlayer')) return;
  const ps=groupMembers();
  const old=adminPredPlayer.value;
  adminPredPlayer.innerHTML=ps.map(p=>`<option value="${esc(p.id)}">${esc(p.name)} (${esc(p.username)})</option>`).join('');
  if(old && ps.some(p=>p.id===old)) adminPredPlayer.value=old;
}
async function saveAdminPrediction(pid,mid){
  if(!isAdmin()) return alert('Solo administrador.');
  let h=document.getElementById('aph_'+pid+'_'+mid).value;
  let a=document.getElementById('apa_'+pid+'_'+mid).value;
  let qv=document.getElementById('apq_'+pid+'_'+mid)?.value||null;
  await q(supa.from('predictions').upsert({group_id:currentGroupId(),participant_id:pid,match_id:mid,home_score:h===''?null:+h,away_score:a===''?null:+a,qualifier:qv,updated_at:new Date().toISOString()}));
  const player=state.participants.find(x=>x.id===pid); const match=matches.find(x=>x.id===mid);
  notifyGroup('prediction','🎯 Pronóstico modificado',`${player?.name||'Un participante'} modificó ${match?.home||''} vs ${match?.away||''}.`).catch(()=>{});
  await refreshAll();
}
async function clearAdminPrediction(pid,mid){
  if(!isAdmin()) return alert('Solo administrador.');
  await q(supa.from('predictions').delete().eq('group_id',currentGroupId()).eq('participant_id',pid).eq('match_id',mid));
  await refreshAll();
}
function renderAdminPredictions(){
  if(!isAdmin() || !document.getElementById('adminPredBox')) return;
  fillAdminPredPlayers();
  const pid=adminPredPlayer.value;
  const player=state.participants.find(p=>p.id===pid);
  if(!pid){adminPredBox.innerHTML='<p>Selecciona un participante.</p>'; return;}
  const list=matchList(adminPredPhase.value,adminPredDay.value);
  adminPredBox.innerHTML=`<div class="status ok">Admin · Grupo: <b>${esc(currentGroup().name)}</b></div><div class="status privacy-note">🔒 Privacidad activa: ni el administrador puede ver marcadores de otros antes del inicio/bloqueo del partido.</div>`+list.map(m=>{
    let pr=predFor(pid,m.id)||{};
    if(!locked(m) && pid!==session.id){
      return matchCard(m,`<div class="players"><div class="row"><b>${esc(player?.name||pid)}</b><span>${predictionSaved(pr)?'✅ Ya pronosticó':'Pendiente'}</span></div></div><div class="status privacy-note">Marcador oculto hasta que el partido inicie.</div>`);
    }
    return matchCard(m,`<div class="score"><input id="aph_${pid}_${m.id}" type="number" min="0" value="${pr.home_score??''}"><b>-</b><input id="apa_${pid}_${m.id}" type="number" min="0" value="${pr.away_score??''}"></div>${m.phase==='knockout'?`<label>Clasifica</label><select id="apq_${pid}_${m.id}"><option value="">Sin seleccionar</option><option ${pr.qualifier===m.home?'selected':''}>${esc(m.home)}</option><option ${pr.qualifier===m.away?'selected':''}>${esc(m.away)}</option></select>`:''}<div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap"><button class="primary" onclick="saveAdminPrediction('${pid}','${m.id}')">Guardar pronóstico</button><button onclick="clearAdminPrediction('${pid}','${m.id}')">Limpiar pronóstico</button></div>`);
  }).join('') || '<p>No hay partidos.</p>';
}

function normName(s){
  return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/&/g,'and').replace(/[^a-z0-9]+/g,'').replace(/^the/,'');
}
function teamKey(s){
  const k=normName(s);
  // Alias completos para equipos del calendario Mundial 2026.
  // La API Football puede devolver nombres en inglés, códigos, nombres oficiales o variantes locales.
  const map={
    // Grupo A
    'mexico':'mexico','mex':'mexico',
    'sudafrica':'southafrica','surafrica':'southafrica','southafrica':'southafrica','rsa':'southafrica',
    'coreadelsur':'southkorea','southkorea':'southkorea','korearepublic':'southkorea','republicofkorea':'southkorea','korea':'southkorea','kor':'southkorea',
    'chequia':'czechia','czechia':'czechia','czech':'czechia','czechrepublic':'czechia','republicacheca':'czechia','cze':'czechia',
    // Grupo B
    'canada':'canada','can':'canada',
    'bosniayherzegovina':'bosniaandherzegovina','bosniaherzegovina':'bosniaandherzegovina','bosniaandherzegovina':'bosniaandherzegovina','bosnia':'bosniaandherzegovina','bih':'bosniaandherzegovina',
    'catar':'qatar','qatar':'qatar','qat':'qatar',
    'suiza':'switzerland','switzerland':'switzerland','sui':'switzerland',
    // Grupo C
    'brasil':'brazil','brazil':'brazil','bra':'brazil',
    'marruecos':'morocco','morocco':'morocco','mar':'morocco',
    'haiti':'haiti','hti':'haiti',
    'escocia':'scotland','scotland':'scotland','sco':'scotland',
    // Grupo D
    'estadosunidos':'unitedstates','estadosunidosdeamerica':'unitedstates','unitedstates':'unitedstates','unitedstatesofamerica':'unitedstates','usa':'unitedstates','us':'unitedstates','eeuu':'unitedstates','eua':'unitedstates',
    'paraguay':'paraguay','par':'paraguay',
    'australia':'australia','aus':'australia',
    'turquia':'turkey','turkiye':'turkey','türkiye':'turkey','turkey':'turkey','tur':'turkey',
    // Grupo E
    'alemania':'germany','germany':'germany','ger':'germany',
    'curazao':'curacao','curacao':'curacao','curacao':'curacao','cuw':'curacao',
    'costademarfil':'ivorycoast','cotedivoire':'ivorycoast','cotedivoire':'ivorycoast','ivorycoast':'ivorycoast','civ':'ivorycoast',
    'ecuador':'ecuador','ecu':'ecuador',
    // Grupo F
    'paisesbajos':'netherlands','holanda':'netherlands','netherlands':'netherlands','ned':'netherlands','nederland':'netherlands',
    'japon':'japan','japan':'japan','jpn':'japan',
    'suecia':'sweden','sweden':'sweden','swe':'sweden',
    'tunez':'tunisia','tunisia':'tunisia','tun':'tunisia',
    // Grupo G
    'belgica':'belgium','belgium':'belgium','bel':'belgium',
    'egipto':'egypt','egypt':'egypt','egy':'egypt',
    'iran':'iran','irn':'iran','islamicrepublicofiran':'iran',
    'nuevazelanda':'newzealand','newzealand':'newzealand','nz':'newzealand','nzl':'newzealand',
    // Grupo H
    'espana':'spain','spain':'spain','esp':'spain',
    'caboverde':'capeverde','capeverde':'capeverde','capoverde':'capeverde','cpv':'capeverde',
    'arabiasaudita':'saudiarabia','saudiarabia':'saudiarabia','ksa':'saudiarabia','saudi':'saudiarabia',
    'uruguay':'uruguay','uru':'uruguay',
    // Grupo I
    'francia':'france','france':'france','fra':'france',
    'senegal':'senegal','sen':'senegal',
    'irak':'iraq','iraq':'iraq','irq':'iraq',
    'noruega':'norway','norway':'norway','nor':'norway',
    // Grupo J
    'argentina':'argentina','arg':'argentina',
    'argelia':'algeria','algeria':'algeria','dza':'algeria','alg':'algeria',
    'austria':'austria','aut':'austria',
    'jordania':'jordan','jordan':'jordan','jor':'jordan',
    // Grupo K
    'portugal':'portugal','por':'portugal',
    'congord':'drcongo','rdcongo':'drcongo','republicademicadelcongo':'drcongo','republicademocraticadelcongo':'drcongo','drcongo':'drcongo','democraticrepublicofthecongo':'drcongo','congodr':'drcongo','drc':'drcongo','cod':'drcongo',
    'uzbekistan':'uzbekistan','uzb':'uzbekistan',
    'colombia':'colombia','col':'colombia',
    // Grupo L
    'inglaterra':'england','england':'england','eng':'england',
    'croacia':'croatia','croatia':'croatia','cro':'croatia',
    'ghana':'ghana','gha':'ghana',
    'panama':'panama','pan':'panama'
  };
  return map[k]||k;
}
function teamAliasReport(){
  // Herramienta de diagnóstico para Admin/Console: muestra claves normalizadas del calendario local.
  return matches.map(m=>({id:m.id, home:m.home, homeKey:teamKey(m.home), away:m.away, awayKey:teamKey(m.away), date:m.date}));
}
function apiStatusLabel(shortStatus){
  const map={NS:'No iniciado',TBD:'Por definir','1H':'1T',HT:'Descanso','2H':'2T',ET:'Tiempo extra',BT:'Descanso TE',P:'Penales',SUSP:'Suspendido',INT:'Interrumpido',LIVE:'En vivo',FT:'Finalizado',AET:'Finalizado TE',PEN:'Finalizado penales',PST:'Pospuesto',CANC:'Cancelado',ABD:'Abandonado',AWD:'Adjudicado',WO:'Walkover'};
  return map[shortStatus]||shortStatus||'';
}
function apiMatchToLocal(apiFixture, strictDate=false){
  const ah=teamKey(apiFixture?.teams?.home?.name), aa=teamKey(apiFixture?.teams?.away?.name);
  // Corrección final: empates forzados para nombres que API Football devuelve distinto
  const forcedPairs = {
    'southkorea|czechia':'g2',
    'czechia|southkorea':'g2',
    'korearepublic|czechia':'g2',
    'czechia|korearepublic':'g2'
  };
  const forcedId = forcedPairs[ah+'|'+aa];
  if(forcedId){
    const fm = matches.find(m=>m.id===forcedId);
    if(fm) return {match:fm, reversed: teamKey(fm.home)!==ah};
  }
  // Primero intenta empatar por equipos sin depender de fecha; esto protege cambios de zona horaria de API Football.
  let anyPair=matches.find(m=>teamKey(m.home)===ah && teamKey(m.away)===aa);
  if(anyPair) return {match:anyPair, reversed:false};
  anyPair=matches.find(m=>teamKey(m.home)===aa && teamKey(m.away)===ah);
  if(anyPair) return {match:anyPair, reversed:true};
  let candidates=matches.filter(m=>m.phase==='groups');
  if(strictDate){
    candidates=candidates.filter(m=>Math.abs(new Date(m.date)-new Date(apiFixture.fixture.date)) < 36*60*60*1000);
  }
  let found=candidates.find(m=>teamKey(m.home)===ah && teamKey(m.away)===aa);
  if(found) return {match:found, reversed:false};
  found=candidates.find(m=>teamKey(m.home)===aa && teamKey(m.away)===ah);
  if(found) return {match:found, reversed:true};
  return null;
}
async function loadApiFootballConfig(){
  if(!supa || !isAdmin() || !document.getElementById('apiFootballKey')) return;
  try{
    const cached=settingValue('api_football',{})||{};
    apiFootballKey.value=cached.key||localStorage.getItem('v303_api_football_key')||'';
    apiFootballLeague.value=cached.league||'1';
    apiFootballSeason.value=cached.season||'2026';
  }catch(e){ if(document.getElementById('apiFootballMsg')) apiFootballMsg.textContent='No se pudo leer configuración API: '+e.message; }
}
async function saveApiFootballConfig(){
  try{
    const key=apiFootballKey.value.trim(), league=apiFootballLeague.value.trim()||'1', season=apiFootballSeason.value.trim()||'2026';
    if(!key) return alert('Pega primero tu API Key.');
    localStorage.setItem('v303_api_football_key',key);
    await q(supa.from('settings').upsert({key:'api_football',value:{key,league,season},updated_at:new Date().toISOString()}));
    apiFootballMsg.className='status ok'; apiFootballMsg.textContent='API Key guardada.';
  }catch(e){apiFootballMsg.className='status err'; apiFootballMsg.textContent='Error guardando API Key: '+e.message;}
}
async function applyApiFootballFixtures(fixtures, strictDate=true){
  let updates=[], unmatched=[];
  for(const fx of fixtures){
    const map=apiMatchToLocal(fx, strictDate);
    const sh=fx.fixture?.status?.short;
    let status=apiStatusLabel(sh);
    const elapsed=fx.fixture?.status?.elapsed;
    if(['1H','2H','ET','P'].includes(sh) && elapsed) status += ` ${elapsed}'`;
    if(!status && fx.fixture?.status?.long) status=fx.fixture.status.long;
    if(['1H','2H','ET','P','HT','BT','SUSP','INT','LIVE'].includes(sh) && !statusBase(status).match(/1T|2T|Descanso|Tiempo extra|Penales|Interrumpido|Suspendido|En vivo/)) status='En vivo '+(elapsed?elapsed+"'":'');
    if(fx._live_events) status += ' | '+fx._live_events;
    if(!map){unmatched.push(`${fx.teams?.home?.name||'?'} vs ${fx.teams?.away?.name||'?'}`); continue;}
    let gh=fx.goals?.home, ga=fx.goals?.away;
    if(map.reversed){ const t=gh; gh=ga; ga=t; }
    if(gh===null || gh===undefined || ga===null || ga===undefined) continue;
    let qualifier=null;
    if(map.match.phase==='knockout'){
      const homeWinner=map.reversed?fx.teams?.away?.winner:fx.teams?.home?.winner;
      const awayWinner=map.reversed?fx.teams?.home?.winner:fx.teams?.away?.winner;
      if(homeWinner===true) qualifier=map.match.home;
      if(awayWinner===true) qualifier=map.match.away;
    }
    updates.push({match_id:map.match.id,home_score:+gh,away_score:+ga,qualifier,status:status||'api',updated_at:new Date().toISOString()});
  }
  if(updates.length) await q(supa.from('results').upsert(updates));
  await refreshAll();
  if(updates.length) await saveRankingSnapshot();
  return {updates, unmatched};
}
async function getApiFootballSettings(){
  const rows=await q(supa.from('settings').select('*').eq('key','api_football').limit(1));
  const v=rows?.[0]?.value||{};
  return {key:v.key||localStorage.getItem('v303_api_football_key')||'', league:v.league||'1', season:v.season||'2026'};
}
async function updateApiFootballLive(silent=true){
  try{
    const cfg=await getApiFootballSettings();
    if(!cfg.key){ if(!silent) alert('Primero guarda la API Key.'); return; }
    if(!silent && document.getElementById('apiFootballMsg')){apiFootballMsg.className='status'; apiFootballMsg.textContent='Consultando partidos en vivo...';}
    const url=`https://v3.football.api-sports.io/fixtures?live=all&league=${encodeURIComponent(cfg.league)}&season=${encodeURIComponent(cfg.season||'2026')}`;
    const resp=await fetch(url,{headers:{'x-apisports-key':cfg.key}});
    if(!resp.ok) throw new Error('API HTTP '+resp.status);
    const data=await resp.json();
    if(data.errors && (Array.isArray(data.errors)?data.errors.length:Object.keys(data.errors).length)) throw new Error('API: '+JSON.stringify(data.errors));
    let fixtures=(data.response||[]).filter(f=>String(f.league?.id||'')===String(cfg.league));
    if(!fixtures.length){
      const today=dayKey(new Date());
      const resp2=await fetch(`https://v3.football.api-sports.io/fixtures?league=${encodeURIComponent(cfg.league)}&season=${encodeURIComponent(cfg.season||'2026')}&date=${encodeURIComponent(today)}`,{headers:{'x-apisports-key':cfg.key}});
      if(resp2.ok){ const data2=await resp2.json(); fixtures=(data2.response||[]).filter(f=>String(f.league?.id||'')===String(cfg.league) && ['1H','2H','ET','P','HT','BT','SUSP','INT','LIVE'].includes(f.fixture?.status?.short)); }
    }
    for(const fx of fixtures){
      try{
        const evResp=await fetch(`https://v3.football.api-sports.io/fixtures/events?fixture=${fx.fixture.id}`,{headers:{'x-apisports-key':cfg.key}});
        const evData=await evResp.json();
        const evs=(evData.response||[]).filter(e=>['Goal','Card','Var','subst'].includes(e.type)).slice(-8).map(e=>{
          const min=e.time?.elapsed?`${e.time.elapsed}'`:'';
          const team=e.team?.name||'';
          const player=e.player?.name||'';
          const detail=e.detail||e.type||'';
          let icon='📌';
          const dl=String(detail).toLowerCase();
          if(e.type==='Goal') icon='⚽';
          else if(e.type==='Card') icon=dl.includes('red')?'🟥':'🟨';
          else if(e.type==='Var') icon='📺';
          else if(String(e.type).toLowerCase().includes('subst')) icon='🔁';
          return `${icon} ${min} ${team} ${player} ${detail}`.trim();
        });
        fx._live_events=evs.join(' · ');
      }catch(_){ }
    }
    const {updates, unmatched}=await applyApiFootballFixtures(fixtures, false);
    if(!silent && document.getElementById('apiFootballMsg')){apiFootballMsg.className='status ok'; apiFootballMsg.innerHTML=`Vivo actualizado: <b>${updates.length}</b> partido(s). API devolvió ${fixtures.length}.${unmatched.length?'<br><span class="small">Sin empatar: '+esc(unmatched.slice(0,5).join(' · '))+'</span>':''}`;}
  }catch(e){ if(!silent && document.getElementById('apiFootballMsg')){apiFootballMsg.className='status err'; apiFootballMsg.textContent='Error vivo: '+e.message;} }
}
async function updateApiFootballDay(){
  try{
    if(!isAdmin()) return alert('Solo administrador.');
    const key=apiFootballKey.value.trim()||localStorage.getItem('v303_api_football_key');
    if(!key) return alert('Primero guarda la API Key.');
    const date=resDay.value || dayKey(new Date());
    const league=apiFootballLeague.value.trim()||'1', season=apiFootballSeason.value.trim()||'2026';
    apiFootballMsg.className='status'; apiFootballMsg.textContent='Consultando API Football para '+date+'...';
    const url=`https://v3.football.api-sports.io/fixtures?league=${encodeURIComponent(league)}&season=${encodeURIComponent(season)}&date=${encodeURIComponent(date)}`;
    const resp=await fetch(url,{headers:{'x-apisports-key':key}});
    if(!resp.ok) throw new Error('API HTTP '+resp.status);
    const data=await resp.json();
    if(data.errors && (Array.isArray(data.errors)?data.errors.length:Object.keys(data.errors).length)) throw new Error('API: '+JSON.stringify(data.errors));
    const fixtures=data.response||[];
    const {updates, unmatched}=await applyApiFootballFixtures(fixtures, true);
    apiFootballMsg.className='status ok';
    apiFootballMsg.innerHTML=`Actualización completa: <b>${updates.length}</b> resultado(s) guardado(s). API devolvió ${fixtures.length} partido(s).${unmatched.length?'<br><span class="small">Sin empatar con calendario local: '+esc(unmatched.slice(0,5).join(' · '))+(unmatched.length>5?'...':'')+'</span>':''}`;
  }catch(e){apiFootballMsg.className='status err'; apiFootballMsg.textContent='Error API Football: '+e.message;}
}

async function updateApiFootballAll(){
  try{
    if(!isAdmin()) return alert('Solo administrador.');
    const key=apiFootballKey.value.trim()||localStorage.getItem('v303_api_football_key');
    if(!key) return alert('Primero guarda la API Key.');
    const league=apiFootballLeague.value.trim()||'1', season=apiFootballSeason.value.trim()||'2026';
    apiFootballMsg.className='status'; apiFootballMsg.textContent='Consultando API Football para todos los partidos del torneo...';
    const url=`https://v3.football.api-sports.io/fixtures?league=${encodeURIComponent(league)}&season=${encodeURIComponent(season)}`;
    const resp=await fetch(url,{headers:{'x-apisports-key':key}});
    if(!resp.ok) throw new Error('API HTTP '+resp.status);
    const data=await resp.json();
    if(data.errors && (Array.isArray(data.errors)?data.errors.length:Object.keys(data.errors).length)) throw new Error('API: '+JSON.stringify(data.errors));
    const fixtures=data.response||[];
    const {updates, unmatched}=await applyApiFootballFixtures(fixtures, false);
    apiFootballMsg.className='status ok';
    apiFootballMsg.innerHTML=`Actualización completa: <b>${updates.length}</b> resultado(s) guardado(s). API devolvió ${fixtures.length} partido(s).${unmatched.length?'<br><span class="small">Sin empatar con calendario local: '+esc(unmatched.slice(0,8).join(' · '))+(unmatched.length>8?'...':'')+'</span>':''}`;
  }catch(e){apiFootballMsg.className='status err'; apiFootballMsg.textContent='Error API Football: '+e.message;}
}




function oneSignalAppIdValue(){return (settingValue('onesignal_app_id','')||localStorage.getItem('v313_onesignal_app_id')||'').trim()}
function notifLocalOffKey(){return 'v31311_notifications_off_'+(session?.id||'anon')}
function notificationsLocallyOff(){return localStorage.getItem(notifLocalOffKey())==='1'}
async function loadOneSignalConfig(){
  if(!isAdmin()) return;
  const appId=oneSignalAppIdValue();
  if(document.getElementById('oneSignalAppId')) oneSignalAppId.value=appId;
  if(document.getElementById('oneSignalStatus')) oneSignalStatus.value=appId?'App ID guardado':'Sin configurar';
}
async function saveOneSignalConfig(){
  try{
    const appId=(oneSignalAppId.value||'').trim();
    if(!appId) return alert('Pega primero el OneSignal App ID.');
    localStorage.setItem('v313_onesignal_app_id',appId);
    await saveSettingValue('onesignal_app_id',appId);
    if(document.getElementById('oneSignalStatus')) oneSignalStatus.value='App ID guardado';
    oneSignalMsg.className='status ok'; oneSignalMsg.textContent='OneSignal guardado. Cada participante puede activar o desactivar avisos desde Perfil.';
    await initOneSignalForSession(false);
    await scheduleMatchPushes();
  }catch(e){oneSignalMsg.className='status err'; oneSignalMsg.textContent='Error guardando OneSignal: '+e.message;}
}
let oneSignalStarted=false;
async function initOneSignalForSession(showPrompt=false){
  try{
    const appId=oneSignalAppIdValue();
    if(!appId || !session || !window.OneSignalDeferred) { renderNotificationPrefs(); return; }
    window.OneSignalDeferred.push(async function(OneSignal){
      if(!oneSignalStarted){
        await OneSignal.init({appId, serviceWorkerPath:'OneSignalSDKWorker.js', serviceWorkerParam:{scope:'/'}, allowLocalhostAsSecureOrigin:true});
        oneSignalStarted=true;
      }
      try{ await OneSignal.login(session.id); }catch(e){}
      try{ await OneSignal.User.addTags({group_id:currentGroupId(), participant_id:session.id, name:session.name||''}); }catch(e){}
      if(showPrompt){ try{ await OneSignal.Notifications.requestPermission(); }catch(e){} }
      if(notificationsLocallyOff()){
        try{ await OneSignal.User.PushSubscription.optOut(); }catch(e){}
      }
      const optedIn=!!OneSignal.User?.PushSubscription?.optedIn;
      if(document.getElementById('oneSignalStatus')) oneSignalStatus.value=optedIn?'Activado en este dispositivo':'App ID guardado';
      renderNotificationPrefs();
    });
  }catch(e){ if(document.getElementById('oneSignalMsg')){oneSignalMsg.className='status err';oneSignalMsg.textContent='OneSignal: '+e.message;} renderNotificationPrefs(); }
}
async function enableExternalNotifications(){
  try{
    localStorage.removeItem(notifLocalOffKey());
    const appId=oneSignalAppIdValue();
    if(!appId) return alert('El administrador todavía no configuró OneSignal App ID.');
    await initOneSignalForSession(true);
    if(window.OneSignalDeferred){
      window.OneSignalDeferred.push(async function(OneSignal){
        try{ await OneSignal.Notifications.requestPermission(); }catch(e){}
        try{ await OneSignal.User.PushSubscription.optIn(); }catch(e){}
        try{ await OneSignal.User.addTags({group_id:currentGroupId(), participant_id:session.id, name:session.name||''}); }catch(e){}
        renderNotificationPrefs();
      });
    }
    await scheduleMatchPushes();
  }catch(e){alert('No se pudieron activar las notificaciones: '+e.message)}
}
async function disableExternalNotifications(){
  try{
    localStorage.setItem(notifLocalOffKey(),'1');
    if(window.OneSignalDeferred){
      window.OneSignalDeferred.push(async function(OneSignal){try{ await OneSignal.User.PushSubscription.optOut(); }catch(e){} renderNotificationPrefs();});
    }
    renderNotificationPrefs();
  }catch(e){alert('No se pudieron desactivar las notificaciones: '+e.message)}
}
function renderNotificationPrefs(){
  if(!document.getElementById('notifBox')) return;
  const appId=oneSignalAppIdValue();
  if(!appId){ notifBox.className='status err'; notifBox.textContent='OneSignal aún no está configurado por el administrador.'; return; }
  if(notificationsLocallyOff()){ notifBox.className='status err'; notifBox.textContent='Notificaciones externas desactivadas en este dispositivo.'; return; }
  const perm=('Notification' in window)?Notification.permission:'unsupported';
  if(perm==='granted'){ notifBox.className='status ok'; notifBox.textContent='Notificaciones externas activadas en este dispositivo.'; }
  else if(perm==='denied'){ notifBox.className='status err'; notifBox.textContent='El navegador bloqueó las notificaciones. Debes habilitarlas en ajustes del navegador/iPhone.'; }
  else { notifBox.className='status'; notifBox.textContent='Notificaciones listas para activar. Presiona “Activar notificaciones”.'; }
}
async function notifyGroup(type,title,message,opts={}){
  try{
    const app_id=oneSignalAppIdValue();
    if(!app_id || !session) return null;
    const body={
      app_id,
      group_id:opts.group_id||currentGroupId(),
      sender_id:opts.excludeSender===false?'':(opts.sender_id||session.id),
      exclude_sender:opts.excludeSender===false?false:true,
      target_participant_id:opts.target_participant_id||'',
      type,title,message,
      url:opts.url||location.origin+location.pathname
    };
    if(opts.send_after) body.send_after=opts.send_after;
    const resp=await fetch('/.netlify/functions/onesignal-notify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    let data={}; try{data=await resp.json();}catch(e){}
    if(!resp.ok) throw new Error((data&&data.error?data.error:'Error OneSignal')+(data&&data.details?': '+JSON.stringify(data.details).slice(0,180):''));
    return data;
  }catch(e){
    console.warn('notifyGroup error',e);
    throw e;
  }
}
function notifyParticipant(pid,type,title,message,opts={}){
  return notifyGroup(type,title,message,{...opts,target_participant_id:pid,excludeSender:false});
}
async function sendOneSignalTest(){
  try{
    await notifyGroup('test','🔔 Prueba de Quiniela','Notificación de prueba para el grupo '+(currentGroup()?.name||''),{excludeSender:false});
    oneSignalMsg.className='status ok'; oneSignalMsg.textContent='Prueba enviada correctamente. Si el dispositivo tiene avisos activados, debe llegar en segundos.';
  }catch(e){oneSignalMsg.className='status err';oneSignalMsg.textContent='Error enviando prueba: '+e.message;}
}
function pushSettingKey(kind,mid,pid='grupo'){return 'onesignal_'+kind+'_'+currentGroupId()+'_'+mid+'_'+pid}
async function markPushScheduled(kind,mid,pid,sendAt){await saveSettingValue(pushSettingKey(kind,mid,pid),{scheduled_at:new Date().toISOString(),send_at:sendAt})}
function predictionMissingFor(pid,m,gid=currentGroupId()){
  const p=predFor(pid,m.id,gid);
  if(!p || p.home_score===null || p.home_score===undefined || p.away_score===null || p.away_score===undefined) return true;
  if(m.phase==='knockout' && !p.qualifier) return true;
  return false;
}
function isInNotifyWindow(now,target,minutes=8){return now>=target && now<target+minutes*60000}
async function scheduleMatchPushes(){
  try{
    if(!oneSignalAppIdValue()||!session) return;
    const now=Date.now();
    const gid=currentGroupId();
    const members=groupMembers(gid);
    const list=matches.filter(m=>{const t=new Date(m.date).getTime(); return t>now-8*3600000 && t<now+70*60000;}).sort((a,b)=>new Date(a.date)-new Date(b.date));
    for(const m of list){
      const t=new Date(m.date).getTime();
      for(const mins of [30,10]){
        const target=t-mins*60000;
        if(!isInNotifyWindow(now,target,8)) continue;
        for(const player of members){
          if(!player?.id || !predictionMissingFor(player.id,m,gid)) continue;
          if(settingValue(pushSettingKey('reminder'+mins,m.id,player.id),null)) continue;
          await markPushScheduled('reminder'+mins,m.id,player.id,new Date().toISOString());
          await notifyParticipant(player.id,'match_reminder',`⏰ Faltan ${mins} minutos`,`Te falta el pronóstico: ${m.home} vs ${m.away}.`);
        }
      }
      if(isInNotifyWindow(now,t,8) && !settingValue(pushSettingKey('started',m.id,'grupo'),null)){
        await markPushScheduled('started',m.id,'grupo',new Date().toISOString());
        await notifyGroup('match_started','🔴 El partido ya empezó',`${m.home} vs ${m.away} ya inició.`,{excludeSender:false});
      }
      const r=resFor(m.id);
      if(isFinishedResult(r) && !settingValue(pushSettingKey('finished',m.id,'grupo'),null)){
        await markPushScheduled('finished',m.id,'grupo',new Date().toISOString());
        await notifyGroup('match_finished','🏁 Partido finalizado',`${m.home} ${r.home_score} - ${r.away_score} ${m.away}.`,{excludeSender:false});
      }
    }
  }catch(e){console.warn('scheduleMatchPushes error',e)}
}
function latestChatActivity(){const msgs=settingValue('chat_'+currentGroupId(),[])||[]; return msgs.slice().reverse().find(m=>m.pid!==session?.id) || null}
function chatMentionedMe(item){try{if(!item||!session) return false; const name=(session.name||'').toLowerCase(); const user=(session.username||'').toLowerCase(); const txt=(' '+(item.text||'').toLowerCase()); return (name&&txt.includes('@'+name)) || (user&&txt.includes('@'+user));}catch(e){return false}}
function latestPredActivity(){return (state.predictions||[]).filter(p=>p.group_id===currentGroupId() && p.participant_id!==session?.id && p.updated_at).sort((a,b)=>new Date(b.updated_at)-new Date(a.updated_at))[0]||null}
function pendingTodayPredictions(){
  if(!session) return [];
  const today=todayKey();
  return matches.filter(m=>dayKey(m.date)===today && !locked(m)).filter(m=>{
    const p=predFor(session.id,m.id);
    if(!p || p.home_score===null || p.home_score===undefined || p.away_score===null || p.away_score===undefined) return true;
    if(m.phase==='knockout' && !p.qualifier) return true;
    return false;
  });
}

/* ===== V315.1 Rétame ===== */
function retameKey(){return 'retame_'+currentGroupId()}
function retameList(){return settingValue(retameKey(),[])||[]}
function saveRetameList(list){return saveSettingValue(retameKey(),list)}
function retameMatchOptions(){return matches.slice().sort((a,b)=>new Date(a.date)-new Date(b.date)).filter(m=>new Date(m.date).getTime()>Date.now()-6*3600000)}
function retameStatusLabel(c){return ({open:'Abierto',pending_creator:'Pendiente de confirmar',active:'Confirmado',settled:'Finalizado',cancelled:'Cancelado'}[c.status]||c.status)}
function retameRewardText(c){const map={orgullo:'🏆 Solo orgullo',dinero:'💰 Dinero',comida:'🍔 Comida/bebida',castigo:'😂 Reto al perdedor',personalizado:'✍️ Personalizado'}; return (map[c.rewardType]||'🎁 Premio')+(c.reward?': '+esc(c.reward):'')}
function retameResultFor(c){const m=matches.find(x=>x.id===c.matchId); const r=resFor(c.matchId); if(!m||!r||r.home_score==null||r.away_score==null) return null; let win='draw'; if(+r.home_score>+r.away_score) win=m.home; else if(+r.away_score>+r.home_score) win=m.away; return {m,r,win};}
function retameAutoSettle(list){let changed=false; const updated=list.map(c=>{if(c.status!=='active') return c; const rr=retameResultFor(c); if(!rr) return c; const winners=[c.creatorPick===rr.win?c.creatorId:null,...(c.accepted||[]).filter(a=>a.pick===rr.win).map(a=>a.pid)].filter(Boolean); changed=true; return {...c,status:'settled',resultWinner:rr.win,winners,settledAt:new Date().toISOString()};}); if(changed) saveRetameList(updated).catch(()=>{}); return updated;}
function fillRetameForm(){if(!document.getElementById('retameMatch')) return; const ms=retameMatchOptions(); retameMatch.innerHTML=ms.map(m=>`<option value="${esc(m.id)}">${esc(m.home)} vs ${esc(m.away)} · ${fmtDateTime(m.date)}</option>`).join(''); updateRetamePickOptions();}
function updateRetamePickOptions(){if(!document.getElementById('retamePick')) return; const m=matches.find(x=>x.id===retameMatch.value)||retameMatchOptions()[0]; if(!m){retamePick.innerHTML=''; return;} retamePick.innerHTML=`<option value="${esc(m.home)}">${esc(m.home)}</option><option value="draw">Empate</option><option value="${esc(m.away)}">${esc(m.away)}</option>`;}
function setRetameTab(id){document.querySelectorAll('[data-retab]').forEach(b=>b.classList.toggle('active',b.dataset.retab===id)); document.querySelectorAll('.retame-panel').forEach(p=>p.classList.toggle('active',p.id==='retab-'+id)); renderRetame();}
async function createRetameChallenge(){try{const m=matches.find(x=>x.id===retameMatch.value); if(!m) return alert('Selecciona un partido.'); if(new Date(m.date).getTime()<Date.now()) return alert('Este partido ya inició o terminó.'); const item={id:'r_'+Date.now()+'_'+Math.random().toString(36).slice(2),groupId:currentGroupId(),creatorId:session.id,creatorName:session.name,matchId:m.id,creatorPick:retamePick.value,rewardType:retameRewardType.value,reward:retameReward.value.trim(),message:retameMsg.value.trim(),status:'open',requests:[],accepted:[],rejected:[],createdAt:new Date().toISOString()}; await saveRetameList([item,...retameList()].slice(0,250)); retameReward.value=''; retameMsg.value=''; retameCreateMsg.className='status ok'; retameCreateMsg.textContent='Reto publicado. Ahora los participantes pueden aceptarlo y tú confirmas a quién aceptas.'; setRetameTab('muro'); notifyGroup('retame','🔥 Nuevo reto en Rétame',`${session.name}: ${m.home} vs ${m.away}`).catch(()=>{});}catch(e){retameCreateMsg.className='status err'; retameCreateMsg.textContent='Error: '+e.message}}
async function requestRetame(id,pick){const list=retameList(); const c=list.find(x=>x.id===id); if(!c||!['open','pending_creator'].includes(c.status)) return alert('Este reto ya no está abierto.'); if(c.creatorId===session.id) return alert('No puedes aceptar tu propio reto.'); if(pick===c.creatorPick) return alert('Debes elegir una opción diferente a la del creador.'); const req={pid:session.id,name:session.name,pick,at:new Date().toISOString()}; const updated=list.map(x=>x.id===id?{...x,requests:[...(x.requests||[]).filter(r=>r.pid!==session.id),req],status:'pending_creator'}:x); await saveRetameList(updated); renderRetame();}
async function confirmRetame(id,pid,yes=true){const list=retameList(); const updated=list.map(c=>{if(c.id!==id||c.creatorId!==session.id) return c; const req=(c.requests||[]).find(r=>r.pid===pid); if(!req) return c; const requests=(c.requests||[]).filter(r=>r.pid!==pid); const accepted=yes?[...(c.accepted||[]).filter(a=>a.pid!==pid),req]:(c.accepted||[]); const rejected=!yes?[...(c.rejected||[]),{...req,rejectedAt:new Date().toISOString()}]:(c.rejected||[]); return {...c,requests,accepted,rejected,status:accepted.length?'active':(requests.length?'pending_creator':'open')};}); await saveRetameList(updated); renderRetame();}
async function cancelRetame(id){const list=retameList(); const c=list.find(x=>x.id===id); if(!c||c.creatorId!==session.id) return alert('Solo el creador puede cancelar este reto.'); if(c.status==='settled') return alert('Este reto ya finalizó.'); if(!confirm('¿Cancelar este reto?')) return; await saveRetameList(list.map(x=>x.id===id?{...x,status:'cancelled',cancelledAt:new Date().toISOString()}:x)); renderRetame();}
function retamePickLabel(c,pick){const m=matches.find(x=>x.id===c.matchId); if(!m) return esc(pick); return pick==='draw'?'Empate':esc(pick);}
function retameCard(c,mode='wall'){const m=matches.find(x=>x.id===c.matchId)||{}; const rr=retameResultFor(c); const reqs=c.requests||[], acc=c.accepted||[]; const meReq=reqs.find(r=>r.pid===session.id)||acc.find(r=>r.pid===session.id); const canJoin=c.status==='open'||c.status==='pending_creator'; const creator=c.creatorId===session.id; const status=retameStatusLabel(c); const matchTxt=`${esc(m.home||'Equipo A')} vs ${esc(m.away||'Equipo B')}`; const opts=m.home?[[m.home,m.home],['draw','Empate'],[m.away,m.away]].filter(o=>o[0]!==c.creatorPick):[]; const choiceHtml=(!creator&&canJoin&&!meReq)?`<div class="retame-actions">${opts.map(o=>`<button onclick="requestRetame('${c.id}','${esc(o[0])}')">Aceptar con ${esc(o[1])}</button>`).join('')}</div>`:(meReq&&!creator?`<span class="retame-chip">Tu respuesta: ${retamePickLabel(c,meReq.pick)}</span>`:''); const confirmHtml=(creator&&reqs.length)?`<div class="retame-card"><b>Solicitudes por confirmar</b>${reqs.map(r=>`<div class="row"><span>${esc(r.name)} eligió <b>${retamePickLabel(c,r.pick)}</b></span><span><button class="good" onclick="confirmRetame('${c.id}','${r.pid}',true)">Confirmar</button><button class="danger" onclick="confirmRetame('${c.id}','${r.pid}',false)">Rechazar</button></span></div>`).join('')}</div>`:''; const acceptedHtml=acc.length?`<div>${acc.map(a=>`<span class="retame-chip">${esc(a.name)}: ${retamePickLabel(c,a.pick)}</span>`).join('')}</div>`:'<p class="muted">Aún no hay participantes confirmados.</p>'; const winHtml=c.status==='settled'?`<div class="status ok">Resultado: ${rr?rr.r.home_score+'-'+rr.r.away_score:''}. Ganador(es): ${c.winners&&c.winners.length?c.winners.map(pid=>esc(groupMembers().find(p=>p.id===pid)?.name||c.creatorName)).join(', '):'Sin ganador'}</div>`:''; return `<div class="retame-card"><div class="retame-head"><div><div class="retame-title">🔥 ${esc(c.creatorName)} te reta</div><div class="small">${matchTxt} · ${fmtDateTime(m.date||c.createdAt)}</div></div><span class="retame-status">${status}</span></div>${c.message?`<p>${esc(c.message)}</p>`:''}<div class="retame-vs"><div class="retame-pick ${c.status==='settled'&&(c.winners||[]).includes(c.creatorId)?'retame-winner':''}"><b>${esc(c.creatorName)}</b><div class="small">${retamePickLabel(c,c.creatorPick)}</div></div><b>VS</b><div class="retame-pick"><b>Retadores</b><div class="small">${acc.length||reqs.length} participante(s)</div></div></div><div>${retameRewardText(c)}</div><div style="margin-top:8px"><b>Confirmados:</b>${acceptedHtml}</div>${choiceHtml}${confirmHtml}${winHtml}<div class="retame-actions">${creator&&c.status!=='settled'&&c.status!=='cancelled'?`<button class="danger" onclick="cancelRetame('${c.id}')">Cancelar reto</button>`:''}</div></div>`}
function retameRankingHtml(list){const score={}; groupMembers().forEach(p=>score[p.id]={p,w:0,l:0,d:0,pts:0}); list.filter(c=>c.status==='settled').forEach(c=>{const ids=[c.creatorId,...(c.accepted||[]).map(a=>a.pid)]; ids.forEach(pid=>{if(!score[pid]) return; if((c.winners||[]).includes(pid)){score[pid].w++; score[pid].pts+=3;} else {score[pid].l++;}});}); const gameScore=retameGameScoreRows(retameGamesList()); Object.keys(gameScore).forEach(pid=>{if(score[pid]){score[pid].w+=gameScore[pid].w; score[pid].pts+=gameScore[pid].pts;}}); const rows=Object.values(score).sort((a,b)=>b.pts-a.pts||b.w-a.w); return rows.length?`<div class="ranking">${rows.map((x,i)=>`<div class="rank-row"><div><b>${i+1}. ${esc(x.p.name)}</b><div class="small">Victorias ${x.w} · Derrotas ${x.l}</div></div><div class="points">${x.pts} pts</div></div>`).join('')}</div>`:'<p class="muted">Aún no hay ranking Rétame.</p>'}
function renderRetame(){if(!document.getElementById('retameWallBox')||!session) return; fillRetameForm(); fillRetameGameForms(); let list=retameAutoSettle(retameList()); const games=retameGamesList(); const open=list.filter(c=>['open','pending_creator','active'].includes(c.status)); retameWallBox.innerHTML=open.length?open.map(c=>retameCard(c,'wall')).join(''):'<div class="retame-empty">No hay apuestas abiertas. Crea una y reta al grupo 🔥</div>'; const trivia=games.filter(g=>(g.type==='trivia'||g.type==='trivia_room')&&g.status!=='cancelled'); if(document.getElementById('retameTriviaBox')) retameTriviaBox.innerHTML=trivia.length?trivia.map(g=>g.type==='trivia_room'?triviaRoomCard(g):retameGameCard(g)).join(''):'<div class="retame-empty">No hay salas de trivia. Crea una e invita participantes ⚡</div>'; const express=games.filter(g=>g.type==='express'&&g.status!=='cancelled'); if(document.getElementById('retameExpressBox')) retameExpressBox.innerHTML=express.length?express.map(retameGameCard).join(''):'<div class="retame-empty">No hay retos express activos.</div>'; const grupal=games.filter(g=>g.type==='grupal'&&g.status!=='cancelled'); if(document.getElementById('retameGroupBox')) retameGroupBox.innerHTML=grupal.length?grupal.map(retameGameCard).join(''):'<div class="retame-empty">No hay retos grupales activos.</div>'; if(document.getElementById('retameRankingBox')) retameRankingBox.innerHTML=retameRankingHtml(list); const finished=[...list.filter(c=>['settled','cancelled'].includes(c.status)).map(c=>retameCard(c,'historial')),...games.filter(g=>['closed','cancelled'].includes(g.status)).map(retameGameCard)]; if(document.getElementById('retameHistoryBox')) retameHistoryBox.innerHTML=finished.length?finished.join(''):'<div class="retame-empty">Aún no hay historial.</div>';}


function retameGamesKey(){return 'retame_games_'+currentGroupId()}
function retameGamesList(){return settingValue(retameGamesKey(),[])||[]}
function saveRetameGames(list){return saveSettingValue(retameGamesKey(),list)}
const RETAME_TRIVIA=[
 {cat:'campeones',q:'¿Quién ganó el Mundial 2010?',a:'España',opts:['España','Holanda','Alemania','Brasil']},
 {cat:'campeones',q:'¿Qué selección ganó el Mundial 2022?',a:'Argentina',opts:['Argentina','Francia','Brasil','Croacia']},
 {cat:'campeones',q:'¿Quién fue campeón en Brasil 2014?',a:'Alemania',opts:['Alemania','Argentina','Brasil','España']},
 {cat:'records',q:'¿Cuál selección tiene más Copas del Mundo?',a:'Brasil',opts:['Brasil','Alemania','Italia','Argentina']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 2018?',a:'Francia',opts:['Francia','Croacia','Bélgica','Inglaterra']},
 {cat:'historia',q:'¿En qué país se jugó el Mundial 1998?',a:'Francia',opts:['Francia','Italia','Alemania','España']},
 {cat:'historia',q:'¿En qué Mundial ocurrió el famoso 7-1 de Alemania a Brasil?',a:'Brasil 2014',opts:['Brasil 2014','Sudáfrica 2010','Rusia 2018','Alemania 2006']},
 {cat:'jugadores',q:'¿Quién fue elegido mejor jugador del Mundial 2022?',a:'Lionel Messi',opts:['Lionel Messi','Kylian Mbappé','Luka Modrić','Antoine Griezmann']},
 {cat:'jugadores',q:'¿Quién fue goleador del Mundial 2022?',a:'Kylian Mbappé',opts:['Kylian Mbappé','Lionel Messi','Olivier Giroud','Julián Álvarez']},
 {cat:'records',q:'¿Qué jugador tiene más goles en la historia de los Mundiales?',a:'Miroslav Klose',opts:['Miroslav Klose','Ronaldo Nazário','Gerd Müller','Lionel Messi']},
 {cat:'selecciones',q:'¿Qué selección es conocida como La Canarinha?',a:'Brasil',opts:['Brasil','México','Colombia','Uruguay']},
 {cat:'selecciones',q:'¿Qué selección es conocida como La Albiceleste?',a:'Argentina',opts:['Argentina','Uruguay','Paraguay','Chile']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 2006?',a:'Italia',opts:['Italia','Francia','Alemania','Brasil']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 2002?',a:'Brasil',opts:['Brasil','Alemania','Argentina','Italia']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 1994?',a:'Brasil',opts:['Brasil','Italia','Alemania','Argentina']},
 {cat:'historia',q:'¿En qué país se jugó el Mundial 2010?',a:'Sudáfrica',opts:['Sudáfrica','Brasil','Alemania','Rusia']},
 {cat:'historia',q:'¿Cuál fue el primer país africano en organizar un Mundial?',a:'Sudáfrica',opts:['Sudáfrica','Marruecos','Egipto','Nigeria']},
 {cat:'historia',q:'¿Qué país organizó el Mundial 2006?',a:'Alemania',opts:['Alemania','Italia','Francia','Inglaterra']},
 {cat:'historia',q:'¿Qué país organizó el Mundial 2018?',a:'Rusia',opts:['Rusia','Qatar','Brasil','Alemania']},
 {cat:'historia',q:'¿Qué país organizó el Mundial 2022?',a:'Qatar',opts:['Qatar','Rusia','Estados Unidos','Japón']},
 {cat:'jugadores',q:'¿Quién anotó dos goles en la final del Mundial 1998 para Francia?',a:'Zinedine Zidane',opts:['Zinedine Zidane','Thierry Henry','Didier Deschamps','David Trezeguet']},
 {cat:'jugadores',q:'¿Quién fue el arquero argentino clave en los penales de la final 2022?',a:'Emiliano Martínez',opts:['Emiliano Martínez','Sergio Romero','Franco Armani','Gerónimo Rulli']},
 {cat:'jugadores',q:'¿Qué jugador uruguayo hizo una mano famosa ante Ghana en 2010?',a:'Luis Suárez',opts:['Luis Suárez','Diego Forlán','Edinson Cavani','Álvaro Recoba']},
 {cat:'records',q:'¿Qué selección ganó el Mundial dos veces seguidas en 1934 y 1938?',a:'Italia',opts:['Italia','Brasil','Uruguay','Alemania']},
 {cat:'records',q:'¿Qué selección ganó el Mundial dos veces seguidas en 1958 y 1962?',a:'Brasil',opts:['Brasil','Argentina','Italia','Alemania']},
 {cat:'records',q:'¿Qué país ganó el primer Mundial de la historia en 1930?',a:'Uruguay',opts:['Uruguay','Argentina','Brasil','Italia']},
 {cat:'records',q:'¿Contra quién jugó Uruguay la final del Mundial 1930?',a:'Argentina',opts:['Argentina','Brasil','Italia','Chile']},
 {cat:'selecciones',q:'¿Qué selección ganó el Mundial 1966?',a:'Inglaterra',opts:['Inglaterra','Alemania','Brasil','Portugal']},
 {cat:'selecciones',q:'¿Qué selección ganó el Mundial 1986?',a:'Argentina',opts:['Argentina','Alemania','Brasil','Italia']},
 {cat:'jugadores',q:'¿Quién hizo la “Mano de Dios”?',a:'Diego Maradona',opts:['Diego Maradona','Pelé','Messi','Ronaldo']},
 {cat:'jugadores',q:'¿Quién es conocido como O Rei?',a:'Pelé',opts:['Pelé','Ronaldo','Ronaldinho','Romário']},
 {cat:'records',q:'¿Qué selección tiene cuatro títulos mundiales junto con Italia?',a:'Alemania',opts:['Alemania','Argentina','Francia','Uruguay']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 1990?',a:'Alemania',opts:['Alemania','Argentina','Italia','Inglaterra']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 1982?',a:'Italia',opts:['Italia','Brasil','Alemania','Argentina']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 1978?',a:'Argentina',opts:['Argentina','Países Bajos','Brasil','Italia']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 1974?',a:'Alemania',opts:['Alemania','Países Bajos','Brasil','Polonia']},
 {cat:'campeones',q:'¿Quién ganó el Mundial 1970?',a:'Brasil',opts:['Brasil','Italia','Alemania','Uruguay']},
 {cat:'historia',q:'¿Dónde se jugó la final del Mundial 1986?',a:'México',opts:['México','Argentina','España','Italia']},
 {cat:'historia',q:'¿En qué país se jugó el Mundial 1982?',a:'España',opts:['España','México','Italia','Argentina']},
 {cat:'records',q:'¿Qué selección fue subcampeona en 2014?',a:'Argentina',opts:['Argentina','Brasil','Holanda','Francia']},
 {cat:'records',q:'¿Qué selección fue subcampeona en 2018?',a:'Croacia',opts:['Croacia','Bélgica','Inglaterra','Argentina']},
 {cat:'records',q:'¿Qué selección fue subcampeona en 2022?',a:'Francia',opts:['Francia','Croacia','Marruecos','Brasil']},
 {cat:'selecciones',q:'¿Qué selección africana llegó a semifinales en 2022?',a:'Marruecos',opts:['Marruecos','Senegal','Ghana','Camerún']},
 {cat:'selecciones',q:'¿Qué selección asiática eliminó a Alemania en fase de grupos 2018?',a:'Corea del Sur',opts:['Corea del Sur','Japón','Irán','Arabia Saudita']},
 {cat:'jugadores',q:'¿Qué francés hizo hat-trick en la final de 2022?',a:'Kylian Mbappé',opts:['Kylian Mbappé','Antoine Griezmann','Olivier Giroud','Karim Benzema']},
 {cat:'jugadores',q:'¿Qué croata ganó el Balón de Oro del Mundial 2018?',a:'Luka Modrić',opts:['Luka Modrić','Ivan Rakitić','Mario Mandžukić','Perišić']},
 {cat:'records',q:'¿Qué selección tiene dos títulos mundiales y ganó en 1930 y 1950?',a:'Uruguay',opts:['Uruguay','Argentina','Francia','Inglaterra']},
 {cat:'historia',q:'¿Qué Mundial fue organizado por Corea del Sur y Japón?',a:'2002',opts:['2002','1998','2006','2010']},
 {cat:'selecciones',q:'¿Qué selección se conoce como Les Bleus?',a:'Francia',opts:['Francia','Italia','Bélgica','Croacia']},
 {cat:'selecciones',q:'¿Qué selección se conoce como La Roja?',a:'España',opts:['España','Portugal','Chile','México']}
];
function fillRetameGameForms(){try{const inviteBox=document.getElementById('triviaInviteList'); if(inviteBox){const members=groupMembers().filter(p=>p.id!==session.id); inviteBox.innerHTML=members.length?members.map(p=>`<label><input type="checkbox" class="trivia-invite" value="${esc(p.id)}"> ${esc(p.name)}</label>`).join(''):'<p class="muted">No hay otros participantes en este grupo.</p>';} const ms=retameMatchOptions(); const opts=ms.map(m=>`<option value="${esc(m.id)}">${esc(m.home)} vs ${esc(m.away)} · ${fmtDateTime(m.date)}</option>`).join(''); if(document.getElementById('expressMatch')) expressMatch.innerHTML=opts; if(document.getElementById('groupRetameMatch')) groupRetameMatch.innerHTML=opts;}catch(e){}}
function retameGameOptions(g){const m=matches.find(x=>x.id===g.matchId); if(g.type==='trivia') return g.options||[]; if(g.type==='express'){ if(g.question&&g.question.includes('10 minutos')) return ['Sí','No']; if(g.question&&g.question.includes('penal')) return ['Sí','No']; if(g.question&&g.question.includes('amarilla')) return m?[m.home,m.away,'Nadie']:['Equipo A','Equipo B','Nadie']; return m?[m.home,m.away,'Nadie']:['Equipo A','Equipo B','Nadie']; } return m?[m.home,'Empate',m.away]:['Local','Empate','Visitante'];}
function triviaPool(category){
  const base=RETAME_TRIVIA.map((t,i)=>({...t,cat:t.cat||'aleatoria',id:i}));
  let pool=base;
  if(category&&category!=='aleatoria') pool=base.filter(q=>q.cat===category);
  if(pool.length<10) pool=base;
  return pool.sort(()=>Math.random()-.5).slice(0,10).map(q=>({q:q.q,opts:q.opts,a:q.a,cat:q.cat||'aleatoria'}));
}
function triviaModeLabel(mode){return mode==='round'?'⏱️ Cronometrada':'⚡ Velocidad'}
function triviaQuestionEndsAt(g){return (g.questionStartedAt?new Date(g.questionStartedAt).getTime():Date.now()) + ((+g.seconds||10)*1000)}
function triviaSecondsLeft(g){return Math.max(0,Math.ceil((triviaQuestionEndsAt(g)-Date.now())/1000))}
function triviaQuestionRevealed(g){const key=String(g.current||0); return !!(g.revealed&&g.revealed[key])}
async function createTriviaRoom(){
  const invited=[...document.querySelectorAll('.trivia-invite:checked')].map(x=>x.value);
  if(invited.length<1){triviaCreateMsg.textContent='Invita al menos a un participante.'; return;}
  const members=groupMembers();
  const players=[session.id,...invited].map(pid=>{const p=members.find(x=>x.id===pid)||{id:pid,name:pid}; return {pid:p.id,name:p.name,ready:p.id===session.id,score:0,correctFirst:0,correctTotal:0};});
  const category=document.getElementById('triviaCategory')?.value||'aleatoria';
  const mode=document.getElementById('triviaMode')?.value||'speed';
  const item={id:'tr_'+Date.now()+'_'+Math.random().toString(36).slice(2),type:'trivia_room',mode,creatorId:session.id,creatorName:session.name,category,seconds:+(document.getElementById('triviaSeconds')?.value||10),status:'waiting',players,questions:triviaPool(category),current:0,answers:{},winners:[],revealed:{},createdAt:new Date().toISOString()};
  await saveRetameGames([item,...retameGamesList()].slice(0,200));
  document.getElementById('triviaCreateBox')?.classList.add('hidden');
  notifyGroup('retame','⚡ Trivia multijugador',`${session.name} creó una sala de trivia`).catch(()=>{});
  renderRetame();
}
async function triviaSetReady(id){const list=retameGamesList(); const updated=list.map(g=>{if(g.id!==id||g.type!=='trivia_room'||g.status!=='waiting') return g; return {...g,players:(g.players||[]).map(p=>p.pid===session.id?{...p,ready:true}:p)}}); await saveRetameGames(updated); renderRetame();}
async function startTriviaRoom(id){
  const list=retameGamesList(); const g=list.find(x=>x.id===id);
  if(!g||g.creatorId!==session.id) return alert('Solo el creador puede iniciar.');
  if(!(g.players||[]).every(p=>p.ready)) return alert('Todavía no están todos listos.');
  await saveRetameGames(list.map(x=>x.id===id?{...x,status:'playing',startedAt:new Date().toISOString(),questionStartedAt:new Date().toISOString(),current:0}:x));
  renderRetame();
}
async function answerTriviaRoom(id,answer){
  const list=retameGamesList();
  const updated=list.map(g=>{
    if(g.id!==id||g.type!=='trivia_room'||g.status!=='playing') return g;
    const mode=g.mode||'speed';
    const key=String(g.current||0);
    if(mode==='round' && (triviaQuestionRevealed(g)||triviaSecondsLeft(g)<=0)) return g;
    const answers={...(g.answers||{})}; const arr=[...(answers[key]||[])];
    if(arr.some(a=>a.pid===session.id)) return g;
    const q=(g.questions||[])[g.current||0]; const correct=String(answer)===String(q?.a);
    arr.push({pid:session.id,name:session.name,answer,correct,at:new Date().toISOString()}); answers[key]=arr;
    let players=[...(g.players||[])]; let winners=[...(g.winners||[])];
    if(mode==='speed' && correct && !arr.slice(0,-1).some(a=>a.correct)){
      players=players.map(p=>p.pid===session.id?{...p,score:(p.score||0)+3,correctFirst:(p.correctFirst||0)+1,correctTotal:(p.correctTotal||0)+1}:p);
      winners.push({q:g.current||0,pid:session.id,name:session.name,answer,at:new Date().toISOString()});
    }
    return {...g,answers,players,winners};
  });
  await saveRetameGames(updated); renderRetame();
}
async function revealTriviaQuestion(id){
  const list=retameGamesList();
  const updated=list.map(g=>{
    if(g.id!==id||g.type!=='trivia_room'||g.status!=='playing') return g;
    if((g.mode||'speed')!=='round') return g;
    const key=String(g.current||0); if(g.revealed&&g.revealed[key]) return g;
    const arr=((g.answers||{})[key]||[]);
    const correctIds=arr.filter(a=>a.correct).map(a=>a.pid);
    const players=(g.players||[]).map(p=>correctIds.includes(p.pid)?{...p,score:(p.score||0)+1,correctTotal:(p.correctTotal||0)+1}:p);
    const revealed={...(g.revealed||{}),[key]:true};
    return {...g,players,revealed};
  });
  await saveRetameGames(updated); renderRetame();
}
async function nextTriviaQuestion(id){
  const list=retameGamesList();
  const updated=list.map(g=>{
    if(g.id!==id||g.type!=='trivia_room'||g.creatorId!==session.id) return g;
    const next=(g.current||0)+1;
    if(next>=10) return {...g,status:'closed',closedAt:new Date().toISOString()};
    return {...g,current:next,questionStartedAt:new Date().toISOString()};
  });
  await saveRetameGames(updated); renderRetame();
}
async function cancelTriviaRoom(id){const list=retameGamesList(); const g=list.find(x=>x.id===id); if(!g||g.creatorId!==session.id) return alert('Solo el creador puede cancelar.'); await saveRetameGames(list.map(x=>x.id===id?{...x,status:'cancelled',closedAt:new Date().toISOString()}:x)); renderRetame();}
function triviaRoomCard(g){
  const mine=(g.players||[]).find(p=>p.pid===session.id);
  const isCreator=g.creatorId===session.id;
  const readyCount=(g.players||[]).filter(p=>p.ready).length;
  const players=(g.players||[]).map(p=>`<span class="trivia-player ${p.ready?'ready':'wait'}">${p.ready?'✅':'⏳'} ${esc(p.name)} · ${p.score||0} pts</span>`).join('');
  const q=(g.questions||[])[g.current||0]; const key=String(g.current||0);
  const myAns=((g.answers||{})[key]||[]).find(a=>a.pid===session.id);
  const allReady=(g.players||[]).length>0&&(g.players||[]).every(p=>p.ready);
  const mode=g.mode||'speed'; const revealed=triviaQuestionRevealed(g); const left=triviaSecondsLeft(g);
  let body='';
  if(g.status==='waiting'){
    const readyBtn=(mine&&!mine.ready)?`<button class="good" onclick="triviaSetReady('${g.id}')">Estoy listo ✅</button>`:'';
    const creatorBtns=isCreator?` <button class="primary" onclick="startTriviaRoom('${g.id}')" ${allReady?'':'disabled'}>Iniciar Trivia 🔥</button> <button class="danger" onclick="cancelTriviaRoom('${g.id}')">Cancelar</button>`:'';
    body=`<div class="trivia-progress"><span class="trivia-mode-pill">${triviaModeLabel(mode)}</span> · Sala de espera · ${readyCount}/${(g.players||[]).length} listos · ${g.questions?.length||10} preguntas</div><div class="players">${players}</div>${readyBtn}${creatorBtns}`;
  } else if(g.status==='playing'){
    const disabled = myAns || (mode==='round' && (revealed||left<=0));
    const opts=(q?.opts||[]).map(o=>`<button ${disabled?'disabled':''} onclick="answerTriviaRoom('${g.id}','${esc(o)}')">${esc(o)}</button>`).join('');
    const answers=((g.answers||{})[key]||[]).map((a,i)=>`<div class="retame-answer-row"><span>${i+1}. ${esc(a.name)}: <b>${mode==='round'&&!revealed?'Respuesta enviada':esc(a.answer)}</b></span><span>${a.correct?(revealed||mode==='speed'?'<span class="trivia-winner">Correcto</span>':'<span class="retame-chip">Pendiente</span>'):'<span class="retame-wrong">Incorrecto</span>'}</span></div>`).join('');
    const winner=(g.winners||[]).find(w=>w.q===(g.current||0));
    const roundCorrect=((g.answers||{})[key]||[]).filter(a=>a.correct).map(a=>a.name);
    const revealBox=(mode==='round'&&(revealed||left<=0))?`<div class="trivia-reveal">✅ Respuesta correcta: <b>${esc(q?.a||'')}</b><br>Acertaron: ${roundCorrect.length?roundCorrect.map(esc).join(', '):'Nadie'}</div>`:'';
    const creatorControls=isCreator?`<div class="retame-actions">${mode==='round'&&!revealed?`<button class="good" onclick="revealTriviaQuestion('${g.id}')">Revelar respuesta ✅</button>`:''}<button class="primary" onclick="nextTriviaQuestion('${g.id}')">${(g.current||0)>=9?'Finalizar trivia':'Siguiente pregunta'} ➜</button><button class="danger" onclick="cancelTriviaRoom('${g.id}')">Cancelar</button></div>`:'';
    body=`<div class="trivia-progress"><span class="trivia-mode-pill">${triviaModeLabel(mode)}</span> · Pregunta ${(g.current||0)+1}/10 · Categoría ${esc(g.category||'aleatoria')} ${mode==='round'?`<span class="trivia-timer">⏱️ ${left}s</span>`:`· ${g.seconds||10}s por pregunta`}</div><div class="players">${players}</div><div class="trivia-question"><b>${esc(q?.q||'Pregunta')}</b><div class="trivia-options">${opts}</div>${myAns?'<div class="status ok">Tu respuesta fue registrada.</div>':''}${winner?`<div class="status ok">Ganó la pregunta: ${esc(winner.name)}</div>`:''}${revealBox}</div><div>${answers||'<p class="muted">Aún no hay respuestas.</p>'}</div>${creatorControls}`;
  } else {
    const rows=[...(g.players||[])].sort((a,b)=>(b.score||0)-(a.score||0)).map((p,i)=>`<div class="trivia-score-row"><span>${i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'.'} ${esc(p.name)}</span><b>${p.score||0} pts · ${p.correctTotal||0} correctas</b></div>`).join('');
    body=`<div class="status ok">Trivia terminada · ${triviaModeLabel(mode)}</div><div class="trivia-score">${rows}</div>`;
  }
  return `<div class="trivia-room"><div class="retame-head"><div><div class="retame-title">⚡ Trivia Multijugador</div><div class="meta">Creada por ${esc(g.creatorName)} · ${fmtDateTime(g.createdAt)}</div></div><span class="retame-status">${g.status==='waiting'?'Sala de espera':g.status==='playing'?'En juego':'Finalizada'}</span></div>${body}</div>`;
}

async function createTriviaFlash(){const idx=+(document.getElementById('triviaQuestionSelect')?.value||0); const t=RETAME_TRIVIA[idx]||RETAME_TRIVIA[0]; const item={id:'g_'+Date.now()+'_'+Math.random().toString(36).slice(2),type:'trivia',creatorId:session.id,creatorName:session.name,question:t.q,options:t.opts,correctAnswer:t.a,status:'open',answers:[],createdAt:new Date().toISOString()}; await saveRetameGames([item,...retameGamesList()].slice(0,200)); notifyGroup('retame','⚡ Trivia Flash disponible',t.q).catch(()=>{}); renderRetame();}
async function createExpressChallenge(){const m=matches.find(x=>x.id===expressMatch.value); if(!m) return alert('Selecciona un partido.'); const item={id:'g_'+Date.now()+'_'+Math.random().toString(36).slice(2),type:'express',creatorId:session.id,creatorName:session.name,matchId:m.id,question:expressQuestion.value,status:'open',answers:[],createdAt:new Date().toISOString()}; await saveRetameGames([item,...retameGamesList()].slice(0,200)); notifyGroup('retame','⚽ Reto Express disponible',`${m.home} vs ${m.away}`).catch(()=>{}); renderRetame();}
async function createGroupChallenge(){const m=matches.find(x=>x.id===groupRetameMatch.value); if(!m) return alert('Selecciona un partido.'); const item={id:'g_'+Date.now()+'_'+Math.random().toString(36).slice(2),type:'grupal',creatorId:session.id,creatorName:session.name,matchId:m.id,question:(groupRetameQuestion.value||'¿Quién gana el partido?').trim(),status:'open',answers:[],createdAt:new Date().toISOString()}; await saveRetameGames([item,...retameGamesList()].slice(0,200)); notifyGroup('retame','👥 Reto grupal disponible',`${m.home} vs ${m.away}`).catch(()=>{}); renderRetame();}
async function answerRetameGame(id,answer){const list=retameGamesList(); const updated=list.map(g=>{if(g.id!==id||g.status!=='open') return g; if((g.answers||[]).some(a=>a.pid===session.id)) return g; const ans={pid:session.id,name:session.name,answer,at:new Date().toISOString()}; const answers=[...(g.answers||[]),ans]; if(g.type==='trivia' && String(answer)===String(g.correctAnswer)){return {...g,answers:[...answers.slice(0,-1),{...ans,correct:true}],status:'closed',winnerId:session.id,winnerName:session.name,closedAt:new Date().toISOString(),winningAnswer:answer};} return {...g,answers};}); await saveRetameGames(updated); renderRetame();}
async function closeRetameGame(id,winningAnswer){const list=retameGamesList(); const updated=list.map(g=>{if(g.id!==id||g.creatorId!==session.id) return g; const winners=(g.answers||[]).filter(a=>String(a.answer)===String(winningAnswer)).map(a=>a.pid); return {...g,status:'closed',winningAnswer,winners,closedAt:new Date().toISOString()};}); await saveRetameGames(updated); renderRetame();}
async function cancelRetameGame(id){const list=retameGamesList(); const g=list.find(x=>x.id===id); if(!g||g.creatorId!==session.id) return alert('Solo el creador puede cancelar.'); await saveRetameGames(list.map(x=>x.id===id?{...x,status:'cancelled',closedAt:new Date().toISOString()}:x)); renderRetame();}
function retameGameCard(g){const m=matches.find(x=>x.id===g.matchId)||{}; const opts=retameGameOptions(g); const mine=(g.answers||[]).find(a=>a.pid===session.id); const isCreator=g.creatorId===session.id; const title={trivia:'⚡ Trivia Flash',express:'⚽ Reto Express',grupal:'👥 Reto Grupal'}[g.type]||'🔥 Juego'; const match=m.home?` · ${esc(m.home)} vs ${esc(m.away)}`:''; const buttons=(g.status==='open'&&!mine)?`<div class="retame-game-options">${opts.map(o=>`<button onclick="answerRetameGame('${g.id}','${esc(o)}')">${esc(o)}</button>`).join('')}</div>`:(mine?`<span class="retame-chip">Tu respuesta: ${esc(mine.answer)}</span>`:''); const close=(isCreator&&g.status==='open'&&g.type!=='trivia')?`<div class="retame-game-options"><b>Cerrar con:</b>${opts.map(o=>`<button class="good" onclick="closeRetameGame('${g.id}','${esc(o)}')">${esc(o)}</button>`).join('')}<button class="danger" onclick="cancelRetameGame('${g.id}')">Cancelar</button></div>`:(isCreator&&g.status==='open'?`<button class="danger" onclick="cancelRetameGame('${g.id}')">Cancelar</button>`:''); const rows=(g.answers||[]).map(a=>`<div class="retame-answer-row"><span>${esc(a.name)}: <b>${esc(a.answer)}</b></span><span>${g.type==='trivia'?(a.correct?'<span class="retame-correct">Correcto</span>':''):(g.status==='closed'&&String(a.answer)===String(g.winningAnswer)?'<span class="retame-correct">Ganó</span>':'')}</span></div>`).join(''); const result=g.status==='closed'?`<div class="status ok">Ganador${(g.winners||[]).length>1?'es':''}: ${g.winnerName?esc(g.winnerName):((g.winners||[]).length?(g.winners||[]).map(pid=>esc(groupMembers().find(p=>p.id===pid)?.name||pid)).join(', '):'Sin ganador')}</div>`:''; return `<div class="retame-game-card"><h3>${title}</h3><div class="meta">${esc(g.creatorName)}${match} · ${fmtDateTime(g.createdAt)} ${g.status==='open'?'<span class="retame-live-pill">Abierto</span>':'<span class="retame-status">Cerrado</span>'}</div><p><b>${esc(g.question)}</b></p>${buttons}${close}${result}<div style="margin-top:10px">${rows||'<p class="muted">Aún no hay respuestas.</p>'}</div></div>`;}
function retameGameScoreRows(games){const score={}; groupMembers().forEach(p=>score[p.id]={p,w:0,l:0,pts:0}); games.filter(g=>g.status==='closed').forEach(g=>{if(g.type==='trivia_room'){const best=[...(g.players||[])].sort((a,b)=>(b.score||0)-(a.score||0))[0]; if(best&&score[best.pid]){score[best.pid].w++; score[best.pid].pts+=(best.score||0);} return;} const winners=g.winnerId?[g.winnerId]:(g.winners||[]); winners.forEach(pid=>{if(score[pid]){score[pid].w++; score[pid].pts+=(g.type==='trivia'?5:3);}});}); return score;}

function markSeen(type){try{localStorage.setItem(localSeenKey(type),new Date().toISOString())}catch(e){}}
function hasUnseen(type, item){try{if(!item) return false; const seen=localStorage.getItem(localSeenKey(type)); const at=item.at||item.updated_at; return !seen || new Date(at).getTime()>new Date(seen).getTime()}catch(e){return false}}
function setTabBadge(sec,on,label=''){sec=({pred:'quiniela',todos:'quiniela',campeon:'quiniela'}[sec]||sec); const btn=document.querySelector(`nav button[data-sec="${sec}"]`); if(!btn)return; let dot=btn.querySelector('.tab-dot'); if(!dot){dot=document.createElement('span'); dot.className='tab-dot hidden'; btn.appendChild(dot);} dot.textContent=label; dot.classList.toggle('hidden',!on)}
function updateNavBadges(){if(!session)return; const latest=latestChatActivity(); const mention=chatMentionedMe(latest); setTabBadge('chat',hasUnseen('chat',latest),mention?'@':''); setTabBadge('todos',hasUnseen('todos',latestPredActivity()),''); setTabBadge('pred',pendingTodayPredictions().length>0,''); const retos=retameList().filter(c=>['open','pending_creator'].includes(c.status)&&c.creatorId!==session.id&&!((c.requests||[]).some(r=>r.pid===session.id)||(c.accepted||[]).some(a=>a.pid===session.id))); const juegos=retameGamesList().filter(g=>g.status==='open'&&!((g.answers||[]).some(a=>a.pid===session.id))); const nRetos=retos.length+juegos.length; setTabBadge('retame',nRetos>0,nRetos?String(Math.min(9,nRetos)):'')}
let chatReplyTo=null;
function chatKey(){return 'chat_'+currentGroupId()}
function chatPresenceKey(){return 'chat_presence_'+currentGroupId()}
function chatTypingKey(){return 'chat_typing_'+currentGroupId()}
function updateChatPresence(){
  try{
    if(!session) return;
    const nowMs=Date.now();
    if(nowMs-lastChatPresenceWrite<4*60000) return;
    lastChatPresenceWrite=nowMs;
    const key=chatPresenceKey();
    const list=settingValue(key,[])||[];
    const now=new Date(nowMs).toISOString();
    const clean=list.filter(x=>x&&x.pid!==session.id&&nowMs-new Date(x.at).getTime()<5*60000);
    const me={pid:session.id,name:session.name,at:now};
    saveSettingValue(key,[...clean,me]).catch(()=>{});
  }catch(e){}
}
function renderChatPresence(){if(!document.getElementById('chatOnline')) return; const list=(settingValue(chatPresenceKey(),[])||[]).filter(x=>x&&Date.now()-new Date(x.at).getTime()<5*60000); const names=[...new Map(list.map(x=>[x.pid,x])).values()].map(x=>esc(x.name||'Participante')); chatOnline.innerHTML='<span class="online-dot"></span><b>Conectados ahora:</b> '+(names.length?names.join(', '):'solo tú o nadie activo recientemente');}
function chatTypingPulse(){try{if(!session) return; const key=chatTypingKey(); const list=settingValue(key,[])||[]; const now=new Date().toISOString(); const clean=list.filter(x=>x&&x.pid!==session.id&&Date.now()-new Date(x.at).getTime()<8000); saveSettingValue(key,[...clean,{pid:session.id,name:session.name,at:now}]).catch(()=>{});}catch(e){}}
function renderChatTyping(){if(!document.getElementById('chatTyping')) return; const list=(settingValue(chatTypingKey(),[])||[]).filter(x=>x&&x.pid!==session.id&&Date.now()-new Date(x.at).getTime()<8000); if(!list.length){chatTyping.classList.add('hidden'); chatTyping.innerHTML=''; return;} chatTyping.classList.remove('hidden'); chatTyping.innerHTML='✍️ '+list.map(x=>esc(x.name)).join(', ')+' está escribiendo...';}
function msgById(id){return (settingValue(chatKey(),[])||[]).find(m=>m.id===id)}
async function reactChat(id,emoji){const msgs=settingValue(chatKey(),[])||[]; const updated=msgs.map(m=>{if(m.id!==id)return m; const reactions=m.reactions||{}; const arr=(reactions[emoji]||[]).filter(pid=>pid!==session.id); if((reactions[emoji]||[]).includes(session.id)) reactions[emoji]=arr; else reactions[emoji]=[...arr,session.id]; return {...m,reactions};}); await saveSettingValue(chatKey(),updated); renderChat();}
function reactionHtml(m){const r=m.reactions||{}; const used=Object.entries(r).filter(([e,a])=>a&&a.length); const summary=used.map(([e,a])=>`<span class="reaction-chip">${e} ${a.length}</span>`).join(''); return `<div class="reaction-bar">${summary}<button type="button" onclick="reactChat('${m.id}','👍')">👍</button><button type="button" onclick="reactChat('${m.id}','❤️')">❤️</button><button type="button" onclick="reactChat('${m.id}','😂')">😂</button><button type="button" onclick="reactChat('${m.id}','🔥')">🔥</button></div>`;}

function highlightMentions(text){let out=esc(text||''); for(const p of groupMembers(currentGroupId())){const nm=(p.name||'').trim(); const us=(p.username||'').trim(); [nm,us].filter(Boolean).forEach(v=>{const safe=esc('@'+v); out=out.split(safe).join(`<span class="mention">${safe}</span>`);});} return out;}
function renderPinnedChat(msgs){if(!document.getElementById('chatPinned')) return; const pin=msgs.slice().reverse().find(m=>m.pinned); if(!pin){chatPinned.classList.add('hidden'); chatPinned.innerHTML=''; return;} chatPinned.classList.remove('hidden'); chatPinned.innerHTML=`📌 <b>Mensaje fijado:</b> ${highlightMentions(pin.text)} <div class="small">${esc(pin.name||'Participante')} · ${fmtDateTime(pin.at)}</div>`;}
function setChatReply(id){const m=msgById(id); if(!m) return; chatReplyTo=id; chatReplyBox.classList.remove('hidden'); chatReplyBox.innerHTML=`Respondiendo a <b>${esc(m.name||'Participante')}</b>: ${esc((m.text||'').slice(0,80))} <button type="button" onclick="cancelChatReply()">Cancelar</button>`; chatInput.focus();}
function cancelChatReply(){chatReplyTo=null; if(document.getElementById('chatReplyBox')){chatReplyBox.classList.add('hidden'); chatReplyBox.innerHTML='';}}
function addEmoji(e){chatInput.value=(chatInput.value||'')+e; chatInput.focus();}
function clearChatSearch(){chatSearch.value=''; renderChat();}
async function togglePinChat(id){try{if(!isAdmin()) return alert('Solo el administrador puede fijar mensajes.'); const msgs=settingValue(chatKey(),[])||[]; const updated=msgs.map(m=>({...m,pinned:m.id===id?!m.pinned:false})); await saveSettingValue(chatKey(),updated); renderChat();}catch(e){chatMsg.className='status err'; chatMsg.textContent='Error: '+e.message;}}
function chatInitials(name){return String(name||'P').trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase()||'P'}
function chatDayLabel(iso){try{const d=new Date(iso); const today=new Date(); const yest=new Date(Date.now()-86400000); const same=(a,b)=>a.toDateString()===b.toDateString(); if(same(d,today)) return 'Hoy'; if(same(d,yest)) return 'Ayer'; return d.toLocaleDateString('es-GT',{weekday:'long',day:'2-digit',month:'short'});}catch(e){return ''}}
function renderChatStats(msgs){try{if(!document.getElementById('chatStats')) return; const mine=msgs.filter(m=>m.pid===session.id).length; const pinned=msgs.filter(m=>m.pinned).length; const mentions=msgs.filter(m=>chatMentionedMe(m)).length; chatStats.innerHTML=`<span class="mini-stat">💬 ${msgs.length} mensajes</span><span class="mini-stat">👤 ${mine} míos</span><span class="mini-stat">@ ${mentions} menciones</span><span class="mini-stat">📌 ${pinned} fijados</span>`;}catch(e){}}
function scrollChatBottom(){try{if(document.getElementById('chatBox')) chatBox.scrollTo({top:chatBox.scrollHeight,behavior:'smooth'});}catch(e){}}
function isChatAdminMsg(m){try{return !!(m&&allPlayers().find(p=>p.id===m.pid&&p.admin));}catch(e){return false}}
function renderChat(){if(!document.getElementById('chatBox')||!session) return; updateChatPresence(); renderChatPresence(); renderChatTyping(); if(document.getElementById('chat')?.classList.contains('active')) markSeen('chat'); const msgs=settingValue(chatKey(),[])||[]; renderPinnedChat(msgs); renderChatStats(msgs); const q=(document.getElementById('chatSearch')?.value||'').trim().toLowerCase(); let list=msgs.slice(-180); if(q) list=list.filter(m=>(m.text||'').toLowerCase().includes(q)||(m.name||'').toLowerCase().includes(q)); let lastDay=''; const html=list.map(m=>{const r=m.replyTo?msgById(m.replyTo):null; const mentioned=chatMentionedMe(m); const adminMsg=isChatAdminMsg(m); const day=chatDayLabel(m.at); const sep=day&&day!==lastDay?`<div class="chat-date-sep">${esc(day)}</div>`:''; if(day) lastDay=day; return `${sep}<div class="chat-msg ${m.pid===session.id?'mine':''} ${mentioned?'mentioned':''} ${adminMsg?'admin-msg':''}"><div class="chat-avatar">${esc(chatInitials(m.name))}</div><div class="chat-bubble-body"><div class="chat-meta"><b>${esc(m.name||'Participante')}</b>${adminMsg?'<span class="admin-chip">ADMIN</span>':''}<span>${fmtDateTime(m.at)}</span>${m.pinned?'<span>📌 fijado</span>':''}</div>${r?`<div class="chat-reply">↩️ ${esc(r.name||'Participante')}: ${esc((r.text||'').slice(0,90))}</div>`:''}<div class="chat-text">${highlightMentions(m.text)}</div>${reactionHtml(m)}<div class="chat-actions"><button type="button" onclick="setChatReply('${m.id}')">Responder</button>${isAdmin()?`<button type="button" onclick="togglePinChat('${m.id}')">${m.pinned?'Quitar fijado':'Fijar'}</button>`:''}</div></div></div>`}).join(''); chatBox.innerHTML=html||'<div class="chat-empty-premium">💬 Aún no hay mensajes en este grupo.<br><span class="small">Sé el primero en escribir.</span></div>'; setTimeout(()=>{chatBox.scrollTop=chatBox.scrollHeight},20)}
async function sendChatMessage(){try{const text=chatInput.value.trim(); if(!text) return; const key=chatKey(); const msgs=settingValue(key,[])||[]; const item={id:Date.now()+'_'+Math.random().toString(36).slice(2),pid:session.id,name:session.name,text,replyTo:chatReplyTo,at:new Date().toISOString()}; await saveSettingValue(key,[...msgs.slice(-199),item]); const mentioned=groupMembers(currentGroupId()).filter(p=>p.id!==session.id && (text.toLowerCase().includes('@'+(p.name||'').toLowerCase()) || text.toLowerCase().includes('@'+(p.username||'').toLowerCase()))); notifyGroup('chat',mentioned.length?'💬 Te mencionaron en el chat':'💬 Nuevo mensaje',`${session.name}: ${text.slice(0,90)}`).catch(()=>{}); chatInput.value=''; cancelChatReply(); chatMsg.className='status ok'; chatMsg.textContent='Mensaje enviado.'; renderChat();}catch(e){chatMsg.className='status err'; chatMsg.textContent='Error: '+e.message}}
function renderProfile(){if(!session||!document.getElementById('profileName')) return; profileName.value=session.name||''; profileUser.value=session.username||''; profilePass.value=''; profileMsg.textContent=''; renderNotificationPrefs();}
async function saveProfile(){try{if(!session)return; const name=profileName.value.trim(), username=profileUser.value.trim(), pass=profilePass.value; if(!name||!username)return alert('Nombre visible y usuario son requeridos.'); const upd={name,username}; if(pass) upd.password=pass; await q(supa.from('participants').update(upd).eq('id',session.id)); session={...session,...upd}; profilePass.value=''; profileMsg.className='status ok'; profileMsg.textContent='Perfil actualizado.'; await refreshAll();}catch(e){profileMsg.className='status err'; profileMsg.textContent='Error: '+e.message;}}

function renderAdmin(){
  if(!isAdmin()) return;
  renderGroupsAdmin();
  renderAdminPlayers();
  renderResultsAdmin();
  renderAdminPredictions();
  const cfgKey=currentGroupId()+'|'+(state.settings.length)+'|'+lastRefreshAt;
  if(configLoadedForGroup!==cfgKey){ configLoadedForGroup=cfgKey; loadApiFootballConfig(); loadOneSignalConfig(); }
  const active=document.querySelector('[data-atab].active')?.dataset.atab || 'grupos';
  setAdminTab(active);
}

function renderAll(){
  fillDays(); renderProfile(); renderHome(); renderPred(); renderAllPreds(); renderChampion(); renderRanking(); renderWorld(); renderRetame(); renderChat(); updateNavBadges(); preloadCriticalFlags();
  if(isAdmin()) renderAdmin();
}
let lastNotifyKey='';
function checkOpenAppNotifications(){try{if(!('Notification' in window)||Notification.permission!=='granted'||!session) return; const now=Date.now(); const soon=matches.filter(m=>{const ms=new Date(m.date).getTime()-now; return ms>0 && ms<30*60000;}); const key=soon.map(m=>m.id).join(',')+'|'+liveMatches().map(m=>m.id+statusBase(resFor(m.id)?.status)).join(','); if(key && key!==lastNotifyKey){lastNotifyKey=key; if(soon[0]) new Notification('⏰ Pronósticos por cerrar',{body:`${soon[0].home} vs ${soon[0].away} inicia pronto.`}); const lv=liveMatches()[0]; if(lv) new Notification('🔴 Partido en vivo',{body:`${lv.home} vs ${lv.away} · ${statusBase(resFor(lv.id)?.status)||''}`});}}catch(e){}}
let liveTimer=null; function startLiveTimer(){
  if(liveTimer) clearInterval(liveTimer);
  // V313.28: la actualización automática del API Football se hace en Netlify Functions, no desde el celular/admin.
  checkOpenAppNotifications(); lastChatPresenceWrite=0; updateChatPresence(); scheduleMatchPushes();
  liveTimer=setInterval(()=>{
    checkOpenAppNotifications(); updateChatPresence(); scheduleMatchPushes();
  },120000);
}

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js?v=3151-trivia-doble-modo',{scope:'./'}).then(reg=>{
      if(reg.waiting) reg.waiting.postMessage({type:'SKIP_WAITING'});
      reg.addEventListener('updatefound',()=>{
        const nw=reg.installing;
        if(nw) nw.addEventListener('statechange',()=>{ if(nw.state==='installed' && navigator.serviceWorker.controller) nw.postMessage({type:'SKIP_WAITING'}); });
      });
    }).catch(()=>{});
    navigator.serviceWorker.addEventListener('message',event=>{
      if(event.data?.type==='APP_UPDATED'){
        try{ localStorage.setItem('hcq_last_sw_update',event.data.version||'315.0'); }catch(e){}
      }
    });
  });
}
window.addEventListener('load',async()=>{if(initClient()){await refreshAll(); subscribe();}});
