HCQ V313.34 - Recuperación Netlify + Supabase URL Fix

Cambios:
- api-football-cron baja de cada 1 minuto a cada 5 minutos para reducir consumo de Netlify.
- Corrige error Supabase 404 cuando SUPABASE_URL fue guardada con /rest/v1 o /v1.
- Mantiene logs, pero reduce cantidad de unmatched para no gastar tanto.
- Versión de emergencia para evitar que Netlify vuelva a pausar el sitio por exceso de uso.

IMPORTANTE:
En Netlify, SUPABASE_URL idealmente debe ser solo:
https://TU-PROYECTO.supabase.co

NO debe ser:
https://TU-PROYECTO.supabase.co/rest/v1
ni terminar solo en /v1

Para reactivar el sitio pausado:
1. Netlify > Billing / Usage.
2. Revisar el límite alcanzado.
3. Actualizar plan o añadir método de pago, o esperar reinicio de ciclo si Netlify lo permite.
4. Después subir V313.34 y hacer Trigger deploy.
