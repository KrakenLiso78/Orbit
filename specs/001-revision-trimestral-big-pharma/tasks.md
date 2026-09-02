# Tareas ejecutables

Formato: cada tarea debe poder completarse y comprobarse en una sesión. Las tareas marcadas `[P]` pueden ejecutarse en paralelo cuando sus dependencias estén resueltas.

## Fase 1 — Estructura inicial

- [x] T001 Crear la estructura SDD y de históricos del repositorio; validar con `find . -maxdepth 3 -type f`.
- [x] T002 Crear `.specify/memory/constitution.md`; comprobar que define comparabilidad, evidencia, incertidumbre, CRM, histórico y cierre.
- [x] T003 Crear la spec canónica y la copia raíz; comprobar que son idénticas.
- [x] T004 Crear `plan.md`, `research.md`, `data-model.md`, `quickstart.md` y el contrato del snapshot.
- [x] T005 Migrar el código del sitio conservando `site/.openai/hosting.json` y el `project_id` existente.
- [x] T006 Migrar el informe, snapshot, fuentes y ejecución baseline `2026-Q3`.
- [x] T007 Crear las referencias `latest` desde la baseline validada.

## Fase 2 — Validación de la baseline

- [x] T008 Validar `data/snapshots/2026-Q3.json` contra `contracts/snapshot.schema.json`.
- [x] T009 [P] Comprobar que `data/snapshots/latest.json` coincide con la baseline fechada.
- [x] T010 [P] Comprobar que `data/sources/latest.csv` coincide con el registro fechado.
- [x] T011 [P] Comprobar que `reports/latest.md` coincide con el informe fechado.
- [x] T012 Instalar dependencias de `site/` con `npm ci`.
- [x] T013 Ejecutar el linter focalizado sobre `site/app/` y corregir avisos propios.
- [x] T014 Construir `site/` con `npm run build`.
- [x] T015 Confirmar que el código visual coincide con la versión ya validada en escritorio/móvil y que la URL pública sigue activa.

## Fase 3 — Preparar la siguiente revisión trimestral

- [ ] T016 Leer `operations/executions/latest.json` y confirmar la última ejecución completada.
- [ ] T017 Buscar en Gmail el asunto exacto del nuevo trimestre para evitar duplicados.
- [ ] T018 Crear la carpeta `reports/<AAAA-QN>/` y los nuevos ficheros fechados sin modificar `latest`.
- [ ] T019 [P] Actualizar ventas FY completas para un universo mínimo de 15 compañías.
- [ ] T020 [P] Actualizar el monitor de momentum YTD/LTM y guidance.
- [ ] T021 [P] Actualizar previsiones a cinco años, rangos, escenarios y confianza.
- [ ] T022 [P] Actualizar drivers competitivos, pipeline, LOE, M&A y áreas terapéuticas.
- [ ] T023 [P] Actualizar el anexo CRM con evidencia explícita, alcance y confianza.
- [ ] T024 Comparar con `data/snapshots/latest.json` y filtrar únicamente cambios materiales.
- [ ] T025 Generar y revisar el informe del trimestre.
- [ ] T026 Generar el snapshot y validar ranking, duplicados, tipos y fuentes.
- [ ] T027 Generar el registro de fuentes con fecha de publicación y consulta.

## Fase 4 — Actualizar y publicar el artefacto

- [ ] T028 Actualizar datos, fecha de corte y textos ES/EN en `site/`.
- [ ] T029 Implementar o revisar filtros por compañía, tendencia, área terapéutica y CRM.
- [ ] T030 Ejecutar lint focalizado y build.
- [ ] T031 Validar visualmente escritorio y móvil y comprobar enlaces.
- [ ] T032 Publicar una nueva versión en el proyecto de Sites existente.
- [ ] T033 Verificar que la URL estable es pública y muestra la nueva fecha de corte.

## Fase 5 — Notificación y cierre

- [ ] T034 Volver a comprobar que no existe un correo enviado para el mismo trimestre.
- [ ] T035 Enviar un único correo con URL, fecha de corte, tres novedades y tipo de revisión.
- [ ] T036 Confirmar el correo en Enviados y capturar su identificador.
- [ ] T037 Guardar `operations/executions/<AAAA-QN>.json` con resultados de controles y publicación.
- [ ] T038 Actualizar `latest` solo si investigación, build, despliegue, acceso y correo están confirmados.
- [ ] T039 Ejecutar la comprobación final de integridad indicada en `quickstart.md`.
