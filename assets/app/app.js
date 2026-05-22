// ═══════════════════════════════════════════════════════════════
//  RRHH — app.js
//  Lógica de alertas:
//    • 15 días antes de cumplir 3 meses → aviso anticipado (azul)
//    • Al cumplir 3 meses              → conversión requerida (morado)
//    • 15 días antes de vencer prórroga → alerta prórroga (amarillo)
//    • Prórroga vencida                → alerta urgente (rojo)
//    • Contrato vencido / próximo      → alertas estándar
// ═══════════════════════════════════════════════════════════════

// ── Configuración de centros de costo ────────────────────────
const CC_ICONS = {
  "Finanzas":    "ti-coin",
  "Tecnología":  "ti-device-laptop",
  "Operaciones": "ti-settings",
  "Ventas":      "ti-chart-line",
  "Gerencia":    "ti-briefcase",
  "Obra/Faena":  "ti-helmet",
};

const CC_BG = {
  "Finanzas":    "#DBEAFE",
  "Tecnología":  "#E0F2FE",
  "Operaciones": "#DCFCE7",
  "Ventas":      "#FEF9C3",
  "Gerencia":    "#F3E8FF",
  "Obra/Faena":  "#FEF3C7",
};

const CC_COLOR = {
  "Finanzas":    "#1D4ED8",
  "Tecnología":  "#0369A1",
  "Operaciones": "#166534",
  "Ventas":      "#854D0E",
  "Gerencia":    "#6B21A8",
  "Obra/Faena":  "#92400E",
};

const KNOWN_CCS = ['Finanzas','Tecnología','Operaciones','Ventas','Gerencia','Obra/Faena'];

// ── Datos iniciales ───────────────────────────────────────────
//    estado: null | 'prorrogado' | 'convertido_indefinido'
let workers = JSON.parse(localStorage.getItem('rrhh_v3') || 'null') || [
  { id:1, nombre:"Ana García Muñoz",       rut:"12.345.678-9",  tipo:"plazo_fijo", inicio:"2024-01-10", fin:"2025-06-10", sueldo:980000,  cc:"Finanzas",    horario:"normal", cargo:"Analista contable",        estado:null },
  { id:2, nombre:"Carlos Rojas Soto",      rut:"13.456.789-K",  tipo:"indefinido", inicio:"2022-03-01", fin:null,         sueldo:1250000, cc:"Tecnología",  horario:"art22",  cargo:"Desarrollador senior",     estado:null },
  { id:3, nombre:"María López Fuentes",    rut:"14.567.890-2",  tipo:"plazo_fijo", inicio:"2025-04-20", fin:"2025-07-15", sueldo:750000,  cc:"Operaciones", horario:"normal", cargo:"Asistente administrativa", estado:null },
  { id:4, nombre:"Pedro Vega Castillo",    rut:"15.678.901-3",  tipo:"plazo_fijo", inicio:"2024-06-01", fin:"2026-08-30", sueldo:900000,  cc:"Ventas",      horario:"normal", cargo:"Ejecutivo de ventas",      estado:null },
  { id:5, nombre:"Lucía Morales Díaz",     rut:"16.789.012-4",  tipo:"indefinido", inicio:"2020-05-20", fin:null,         sueldo:1800000, cc:"Gerencia",    horario:"art22",  cargo:"Jefa de proyectos",        estado:null },
  { id:6, nombre:"Roberto Fuentes Araya",  rut:"17.890.123-5",  tipo:"plazo_fijo", inicio:"2025-03-01", fin:"2025-08-31", sueldo:820000,  cc:"Obra/Faena",  horario:"normal", cargo:"Maestro de obra",          estado:null },
  { id:7, nombre:"Javiera Contreras Pino", rut:"18.901.234-6",  tipo:"plazo_fijo", inicio:"2025-02-15", fin:"2025-05-25", sueldo:780000,  cc:"Obra/Faena",  horario:"normal", cargo:"Jornalera",                estado:null },
  { id:8, nombre:"Sebastián Muñoz Vera",   rut:"19.012.345-7",  tipo:"plazo_fijo", inicio:"2025-02-25", fin:"2025-06-20", sueldo:860000,  cc:"Operaciones", horario:"normal", cargo:"Operador de planta",       estado:null },
];

let nextId     = Math.max(...workers.map(w => w.id), 0) + 1;
let editingId  = null;
let currentTab = 'trabajadores';

// ── Persistencia ──────────────────────────────────────────────
function save() {
  localStorage.setItem('rrhh_v3', JSON.stringify(workers));
}

// ── Utilidades de fecha ───────────────────────────────────────
function daysLeft(fin) {
  return Math.ceil((new Date(fin + 'T00:00:00') - new Date()) / 86400000);
}

function daysDiff(desde, hasta) {
  return Math.ceil((new Date(hasta + 'T00:00:00') - new Date(desde + 'T00:00:00')) / 86400000);
}

function addMonths(dateStr, n) {
  const d = new Date(dateStr + 'T00:00:00');
  d.setMonth(d.getMonth() + n);
  return d.toISOString().slice(0, 10);
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function contractAgeDays(inicio) {
  return Math.floor((new Date() - new Date(inicio + 'T00:00:00')) / 86400000);
}

function fmt(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function fmtSueldo(s) {
  return '$' + Number(s).toLocaleString('es-CL');
}

// ── Helpers de CC ─────────────────────────────────────────────
function ccIcon(cc)  { return CC_ICONS[cc]  || 'ti-building'; }
function ccBg(cc)    { return CC_BG[cc]     || '#F1F5F9'; }
function ccColor(cc) { return CC_COLOR[cc]  || '#475569'; }

// ═══════════════════════════════════════════════════════════════
//  LÓGICA DE ALERTAS
//
//  Retorna un array de alertas para un trabajador.
//  Cada alerta: { tipo, level, msg, showActions }
//
//  Tipos y niveles:
//    indefinido_proximo  → blue   (faltan ≤15 días para 3 meses)
//    indefinido_cumplido → purple (ya cumplió 3 meses)
//    prorroga_vence      → warn   (prórroga vence en ≤15 días)
//    prorroga_vencida    → danger (prórroga ya venció)
//    vence_pronto        → warn   (contrato vence en ≤15 días)
//    vencido             → danger (contrato ya venció)
// ═══════════════════════════════════════════════════════════════
function getAlerts(w) {
  const alerts  = [];
  const estado  = w.estado || null;

  // Solo aplica a contratos a plazo fijo no convertidos a indefinido
  if (w.tipo !== 'plazo_fijo' || estado === 'convertido_indefinido') {
    return alerts;
  }

  const ageDays       = contractAgeDays(w.inicio);
  const threeMonthDate = addMonths(w.inicio, 3);
  const daysTo3Months  = daysDiff(todayStr(), threeMonthDate);

  // ── Alertas de 3 meses (solo si no está prorrogado ni convertido) ──
  if (estado !== 'prorrogado') {
    if (ageDays >= 90) {
      // Ya cumplió 3 meses → conversión requerida
      alerts.push({
        tipo: 'indefinido_cumplido',
        level: 'purple',
        msg: `Cumplió 3 meses el ${fmt(threeMonthDate)} — debe convertirse a indefinido o prorrogarse 1 mes`,
        showActions: true,
      });
    } else if (daysTo3Months <= 15 && daysTo3Months > 0) {
      // Faltan ≤15 días para cumplir 3 meses
      alerts.push({
        tipo: 'indefinido_proximo',
        level: 'blue',
        msg: `Cumple 3 meses el ${fmt(threeMonthDate)} — faltan ${daysTo3Months} día${daysTo3Months !== 1 ? 's' : ''}`,
        showActions: true,
      });
    }
  }

  // ── Alertas de prórroga ──
  if (estado === 'prorrogado' && w.fin) {
    const dl = daysLeft(w.fin);
    if (dl < 0) {
      alerts.push({
        tipo: 'prorroga_vencida',
        level: 'danger',
        msg: `Prórroga vencida hace ${Math.abs(dl)} días (${fmt(w.fin)}) — conversión a indefinido urgente`,
        showActions: true,
      });
    } else if (dl <= 15) {
      alerts.push({
        tipo: 'prorroga_vence',
        level: 'warn',
        msg: `Prórroga vence en ${dl} día${dl !== 1 ? 's' : ''} (${fmt(w.fin)}) — decidir conversión a indefinido`,
        showActions: true,
      });
    }
  }

  // ── Alertas de vencimiento de contrato original ──
  // (solo si no está prorrogado, para no mostrar doble alerta)
  if (estado !== 'prorrogado' && w.fin) {
    const dl = daysLeft(w.fin);
    if (dl < 0) {
      alerts.push({
        tipo: 'vencido',
        level: 'danger',
        msg: `Contrato vencido hace ${Math.abs(dl)} días (${fmt(w.fin)})`,
        showActions: false,
      });
    } else if (dl <= 15) {
      alerts.push({
        tipo: 'vence_pronto',
        level: 'warn',
        msg: `Contrato vence en ${dl} día${dl !== 1 ? 's' : ''} — ${fmt(w.fin)}`,
        showActions: false,
      });
    }
  }

  return alerts;
}

function hasAlert(w) {
  return getAlerts(w).length > 0;
}

// ── Badge de estado del trabajador ────────────────────────────
function getEstadoBadge(w) {
  const e = w.estado || null;
  if (e === 'prorrogado') {
    return '<span class="badge badge-prorrog"><i class="ti ti-clock-plus" style="font-size:10px"></i> Prorrogado</span>';
  }
  if (e === 'convertido_indefinido') {
    return '<span class="badge badge-converted"><i class="ti ti-infinity" style="font-size:10px"></i> Convertido a indefinido</span>';
  }
  if (w.tipo === 'indefinido') {
    return '<span class="badge badge-indef">Indefinido</span>';
  }
  return '<span class="badge badge-fijo">Plazo fijo</span>';
}

// ── Marcar estado ─────────────────────────────────────────────
//    'prorrogado'          → extiende fecha fin en 1 mes
//    'convertido_indefinido' → marca como convertido
function marcarEstado(id, estado) {
  const idx = workers.findIndex(x => x.id === id);
  if (idx < 0) return;

  workers[idx].estado = estado;

  if (estado === 'prorrogado') {
    // Extiende la fecha de fin en 1 mes desde la fecha de fin actual
    const finActual = workers[idx].fin || workers[idx].inicio;
    workers[idx].fin = addMonths(finActual, 1);
    alert(
      `Prórroga registrada para ${workers[idx].nombre}.\n` +
      `Nueva fecha de fin: ${fmt(workers[idx].fin)}\n\n` +
      `El sistema avisará cuando queden 15 días para que venza la prórroga.`
    );
  }

  if (estado === 'convertido_indefinido') {
    workers[idx].tipo = 'indefinido';
    workers[idx].fin  = null;
    alert(
      `${workers[idx].nombre} ha sido convertido a contrato indefinido.\n` +
      `Ya no aparecerá en las alertas de vencimiento.`
    );
  }

  save();
  render();
}

// ═══════════════════════════════════════════════════════════════
//  FILTROS
// ═══════════════════════════════════════════════════════════════
function getFiltered() {
  const q      = (document.getElementById('buscar')        || {}).value || '';
  const cc     = (document.getElementById('filtro-cc')     || {}).value || '';
  const tipo   = (document.getElementById('filtro-tipo')   || {}).value || '';
  const alerta = (document.getElementById('filtro-alerta') || {}).value || '';

  return workers.filter(w => {
    if (q) {
      const s = q.toLowerCase();
      if (!w.nombre.toLowerCase().includes(s) && !w.rut.includes(s)) return false;
    }
    if (cc   && w.cc   !== cc)   return false;
    if (tipo && w.tipo !== tipo) return false;
    if (alerta === 'alerta' && !hasAlert(w)) return false;
    if (alerta === 'ok'     &&  hasAlert(w)) return false;
    return true;
  });
}

function populateCCFilter() {
  const sel = document.getElementById('filtro-cc');
  if (!sel) return;
  const current = sel.value;
  const ccs = [...new Set(workers.map(w => w.cc))].sort();
  sel.innerHTML = '<option value="">Todos los centros de costo</option>'
    + ccs.map(c => `<option value="${c}">${c}</option>`).join('');
  if (current) sel.value = current;
}

// ═══════════════════════════════════════════════════════════════
//  TABS
// ═══════════════════════════════════════════════════════════════
function setTab(tab) {
  currentTab = tab;
  const names = ['trabajadores', 'alertas', 'resumen'];
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', names[i] === tab);
  });
  render();
}

function render() {
  populateCCFilter();
  const filtered = getFiltered();
  renderSidebar(filtered);
  if (currentTab === 'trabajadores') renderTrabajadores(filtered);
  else if (currentTab === 'alertas') renderAlertas();
  else renderResumen();
}

// ═══════════════════════════════════════════════════════════════
//  SIDEBAR
// ═══════════════════════════════════════════════════════════════
function renderSidebar(filtered) {
  const sb = document.getElementById('sb-list');
  const byCC = {};
  filtered.forEach(w => { (byCC[w.cc] = byCC[w.cc] || []).push(w); });
  const ccs = Object.keys(byCC).sort();

  if (!ccs.length) {
    sb.innerHTML = '<div style="text-align:center;color:#94A3B8;font-size:12px;padding:20px 8px">Sin resultados</div>';
    return;
  }

  sb.innerHTML = ccs.map(cc => {
    const group = byCC[cc];
    const icon  = ccIcon(cc);

    return `
      <div class="cc-group">
        <div class="cc-group-label">
          <span><i class="ti ${icon}"></i>${cc}</span>
          <span class="cc-badge">${group.length}</span>
        </div>
        ${group.map(w => {
          const als      = getAlerts(w);
          const topLevel = als.length ? als[0].level : null;
          let badge = '';

          if      (topLevel === 'danger') badge = '<span class="badge badge-danger">Alerta</span>';
          else if (topLevel === 'warn')   badge = '<span class="badge badge-warn">Atención</span>';
          else if (topLevel === 'purple') badge = '<span class="badge badge-purple">Indefinido</span>';
          else if (topLevel === 'blue')   badge = '<span class="badge badge-blue">Prox. 3 meses</span>';
          else if (w.estado === 'prorrogado')           badge = '<span class="badge badge-prorrog">Prorrogado</span>';
          else if (w.estado === 'convertido_indefinido') badge = '<span class="badge badge-converted">Convertido</span>';
          else if (w.tipo === 'indefinido') badge = '<span class="badge badge-indef">Indefinido</span>';
          else badge = '<span class="badge badge-fijo">Plazo fijo</span>';

          return `
            <div class="worker-item">
              <div class="wi-name">${w.nombre.split(' ').slice(0, 2).join(' ')}</div>
              <div class="wi-meta">${w.cargo || ''}</div>
              <div>${badge}</div>
            </div>`;
        }).join('')}
      </div>`;
  }).join('');
}

// ═══════════════════════════════════════════════════════════════
//  VISTA TRABAJADORES
// ═══════════════════════════════════════════════════════════════
function renderTrabajadores(filtered) {
  const mc = document.getElementById('main-content');
  const byCC = {};
  filtered.forEach(w => { (byCC[w.cc] = byCC[w.cc] || []).push(w); });
  const ccs = Object.keys(byCC).sort();

  if (!ccs.length) {
    mc.innerHTML = `
      <div class="top-bar">
        <span class="section-title"><i class="ti ti-users"></i> Trabajadores</span>
        <button class="add-btn" onclick="openForm()"><i class="ti ti-plus"></i> Agregar</button>
      </div>
      <div class="empty"><i class="ti ti-users"></i>Sin trabajadores para mostrar</div>`;
    return;
  }

  let html = `
    <div class="top-bar">
      <span class="section-title"><i class="ti ti-users"></i> Trabajadores (${filtered.length})</span>
      <button class="add-btn" onclick="openForm()"><i class="ti ti-plus"></i> Agregar trabajador</button>
    </div>`;

  ccs.forEach(cc => {
    const group  = byCC[cc];
    const alerts = group.filter(w => hasAlert(w)).length;
    const bg     = ccBg(cc);
    const tx     = ccColor(cc);
    const icon   = ccIcon(cc);

    html += `
      <div class="cg">
        <div class="cg-header">
          <div class="cg-icon" style="background:${bg};color:${tx}">
            <i class="ti ${icon}"></i>
          </div>
          <span class="cg-name">${cc}</span>
          <span class="cg-count">${group.length} trabajador${group.length !== 1 ? 'es' : ''}</span>
          ${alerts
            ? `<span class="cg-alert-badge" style="background:#FEE2E2;color:#991B1B">
                 <i class="ti ti-alert-triangle" style="font-size:11px"></i> ${alerts} alerta${alerts !== 1 ? 's' : ''}
               </span>`
            : ''}
        </div>
        <div class="th">
          <span>Nombre</span>
          <span>RUT / Cargo</span>
          <span>Sueldo</span>
          <span>Estado</span>
          <span>Próx. acción</span>
          <span></span>
        </div>
        ${group.map(w => {
          const als = getAlerts(w);
          const top = als[0] || null;

          let accionTxt   = '—';
          let accionClass = '';

          if (top) {
            switch (top.tipo) {
              case 'indefinido_cumplido':
                accionTxt   = 'Convertir / Prorrogar';
                accionClass = 'purple';
                break;
              case 'indefinido_proximo':
                accionTxt   = `3 meses en ${daysDiff(todayStr(), addMonths(w.inicio, 3))}d`;
                accionClass = 'blue';
                break;
              case 'prorroga_vence':
                accionTxt   = `Prórroga vence en ${daysLeft(w.fin)}d`;
                accionClass = 'warn';
                break;
              case 'prorroga_vencida':
                accionTxt   = 'Prórroga vencida';
                accionClass = 'danger';
                break;
              case 'vence_pronto':
                accionTxt   = `Vence en ${daysLeft(w.fin)}d`;
                accionClass = 'warn';
                break;
              case 'vencido':
                accionTxt   = 'Contrato vencido';
                accionClass = 'danger';
                break;
            }
          }

          const horarioTxt = w.horario === 'art22' ? 'Art. 22' : 'Horario normal';

          return `
            <div class="worker-row" id="wr-${w.id}">
              <div>
                <div class="wr-name">${w.nombre.split(' ').slice(0, 2).join(' ')}</div>
                <div class="wr-sub">${horarioTxt}</div>
              </div>
              <div>
                <div class="wr-sub" style="font-size:11px">${w.rut}</div>
                <div class="wr-sub">${w.cargo || ''}</div>
              </div>
              <div style="font-size:12px;font-weight:600">${fmtSueldo(w.sueldo)}</div>
              <div>${getEstadoBadge(w)}</div>
              <div class="wr-stat ${accionClass}" style="font-size:11px">${accionTxt}</div>
              <div class="wr-actions">
                <button class="icon-btn" onclick="openForm(${w.id})" title="Editar">
                  <i class="ti ti-edit"></i>
                </button>
                <button class="icon-btn del" onclick="deleteWorker(${w.id})" title="Eliminar">
                  <i class="ti ti-trash"></i>
                </button>
              </div>
            </div>`;
        }).join('')}
      </div>`;
  });

  mc.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════════
//  VISTA ALERTAS
// ═══════════════════════════════════════════════════════════════
function renderAlertas() {
  const mc = document.getElementById('main-content');

  // Recopila todas las alertas de todos los trabajadores
  const allAlerts = [];
  workers.forEach(w => {
    getAlerts(w).forEach(a => allAlerts.push({ w, a }));
  });

  if (!allAlerts.length) {
    mc.innerHTML = `
      <div class="section-title" style="margin-bottom:14px">
        <i class="ti ti-bell" style="color:#DC2626"></i> Alertas activas
      </div>
      <div class="empty">
        <i class="ti ti-circle-check" style="color:#16A34A"></i>
        Sin alertas activas — todo en orden
      </div>`;
    return;
  }

  // Orden de grupos en pantalla
  const grupos = [
    { key: 'indefinido_cumplido',  label: 'Conversión a indefinido requerida (ya cumplió 3 meses)', color: '#6D28D9' },
    { key: 'indefinido_proximo',   label: 'Próximos a cumplir 3 meses (aviso anticipado)',           color: '#1D4ED8' },
    { key: 'prorroga_vencida',     label: 'Prórroga vencida — acción urgente',                       color: '#DC2626' },
    { key: 'prorroga_vence',       label: 'Prórroga vence en los próximos 15 días',                  color: '#D97706' },
    { key: 'vencido',              label: 'Contratos vencidos',                                       color: '#DC2626' },
    { key: 'vence_pronto',         label: 'Contratos que vencen en 15 días',                         color: '#D97706' },
  ];

  const iconMap = {
    danger: 'alert-octagon',
    warn:   'alert-triangle',
    purple: 'arrows-exchange',
    blue:   'info-circle',
  };

  let html = `
    <div class="section-title" style="margin-bottom:14px">
      <i class="ti ti-bell" style="color:#DC2626"></i> Alertas activas (${allAlerts.length})
    </div>`;

  grupos.forEach(g => {
    const items = allAlerts.filter(x => x.a.tipo === g.key);
    if (!items.length) return;

    html += `
      <div class="section-group-label" style="color:${g.color}">
        ${g.label} (${items.length})
      </div>`;

    items.forEach(({ w, a }) => {
      // Botones de acción según tipo de alerta
      let actionBtns = '';

      if (a.tipo === 'indefinido_cumplido' || a.tipo === 'indefinido_proximo') {
        actionBtns = `
          <button class="action-btn purple" onclick="marcarEstado(${w.id}, 'prorrogado')">
            <i class="ti ti-clock-plus" style="font-size:12px"></i> Registrar prórroga 1 mes
          </button>
          <button class="action-btn ok" onclick="marcarEstado(${w.id}, 'convertido_indefinido')">
            <i class="ti ti-infinity" style="font-size:12px"></i> Convertir a indefinido
          </button>`;
      }

      if (a.tipo === 'prorroga_vence' || a.tipo === 'prorroga_vencida') {
        actionBtns = `
          <button class="action-btn ok" onclick="marcarEstado(${w.id}, 'convertido_indefinido')">
            <i class="ti ti-infinity" style="font-size:12px"></i> Convertir a indefinido
          </button>`;
      }

      html += `
        <div class="alert-box ${a.level}">
          <div class="alert-icon">
            <i class="ti ti-${iconMap[a.level] || 'alert-triangle'}"></i>
          </div>
          <div style="flex:1">
            <div class="alert-name">
              ${w.nombre}
              <span style="font-weight:400;font-size:11px">${w.rut}</span>
            </div>
            <div class="alert-detail">
              ${w.cc} · ${w.cargo || ''} · ${fmtSueldo(w.sueldo)} · Inicio: ${fmt(w.inicio)}
            </div>
            <div class="alert-detail" style="font-weight:600;margin-top:3px">
              ${a.msg}
            </div>
            ${actionBtns ? `<div class="alert-actions">${actionBtns}</div>` : ''}
          </div>
        </div>`;
    });
  });

  mc.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════════
//  VISTA RESUMEN
// ═══════════════════════════════════════════════════════════════
function renderResumen() {
  const mc = document.getElementById('main-content');

  const fijos      = workers.filter(w => w.tipo === 'plazo_fijo');
  const indef      = workers.filter(w => w.tipo === 'indefinido');
  const totalAl    = workers.filter(w => hasAlert(w)).length;
  const prorrogados = workers.filter(w => w.estado === 'prorrogado').length;
  const convertidos = workers.filter(w => w.estado === 'convertido_indefinido').length;
  const byCC = {};
  workers.forEach(w => { byCC[w.cc] = (byCC[w.cc] || 0) + 1; });

  mc.innerHTML = `
    <div class="section-title" style="margin-bottom:14px">
      <i class="ti ti-chart-bar" style="color:#1D4ED8"></i> Resumen general
    </div>

    <div class="stat-row">
      <div class="stat-card">
        <div class="stat-num">${workers.length}</div>
        <div class="stat-label">Total trabajadores</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" style="color:#D97706">${totalAl}</div>
        <div class="stat-label">Con alertas activas</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" style="color:#0369A1">${prorrogados}</div>
        <div class="stat-label">Prorrogados</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" style="color:#16A34A">${convertidos}</div>
        <div class="stat-label">Convertidos a indefinido</div>
      </div>
    </div>

    <div class="section-title" style="margin-bottom:10px">
      <i class="ti ti-building"></i> Por centro de costo
    </div>

    ${Object.keys(byCC).sort().map(cc => {
      const fa = workers.filter(w => w.cc === cc && hasAlert(w)).length;
      return `
        <div class="cc-summary-row">
          <div class="cc-sum-icon" style="background:${ccBg(cc)};color:${ccColor(cc)}">
            <i class="ti ${ccIcon(cc)}"></i>
          </div>
          <span class="cc-sum-name">${cc}</span>
          <span class="cc-sum-count">${byCC[cc]} persona${byCC[cc] !== 1 ? 's' : ''}</span>
          ${fa ? `<span class="cc-sum-alert">${fa} alerta${fa !== 1 ? 's' : ''}</span>` : ''}
        </div>`;
    }).join('')}`;
}

// ═══════════════════════════════════════════════════════════════
//  FORMULARIO
// ═══════════════════════════════════════════════════════════════
function openForm(id) {
  editingId = id || null;
  const f   = id ? workers.find(x => x.id === id) : null;

  document.getElementById('modal-title').textContent = id ? 'Editar trabajador' : 'Agregar trabajador';
  document.getElementById('f-nombre').value  = f ? f.nombre  : '';
  document.getElementById('f-rut').value     = f ? f.rut     : '';
  document.getElementById('f-cargo').value   = f ? f.cargo   : '';
  document.getElementById('f-tipo').value    = f ? f.tipo    : 'plazo_fijo';
  document.getElementById('f-inicio').value  = f ? f.inicio  : '';
  document.getElementById('f-fin').value     = f && f.fin ? f.fin : '';
  document.getElementById('f-sueldo').value  = f ? f.sueldo  : '';
  document.getElementById('f-horario').value = f ? f.horario : 'normal';

  const ccSel = document.getElementById('f-cc');
  if (f && !KNOWN_CCS.includes(f.cc)) {
    ccSel.value = 'otro';
    document.getElementById('grp-cc-manual').style.display = 'flex';
    document.getElementById('f-cc-manual').value = f.cc;
  } else {
    ccSel.value = f ? f.cc : 'Finanzas';
    document.getElementById('grp-cc-manual').style.display = 'none';
  }

  toggleFechaFin();
  document.getElementById('modal-overlay').classList.add('open');
}

function closeForm() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function toggleFechaFin() {
  const tipo = document.getElementById('f-tipo').value;
  document.getElementById('grp-fin').style.display = tipo === 'indefinido' ? 'none' : 'flex';
}

function toggleCCManual() {
  const val = document.getElementById('f-cc').value;
  document.getElementById('grp-cc-manual').style.display = val === 'otro' ? 'flex' : 'none';
}

function saveWorker() {
  const nombre  = document.getElementById('f-nombre').value.trim();
  const rut     = document.getElementById('f-rut').value.trim();
  const cargo   = document.getElementById('f-cargo').value.trim();
  const tipo    = document.getElementById('f-tipo').value;
  const inicio  = document.getElementById('f-inicio').value;
  const fin     = tipo === 'indefinido' ? null : document.getElementById('f-fin').value;
  const sueldo  = document.getElementById('f-sueldo').value;
  const horario = document.getElementById('f-horario').value;
  let cc        = document.getElementById('f-cc').value;
  if (cc === 'otro') cc = document.getElementById('f-cc-manual').value.trim();

  if (!nombre || !rut || !inicio || !sueldo || !cc) {
    alert('Por favor completa los campos obligatorios (*).');
    return;
  }
  if (tipo === 'plazo_fijo' && !fin) {
    alert('Ingresa la fecha de fin del contrato.');
    return;
  }

  const data = { nombre, rut, cargo, tipo, inicio, fin, sueldo: Number(sueldo), cc, horario };

  if (editingId) {
    const idx = workers.findIndex(x => x.id === editingId);
    // Conserva el estado actual al editar
    workers[idx] = { ...workers[idx], ...data };
  } else {
    workers.push({ id: nextId++, ...data, estado: null });
  }

  save();
  closeForm();
  render();
}

function deleteWorker(id) {
  const w = workers.find(x => x.id === id);
  if (!w) return;
  if (!confirm(`¿Eliminar a ${w.nombre}? Esta acción no se puede deshacer.`)) return;
  workers = workers.filter(x => x.id !== id);
  save();
  render();
}

// Cerrar modal al hacer clic fuera
document.getElementById('modal-overlay').addEventListener('click', function (e) {
  if (e.target === this) closeForm();
});

// ── Init ──────────────────────────────────────────────────────
render();