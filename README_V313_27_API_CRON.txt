HCQ V313.27 - API Football automático 24/7

Qué cambia:
1. Agrega netlify/functions/api-football-cron.mjs
2. Esa función corre cada 2 minutos en Netlify.
3. Consulta API Football y actualiza la tabla results en Supabase aunque ningún admin esté conectado.
4. La app ya no hace consulta automática al API desde el celular/admin cada 3 minutos; queda solo el botón manual del Admin.

Variables necesarias en Netlify:
- SUPABASE_URL = https://kwezracgftuzctzwejlt.supabase.co
- SUPABASE_SERVICE_ROLE_KEY = clave service_role de Supabase (Project Settings > API)
- API_FOOTBALL_KEY = tu key de API Football (opcional si ya está guardada en Admin, pero recomendado)
- API_FOOTBALL_LEAGUE = 1
- API_FOOTBALL_SEASON = 2026

Después de subir el ZIP:
1. En Netlify, ve a Site configuration > Environment variables.
2. Agrega las variables anteriores.
3. Haz Deploy del ZIP.
4. En Functions debe aparecer api-football-cron.
5. Puedes probar manualmente abriendo: /.netlify/functions/api-football-cron

Nota importante:
La service_role key es secreta. No la pegues dentro del index.html. Solo va en variables de Netlify.
