HCQ V313.35 - LIVE HEALTH

Mejoras:
- Indicador de salud API en barra superior: API LIVE / API DELAY / API OFF.
- Minuto en vivo por API cuando llega en el estado; si API tarda, muestra minuto estimado por horario.
- Cron conserva modo seguro de Netlify cada 5 minutos para evitar pausar el sitio por consumo.
- Detector de partidos no emparejados: muestra solo relevantes del Mundial en diagnóstico admin.
- Actualiza api_live_details para evitar datos viejos.
- Precarga de banderas crítica y diferida para reducir sensación de lag.

Importante:
SUPABASE_URL en Netlify debe quedar sin /v1 ni /rest/v1.
Ejemplo: https://kwezracgftuzctzwejlt.supabase.co
