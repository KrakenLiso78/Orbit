# Quickstart operativo

## Leer antes de una revisión

1. `.specify/memory/constitution.md`
2. `specs/001-revision-trimestral-big-pharma/spec.md`
3. `specs/001-revision-trimestral-big-pharma/plan.md`
4. `data/snapshots/latest.json`
5. `reports/latest.md`
6. `data/sources/latest.csv`
7. `operations/executions/latest.json`

## Validación local

Desde la raíz del proyecto:

```bash
python3 scripts/validate_snapshot.py data/snapshots/latest.json
cmp data/snapshots/2026-Q3.json data/snapshots/latest.json
cmp data/sources/2026-Q3.csv data/sources/latest.csv
cmp reports/2026-Q3/report.md reports/latest.md
```

Desde `site/`:

```bash
npm ci
npx oxlint app/page.tsx app/layout.tsx
npm run build
```

La validación final requiere además comprobar con navegador:

- escritorio y móvil;
- toggle ES/EN;
- ausencia de overflow general, solapamientos y textos cortados;
- navegación y enlaces de fuentes;
- fecha de corte correcta;
- acceso público sin autenticación.

## Cierre de una revisión

No actualizar `latest` hasta que existan:

- informe y snapshot fechados y validados;
- registro de fuentes fechado;
- build satisfactorio;
- publicación accesible en la URL estable;
- correo único confirmado en Enviados;
- registro operativo con estado `completed`.
