HCQ V316.6 - Auditoría y correcciones

1) Pronósticos
- Se cambió el guardado para eliminar el pronóstico anterior del mismo participante/partido/grupo antes de insertar el nuevo.
- Esto evita duplicados que podían causar fallas al guardar o lecturas incorrectas.
- Se agregó mensaje de error claro si Supabase rechaza el guardado.
- Se fuerza guardar ambos marcadores y clasificado en eliminatorias cuando aplica.

2) Puntajes / ranking
- El ranking ahora compacta pronósticos duplicados y siempre usa el último updated_at.
- La regla queda explícita: máximo 4 puntos por partido.
- Eliminatorias: ganador/empate + exacto + clasificado, con tope 4.
- Se actualiza snapshot de ranking después de guardar pronóstico.

3) Inicio / partido en vivo
- El bloque superior muestra solo 1 partido en vivo.
- Si no hay vivo, muestra “No hay partido en vivo”.
- El partido anterior queda únicamente abajo en su propio bloque.
- Se evita que partidos viejos queden pegados como vivos por más de 130 minutos si la API no marca final.

4) Campeón
- Protección extra: la app bloquea que se guarde/cambie la llave champion_ de otro participante.
- El admin conserva únicamente el campeón oficial, no puede editar el campeón elegido por otros.
