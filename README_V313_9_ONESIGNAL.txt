V313.9 OneSignal

Cambios:
- Agregado OneSignal para notificaciones externas push.
- Agregada función Netlify /.netlify/functions/onesignal-notify para enviar avisos sin exponer la REST API Key en el HTML.
- Avisos externos al grupo cuando alguien escribe en Chat o modifica/guarda un pronóstico.
- Panel Admin: configura OneSignal App ID, activa avisos en el dispositivo y envía prueba.
- Conserva puntos rojos internos en pestañas Chat y Todos.
- Versión/caché actualizado a 313.9.

Pasos en Netlify:
1) Sube este ZIP como deploy nuevo.
2) En Netlify > Site configuration > Environment variables agrega:
   ONESIGNAL_REST_API_KEY = tu REST API Key de OneSignal
   Opcional: ONESIGNAL_APP_ID = tu App ID de OneSignal
3) En la app, entra como admin > Admin > Notificaciones externas OneSignal.
4) Pega el OneSignal App ID y guarda.
5) En cada teléfono, abrir la app y presionar “Activar avisos en este dispositivo”.

Nota iPhone:
- En iPhone, las notificaciones web push funcionan mejor si la app está agregada a pantalla de inicio como PWA.
