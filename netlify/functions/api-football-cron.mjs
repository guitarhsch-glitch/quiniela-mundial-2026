// V313.34 - Recuperacion Netlify + Supabase URL fix + fallback por fecha/equipos + logs visibles
// Requiere variables en Netlify:
// SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, API_FOOTBALL_KEY opcional

const teams=[["Grupo A","México","🇲🇽"],["Grupo A","Sudáfrica","🇿🇦"],["Grupo A","Corea del Sur","🇰🇷"],["Grupo A","Chequia","🇨🇿"],["Grupo B","Canadá","🇨🇦"],["Grupo B","Suiza","🇨🇭"],["Grupo B","Catar","🇶🇦"],["Grupo B","Bosnia y Herzegovina","🇧🇦"],["Grupo C","Brasil","🇧🇷"],["Grupo C","Marruecos","🇲🇦"],["Grupo C","Haití","🇭🇹"],["Grupo C","Escocia","🏴"],["Grupo D","Estados Unidos","🇺🇸"],["Grupo D","Paraguay","🇵🇾"],["Grupo D","Australia","🇦🇺"],["Grupo D","Turquía","🇹🇷"],["Grupo E","Alemania","🇩🇪"],["Grupo E","Curazao","🇨🇼"],["Grupo E","Costa de Marfil","🇨🇮"],["Grupo E","Ecuador","🇪🇨"],["Grupo F","Países Bajos","🇳🇱"],["Grupo F","Japón","🇯🇵"],["Grupo F","Túnez","🇹🇳"],["Grupo F","Suecia","🇸🇪"],["Grupo G","Bélgica","🇧🇪"],["Grupo G","Egipto","🇪🇬"],["Grupo G","Irán","🇮🇷"],["Grupo G","Nueva Zelanda","🇳🇿"],["Grupo H","España","🇪🇸"],["Grupo H","Cabo Verde","🇨🇻"],["Grupo H","Arabia Saudita","🇸🇦"],["Grupo H","Uruguay","🇺🇾"],["Grupo I","Francia","🇫🇷"],["Grupo I","Senegal","🇸🇳"],["Grupo I","Noruega","🇳🇴"],["Grupo I","Irak","🇮🇶"],["Grupo J","Argentina","🇦🇷"],["Grupo J","Argelia","🇩🇿"],["Grupo J","Austria","🇦🇹"],["Grupo J","Jordania","🇯🇴"],["Grupo K","Portugal","🇵🇹"],["Grupo K","Uzbekistán","🇺🇿"],["Grupo K","Colombia","🇨🇴"],["Grupo K","Congo RD","🇨🇩"],["Grupo L","Inglaterra","🏴"],["Grupo L","Croacia","🇭🇷"],["Grupo L","Ghana","🇬🇭"],["Grupo L","Panamá","🇵🇦"]];
const groupMatches=[{"id":"g1","phase":"groups","date":"2026-06-11T13:00:00-06:00","home":"México","away":"Sudáfrica","group":"Grupo A","venue":"Estadio Azteca, Ciudad de México"},{"id":"g2","phase":"groups","date":"2026-06-11T20:00:00-06:00","home":"Corea del Sur","away":"Chequia","group":"Grupo A","venue":"Estadio Akron, Guadalajara"},{"id":"g3","phase":"groups","date":"2026-06-12T13:00:00-06:00","home":"Canadá","away":"Bosnia y Herzegovina","group":"Grupo B","venue":"BMO Field, Toronto"},{"id":"g4","phase":"groups","date":"2026-06-12T19:00:00-06:00","home":"Estados Unidos","away":"Paraguay","group":"Grupo D","venue":"SoFi Stadium, Los Ángeles"},{"id":"g5","phase":"groups","date":"2026-06-13T13:00:00-06:00","home":"Catar","away":"Suiza","group":"Grupo B","venue":"Levi’s Stadium, Santa Clara"},{"id":"g6","phase":"groups","date":"2026-06-13T16:00:00-06:00","home":"Brasil","away":"Marruecos","group":"Grupo C","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g7","phase":"groups","date":"2026-06-13T19:00:00-06:00","home":"Haití","away":"Escocia","group":"Grupo C","venue":"Gillette Stadium, Boston"},{"id":"g8","phase":"groups","date":"2026-06-13T22:00:00-06:00","home":"Australia","away":"Turquía","group":"Grupo D","venue":"BC Place, Vancouver"},{"id":"g9","phase":"groups","date":"2026-06-14T11:00:00-06:00","home":"Alemania","away":"Curazao","group":"Grupo E","venue":"NRG Stadium, Houston"},{"id":"g10","phase":"groups","date":"2026-06-14T14:00:00-06:00","home":"Países Bajos","away":"Japón","group":"Grupo F","venue":"AT&T Stadium, Dallas"},{"id":"g11","phase":"groups","date":"2026-06-14T17:00:00-06:00","home":"Costa de Marfil","away":"Ecuador","group":"Grupo E","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g12","phase":"groups","date":"2026-06-14T20:00:00-06:00","home":"Suecia","away":"Túnez","group":"Grupo F","venue":"Estadio BBVA, Monterrey"},{"id":"g13","phase":"groups","date":"2026-06-15T10:00:00-06:00","home":"España","away":"Cabo Verde","group":"Grupo H","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g14","phase":"groups","date":"2026-06-15T13:00:00-06:00","home":"Bélgica","away":"Egipto","group":"Grupo G","venue":"Lumen Field, Seattle"},{"id":"g15","phase":"groups","date":"2026-06-15T16:00:00-06:00","home":"Arabia Saudita","away":"Uruguay","group":"Grupo H","venue":"Hard Rock Stadium, Miami"},{"id":"g16","phase":"groups","date":"2026-06-15T19:00:00-06:00","home":"Irán","away":"Nueva Zelanda","group":"Grupo G","venue":"SoFi Stadium, Los Ángeles"},{"id":"g17","phase":"groups","date":"2026-06-16T13:00:00-06:00","home":"Francia","away":"Senegal","group":"Grupo I","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g18","phase":"groups","date":"2026-06-16T16:00:00-06:00","home":"Irak","away":"Noruega","group":"Grupo I","venue":"Gillette Stadium, Boston"},{"id":"g19","phase":"groups","date":"2026-06-16T19:00:00-06:00","home":"Argentina","away":"Argelia","group":"Grupo J","venue":"Arrowhead Stadium, Kansas City"},{"id":"g20","phase":"groups","date":"2026-06-16T22:00:00-06:00","home":"Austria","away":"Jordania","group":"Grupo J","venue":"Levi’s Stadium, Santa Clara"},{"id":"g21","phase":"groups","date":"2026-06-17T11:00:00-06:00","home":"Portugal","away":"Congo RD","group":"Grupo K","venue":"NRG Stadium, Houston"},{"id":"g22","phase":"groups","date":"2026-06-17T14:00:00-06:00","home":"Inglaterra","away":"Croacia","group":"Grupo L","venue":"AT&T Stadium, Dallas"},{"id":"g23","phase":"groups","date":"2026-06-17T17:00:00-06:00","home":"Ghana","away":"Panamá","group":"Grupo L","venue":"BMO Field, Toronto"},{"id":"g24","phase":"groups","date":"2026-06-17T20:00:00-06:00","home":"Uzbekistán","away":"Colombia","group":"Grupo K","venue":"Estadio Azteca, Ciudad de México"},{"id":"g25","phase":"groups","date":"2026-06-18T10:00:00-06:00","home":"Chequia","away":"Sudáfrica","group":"Grupo A","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g26","phase":"groups","date":"2026-06-18T13:00:00-06:00","home":"Suiza","away":"Bosnia y Herzegovina","group":"Grupo B","venue":"SoFi Stadium, Los Ángeles"},{"id":"g27","phase":"groups","date":"2026-06-18T16:00:00-06:00","home":"Canadá","away":"Catar","group":"Grupo B","venue":"BC Place, Vancouver"},{"id":"g28","phase":"groups","date":"2026-06-18T19:00:00-06:00","home":"México","away":"Corea del Sur","group":"Grupo A","venue":"Estadio Akron, Guadalajara"},{"id":"g29","phase":"groups","date":"2026-06-19T13:00:00-06:00","home":"Estados Unidos","away":"Australia","group":"Grupo D","venue":"Lumen Field, Seattle"},{"id":"g30","phase":"groups","date":"2026-06-19T16:00:00-06:00","home":"Escocia","away":"Marruecos","group":"Grupo C","venue":"Gillette Stadium, Boston"},{"id":"g31","phase":"groups","date":"2026-06-19T18:30:00-06:00","home":"Brasil","away":"Haití","group":"Grupo C","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g32","phase":"groups","date":"2026-06-19T21:00:00-06:00","home":"Turquía","away":"Paraguay","group":"Grupo D","venue":"Levi’s Stadium, Santa Clara"},{"id":"g33","phase":"groups","date":"2026-06-20T11:00:00-06:00","home":"Países Bajos","away":"Suecia","group":"Grupo F","venue":"NRG Stadium, Houston"},{"id":"g34","phase":"groups","date":"2026-06-20T14:00:00-06:00","home":"Alemania","away":"Costa de Marfil","group":"Grupo E","venue":"BMO Field, Toronto"},{"id":"g35","phase":"groups","date":"2026-06-20T18:00:00-06:00","home":"Ecuador","away":"Curazao","group":"Grupo E","venue":"Arrowhead Stadium, Kansas City"},{"id":"g36","phase":"groups","date":"2026-06-20T22:00:00-06:00","home":"Túnez","away":"Japón","group":"Grupo F","venue":"Estadio BBVA, Monterrey"},{"id":"g37","phase":"groups","date":"2026-06-21T10:00:00-06:00","home":"España","away":"Arabia Saudita","group":"Grupo H","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g38","phase":"groups","date":"2026-06-21T13:00:00-06:00","home":"Bélgica","away":"Irán","group":"Grupo G","venue":"SoFi Stadium, Los Ángeles"},{"id":"g39","phase":"groups","date":"2026-06-21T16:00:00-06:00","home":"Uruguay","away":"Cabo Verde","group":"Grupo H","venue":"Hard Rock Stadium, Miami"},{"id":"g40","phase":"groups","date":"2026-06-21T19:00:00-06:00","home":"Nueva Zelanda","away":"Egipto","group":"Grupo G","venue":"BC Place, Vancouver"},{"id":"g41","phase":"groups","date":"2026-06-22T11:00:00-06:00","home":"Argentina","away":"Austria","group":"Grupo J","venue":"AT&T Stadium, Dallas"},{"id":"g42","phase":"groups","date":"2026-06-22T15:00:00-06:00","home":"Francia","away":"Irak","group":"Grupo I","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g43","phase":"groups","date":"2026-06-22T18:00:00-06:00","home":"Noruega","away":"Senegal","group":"Grupo I","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g44","phase":"groups","date":"2026-06-22T21:00:00-06:00","home":"Jordania","away":"Argelia","group":"Grupo J","venue":"Levi’s Stadium, Santa Clara"},{"id":"g45","phase":"groups","date":"2026-06-23T11:00:00-06:00","home":"Portugal","away":"Uzbekistán","group":"Grupo K","venue":"NRG Stadium, Houston"},{"id":"g46","phase":"groups","date":"2026-06-23T14:00:00-06:00","home":"Inglaterra","away":"Ghana","group":"Grupo L","venue":"Gillette Stadium, Boston"},{"id":"g47","phase":"groups","date":"2026-06-23T17:00:00-06:00","home":"Panamá","away":"Croacia","group":"Grupo L","venue":"BMO Field, Toronto"},{"id":"g48","phase":"groups","date":"2026-06-23T20:00:00-06:00","home":"Colombia","away":"Congo RD","group":"Grupo K","venue":"Estadio Akron, Guadalajara"},{"id":"g49","phase":"groups","date":"2026-06-24T13:00:00-06:00","home":"Suiza","away":"Canadá","group":"Grupo B","venue":"BC Place, Vancouver"},{"id":"g50","phase":"groups","date":"2026-06-24T13:00:00-06:00","home":"Bosnia y Herzegovina","away":"Catar","group":"Grupo B","venue":"Lumen Field, Seattle"},{"id":"g51","phase":"groups","date":"2026-06-24T16:00:00-06:00","home":"Escocia","away":"Brasil","group":"Grupo C","venue":"Hard Rock Stadium, Miami"},{"id":"g52","phase":"groups","date":"2026-06-24T16:00:00-06:00","home":"Marruecos","away":"Haití","group":"Grupo C","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g53","phase":"groups","date":"2026-06-24T19:00:00-06:00","home":"Chequia","away":"México","group":"Grupo A","venue":"Estadio Azteca, Ciudad de México"},{"id":"g54","phase":"groups","date":"2026-06-24T19:00:00-06:00","home":"Sudáfrica","away":"Corea del Sur","group":"Grupo A","venue":"Estadio BBVA, Monterrey"},{"id":"g55","phase":"groups","date":"2026-06-25T14:00:00-06:00","home":"Ecuador","away":"Alemania","group":"Grupo E","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g56","phase":"groups","date":"2026-06-25T14:00:00-06:00","home":"Curazao","away":"Costa de Marfil","group":"Grupo E","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g57","phase":"groups","date":"2026-06-25T17:00:00-06:00","home":"Túnez","away":"Países Bajos","group":"Grupo F","venue":"Arrowhead Stadium, Kansas City"},{"id":"g58","phase":"groups","date":"2026-06-25T17:00:00-06:00","home":"Japón","away":"Suecia","group":"Grupo F","venue":"AT&T Stadium, Dallas"},{"id":"g59","phase":"groups","date":"2026-06-25T20:00:00-06:00","home":"Turquía","away":"Estados Unidos","group":"Grupo D","venue":"SoFi Stadium, Los Ángeles"},{"id":"g60","phase":"groups","date":"2026-06-25T20:00:00-06:00","home":"Paraguay","away":"Australia","group":"Grupo D","venue":"Levi’s Stadium, Santa Clara"},{"id":"g61","phase":"groups","date":"2026-06-26T13:00:00-06:00","home":"Noruega","away":"Francia","group":"Grupo I","venue":"Gillette Stadium, Boston"},{"id":"g62","phase":"groups","date":"2026-06-26T13:00:00-06:00","home":"Senegal","away":"Irak","group":"Grupo I","venue":"BMO Field, Toronto"},{"id":"g63","phase":"groups","date":"2026-06-26T18:00:00-06:00","home":"Uruguay","away":"España","group":"Grupo H","venue":"Estadio Akron, Guadalajara"},{"id":"g64","phase":"groups","date":"2026-06-26T18:00:00-06:00","home":"Cabo Verde","away":"Arabia Saudita","group":"Grupo H","venue":"NRG Stadium, Houston"},{"id":"g65","phase":"groups","date":"2026-06-26T21:00:00-06:00","home":"Nueva Zelanda","away":"Bélgica","group":"Grupo G","venue":"BC Place, Vancouver"},{"id":"g66","phase":"groups","date":"2026-06-26T21:00:00-06:00","home":"Egipto","away":"Irán","group":"Grupo G","venue":"Lumen Field, Seattle"},{"id":"g67","phase":"groups","date":"2026-06-27T15:00:00-06:00","home":"Panamá","away":"Inglaterra","group":"Grupo L","venue":"MetLife Stadium, New York/New Jersey"},{"id":"g68","phase":"groups","date":"2026-06-27T15:00:00-06:00","home":"Croacia","away":"Ghana","group":"Grupo L","venue":"Lincoln Financial Field, Philadelphia"},{"id":"g69","phase":"groups","date":"2026-06-27T17:30:00-06:00","home":"Colombia","away":"Portugal","group":"Grupo K","venue":"Hard Rock Stadium, Miami"},{"id":"g70","phase":"groups","date":"2026-06-27T17:30:00-06:00","home":"Congo RD","away":"Uzbekistán","group":"Grupo K","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"g71","phase":"groups","date":"2026-06-27T20:00:00-06:00","home":"Jordania","away":"Argentina","group":"Grupo J","venue":"AT&T Stadium, Dallas"},{"id":"g72","phase":"groups","date":"2026-06-27T20:00:00-06:00","home":"Argelia","away":"Austria","group":"Grupo J","venue":"Arrowhead Stadium, Kansas City"}];
const knockoutMatches=[{"id":"k1","phase":"knockout","date":"2026-06-28T13:00:00-06:00","home":"2A","away":"2B","round":"Dieciseisavos","venue":"SoFi Stadium, Los Ángeles"},{"id":"k2","phase":"knockout","date":"2026-06-29T11:00:00-06:00","home":"1C","away":"2F","round":"Dieciseisavos","venue":"NRG Stadium, Houston"},{"id":"k3","phase":"knockout","date":"2026-06-29T14:30:00-06:00","home":"1E","away":"3ABCDF","round":"Dieciseisavos","venue":"Gillette Stadium, Boston"},{"id":"k4","phase":"knockout","date":"2026-06-29T19:00:00-06:00","home":"1F","away":"2C","round":"Dieciseisavos","venue":"Estadio BBVA, Monterrey"},{"id":"k5","phase":"knockout","date":"2026-06-30T11:00:00-06:00","home":"2E","away":"2I","round":"Dieciseisavos","venue":"AT&T Stadium, Dallas"},{"id":"k6","phase":"knockout","date":"2026-06-30T15:00:00-06:00","home":"1I","away":"3CDFGH","round":"Dieciseisavos","venue":"MetLife Stadium, New York/New Jersey"},{"id":"k7","phase":"knockout","date":"2026-06-30T19:00:00-06:00","home":"1A","away":"3CEFHI","round":"Dieciseisavos","venue":"Estadio Azteca, Ciudad de México"},{"id":"k8","phase":"knockout","date":"2026-07-01T10:00:00-06:00","home":"1L","away":"3EHIJK","round":"Dieciseisavos","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"k9","phase":"knockout","date":"2026-07-01T14:00:00-06:00","home":"1G","away":"3AEHIJ","round":"Dieciseisavos","venue":"Lumen Field, Seattle"},{"id":"k10","phase":"knockout","date":"2026-07-01T18:00:00-06:00","home":"1D","away":"3BEFIJ","round":"Dieciseisavos","venue":"Levi’s Stadium, Santa Clara"},{"id":"k11","phase":"knockout","date":"2026-07-02T13:00:00-06:00","home":"1H","away":"2J","round":"Dieciseisavos","venue":"SoFi Stadium, Los Ángeles"},{"id":"k12","phase":"knockout","date":"2026-07-02T17:00:00-06:00","home":"2K","away":"2L","round":"Dieciseisavos","venue":"BMO Field, Toronto"},{"id":"k13","phase":"knockout","date":"2026-07-02T21:00:00-06:00","home":"1B","away":"3EFGIJ","round":"Dieciseisavos","venue":"BC Place, Vancouver"},{"id":"k14","phase":"knockout","date":"2026-07-03T12:00:00-06:00","home":"2D","away":"2G","round":"Dieciseisavos","venue":"AT&T Stadium, Dallas"},{"id":"k15","phase":"knockout","date":"2026-07-03T16:00:00-06:00","home":"1J","away":"2H","round":"Dieciseisavos","venue":"Hard Rock Stadium, Miami"},{"id":"k16","phase":"knockout","date":"2026-07-03T19:30:00-06:00","home":"1K","away":"3DEIJL","round":"Dieciseisavos","venue":"Arrowhead Stadium, Kansas City"},{"id":"k17","phase":"knockout","date":"2026-07-04T11:00:00-06:00","home":"Ganador 73","away":"Ganador 75","round":"Octavos","venue":"NRG Stadium, Houston"},{"id":"k18","phase":"knockout","date":"2026-07-04T15:00:00-06:00","home":"Ganador 74","away":"Ganador 77","round":"Octavos","venue":"Lincoln Financial Field, Philadelphia"},{"id":"k19","phase":"knockout","date":"2026-07-05T14:00:00-06:00","home":"Ganador 76","away":"Ganador 78","round":"Octavos","venue":"MetLife Stadium, New York/New Jersey"},{"id":"k20","phase":"knockout","date":"2026-07-05T18:00:00-06:00","home":"Ganador 79","away":"Ganador 80","round":"Octavos","venue":"Estadio Azteca, Ciudad de México"},{"id":"k21","phase":"knockout","date":"2026-07-06T13:00:00-06:00","home":"Ganador 83","away":"Ganador 84","round":"Octavos","venue":"AT&T Stadium, Dallas"},{"id":"k22","phase":"knockout","date":"2026-07-06T18:00:00-06:00","home":"Ganador 81","away":"Ganador 82","round":"Octavos","venue":"Lumen Field, Seattle"},{"id":"k23","phase":"knockout","date":"2026-07-07T10:00:00-06:00","home":"Ganador 86","away":"Ganador 88","round":"Octavos","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"k24","phase":"knockout","date":"2026-07-07T14:00:00-06:00","home":"Ganador 85","away":"Ganador 87","round":"Octavos","venue":"BC Place, Vancouver"},{"id":"k25","phase":"knockout","date":"2026-07-09T14:00:00-06:00","home":"Ganador 89","away":"Ganador 90","round":"Cuartos","venue":"Gillette Stadium, Boston"},{"id":"k26","phase":"knockout","date":"2026-07-10T13:00:00-06:00","home":"Ganador 93","away":"Ganador 94","round":"Cuartos","venue":"SoFi Stadium, Los Ángeles"},{"id":"k27","phase":"knockout","date":"2026-07-11T15:00:00-06:00","home":"Ganador 91","away":"Ganador 92","round":"Cuartos","venue":"Hard Rock Stadium, Miami"},{"id":"k28","phase":"knockout","date":"2026-07-11T19:00:00-06:00","home":"Ganador 95","away":"Ganador 96","round":"Cuartos","venue":"Arrowhead Stadium, Kansas City"},{"id":"k29","phase":"knockout","date":"2026-07-14T13:00:00-06:00","home":"Ganador 97","away":"Ganador 98","round":"Semifinal","venue":"AT&T Stadium, Dallas"},{"id":"k30","phase":"knockout","date":"2026-07-15T13:00:00-06:00","home":"Ganador 99","away":"Ganador 100","round":"Semifinal","venue":"Mercedes-Benz Stadium, Atlanta"},{"id":"k31","phase":"knockout","date":"2026-07-18T15:00:00-06:00","home":"Perdedor 101","away":"Perdedor 102","round":"Tercer lugar","venue":"Hard Rock Stadium, Miami"},{"id":"k32","phase":"knockout","date":"2026-07-19T13:00:00-06:00","home":"Ganador 101","away":"Ganador 102","round":"Final","venue":"MetLife Stadium, New York/New Jersey"}];
const matches=[...groupMatches,...knockoutMatches];

function dayKey(d){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Guatemala',year:'numeric',month:'2-digit',day:'2-digit'}).format(d)}
function norm(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();}
const alias={
  'mexico':'México','south africa':'Sudáfrica','rsa':'Sudáfrica','korea republic':'Corea del Sur','south korea':'Corea del Sur','korea':'Corea del Sur','czechia':'Chequia','czech republic':'Chequia',
  'canada':'Canadá','switzerland':'Suiza','qatar':'Catar','bosnia and herzegovina':'Bosnia y Herzegovina','bosnia':'Bosnia y Herzegovina',
  'brazil':'Brasil','morocco':'Marruecos','haiti':'Haití','scotland':'Escocia','usa':'Estados Unidos','united states':'Estados Unidos','united states of america':'Estados Unidos',
  'paraguay':'Paraguay','australia':'Australia','turkey':'Turquía','turkiye':'Turquía','germany':'Alemania','curacao':'Curazao','curaçao':'Curazao',
  'ivory coast':'Costa de Marfil','cote d ivoire':'Costa de Marfil','côte d ivoire':'Costa de Marfil','ecuador':'Ecuador','netherlands':'Países Bajos','japan':'Japón',
  'tunisia':'Túnez','sweden':'Suecia','belgium':'Bélgica','egypt':'Egipto','iran':'Irán','new zealand':'Nueva Zelanda','spain':'España','esp':'España','espana':'España','españa':'España','cape verde':'Cabo Verde','cape verde islands':'Cabo Verde','cabo verde':'Cabo Verde','cabo verde islands':'Cabo Verde','cv':'Cabo Verde','cpv':'Cabo Verde',
  'saudi arabia':'Arabia Saudita','uruguay':'Uruguay','france':'Francia','senegal':'Senegal','norway':'Noruega','iraq':'Irak','argentina':'Argentina','algeria':'Argelia',
  'austria':'Austria','jordan':'Jordania','portugal':'Portugal','uzbekistan':'Uzbekistán','colombia':'Colombia','dr congo':'Congo RD','congo dr':'Congo RD','congo rd':'Congo RD',
  'england':'Inglaterra','croatia':'Croacia','ghana':'Ghana','panama':'Panamá'
};
function localName(name){const n=norm(name); return alias[n]||name;}
function sameTeam(a,b){return norm(localName(a))===norm(localName(b));}
function apiStatusLabel(sh){return ({'NS':'Programado','TBD':'Por definir','1H':'En vivo 1T','HT':'Descanso','2H':'En vivo 2T','ET':'Tiempo extra','P':'Penales','FT':'Finalizado','AET':'Finalizado TE','PEN':'Finalizado penales','BT':'Pausa','SUSP':'Suspendido','INT':'Interrumpido','PST':'Pospuesto','CANC':'Cancelado','ABD':'Abandonado'})[sh]||sh||'api';}
function matchForFixture(fx, strictDate=false){
  const h=localName(fx.teams?.home?.name), a=localName(fx.teams?.away?.name);
  const date=fx.fixture?.date?dayKey(new Date(fx.fixture.date)):'';
  for(const m of matches){
    if(strictDate && dayKey(new Date(m.date))!==date) continue;
    if(sameTeam(h,m.home)&&sameTeam(a,m.away)) return {match:m,reversed:false};
    if(sameTeam(h,m.away)&&sameTeam(a,m.home)) return {match:m,reversed:true};
  }
  return null;
}
async function supabase(path, opts={}){
  // V313.34: acepta SUPABASE_URL con o sin /rest/v1 o /v1 para evitar 404.
  // Valor ideal en Netlify: https://TU-PROYECTO.supabase.co
  let url=(process.env.SUPABASE_URL||'').trim();
  url=url.replace(/\/$/,'').replace(/\/rest\/v1$/,'').replace(/\/v1$/,'');
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
  if(!key) throw new Error('Falta SUPABASE_SERVICE_ROLE_KEY en Netlify.');
  const res=await fetch(`${url}/rest/v1/${path}`,{...opts,headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=representation',...(opts.headers||{})}});
  const bodyText=await res.text();
  if(!res.ok) throw new Error(`Supabase ${res.status}: ${bodyText}`);
  try{return bodyText?JSON.parse(bodyText):null}catch{return bodyText}
}
async function getConfig(){
  let key=process.env.API_FOOTBALL_KEY||''; let league=process.env.API_FOOTBALL_LEAGUE||'1'; let season=process.env.API_FOOTBALL_SEASON||'2026';
  try{
    const rows=await supabase('settings?key=eq.api_football&select=value&limit=1',{headers:{Prefer:''}});
    const v=rows?.[0]?.value||{};
    key=key||v.key||''; league=v.league||league; season=v.season||season;
  }catch(e){}
  if(!key) throw new Error('Falta API_FOOTBALL_KEY o configuración api_football en Supabase.');
  return {key,league,season};
}
async function getCronStatus(){
  try{
    const rows=await supabase('settings?key=eq.api_football_cron_status&select=value&limit=1',{headers:{Prefer:''}});
    return rows?.[0]?.value||null;
  }catch(e){ return null; }
}
function localLiveWindow(now=new Date()){
  // Detecta partidos que ya iniciaron por calendario local aunque API todavía no los marque como live.
  // Ventana amplia: desde 10 min antes hasta 145 min después del inicio.
  return matches.filter(m=>{
    const t=new Date(m.date).getTime();
    const diff=now.getTime()-t;
    return diff>=-10*60000 && diff<=145*60000;
  });
}

function apiDateKeysForMatch(m){
  const d=new Date(m.date);
  const keys=new Set();
  [-1,0,1].forEach(off=>{
    const x=new Date(d.getTime()+off*86400000);
    keys.add(x.toISOString().slice(0,10));
  });
  return [...keys];
}
function englishName(local){
  const map={
    'México':'Mexico','Sudáfrica':'South Africa','Corea del Sur':'South Korea','Chequia':'Czechia',
    'Canadá':'Canada','Suiza':'Switzerland','Catar':'Qatar','Bosnia y Herzegovina':'Bosnia and Herzegovina',
    'Brasil':'Brazil','Marruecos':'Morocco','Haití':'Haiti','Escocia':'Scotland',
    'Estados Unidos':'United States','Paraguay':'Paraguay','Australia':'Australia','Turquía':'Turkey',
    'Alemania':'Germany','Curazao':'Curacao','Costa de Marfil':'Ivory Coast','Ecuador':'Ecuador',
    'Países Bajos':'Netherlands','Japón':'Japan','Túnez':'Tunisia','Suecia':'Sweden',
    'Bélgica':'Belgium','Egipto':'Egypt','Irán':'Iran','Nueva Zelanda':'New Zealand',
    'España':'Spain','Cabo Verde':'Cape Verde','Arabia Saudita':'Saudi Arabia','Uruguay':'Uruguay',
    'Francia':'France','Senegal':'Senegal','Noruega':'Norway','Irak':'Iraq',
    'Argentina':'Argentina','Argelia':'Algeria','Austria':'Austria','Jordania':'Jordan',
    'Portugal':'Portugal','Uzbekistán':'Uzbekistan','Colombia':'Colombia','Congo RD':'DR Congo',
    'Inglaterra':'England','Croacia':'Croatia','Ghana':'Ghana','Panamá':'Panama'
  };
  return map[local]||local;
}
async function getFixtures(cfg, forceFull=false){
  const headers={'x-apisports-key':cfg.key};
  const all=[];
  const diag=[];
  async function api(url,label){
    const started=Date.now();
    try{
      const r=await fetch(url,{headers});
      const txt=await r.text();
      if(!r.ok){
        diag.push(`${label}: HTTP ${r.status} ${txt.slice(0,180)}`);
        console.log(`[HCQ CRON] ${label}: HTTP ${r.status}`, txt.slice(0,300));
        throw new Error(`${label||'API Football'} HTTP ${r.status}`);
      }
      const d=txt?JSON.parse(txt):{};
      const err=d.errors&&(Array.isArray(d.errors)?d.errors.length:Object.keys(d.errors).length);
      if(err){
        diag.push(`${label}: API errors ${JSON.stringify(d.errors).slice(0,180)}`);
        console.log(`[HCQ CRON] ${label}: API errors`, JSON.stringify(d.errors).slice(0,500));
        throw new Error('API Football: '+JSON.stringify(d.errors));
      }
      const response=d.response||[];
      diag.push(`${label}: ${response.length} fixtures (${Date.now()-started}ms)`);
      console.log(`[HCQ CRON] ${label}: ${response.length} fixtures (${Date.now()-started}ms)`);
      return response;
    }catch(e){
      diag.push(`${label}: ERROR ${e.message}`);
      console.log(`[HCQ CRON] ${label}: ERROR ${e.message}`);
      return [];
    }
  }

  const last=await getCronStatus();
  const now=new Date();
  const scheduledLive=localLiveWindow(now);
  console.log(`[HCQ CRON] start force=${forceFull} scheduledLive=${scheduledLive.map(m=>m.id+':'+m.home+'-'+m.away).join('|')||'none'}`);

  // 1) Siempre live=all sin filtros.
  const liveAll=await api(`https://v3.football.api-sports.io/fixtures?live=all`,'live-all');
  all.push(...liveAll);

  const hasApiLive=liveAll.some(f=>['1H','2H','ET','P','HT','BT','SUSP','INT','LIVE'].includes(f.fixture?.status?.short));
  const hasScheduleLive=scheduledLive.length>0;
  const shouldTournamentPull=forceFull || hasApiLive || hasScheduleLive;

  const lastTournamentAt=last?.tournamentAt?new Date(last.tournamentAt).getTime():0;
  const lastBackfillAt=last?.backfillAt?new Date(last.backfillAt).getTime():0;
  const shouldNormalPull=!lastTournamentAt || Date.now()-lastTournamentAt>110000;
  const shouldBackfill=forceFull || !lastBackfillAt || Date.now()-lastBackfillAt>21600000;

  let tournamentAt=last?.tournamentAt||null;
  if(shouldTournamentPull || shouldNormalPull){
    const tournament=await api(`https://v3.football.api-sports.io/fixtures?league=${encodeURIComponent(cfg.league)}&season=${encodeURIComponent(cfg.season)}`,'tournament-all');
    all.push(...tournament);
    tournamentAt=new Date().toISOString();
  }

  // 2) Fallback fuerte para partidos que están vivos por horario:
  // consultar la fecha sin filtro de liga. Corrige ligas/temporadas mal etiquetadas.
  const dateKeys=new Set();
  [-1,0,1].forEach(off=>{
    const x=new Date(Date.now()+off*86400000);
    dateKeys.add(x.toISOString().slice(0,10));
  });
  for(const m of scheduledLive){
    apiDateKeysForMatch(m).forEach(k=>dateKeys.add(k));
  }
  if(hasScheduleLive || forceFull){
    for(const dk of [...dateKeys].sort()){
      const dayAny=await api(`https://v3.football.api-sports.io/fixtures?date=${dk}`,'date-any-'+dk);
      all.push(...dayAny);
    }
  }

  // 3) Backfill por liga de fechas recientes para resultados terminados que no entraron.
  let backfillAt=last?.backfillAt||null;
  if(shouldBackfill){
    const usedDates=new Set();
    for(let offset=-10; offset<=1; offset++){
      const d=new Date(Date.now()+offset*86400000).toISOString().slice(0,10);
      if(usedDates.has(d)) continue; usedDates.add(d);
      const dayFixtures=await api(`https://v3.football.api-sports.io/fixtures?league=${encodeURIComponent(cfg.league)}&season=${encodeURIComponent(cfg.season)}&date=${d}`,'date-league-'+d);
      all.push(...dayFixtures);
    }
    backfillAt=new Date().toISOString();
  }

  const seen=new Set();
  const fixtures=all.filter(f=>{
    const id=f.fixture?.id;
    if(!id||seen.has(id)) return false;
    seen.add(id);
    return true;
  });
  const sample=fixtures.slice(0,25).map(f=>`${f.teams?.home?.name||'?'} ${f.goals?.home??'-'}-${f.goals?.away??'-'} ${f.teams?.away?.name||'?'} [${f.fixture?.status?.short||'?'} ${f.fixture?.status?.elapsed??''} · league ${f.league?.id||'?'} ${f.league?.name||''}]`);
  console.log(`[HCQ CRON] collected=${fixtures.length} hasApiLive=${hasApiLive} hasScheduleLive=${hasScheduleLive}`);
  console.log(`[HCQ CRON] sample=${sample.join(' || ')}`);
  return {
    fixtures,
    hasLive: hasApiLive || hasScheduleLive,
    hasApiLive,
    hasScheduleLive,
    scheduledLive: scheduledLive.map(m=>m.id),
    scheduledLiveNames: scheduledLive.map(m=>`${m.home} vs ${m.away}`),
    mode: hasApiLive?'api_live_1min':(hasScheduleLive?'schedule_live_deep_pull':(shouldBackfill?'backfill_6h':'normal_2min')),
    fullAt: tournamentAt,
    tournamentAt,
    backfillAt,
    diag,
    liveAllCount: liveAll.length,
    sample
  };
}

function buildUpdates(fixtures){
  const updates=[], unmatched=[];
  for(const fx of fixtures){
    const map=matchForFixture(fx,false);
    if(!map){unmatched.push(`${fx.teams?.home?.name||'?'} vs ${fx.teams?.away?.name||'?'} [league ${fx.league?.id||'?'} ${fx.league?.name||''} · ${fx.fixture?.status?.short||''} · ${fx.goals?.home ?? '-'}-${fx.goals?.away ?? '-'}]`); continue;}
    let gh=fx.goals?.home, ga=fx.goals?.away;
    if((gh==null||ga==null) && fx.score?.fulltime?.home!=null && fx.score?.fulltime?.away!=null){ gh=fx.score.fulltime.home; ga=fx.score.fulltime.away; }
    if((gh==null||ga==null) && fx.score?.halftime?.home!=null && fx.score?.halftime?.away!=null){ gh=fx.score.halftime.home; ga=fx.score.halftime.away; }
    if(gh==null||ga==null) continue;
    if(map.reversed) [gh,ga]=[ga,gh];
    const sh=fx.fixture?.status?.short; const elapsed=fx.fixture?.status?.elapsed;
    let status=apiStatusLabel(sh); if(['1H','2H','ET','P'].includes(sh)&&elapsed) status+=` ${elapsed}'`;
    let qualifier=null;
    if(map.match.phase==='knockout'){
      const homeWinner=map.reversed?fx.teams?.away?.winner:fx.teams?.home?.winner;
      const awayWinner=map.reversed?fx.teams?.home?.winner:fx.teams?.away?.winner;
      if(homeWinner===true) qualifier=map.match.home; if(awayWinner===true) qualifier=map.match.away;
    }
    updates.push({match_id:map.match.id,home_score:+gh,away_score:+ga,qualifier,status,updated_at:new Date().toISOString()});
  }
  const byId=new Map(); updates.forEach(u=>byId.set(u.match_id,u));
  return {updates:[...byId.values()],unmatched};
}
export const config={schedule:'*/5 * * * *'};
export default async function handler(req, context){
  try{
    const cfg=await getConfig();
    const forceFull=new URL(req.url).searchParams.get('force')==='1';
    const pack=await getFixtures(cfg,forceFull);
    const {fixtures,hasLive,hasApiLive,hasScheduleLive,scheduledLive,scheduledLiveNames,mode,fullAt,tournamentAt,backfillAt,diag,liveAllCount,sample}=pack;
    let updates=[], unmatched=[];
    if(mode!=='skip_2min'){
      const built=buildUpdates(fixtures); updates=built.updates; unmatched=built.unmatched; console.log(`[HCQ CRON] buildUpdates updates=${updates.length} unmatched=${unmatched.length}`); console.log('[HCQ CRON] updates '+JSON.stringify(updates).slice(0,2000)); console.log('[HCQ CRON] unmatched_sample '+unmatched.slice(0,5).join(' || '));
      if(updates.length) await supabase('results?on_conflict=match_id',{method:'POST',body:JSON.stringify(updates),headers:{Prefer:'resolution=merge-duplicates,return=representation'}});
    }
    const status={ok:true,version:'V316.18',at:new Date().toISOString(),fullAt,tournamentAt,backfillAt,hasLive,hasApiLive,hasScheduleLive,scheduledLive,scheduledLiveNames,mode,next:hasLive?'1 minuto':'2 minutos',fixtures:fixtures.length,liveAll:liveAllCount||0,updates:updates.length,unmatched:unmatched.slice(0,40),diag:(diag||[]).slice(-60),sample:(sample||[]).slice(0,25)}; console.log('[HCQ CRON] STATUS '+JSON.stringify(status).slice(0,3500));
    await supabase('settings?on_conflict=key',{method:'POST',body:JSON.stringify({key:'api_football_cron_status',value:status,updated_at:new Date().toISOString()}),headers:{Prefer:'resolution=merge-duplicates,return=minimal'}});
    return new Response(JSON.stringify(status),{status:200,headers:{'Content-Type':'application/json'}});
  }catch(e){
    console.log('[HCQ CRON] FATAL '+(e&&e.stack?e.stack:e.message));
    try{await supabase('settings?on_conflict=key',{method:'POST',body:JSON.stringify({key:'api_football_cron_status',value:{ok:false,at:new Date().toISOString(),error:e.message},updated_at:new Date().toISOString()}),headers:{Prefer:'resolution=merge-duplicates,return=minimal'}})}catch(_){}
    return new Response(JSON.stringify({ok:false,error:e.message}),{status:500,headers:{'Content-Type':'application/json'}});
  }
}
