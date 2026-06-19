V313.29 - Alias + Backfill API Football

Correcciones principales:
1. Alias reforzados para España / Cabo Verde:
   - Spain, España, ESP
   - Cape Verde, Cape Verde Islands, Cabo Verde, Cabo Verde Islands, CPV, CV
2. Backfill automático cada 6 horas:
   - Revisa los últimos 10 días, hoy y los próximos 2 días.
   - Sirve para recuperar partidos que API Football no detectó en el momento exacto.
3. Cron sigue cada 1 minuto, pero no hace consultas pesadas todo el tiempo.
4. El status de Netlify ahora puede mostrar mode=backfill_6h cuando haga revisión amplia.

Después de subir esta versión:
- Trigger deploy.
- En Netlify > Logs & metrics > Functions > api-football-cron puedes usar Run now.
- Espera el siguiente cron y revisa settings api_football_cron_status si quieres ver unmatched.
