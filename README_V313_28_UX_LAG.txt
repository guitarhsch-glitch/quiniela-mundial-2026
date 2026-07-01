HCQ V313.28 - UX / LAG / CAMPEÓN

Mejoras incluidas:
1. Cron inteligente API Football:
   - Netlify ejecuta api-football-cron cada 1 minuto.
   - Si hay partido en vivo, consulta y actualiza cada minuto.
   - Si no hay partido en vivo, evita trabajo pesado y mantiene sincronización completa cada ~2 minutos.
   - Guarda estado visible en Supabase: api_football_cron_status.

2. Menú inferior mejorado:
   - Diseño tipo burbuja transparente / glassmorphism.
   - Más cómodo para iPhone, separado de la barra inferior.
   - Mejor indicador activo y mejor toque móvil.

3. Pantalla de campeón:
   - Contraste oscuro premium similar a Partidos en Vivo / Alertas.
   - Textos, selectores, avisos y tarjetas con colores legibles.

4. Menos lag / banderas más rápidas:
   - Preconnect a flagcdn.
   - Banderas más livianas w40/w80.
   - Decoding async, fallback por emoji y precarga de banderas críticas.
   - Service Worker cachea banderas externas.
   - Debounce de refresh en Supabase más suave para evitar renderizados repetidos.

Después de subir el ZIP:
- Verifica en Netlify > Functions que api-football-cron ahora muestre schedule */1 * * * *.
- Presiona Run now una vez para probar.
- Revisa que la app muestre V313.28.
