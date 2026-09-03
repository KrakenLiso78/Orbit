'use client';

import { useMemo, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Database,
  ExternalLink,
  Info,
  Minus,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

type Lang = 'es' | 'en';
type Trend = 'growth' | 'stable' | 'deterioration';

type Company = {
  currentRank: number;
  company: string;
  currentSales: number;
  reported: string;
  projectedRank: string;
  projectedMidRank: number;
  projectedSales: string;
  movement: number;
  trend: Trend;
  driverEs: string;
  driverEn: string;
  crm: string;
  crmScopeEs: string;
  crmScopeEn: string;
  crmSource?: string;
};

const companies: Company[] = [
  {
    currentRank: 1, company: 'Eli Lilly', currentSales: 65.18, reported: '$65.18bn', projectedRank: '1', projectedMidRank: 1, projectedSales: '$112–130bn', movement: 0, trend: 'growth',
    driverEs: 'Tirzepatida, orforglipron y retatrutida; capacidad industrial y expansión de indicaciones.',
    driverEn: 'Tirzepatide, orforglipron and retatrutide; manufacturing capacity and indication expansion.',
    crm: 'En transición · Veeva Vault CRM', crmScopeEs: 'Decisión global anunciada el 11-ago-2026.', crmScopeEn: 'Global decision announced 11-Aug-2026.',
    crmSource: 'https://www.veeva.com/kr/resources/veeva-vault-crm-selected-by-eli-lilly-and-company/',
  },
  {
    currentRank: 2, company: 'Pfizer', currentSales: 62.58, reported: '$62.58bn', projectedRank: '9–12', projectedMidRank: 10, projectedSales: '$52–62bn', movement: -8, trend: 'deterioration',
    driverEs: 'Cesta de LOE y normalización COVID; Seagen, oncología y BD deben cubrir el hueco.',
    driverEn: 'LOE basket and COVID normalization; Seagen, oncology and BD must fill the gap.',
    crm: 'En transición · Salesforce', crmScopeEs: 'Early adopter de Life Sciences Cloud; alcance global no explicitado.', crmScopeEn: 'Life Sciences Cloud early adopter; global scope not explicitly stated.',
    crmSource: 'https://www.salesforce.com/news/stories/life-sciences-cloud-for-customer-engagement-availability/',
  },
  {
    currentRank: 3, company: 'Johnson & Johnson', currentSales: 60.4, reported: '$60.40bn', projectedRank: '4–7', projectedMidRank: 5, projectedSales: '$67–78bn', movement: -2, trend: 'growth',
    driverEs: 'Darzalex, Carvykti, Tremfya, Caplyta y Spravato compensan el LOE de Stelara.', driverEn: 'Darzalex, Carvykti, Tremfya, Caplyta and Spravato offset Stelara LOE.',
    crm: 'No pública', crmScopeEs: 'No se encontró una decisión corporativa fiable sobre el CRM comercial.', crmScopeEn: 'No reliable corporate commercial CRM decision was found.',
  },
  {
    currentRank: 4, company: 'AstraZeneca', currentSales: 58.74, reported: '$58.74bn', projectedRank: '2–5', projectedMidRank: 3, projectedSales: '$72–82bn', movement: 1, trend: 'growth',
    driverEs: 'Ambición propia de $80bn en 2030, 20 lanzamientos y liderazgo en oncología/ADCs.', driverEn: 'Own $80bn 2030 ambition, 20 launches and leadership in oncology/ADCs.',
    crm: 'En transición · Salesforce', crmScopeEs: 'Plataforma global unificada anunciada el 4-dic-2025.', crmScopeEn: 'Unified global platform announced 4-Dec-2025.',
    crmSource: 'https://investor.salesforce.com/news/news-details/2025/Salesforces-Agentforce-Life-Sciences-Selected-by-AstraZeneca-as-Its-Unified-Global-Platform-to-Help-Transform-Customer-Engagement/default.aspx',
  },
  {
    currentRank: 5, company: 'Merck / MSD', currentSales: 58.14, reported: '$58.14bn', projectedRank: '7–10', projectedMidRank: 8, projectedSales: '$58–68bn', movement: -3, trend: 'stable',
    driverEs: 'Keytruda/QLEX y Winrevair frente al cliff de Keytruda 2028; Verona, Cidara y Terns amplían la cartera.', driverEn: 'Keytruda/QLEX and Winrevair versus the 2028 Keytruda cliff; Verona, Cidara and Terns broaden the portfolio.',
    crm: 'En transición · Veeva Vault CRM', crmScopeEs: 'Compromiso corporativo anunciado el 21-jul-2025; despliegue global no detallado.', crmScopeEn: 'Corporate commitment announced 21-Jul-2025; global rollout not detailed.',
    crmSource: 'https://www.veeva.com/resources/merck-commits-to-veeva-vault-crm/',
  },
  {
    currentRank: 6, company: 'Roche', currentSales: 57.49, reported: 'CHF47.67bn · $57.49bn', projectedRank: '5–8', projectedMidRank: 6, projectedSales: '$66–74bn', movement: 0, trend: 'growth',
    driverEs: 'Ocrevus, Hemlibra, Vabysmo y Phesgo; divarasib y pipeline compensan biosimilares maduros.', driverEn: 'Ocrevus, Hemlibra, Vabysmo and Phesgo; divarasib and pipeline offset mature biosimilars.',
    crm: 'En transición · Veeva Vault CRM', crmScopeEs: 'Adopción en la organización farmacéutica global anunciada el 24-nov-2025.', crmScopeEn: 'Adoption across the global Pharma organization announced 24-Nov-2025.',
    crmSource: 'https://www.veeva.com/resources/veeva-announces-expanded-partnership-with-roche/',
  },
  {
    currentRank: 7, company: 'AbbVie', currentSales: 56.3, reported: '$56.30bn ajustado', projectedRank: '2–5', projectedMidRank: 4, projectedSales: '$72–82bn', movement: 3, trend: 'growth',
    driverEs: 'Skyrizi y Rinvoq ya superan el declive de Humira; neurociencia y compra de Apogee añaden opcionalidad.', driverEn: 'Skyrizi and Rinvoq already outweigh Humira erosion; neuroscience and Apogee add optionality.',
    crm: 'En transición · Salesforce', crmScopeEs: 'Early adopter de Agentforce Life Sciences; alcance corporativo no publicado.', crmScopeEn: 'Agentforce Life Sciences early adopter; corporate scope not published.',
    crmSource: 'https://www.salesforce.com/news/stories/agentforce-life-sciences-140-organizations/',
  },
  {
    currentRank: 8, company: 'Novartis', currentSales: 54.53, reported: '$54.53bn', projectedRank: '7–10', projectedMidRank: 9, projectedSales: '$55–66bn', movement: -1, trend: 'stable',
    driverEs: 'Kisqali, Kesimpta, Pluvicto y Scemblix frente a una erosión de Entresto más rápida de lo previsto.', driverEn: 'Kisqali, Kesimpta, Pluvicto and Scemblix versus faster-than-expected Entresto erosion.',
    crm: 'En transición · Salesforce', crmScopeEs: 'Decisión global con despliegue a cinco años, anunciada el 17-dic-2025.', crmScopeEn: 'Global decision with five-year rollout, announced 17-Dec-2025.',
    crmSource: 'https://investor.salesforce.com/news/news-details/2025/Salesforces-Agentforce-Life-Sciences-Selected-by-Novartis-to-Drive-More-Personalized-Customer-Engagement-Globally/default.aspx',
  },
  {
    currentRank: 9, company: 'Sanofi', currentSales: 49.3, reported: '€43.63bn · $49.30bn', projectedRank: '5–8', projectedMidRank: 7, projectedSales: '$65–74bn', movement: 2, trend: 'growth',
    driverEs: 'Dupixent (~€25bn en 2030), lanzamientos y vacunas; recientes recortes de pipeline elevan el riesgo.', driverEn: 'Dupixent (~€25bn in 2030), launches and vaccines; recent pipeline cuts raise risk.',
    crm: 'No pública', crmScopeEs: 'No se encontró una decisión corporativa fiable sobre el CRM comercial.', crmScopeEn: 'No reliable corporate commercial CRM decision was found.',
  },
  {
    currentRank: 10, company: 'Bristol Myers Squibb', currentSales: 48.19, reported: '$48.19bn', projectedRank: '10–13', projectedMidRank: 12, projectedSales: '$44–54bn', movement: -2, trend: 'deterioration',
    driverEs: 'Growth Portfolio y bispecífico PD-L1×VEGF frente a LOE de Eliquis, Revlimid y Pomalyst.', driverEn: 'Growth Portfolio and PD-L1×VEGF bispecific versus Eliquis, Revlimid and Pomalyst LOE.',
    crm: 'En transición · Veeva Vault CRM', crmScopeEs: 'Compromiso anunciado el 22-sep-2025; alcance global no detallado.', crmScopeEn: 'Commitment announced 22-Sep-2025; global scope not detailed.',
    crmSource: 'https://ir.veeva.com/news/news-details/2025/Bristol-Myers-Squibb-Commits-to-Veeva-Vault-CRM/default.aspx',
  },
];

const watchlist = [
  { company: 'Novo Nordisk', rank: '11 → 2–4', sales: 'DKK309.1bn · $46.80bn', noteEs: 'Entrada probable. Evaluate estima $84bn en 2030; la desaceleración 2025–26 obliga a ampliar el rango.', noteEn: 'Likely entrant. Evaluate forecasts $84bn in 2030; the 2025–26 slowdown widens the range.', crm: 'Veeva Vault CRM · International Operations, no decisión global demostrada', crmUrl: 'https://ir.veeva.com/news/news-details/2026/Novo-Nordisk-International-Operations-Commits-to-Veeva-Vault-CRM/default.aspx' },
  { company: 'GSK', rank: '12 → 10–13', sales: '£32.67bn · $43.08bn', noteEs: 'Amenaza la zona baja del top 10; el consenso 2030 de la compañía es £36.5bn.', noteEn: 'Threatens the lower end of the top 10; company-collected 2030 consensus is £36.5bn.', crm: 'Veeva Vault CRM · Europa live; migración global en curso', crmUrl: 'https://www.veeva.com/eu/customer-stories/gsk-on-going-live-with-vault-crm/' },
  { company: 'Amgen', rank: '13 → 11–14', sales: '$36.8bn', noteEs: 'MariTide ofrece upside, pero Prolia/Xgeva afrontan biosimilares y la evidencia clínica sigue madurando.', noteEn: 'MariTide offers upside, but Prolia/Xgeva face biosimilars and clinical evidence is still maturing.', crm: 'No pública' },
];

const sources = [
  ['Lilly FY2025 / 2026 guidance', 'https://investor.lilly.com/news-releases/news-release-details/lilly-reports-second-quarter-2026-financial-results-raises-full'],
  ['J&J FY2025 Innovative Medicine', 'https://investor.jnj.com/investor-news/news-details/2026/Johnson--Johnson-reports-Q4-and-Full-Year-2025-results/default.aspx'],
  ['AstraZeneca FY2025 / 2030 ambition', 'https://www.astrazeneca.com/investor-relations/annual-reports/annual-report-2025.html'],
  ['Merck FY2025 Pharmaceutical', 'https://www.merck.com/news/merck-highlights-progress-advancing-broad-diverse-pipeline/'],
  ['Roche FY2025 Pharmaceuticals', 'https://www.roche.com/investors/annualreport25'],
  ['AbbVie FY2025', 'https://investors.abbvie.com/node/20866'],
  ['Novartis FY2025', 'https://www.novartis.com/investors/financial-data/annual-results'],
  ['Sanofi FY2025', 'https://www.sanofi.com/en/media-room/press-releases/2026/2026-01-29-06-30-00-3228191'],
  ['BMS FY2025', 'https://www.bms.com/investors/financial-reporting/key-facts.html'],
  ['Novo Nordisk FY2025', 'https://annualreport.novonordisk.com/2025/strategic-aspirations/financial-performance.html'],
  ['GSK FY2025', 'https://www.gsk.com/en-gb/media/press-releases/gsk-delivers-strong-2025-performance-and-re-affirms-long-term-outlooks/'],
  ['ECB 2025 annual FX', 'https://data.ecb.europa.eu/data/datasets/EXR'],
  ['Evaluate World Preview 2025', 'https://www.evaluate.com/thought-leadership/2025-world-preview-financial-services-edition/'],
  ['Evaluate 2030 company forecast summary', 'https://www.fiercepharma.com/pharma/2030-eli-lilly-will-generate-113b-drug-sales-including-62b-mounjaro-zepbound-evaluate'],
  ['Evaluate World Preview 2026', 'https://www.evaluate.com/thought-leadership/world-preview-2026/'],
  ['GSK analyst consensus 2030', 'https://www.gsk.com/en-gb/investors/analyst-consensus/analyst-consensus/'],
];

const copy = {
  es: {
    eyebrow: 'Revisión trimestral · baseline inicial', title: 'El poder de ventas de Big Pharma se desplaza hacia obesidad e inmunología', deck: 'Ranking homogéneo FY2025 de medicamentos y vacunas, momentum 2026, proyección 2030 por rangos y mapa verificable de decisiones CRM.', asof: 'Datos consultados hasta 1 sep 2026', reported: 'Reportado', forecast: 'Previsión de terceros', estimate: 'Estimación propia', currentLeader: 'Líder actual', fastestRise: 'Mayor ascenso probable', largestFall: 'Mayor caída relativa', publicCrm: 'Top 10 con decisión CRM pública', keyRead: 'Lectura ejecutiva',
    keyReadText: 'Lilly ya no es solo el futuro nº 1: con guidance 2026 de $85–87bn ha abierto una brecha estructural. Novo sigue siendo el candidato de entrada más claro, pero su rango se amplía por presión competitiva y de precios. Pfizer puede mantener ventas relevantes y aun así caer con fuerza en posición relativa; BMS vive la misma divergencia en menor escala.',
    tableTitle: 'Ranking actual y proyección 2030', tableIntro: 'La posición futura es un rango. El número central solo ordena el gráfico y no debe interpretarse como una predicción puntual.', rank: 'Pos.', company: 'Compañía', sales: 'Ventas pharma FY2025', projected: 'Posición 2030', projectedSales: 'Ventas 2030', change: 'Cambio', trend: 'Tendencia', driver: 'Driver principal', crm: 'CRM comercial', movers: 'Movimientos que cambian el mapa', watchlist: 'Aspirantes y zona de corte', crmTitle: 'CRM landscape de Big Pharma',
    crmIntro: 'La ruptura tecnológica Veeva–Salesforce ya ha cristalizado en decisiones explícitas. “No pública” significa ausencia de evidencia suficiente, no ausencia de plataforma.', veeva: 'Veeva Vault CRM', salesforce: 'Salesforce', unknown: 'Sin decisión pública clara', implications: 'Implicación competitiva',
    implicationsText: 'Veeva conserva una posición fuerte en migraciones desde su CRM legado y suma Lilly, Roche, Merck y BMS. Salesforce ha ganado decisiones globales de alto perfil en AstraZeneca y Novartis, y añade Pfizer y AbbVie como early adopters. Las cifras de clientes publicadas por cada proveedor no son comparables ni equivalen a cuota de mercado.',
    changed: 'Qué ha cambiado en esta revisión base', changedText: 'No existe una revisión anterior contra la que medir variaciones. Estos son los hechos materiales más recientes que deberán convertirse en la referencia del próximo trimestre.', methodology: 'Metodología y límites',
    methodologyText: 'Ranking por ventas netas atribuibles a medicamentos y vacunas del último ejercicio completo disponible. Se excluyen MedTech, Diagnostics, Animal Health y Aesthetics. Monedas convertidas a USD con medias anuales 2025 del BCE. Las proyecciones combinan Evaluate 2025 (horizonte 2030), World Preview 2026 (contexto), guidance, objetivos corporativos, resultados H1/Q2 2026 y consenso público; el rango final es estimación propia.', sources: 'Registro de fuentes', footer: 'Análisis informativo; no constituye recomendación de inversión.', legalNotice: 'Copyright © 2026 Orbit contributors · Sin garantía.', sourceCode: 'Código fuente · AGPLv3',
  },
  en: {
    eyebrow: 'Quarterly review · initial baseline', title: 'Big Pharma sales power is shifting toward obesity and immunology', deck: 'Homogeneous FY2025 medicines and vaccines ranking, 2026 momentum, range-based 2030 projection, and a verifiable map of CRM decisions.', asof: 'Research current through 1 Sep 2026', reported: 'Reported', forecast: 'Third-party forecast', estimate: 'Own estimate', currentLeader: 'Current leader', fastestRise: 'Largest likely rise', largestFall: 'Largest relative fall', publicCrm: 'Top 10 with public CRM decision', keyRead: 'Executive readout',
    keyReadText: 'Lilly is no longer merely the future leader: 2026 guidance of $85–87bn has opened a structural gap. Novo remains the clearest new entrant, but its range has widened on competitive and pricing pressure. Pfizer can keep substantial absolute sales and still fall sharply in relative rank; BMS faces the same divergence on a smaller scale.',
    tableTitle: 'Current ranking and 2030 projection', tableIntro: 'Future rank is a range. The central number only orders the visual and should not be read as a point forecast.', rank: 'Rank', company: 'Company', sales: 'FY2025 pharma sales', projected: '2030 rank', projectedSales: '2030 sales', change: 'Change', trend: 'Trend', driver: 'Main driver', crm: 'Commercial CRM', movers: 'Movements reshaping the map', watchlist: 'Challengers and cut-off zone', crmTitle: 'Big Pharma CRM landscape',
    crmIntro: 'The Veeva–Salesforce technology split has now crystallized into explicit decisions. “Not public” means insufficient evidence, not no platform.', veeva: 'Veeva Vault CRM', salesforce: 'Salesforce', unknown: 'No clear public decision', implications: 'Competitive implication',
    implicationsText: 'Veeva retains a strong position in migrations from its legacy CRM and has added Lilly, Roche, Merck and BMS. Salesforce has secured high-profile global decisions at AstraZeneca and Novartis, with Pfizer and AbbVie as early adopters. Vendor-published customer counts are not comparable and do not equal market share.',
    changed: 'What changed in this baseline review', changedText: 'There is no previous review against which to measure changes. These are the latest material facts that should become next quarter’s reference point.', methodology: 'Methodology and limits',
    methodologyText: 'Ranking uses net sales attributable to medicines and vaccines in the latest complete fiscal year. MedTech, Diagnostics, Animal Health and Aesthetics are excluded. Currencies are translated to USD using ECB 2025 annual averages. Projections combine Evaluate 2025 (2030 horizon), World Preview 2026 context, guidance, company targets, H1/Q2 2026 results and public consensus; the final range is our own estimate.', sources: 'Source register', footer: 'Informational analysis; not investment advice.', legalNotice: 'Copyright © 2026 Orbit contributors · No warranty.', sourceCode: 'Source code · AGPLv3',
  },
};

function TrendBadge({ trend, lang }: { trend: Trend; lang: Lang }) {
  const labels = { growth: lang === 'es' ? 'Crecimiento' : 'Growth', stable: lang === 'es' ? 'Estable' : 'Stable', deterioration: lang === 'es' ? 'Deterioro' : 'Deterioration' };
  return <span className={`trend trend-${trend}`}>{labels[trend]}</span>;
}

function Movement({ value }: { value: number }) {
  if (value > 0) return <span className="movement up"><ArrowUpRight />+{value}</span>;
  if (value < 0) return <span className="movement down"><ArrowDownRight />{value}</span>;
  return <span className="movement flat"><Minus />0</span>;
}

function RankFlow({ lang }: { lang: Lang }) {
  const points = useMemo(() => [...companies.map((c) => ({ name: c.company, left: c.currentRank, right: c.projectedMidRank })), { name: 'Novo Nordisk', left: 11, right: 2 }], []);
  const y = (rank: number) => 32 + (rank - 1) * 35;
  return (
    <figure className="flow-wrap" aria-label={lang === 'es' ? 'Flujo de posiciones de 2025 a 2030' : 'Rank flow from 2025 to 2030'}>
      <div className="flow-head"><span>FY2025</span><span>2030</span></div>
      <svg viewBox="0 0 780 430" className="rank-flow">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((rank) => <g key={rank}><text x="16" y={y(rank) + 4} className="rank-num">{rank}</text><text x="750" y={y(rank) + 4} className="rank-num">{rank}</text><line x1="42" y1={y(rank)} x2="738" y2={y(rank)} className="rank-grid" /></g>)}
        {points.map((p) => { const rising = p.right < p.left; const falling = p.right > p.left; const klass = rising ? 'rise' : falling ? 'fall' : 'same'; return <g key={p.name}><title>{`${p.name}: ${p.left} → ${p.right}`}</title><path d={`M 160 ${y(p.left)} C 320 ${y(p.left)}, 465 ${y(p.right)}, 620 ${y(p.right)}`} className={`flow-line ${klass}`} /><circle cx="160" cy={y(p.left)} r="4" className={`flow-dot ${klass}`} /><circle cx="620" cy={y(p.right)} r="4" className={`flow-dot ${klass}`} /><text x="150" y={y(p.left) - 7} textAnchor="end" className="flow-label">{p.name}</text><text x="630" y={y(p.right) + 4} className="flow-label">{p.name}</text></g>; })}
      </svg>
      <p className="chart-note"><Info />{lang === 'es' ? 'Posición 2030 central e ilustrativa; consulte los rangos de la tabla.' : 'Illustrative 2030 midpoint rank; see the table for ranges.'}</p>
    </figure>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('es');
  const t = copy[lang];
  const veeva = companies.filter((c) => c.crm.includes('Veeva'));
  const sf = companies.filter((c) => c.crm.includes('Salesforce'));
  const unknown = companies.filter((c) => c.crm === 'No pública');

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pharma Shift home"><span>PS</span> Pharma Shift</a>
        <nav aria-label="Primary"><a href="#ranking">Ranking</a><a href="#crm">CRM</a><a href="#method">{lang === 'es' ? 'Método' : 'Method'}</a></nav>
        <div className="lang-toggle" aria-label="Language"><button onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button><button onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button></div>
      </header>

      <section className="hero" id="top"><div className="hero-grid"><div><p className="eyebrow"><Sparkles />{t.eyebrow}</p><h1>{t.title}</h1><p className="deck">{t.deck}</p><div className="meta-row"><span><CalendarDays />{t.asof}</span><span><ShieldCheck />FY2025 → 2030</span></div></div><aside className="hero-note"><p>{lang === 'es' ? 'Señal dominante' : 'Dominant signal'}</p><strong>+9</strong><span>{lang === 'es' ? 'posiciones potenciales de Novo hasta el nº 2 central' : 'potential positions for Novo to midpoint rank #2'}</span><div className="legend"><i className="dot reported" />{t.reported}<i className="dot forecast" />{t.forecast}<i className="dot estimate" />{t.estimate}</div></aside></div></section>

      <section className="stat-grid shell" aria-label="Key indicators">
        <article className="stat-card accent"><span>{t.currentLeader}</span><strong>Eli Lilly</strong><small>$65.18bn FY2025 · $85–87bn guidance 2026</small></article>
        <article className="stat-card"><span>{t.fastestRise}</span><strong>Novo Nordisk</strong><small>#11 → #2–4 · obesity / GLP-1</small></article>
        <article className="stat-card"><span>{t.largestFall}</span><strong>Pfizer</strong><small>#2 → #9–12 · LOE + COVID normalization</small></article>
        <article className="stat-card"><span>{t.publicCrm}</span><strong>8 / 10</strong><small>4 Veeva · 4 Salesforce · 2 no public</small></article>
      </section>

      <section className="shell executive"><div className="section-kicker"><TrendingUp />{t.keyRead}</div><p>{t.keyReadText}</p></section>

      <section className="shell section" id="ranking">
        <div className="section-head"><div><p className="section-kicker"><Database />FY2025 / 2030</p><h2>{t.tableTitle}</h2><p>{t.tableIntro}</p></div><span className="method-pill">USD bn · annual average FX</span></div>
        <RankFlow lang={lang} />
        <div className="table-wrap"><table><thead><tr><th>{t.rank}</th><th>{t.company}</th><th>{t.sales}</th><th>{t.projected}</th><th>{t.projectedSales}</th><th>{t.change}</th><th>{t.trend}</th><th>{t.driver}</th><th>{t.crm}</th></tr></thead><tbody>
          {companies.map((c) => <tr key={c.company}><td><span className="rank-chip">{c.currentRank}</span></td><td><strong>{c.company}</strong></td><td className="numeric">{c.reported}</td><td className="numeric"><strong>{c.projectedRank}</strong></td><td className="numeric estimate-cell">{c.projectedSales}</td><td><Movement value={c.movement} /></td><td><TrendBadge trend={c.trend} lang={lang} /></td><td className="driver-cell">{lang === 'es' ? c.driverEs : c.driverEn}</td><td className="crm-cell"><strong>{c.crm}</strong><span>{lang === 'es' ? c.crmScopeEs : c.crmScopeEn}</span>{c.crmSource && <a href={c.crmSource} target="_blank" rel="noreferrer">{lang === 'es' ? 'Evidencia' : 'Evidence'} <ExternalLink /></a>}</td></tr>)}
        </tbody></table></div>
        <p className="table-footnote">{lang === 'es' ? 'AbbVie: ventas ajustadas excluyen Aesthetics ($4.86bn). Roche, Sanofi, Novo y GSK se convierten con medias BCE 2025. AstraZeneca incluye alliance revenue; Takeda (watchlist ampliada en snapshot) cierra ejercicio en marzo de 2026.' : 'AbbVie: adjusted sales exclude Aesthetics ($4.86bn). Roche, Sanofi, Novo and GSK use ECB 2025 annual-average FX. AstraZeneca includes alliance revenue; Takeda (extended watchlist in snapshot) closes its fiscal year in March 2026.'}</p>
      </section>

      <section className="shell section"><div className="section-head"><div><p className="section-kicker"><ArrowUpRight />2030</p><h2>{t.movers}</h2></div></div><div className="mover-grid">
        <article className="mover-card rise-card"><span>01</span><h3>Lilly + Novo</h3><p>{lang === 'es' ? 'Obesidad deja de ser una franquicia y pasa a ser una plataforma multisistémica. Lilly tiene hoy la ventaja de producto y capacidad; Novo conserva escala, pero con mayor dispersión de escenarios.' : 'Obesity is moving from a franchise to a multisystem platform. Lilly currently has product and capacity advantage; Novo retains scale but with a wider scenario spread.'}</p></article>
        <article className="mover-card"><span>02</span><h3>AbbVie + Sanofi</h3><p>{lang === 'es' ? 'Skyrizi/Rinvoq y Dupixent convierten inmunología en el segundo motor de reordenación. El crecimiento es fuerte, pero la concentración en pocas franquicias aumenta el riesgo de ejecución.' : 'Skyrizi/Rinvoq and Dupixent make immunology the second ranking engine. Growth is strong, but concentration in a few franchises raises execution risk.'}</p></article>
        <article className="mover-card fall-card"><span>03</span><h3>Pfizer + BMS + Merck</h3><p>{lang === 'es' ? 'La pérdida de exclusividad domina la posición relativa. La subida de guidance 2026 de BMS mejora el corto plazo, pero no elimina el cliff; Merck depende de que QLEX y lanzamientos compensen Keytruda.' : 'LOE dominates relative rank. BMS’s 2026 guidance raise improves the near term but not the cliff; Merck depends on QLEX and launches offsetting Keytruda.'}</p></article>
        <article className="mover-card"><span>04</span><h3>AstraZeneca</h3><p>{lang === 'es' ? 'Es la mayor divergencia entre consenso externo y objetivo corporativo: Evaluate veía $64.4bn en 2030, mientras la compañía mantiene una ambición de $80bn. El pipeline decidirá qué ancla resulta más fiable.' : 'This is the largest gap between external consensus and a company target: Evaluate saw $64.4bn in 2030 while the company maintains an $80bn ambition. Pipeline delivery will determine the better anchor.'}</p></article>
      </div></section>

      <section className="shell section"><div className="section-head"><div><p className="section-kicker"><ChevronDown />Top 10 cut-off</p><h2>{t.watchlist}</h2></div></div><div className="watch-grid">
        {watchlist.map((w) => <article className="watch-card" key={w.company}><div><h3>{w.company}</h3><strong>{w.rank}</strong></div><p className="watch-sales">{w.sales}</p><p>{lang === 'es' ? w.noteEs : w.noteEn}</p><span>{w.crm}{w.crmUrl && <a href={w.crmUrl} target="_blank" rel="noreferrer"><ExternalLink /></a>}</span></article>)}
      </div></section>

      <section className="crm-section" id="crm"><div className="shell section"><div className="section-head light"><div><p className="section-kicker"><ShieldCheck />Commercial technology</p><h2>{t.crmTitle}</h2><p>{t.crmIntro}</p></div></div><div className="crm-grid">
        <article><div className="vendor-head"><span className="vendor-dot veeva" /><h3>{t.veeva}</h3><strong>{veeva.length}</strong></div>{veeva.map(c => <p key={c.company}><b>{c.company}</b><span>{lang === 'es' ? c.crmScopeEs : c.crmScopeEn}</span></p>)}</article>
        <article><div className="vendor-head"><span className="vendor-dot sf" /><h3>{t.salesforce}</h3><strong>{sf.length}</strong></div>{sf.map(c => <p key={c.company}><b>{c.company}</b><span>{lang === 'es' ? c.crmScopeEs : c.crmScopeEn}</span></p>)}</article>
        <article><div className="vendor-head"><span className="vendor-dot unknown" /><h3>{t.unknown}</h3><strong>{unknown.length}</strong></div>{unknown.map(c => <p key={c.company}><b>{c.company}</b><span>{lang === 'es' ? c.crmScopeEs : c.crmScopeEn}</span></p>)}</article>
      </div><div className="crm-implication"><strong>{t.implications}</strong><p>{t.implicationsText}</p></div></div></section>

      <section className="shell section changed"><div className="section-head"><div><p className="section-kicker"><Sparkles />Baseline</p><h2>{t.changed}</h2><p>{t.changedText}</p></div></div><ol>
        <li><strong>Lilly</strong><span>{lang === 'es' ? 'Elevó guidance 2026 a $85–87bn; retatrutida completó el paquete Phase 3 de obesidad.' : 'Raised 2026 guidance to $85–87bn; retatrutide completed the Phase 3 obesity package.'}</span></li>
        <li><strong>Sanofi</strong><span>{lang === 'es' ? 'Elevó guidance a ~10% CER, pero descartó la presentación global de amlitelimab y terminó itepikimab/balinatunfib.' : 'Raised guidance to ~10% CER but dropped global filing for amlitelimab and ended itepikimab/balinatunfib.'}</span></li>
        <li><strong>Novartis</strong><span>{lang === 'es' ? 'Entresto cayó 51% CER en Q2 por genéricos; los priority brands devolvieron crecimiento trimestral.' : 'Entresto fell 51% CER in Q2 on generics; priority brands restored quarterly growth.'}</span></li>
        <li><strong>BMS</strong><span>{lang === 'es' ? 'Elevó guidance 2026 desde $46–47.5bn a $49–50bn; Growth Portfolio +15%.' : 'Raised 2026 guidance from $46–47.5bn to $49–50bn; Growth Portfolio +15%.'}</span></li>
        <li><strong>CRM</strong><span>{lang === 'es' ? 'Lilly eligió Vault CRM globalmente en agosto de 2026; AbbVie aparece como early adopter de Salesforce; Roche y BMS hicieron públicos sus compromisos con Veeva.' : 'Lilly selected Vault CRM globally in Aug 2026; AbbVie appeared as a Salesforce early adopter; Roche and BMS publicly committed to Veeva.'}</span></li>
      </ol></section>

      <section className="method-section" id="method"><div className="shell section method-grid"><div><p className="section-kicker"><Info />Audit trail</p><h2>{t.methodology}</h2><p>{t.methodologyText}</p><details><summary>{lang === 'es' ? 'Diferencias metodológicas clave' : 'Key methodological differences'}</summary><ul><li>{lang === 'es' ? 'Evaluate usa prescription drug sales por producto; los reportados corporativos pueden incluir royalties, alliance revenue y otras partidas pharma.' : 'Evaluate uses product-level prescription drug sales; company reporting may include royalties, alliance revenue and other pharma-related lines.'}</li><li>{lang === 'es' ? 'El ajuste de AbbVie resta Aesthetics completo; otras clasificaciones que lo incluyen situarán a AbbVie más arriba.' : 'AbbVie adjustment removes all Aesthetics; rankings that include it will place AbbVie higher.'}</li><li>{lang === 'es' ? 'Rangos 2030 no incorporan M&A futuro no anunciado ni efectos de divisa futura.' : '2030 ranges exclude unannounced future M&A and future FX effects.'}</li></ul></details></div><div className="source-box"><h3>{t.sources}</h3>{sources.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={label}>{label}<ExternalLink /></a>)}</div></div></section>

      <footer><div className="shell"><span>Pharma Shift · 2026 Q3 baseline</span><span>{t.footer}</span><span>{t.legalNotice}</span><a href="https://github.com/KrakenLiso78/Orbit" target="_blank" rel="noreferrer">{t.sourceCode}</a></div></footer>
    </main>
  );
}
