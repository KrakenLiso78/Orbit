# PharmaShift

Proyecto recurrente para analizar trimestralmente el ranking mundial de Big Pharma por ventas comparables de medicamentos y vacunas, su proyección a cinco años y el panorama de CRM comercial.

**Artefacto publicado**: [pharma-shift-2030.guillermo1983.chatgpt.site](https://pharma-shift-2030.guillermo1983.chatgpt.site)
**Última revisión validada**: `2026-Q3` · baseline · corte 1 de septiembre de 2026

## Estructura SDD

| Ruta | Responsabilidad |
|---|---|
| `.specify/memory/constitution.md` | Principios no negociables y gobernanza |
| `spec.md` | Copia de acceso rápido de la especificación funcional |
| `specs/001-revision-trimestral-big-pharma/spec.md` | Qué debe lograr el producto y cómo se acepta |
| `specs/001-revision-trimestral-big-pharma/plan.md` | Cómo se investiga, valida, publica y opera |
| `specs/001-revision-trimestral-big-pharma/tasks.md` | Tareas pequeñas, ordenadas y verificables |
| `specs/001-revision-trimestral-big-pharma/research.md` | Decisiones metodológicas duraderas |
| `specs/001-revision-trimestral-big-pharma/data-model.md` | Conceptos de datos compartidos |
| `specs/001-revision-trimestral-big-pharma/contracts/` | Contratos estructurados de los snapshots |
| `reports/` | Informes históricos y referencia `latest` |
| `data/snapshots/` | Datos comparables para detectar cambios |
| `data/sources/` | Registro de fuentes por revisión |
| `operations/executions/` | Evidencia de despliegue, acceso y correo |
| `inputs/` | Prompt operativo original y futuras entradas controladas |
| `site/` | Código del artefacto visual y vínculo con Sites |

## Regla de actualización

Una revisión no se considera completada hasta que investigación, validación, build, publicación, acceso público y correo estén confirmados. Los históricos fechados no se sobrescriben; las referencias `latest` se actualizan únicamente al final.

Para ejecutar o validar una revisión, empieza por [quickstart.md](specs/001-revision-trimestral-big-pharma/quickstart.md).
