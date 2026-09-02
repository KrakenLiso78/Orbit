# AGENTS.md

## Contexto

Este repositorio sigue Spec-Driven Development con una estructura compatible con GitHub Spec Kit. La feature canónica es `specs/001-revision-trimestral-big-pharma`.

## Orden de lectura obligatorio

Antes de investigar o cambiar el sitio, leer:

1. `.specify/memory/constitution.md`
2. `specs/001-revision-trimestral-big-pharma/spec.md`
3. `specs/001-revision-trimestral-big-pharma/plan.md`
4. `specs/001-revision-trimestral-big-pharma/tasks.md`
5. `data/snapshots/latest.json`
6. `reports/latest.md`
7. `operations/executions/latest.json`

## Límites de los artefactos

- `spec.md`: qué y por qué; comportamiento y criterios de aceptación. No incluir stack ni decisiones técnicas.
- `plan.md`: cómo; arquitectura de artefactos, proceso, validaciones y decisiones técnicas. No duplicar requisitos.
- `tasks.md`: unidades pequeñas, ordenadas, con ruta y validación concreta.
- `research.md`: decisiones metodológicas reutilizables, no noticias trimestrales.
- Los resultados de cada ejecución pertenecen a `reports/`, `data/` y `operations/`.

## Reglas de trabajo

- No sobrescribir históricos fechados.
- No actualizar `latest` hasta completar todos los controles.
- Mantener ranking anual y momentum trimestral separados.
- Distinguir datos reportados, previsiones de terceros y estimaciones propias.
- No atribuir CRM sin evidencia pública explícita y alcance documentado.
- Reutilizar el `project_id` existente en `site/.openai/hosting.json`; no crear otro sitio.
- Verificar escritorio, móvil y ES/EN antes de publicar.
- Buscar el asunto exacto en Enviados antes de mandar correo y registrar después su ID.
- Usar Conventional Commits y mantener cada commit centrado en un único checkpoint.

## Estado inicial

La baseline validada es `2026-Q3`. La URL estable es `https://pharma-shift-2030.guillermo1983.chatgpt.site`.
