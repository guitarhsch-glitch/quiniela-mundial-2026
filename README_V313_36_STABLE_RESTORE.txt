HCQ V313.36 Stable Restore

Base: V313.34 estable que sí cargaba participantes, pronósticos, calendario y resultados.

Cambios:
- Mantiene conexión pública de Supabase en frontend.
- Evita que Netlify bloquee el deploy por exposed secret de SUPABASE_URL.
- Mantiene cron de Netlify con SUPABASE_URL desde variables de entorno.

Importante:
- En Netlify, SUPABASE_URL debe estar sin /v1 ni /rest/v1.
- Después del deploy, presionar Run now en api-football-cron para probar.
