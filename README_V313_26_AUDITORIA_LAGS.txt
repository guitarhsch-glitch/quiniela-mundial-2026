HCQ V313.26 - Auditoría y reparación de estabilidad

Cambios aplicados:
1. Registro del Service Worker en index.html para activar actualización/caché controlado.
2. Reparadas rutas de iconos del manifest y head; se agregaron iconos v31326.
3. Refresco Supabase protegido contra llamadas simultáneas y con debounce para evitar parpadeos/lags.
4. Presencia del chat limitada a una escritura cada 4 minutos para evitar ciclos render -> write -> refresh.
5. Configuración API Football / OneSignal se carga desde state y solo cuando cambia la configuración, no en cada render.
6. Timer vivo ajustado de 2 a 3 minutos para reducir carga en celulares sin quitar actualización automática.
7. Limpieza de READMEs antiguos para evitar confusión en deploy.

Subir este ZIP completo a Netlify.
