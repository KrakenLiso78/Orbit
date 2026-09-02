# Data model

## Review

Representa una ejecución trimestral.

Campos conceptuales: identificador, fecha de ejecución, fecha de corte, trimestre, condición de baseline, ejercicio de ranking, año de proyección, estado y limitaciones.

Relaciones: contiene compañías, fuentes, acontecimientos materiales y una ejecución operativa; sucede a otra revisión validada.

## Company ranking entry

Representa la posición comparable de una compañía.

Campos conceptuales: compañía, posición, ventas normalizadas, ventas reportadas, moneda original, periodo fiscal, exclusiones, tendencia y universo/top 10.

Relaciones: pertenece a una revisión; tiene una proyección, drivers, evidencias y una clasificación CRM.

## Projection

Representa la expectativa a cinco años.

Campos conceptuales: horizonte, rango de ventas, rango de posición, punto medio ilustrativo, confianza, tipo de fuente, escenario bajista, base y alcista.

## Momentum signal

Representa información posterior al ejercicio completo sin modificar el ranking anual.

Campos conceptuales: periodo YTD/LTM, crecimiento reportado y a cambio constante, guidance, cambio de consenso, franquicias y dirección de la señal.

## Competitive driver

Representa un factor que puede alterar ventas o posición.

Categorías: franquicia, lanzamiento, pipeline, regulación, LOE, genérico/biosimilar, M&A/licensing, guidance, capacidad productiva/comercial y área terapéutica.

## CRM evidence

Representa la evidencia pública de una decisión tecnológica comercial.

Campos conceptuales: plataforma, distinción legacy/nueva, estado, alcance, fuente, fecha, confianza y razonamiento de clasificación.

## Source

Representa un documento consultado.

Campos conceptuales: título, entidad, fecha de publicación, URL, fecha de consulta, tipo de fuente, accesibilidad y afirmaciones respaldadas.

## Material change

Representa una diferencia respecto a la revisión anterior que supera el umbral establecido.

Campos conceptuales: compañía, categoría, descripción, magnitud, fuente, fecha y efecto esperado.

## Execution record

Representa las pruebas operativas de cierre.

Campos conceptuales: revisión, URL, fecha de despliegue, acceso, comprobaciones visuales, estado del correo, destinatario, asunto, identificador de Gmail y estado final.
