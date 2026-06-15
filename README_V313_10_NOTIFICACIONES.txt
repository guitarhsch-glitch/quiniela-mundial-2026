V313.10 - OneSignal avanzado

Notificaciones externas incluidas:
1. Nuevo mensaje en el chat del grupo.
2. Recordatorio 30 minutos antes del inicio de cada partido.
3. Aviso cuando el partido empieza.
4. Aviso cuando un participante agrega o cambia su pronóstico.
5. Botón en Perfil para que cada participante active o desactive notificaciones externas en su dispositivo.

Notas importantes:
- En Netlify debes configurar la variable de entorno ONESIGNAL_REST_API_KEY.
- El OneSignal App ID se guarda desde Admin dentro de la app.
- Los recordatorios de partidos se programan en OneSignal cuando la app se abre y hay configuración válida.
- Para iPhone, web push requiere iOS 16.4+ y normalmente funciona mejor si la web está agregada a la pantalla de inicio.
