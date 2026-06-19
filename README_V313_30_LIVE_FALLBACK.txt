V313.30 LIVE FALLBACK
- Corrige caso donde el partido ya empezó pero API Football aún no mandó estado LIVE.
- El inicio muestra el partido como EN VIVO por horario desde 2 min antes hasta 150 min después del inicio.
- Mantiene alias reforzados V313.29, incluyendo España/Cabo Verde y códigos ESP/CPV.
- Cuando API confirme marcador/estado, se reemplaza el fallback por el estado real.
- Recomendado después del deploy: Netlify > Functions > api-football-cron > Run now.
