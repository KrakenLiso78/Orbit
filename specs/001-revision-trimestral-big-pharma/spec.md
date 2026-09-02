# Especificación: Revisión trimestral del ranking mundial de Big Pharma

**Rama**: `001-revision-trimestral-big-pharma`
**Creada**: 2026-09-02
**Estado**: Activa
**Input**: Revisión trimestral de las principales farmacéuticas por ventas de medicamentos y vacunas, con proyección a cinco años, momentum, factores competitivos, panorama CRM, artefacto visual bilingüe y notificación verificable.

## Problema y resultado deseado

Los rankings sectoriales suelen mezclar negocios, ejercicios y métricas incompatibles, mientras que las previsiones y atribuciones CRM pueden aparentar más certeza de la que permite la evidencia. PharmaShift debe proporcionar una revisión trimestral comparable, auditable y fácil de interpretar que conserve histórico suficiente para identificar únicamente cambios materiales.

## Escenarios de usuario y pruebas

### Historia 1 — Consultar un ranking homogéneo (Prioridad: P1)

Como responsable que analiza la posición competitiva de Big Pharma, quiero comparar ventas farmacéuticas con una métrica homogénea, para evitar conclusiones distorsionadas por negocios no farmacéuticos o periodos incompatibles.

**Por qué esta prioridad**: sin una base comparable, ninguna previsión o movimiento de posición es fiable.

**Test independiente**: puede validarse revisando que las 15 compañías analizadas declaran periodo, moneda, fuente, ajustes y ventas comparables, y que el top 10 se deriva únicamente de esas cifras.

**Escenarios de aceptación**:

1. **Dado** que existe un último ejercicio completo, **Cuando** se genera el ranking, **Entonces** se muestran las diez primeras compañías por ventas netas de medicamentos y vacunas.
2. **Dado** que una compañía tiene negocios diversificados, **Cuando** se calcula su cifra comparable, **Entonces** se excluyen y documentan los ingresos no farmacéuticos.
3. **Dado** que una compañía utiliza otra moneda o calendario fiscal, **Cuando** se incorpora al universo, **Entonces** se identifica la diferencia y su posible impacto.

### Historia 2 — Entender la trayectoria y la incertidumbre (Prioridad: P1)

Como lector del análisis, quiero separar el ranking anual del momentum reciente y ver una proyección a cinco años por rangos, para distinguir hechos reportados de señales tempranas y escenarios inciertos.

**Por qué esta prioridad**: la utilidad del proyecto está en anticipar movimientos sin presentar como hechos las previsiones.

**Test independiente**: puede probarse comprobando que cada compañía relevante tiene ranking anual, monitor reciente y rango futuro diferenciados, con tipo de estimación y confianza.

**Escenarios de aceptación**:

1. **Dado** que hay resultados YTD, LTM o guidance posteriores al ejercicio completo, **Cuando** se analizan, **Entonces** aparecen en el monitor de momentum y no alteran retrospectivamente el ranking anual.
2. **Dado** que dos rangos de ventas proyectadas se solapan o difieren menos del 5 %, **Cuando** se presenta su posición futura, **Entonces** se utiliza una banda de posición.
3. **Dado** que una previsión procede de la compañía, un tercero o el análisis propio, **Cuando** se muestra, **Entonces** su naturaleza queda identificada.

### Historia 3 — Evaluar cambios competitivos materiales (Prioridad: P1)

Como decisor sectorial, quiero conocer los factores que explican ascensos, descensos y divergencias, para centrarme en los acontecimientos capaces de cambiar el equilibrio competitivo.

**Por qué esta prioridad**: un ranking sin drivers no explica por qué puede cambiar ni dónde está el riesgo.

**Test independiente**: puede validarse verificando que cada compañía relevante cubre franquicias, lanzamientos, pipeline, LOE, genéricos o biosimilares, M&A, guidance y áreas terapéuticas aplicables.

**Escenarios de aceptación**:

1. **Dado** que una compañía aumenta ventas pero crece menos que sus competidores, **Cuando** se resume su evolución, **Entonces** se distingue crecimiento absoluto de pérdida de posición relativa.
2. **Dado** que un acontecimiento supera el umbral material definido, **Cuando** se compara con la revisión anterior, **Entonces** aparece en “Qué ha cambiado”.
3. **Dado** que no existe revisión anterior, **Cuando** se completa la ejecución, **Entonces** se crea una baseline para futuras comparaciones.

### Historia 4 — Consultar atribuciones CRM verificables (Prioridad: P2)

Como profesional interesado en tecnología comercial farmacéutica, quiero saber qué decisiones CRM son públicas y cuál es su alcance, para no confundir relaciones comerciales o despliegues locales con decisiones globales.

**Por qué esta prioridad**: el panorama CRM es una dimensión diferencial del análisis, pero depende del ranking y de la investigación principal.

**Test independiente**: puede validarse trazando cada atribución a una evidencia pública con plataforma, alcance, fecha y confianza.

**Escenarios de aceptación**:

1. **Dado** que solo hay evidencia de Veeva CRM legacy, **Cuando** se clasifica la compañía, **Entonces** no se atribuye Veeva Vault CRM.
2. **Dado** que un anuncio limita el despliegue a una unidad o país, **Cuando** se presenta, **Entonces** el alcance limitado queda explícito.
3. **Dado** que no hay evidencia suficiente, **Cuando** se completa la tabla, **Entonces** la plataforma figura como “no pública”.

### Historia 5 — Explorar y recibir la revisión (Prioridad: P2)

Como destinatario de la revisión, quiero un artefacto visual bilingüe, accesible desde una URL estable y acompañado por un único correo, para digerir las conclusiones y volver a ellas en cualquier dispositivo.

**Por qué esta prioridad**: convierte la investigación en un producto recurrente y consumible.

**Test independiente**: puede probarse abriendo la URL sin autenticación en escritorio y móvil, alternando todo el contenido entre ES y EN y confirmando un único correo en Enviados.

**Escenarios de aceptación**:

1. **Dado** que una revisión ha sido validada, **Cuando** se publica, **Entonces** la URL estable muestra la nueva fecha de corte y los datos actualizados.
2. **Dado** que el lector cambia el idioma, **Cuando** utiliza el control superior derecho, **Entonces** todo el contenido y los datos visibles cambian entre español e inglés.
3. **Dado** que despliegue y acceso han sido comprobados, **Cuando** se notifica, **Entonces** se envía un único correo y se conserva su identificador.
4. **Dado** que investigación, publicación, acceso o envío fallan, **Cuando** termina la ejecución, **Entonces** no se declara completada y se registra el punto de fallo.

## Casos límite

- Una compañía cambia de calendario fiscal o moneda de presentación.
- Una adquisición se anuncia pero no ha cerrado en la fecha de corte.
- Una fuente corrige posteriormente una cifra ya publicada.
- Dos compañías quedan prácticamente empatadas dentro del margen de conversión de divisas.
- Una previsión de pago solo aparece citada en una fuente secundaria.
- Un proveedor CRM anuncia un cliente sin aclarar producto, alcance o estado de migración.
- La revisión se reintenta después de enviar el correo.
- La URL responde pero exige autenticación al destinatario.

## Requisitos funcionales

- **FR-001**: El sistema DEBE analizar al menos las 15 mayores compañías o candidatas y derivar de ellas un top 10 comparable.
- **FR-002**: El sistema DEBE usar ventas netas de medicamentos y vacunas del último ejercicio completo y documentar periodo, moneda, fuente, conversiones y exclusiones.
- **FR-003**: El sistema DEBE excluir negocios no farmacéuticos y evitar mezclar ventas del fabricante con gasto farmacéutico o precios de lista.
- **FR-004**: El sistema DEBE mantener separado un monitor trimestral de momentum basado en resultados recientes, crecimiento, guidance, consenso, franquicias y acontecimientos clínicos.
- **FR-005**: El sistema DEBE proyectar el ranking al último ejercicio completo más cinco años mediante ventas y posiciones en rango cuando exista incertidumbre relevante.
- **FR-006**: El sistema DEBE identificar la naturaleza y confianza de cada previsión y distinguir escenario base, bajista y alcista cuando sea útil.
- **FR-007**: El sistema DEBE evaluar los drivers competitivos aplicables a cada compañía relevante.
- **FR-008**: El sistema DEBE clasificar CRM únicamente con evidencia pública explícita, registrando plataforma, alcance, fecha, fuente y confianza.
- **FR-009**: El sistema DEBE presentar una tabla principal, una watchlist, un comentario ejecutivo, un panorama CRM y una sección de cambios materiales.
- **FR-010**: El sistema DEBE conservar por ejecución un informe, snapshot, registro de fuentes, versión visual, URL, fecha de despliegue e identificador del correo.
- **FR-011**: El sistema DEBE mantener referencias `latest` para la siguiente ejecución sin eliminar snapshots históricos.
- **FR-012**: El artefacto DEBE mostrar comparación actual/proyectada, filtros, movimientos, watchlist, riesgos, CRM, metodología y fuentes en español e inglés.
- **FR-013**: El artefacto DEBE funcionar sin contenido cortado, solapamientos ni errores en escritorio y móvil.
- **FR-014**: El sistema DEBE actualizar siempre el mismo sitio para conservar una URL estable.
- **FR-015**: El sistema DEBE verificar acceso antes de enviar un único correo y confirmar su identificador en Enviados.
- **FR-016**: “Qué ha cambiado” DEBE limitarse a cambios que superen los umbrales materiales definidos en el input del proyecto.

## Entidades clave

- **Revisión trimestral**: ejecución fechada con estado, fecha de corte, periodo base, versión publicada y resultado de notificación.
- **Compañía**: fabricante analizado con ventas comparables, posición, moneda, periodo, tendencia y drivers.
- **Métrica de ventas**: cifra reportada o ajustada con inclusiones, exclusiones, moneda y conversión.
- **Proyección**: rango de ventas y posición, horizonte, fuente o autoría, confianza y escenarios.
- **Acontecimiento material**: cambio de ventas, posición, guidance, transacción, aprobación, resultado clínico, LOE o decisión CRM.
- **Evidencia CRM**: plataforma, estado, alcance, fuente, fecha y confianza de una atribución.
- **Fuente**: documento consultado con entidad, fecha, URL, fecha de consulta y tipo de evidencia.
- **Publicación**: URL estable, fecha, estado de acceso y versión desplegada.
- **Notificación**: destinatario, asunto, fecha, identificador y verificación en Enviados.

## Criterios de éxito

- **SC-001**: El 100 % de las compañías del top 10 tiene una cifra trazable y una explicación de los ajustes de comparabilidad aplicables.
- **SC-002**: El 100 % de las posiciones futuras inciertas se presenta como rango y no como precisión puntual falsa.
- **SC-003**: El 100 % de las atribuciones CRM tiene evidencia pública enlazada o se clasifica como “no pública”.
- **SC-004**: Cada revisión identifica cero hechos antiguos como novedades materiales.
- **SC-005**: El artefacto supera la comprobación visual e interactiva en escritorio y móvil, en ambos idiomas.
- **SC-006**: Cada ejecución completada conserva todos los artefactos históricos y actualiza las referencias `latest`.
- **SC-007**: Cada ejecución completada termina con una URL accesible y exactamente un correo confirmado en Enviados.

## Fuera de alcance

- Recomendaciones de inversión o valoración bursátil.
- Predicción de precios de acciones.
- Acceso no autorizado a bases de datos de pago.
- Inferencia de plataformas CRM a partir de señales indirectas.
- Sustitución del juicio analítico por un ranking automatizado sin revisión de comparabilidad.

## Suposiciones

- La revisión se ejecuta una vez por trimestre natural.
- El sitio publicado mantiene la misma URL entre ejecuciones.
- El primer snapshot validado es `2026-Q3` y sirve como baseline.
- Las previsiones propias se revisan cada trimestre y no se tratan como consenso.
- Las fuentes primarias accesibles públicamente tienen prioridad sobre agregadores y prensa secundaria.
