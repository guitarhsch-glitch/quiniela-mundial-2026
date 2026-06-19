V313.32 CRON LIVE DEBUG

Corrección para partidos en vivo que aparecen por horario pero no reciben marcador/minuto.

Cambios:
- api-football-cron consulta live=all SIN filtrar por league/season antes de empatar.
- Empata por equipos contra calendario local aunque API devuelva otro league ID/nombre.
- Usa goals, score.fulltime o score.halftime como respaldo.
- Guarda diagnóstico en settings.api_football_cron_status: mode, fixtures, liveAll, updates, unmatched.
- La app muestra más datos de sincronización en Resumen automático.

Después de subir:
1. Deploy en Netlify.
2. Functions > api-football-cron > Run now.
3. Si sigue sin marcador, revisar Resumen automático o logs: unmatched debe mostrar cómo API nombra el partido.
