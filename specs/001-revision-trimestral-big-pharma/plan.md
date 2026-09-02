# Plan de implementación y operación

**Feature**: `001-revision-trimestral-big-pharma`
**Spec**: [spec.md](spec.md)
**Constitución**: [../../.specify/memory/constitution.md](../../.specify/memory/constitution.md)

## Enfoque

PharmaShift se mantiene como un repositorio único con cuatro capas de artefactos:

1. **Definición SDD** en `specs/001-revision-trimestral-big-pharma/`.
2. **Evidencia histórica** en `reports/`, `data/` y `operations/`.
3. **Aplicación visual** en `site/`, ligada al proyecto de Sites ya publicado.
4. **Entradas controladas** en `inputs/`, conservando el prompt operativo original.

La revisión trimestral consulta primero `latest`, crea una nueva carpeta o fichero fechado y solo después reemplaza las referencias `latest`. Los datos históricos nunca se sobrescriben.

## Flujo trimestral

### 1. Preparación

- Leer la constitución, la spec y el snapshot `data/snapshots/latest.json`.
- Leer el último informe, registro de fuentes y metadatos de ejecución.
- Determinar el nuevo identificador `AAAA-QN` y la fecha exacta de corte.
- Comprobar si existe ya una ejecución o correo del mismo trimestre.

### 2. Investigación y normalización

- Recopilar annual reports y resultados corporativos antes de usar fuentes secundarias.
- Construir un universo mínimo de 15 compañías.
- Normalizar ventas farmacéuticas, periodos y divisas en un dataset estructurado.
- Mantener por separado ranking anual, momentum trimestral, previsiones y evidencia CRM.
- Comparar contra `latest` aplicando los umbrales materiales de la spec.

### 3. Síntesis y control

- Generar el informe fechado en `reports/<AAAA-QN>/report.md`.
- Generar el snapshot fechado y el registro de fuentes.
- Validar totales, orden, duplicados, conversiones, enlaces, rangos y clasificaciones CRM.
- Actualizar `research.md` solo cuando cambie una decisión metodológica duradera.

### 4. Aplicación visual

- Actualizar los datos y textos de `site/` sin cambiar el `project_id` de `.openai/hosting.json`.
- Mantener el conmutador ES/EN y traducir también etiquetas, datos y notas metodológicas.
- Verificar escritorio, móvil, navegación, filtros, enlaces, overflow y errores de consola.
- Construir y publicar una nueva versión en el mismo proyecto de Sites.

### 5. Cierre verificable

- Comprobar la URL pública y la nueva fecha de corte.
- Enviar un único correo con el asunto definido para el trimestre.
- Buscar el correo en Enviados y registrar su identificador.
- Guardar `operations/executions/<AAAA-QN>.json`.
- Solo tras todas las comprobaciones, actualizar las copias `latest`.

## Estructura de directorios

```text
PharmaShift/
├── .specify/memory/constitution.md
├── AGENTS.md
├── README.md
├── spec.md
├── inputs/
├── specs/001-revision-trimestral-big-pharma/
│   ├── spec.md
│   ├── plan.md
│   ├── tasks.md
│   ├── research.md
│   ├── data-model.md
│   ├── quickstart.md
│   └── contracts/snapshot.schema.json
├── reports/<AAAA-QN>/report.md
├── data/snapshots/<AAAA-QN>.json
├── data/sources/<AAAA-QN>.csv
├── operations/executions/<AAAA-QN>.json
└── site/
```

## Decisiones técnicas

- El snapshot JSON es la fuente estructurada para comparaciones entre trimestres.
- El registro CSV conserva una fila por evidencia y permite auditoría sencilla.
- Los metadatos operativos JSON separan publicación y correo del contenido analítico.
- La aplicación visual se conserva como proyecto React/vinext desplegable en Sites.
- El identificador de Sites permanece únicamente en `site/.openai/hosting.json`.
- Los artefactos `latest` son copias validadas, no enlaces simbólicos, para máxima portabilidad.
- La validación usa herramientas del proyecto: parser JSON, linter focalizado, build y navegador en dos breakpoints.

## Controles de calidad

- JSON válido contra `contracts/snapshot.schema.json`.
- Ranking ordenado y sin compañías duplicadas.
- Top 10 derivado del universo ampliado, no mantenido manualmente por separado.
- Todos los importes incluyen periodo, moneda original y fuente o nota metodológica.
- Todas las URLs de evidencia se abren o quedan marcadas como inaccesibles.
- Ninguna clasificación CRM global procede de evidencia de alcance limitado.
- Build de `site/` satisfactorio y sin errores propios en el código utilizado.
- La URL pública muestra el trimestre y la fecha correctos.
- La búsqueda en Gmail devuelve exactamente el correo enviado para la ejecución.

## Riesgos y mitigaciones

- **Fuentes de pago no accesibles**: usar solo cifras consultadas o señalar referencias secundarias.
- **Periodos fiscales distintos**: documentar el desfase y evitar falsa comparabilidad.
- **FX altera posiciones cercanas**: usar criterio anual homogéneo y bandas cuando corresponda.
- **Anuncios CRM ambiguos**: rebajar confianza o usar “no pública”.
- **Reintentos duplican correo**: buscar por destinatario y asunto exacto antes de enviar.
- **Despliegue privado por defecto**: comprobar acceso público antes de notificar.
