V313.31 CRON FIX

Corrección principal:
- api-football-cron ahora replica automáticamente el botón Admin “Actualizar todos los partidos” cuando hay partido en vivo por horario o por API.
- Ya no depende de entrar como administrador para que se guarde el marcador en Supabase.
- live=all se consulta sin filtro primero, porque API Football a veces falla con live=all + league + season.
- Mantiene backfill de fechas y aliases.

Después de subir a Netlify:
1. Deploys -> subir ZIP -> esperar verde.
2. Logs & metrics -> Functions -> api-football-cron -> Run now.
3. Verificar en la app versión V313.31.
