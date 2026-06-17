V313.18 - Forzar actualización del icono de pantalla de inicio

Cambios:
- Nuevo nombre físico para iconos: icon-192-v31318.png, icon-512-v31318.png, apple-touch-icon-v31318.png.
- Manifest actualizado con id/start_url/version nuevos para obligar a detectar la PWA como actualizada.
- index.html actualizado con manifest versionado y apple-touch-icon versionado.
- Service Worker actualizado a hcq-v313-18-icon-force y limpia cachés anteriores.
- Headers no-cache también para PNG/ICO.

Nota importante:
- Android/Chrome suele actualizar el icono instalado después de abrir la app una o dos veces.
- iPhone/iOS normalmente NO reemplaza automáticamente el icono ya agregado a pantalla de inicio; Apple mantiene el snapshot del icono instalado. Esta versión fuerza todo lo técnicamente posible desde la web, pero si iOS no lo refresca, hay que borrar y volver a agregar el acceso de pantalla de inicio.
