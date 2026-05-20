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

// ── Datos iniciales ───────────────────────────────────────────
let workers = JSON.parse(localStorage.getItem('rrhh_workers') || 'null') || [
  { id:1, nombre:"Ana García Muñoz",       rut:"12.345.678-9",  tipo:"plazo_fijo", inicio:"2024-01-10", fin:"2025-06-10", sueldo:980000,  cc:"Finanzas",    horario:"normal", cargo:"Analista contable" },
  { id:2, nombre:"Carlos Rojas Soto",      rut:"13.456.789-K",  tipo:"indefinido", inicio:"2022-03-01", fin:null,         sueldo:1250000, cc:"Tecnología",  horario:"art22",  cargo:"Desarrollador senior" },
  { id:3, nombre:"María López Fuentes",    rut:"14.567.890-2",  tipo:"plazo_fijo", inicio:"2025-01-15", fin:"2025-07-15", sueldo:750000,  cc:"Operaciones", horario:"normal", cargo:"Asistente administrativa" },
  { id:4, nombre:"Pedro Vega Castillo",    rut:"15.678.901-3",  tipo:"plazo_fijo", inicio:"2024-06-01", fin:"2026-08-30", sueldo:900000,  cc:"Ventas",      horario:"normal", cargo:"Ejecutivo de ventas" },
  { id:5, nombre:"Lucía Morales Díaz",     rut:"16.789.012-4",  tipo:"indefinido", inicio:"2020-05-20", fin:null,         sueldo:1800000, cc:"Gerencia",    horario:"art22",  cargo:"Jefa de proyectos" },
  { id:6, nombre:"Roberto Fuentes Araya",  rut:"17.890.123-5",  tipo:"plazo_fijo", inicio:"2025-03-01", fin:"2025-08-31", sueldo:820000,  cc:"Obra/Faena",  horario:"normal", cargo:"Maestro de obra" },
  { id:7, nombre:"Javiera Contreras Pino", rut:"18.901.234-6",  tipo:"plazo_fijo", inicio:"2025-04-01", fin:"2025-09-30", sueldo:780000,  cc:"Obra/Faena",  horario:"normal", cargo:"Jornalera" },
];

let nextId     = Math.max(...workers.map(w => w.id), 0) + 1;
let editingId  = null;
let currentTab = 'trabajadores';

// ── Persistencia ──────────────────────────────────────────────
function save() {
  localStorage.setItem('rrhh_workers', JSON.stringify(workers));
}

// ── Utilidades ────────────────────────────────────────────────
function daysLeft(fin) {
  return Math.ceil((new Date(fin + 'T00:00:00') - new Date()) / 86400000);
}

function fmt(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}

function fmtSueldo(s) {
  return '$' + Number(s).toLocaleString('es-CL');
}

function alertLv(d) {
  if (d < 0)   return 'danger';
  if (d <= 30) return 'danger';
  if (d <= 90) return 'warn';
  return 'ok';
}

function ccIcon(cc)  { return CC_ICONS[cc]  || 'ti-building'; }
function ccBg(cc)    { return CC_BG[cc]     || '#F1F5F9'; }
function ccColor(cc) { return CC_COLOR[cc]  || '#475569'; }

// ── Filtros ───────────────────────────────────────────────────
function getFiltered() {
  const q      = (document.getElementById('buscar')       || {}).value || '';
  const cc     = (document.getElementById('filtro-cc')    || {}).value || '';
  const tipo   = (document.getElementById('filtro-tipo')  || {}).value || '';
  const alerta = (document.getElementById('filtro-alerta')|| {}).value || '';

  return workers.filter(w => {
    if (q) {
      const s = q.toLowerCase();
      if (!w.nombre.toLowerCase().includes(s) && !w.rut.includes(s)) return false;
    }
    if (cc   && w.cc   !== cc)   return false;
    if (tipo && w.tipo !== tipo) return false;
    if (alerta) {
      if (w.tipo === 'indefinido' && alerta === 'danger') return false;
      if (w.tipo === 'plazo_fijo') {
        const lv = alertLv(daysLeft(w.fin));
        if (alerta === 'danger' && lv === 'ok')    return false;
        if (alerta === 'ok'     && lv !== 'ok')    return false;
      }
    }
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

// ── Tabs ──────────────────────────────────────────────────────
function setTab(tab) {
  currentTab = tab;
  const names = ['trabajadores', 'alertas', 'resumen'];
  document.querySelectorAll('.tab').forEach((t, i) => {
    t.classList.toggle('active', names[i] === tab);
  });
  render();
}

// ── Render principal ──────────────────────────────────────────
function render() {
  populateCCFilter();
  const filtered = getFiltered();
  renderSidebar(filtered);
  if (currentTab === 'trabajadores') renderTrabajadores(filtered);
  else if (currentTab === 'alertas') renderAlertas();
  else renderResumen();
}

// ── Sidebar ───────────────────────────────────────────────────
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
          let badge = '';
          if (w.tipo === 'plazo_fijo') {
            const d = daysLeft(w.fin);
            badge = d < 0 ? '<span class="badge badge-danger">Vencido</span>'
                  : d <= 30 ? '<span class="badge badge-danger">Vence pronto</span>'
                  : '<span class="badge badge-fijo">Plazo fijo</span>';
          } else {
            badge = '<span class="badge badge-indef">Indefinido</span>';
          }
          return `
            <div class="worker-item" onclick="highlightWorker(${w.id})">
              <div class="wi-name">${w.nombre.split(' ').slice(0, 2).join(' ')}</div>
              <div class="wi-meta">${w.cargo || ''}</div>
              <div>${badge}</div>
            </div>`;
        }).join('')}
      </div>`;
  }).join('');
}

function highlightWorker(id) {
  if (currentTab !== 'trabajadores') setTab('trabajadores');
  const el = document.getElementById('wr-' + id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.style.outline = '2px solid #1D4ED8';
    setTimeout(() => { el.style.outline = ''; }, 1500);
  }
}

// ── Vista Trabajadores ────────────────────────────────────────
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
    const alerts = group.filter(w => w.tipo === 'plazo_fijo' && alertLv(daysLeft(w.fin)) !== 'ok').length;
    const icon   = ccIcon(cc);
    const bg     = ccBg(cc);
    const tx     = ccColor(cc);

    html += `
      <div class="cg">
        <div class="cg-header">
          <div class="cg-icon" style="background:${bg};color:${tx}">
            <i class="ti ${icon}"></i>
          </div>
          <span class="cg-name">${cc}</span>
          <span class="cg-count">${group.length} trabajador${group.length !== 1 ? 'es' : ''}</span>
          ${alerts ? `<span class="cg-alert-badge"><i class="ti ti-alert-triangle" style="font-size:11px"></i> ${alerts} alerta${alerts !== 1 ? 's' : ''}</span>` : ''}
        </div>
        <div class="th">
          <span>Nombre</span>
          <span>RUT / Cargo</span>
          <span>Centro de costo</span>
          <span>Contrato</span>
          <span>Sueldo</span>
          <span></span>
        </div>
        ${group.map(w => {
          const d  = w.tipo === 'plazo_fijo' ? daysLeft(w.fin) : null;
          const lv = d !== null ? alertLv(d) : null;
          const contratoTxt = w.tipo === 'indefinido' ? 'Indefinido'
            : d < 0  ? `Vencido hace ${Math.abs(d)}d`
            : d === 0 ? 'Vence hoy'
            : `${d} días`;
          const horarioTxt = w.horario === 'art22' ? 'Art. 22' : 'Horario normal';

          return `
            <div class="worker-row" id="wr-${w.id}">
              <div>
                <div class="wr-name">${w.nombre.split(' ').slice(0, 2).join(' ')}</div>
                <div class="wr-sub">${horarioTxt}</div>
              </div>
              <div>
                <div class="wr-sub">${w.rut}</div>
                <div class="wr-sub">${w.cargo || ''}</div>
              </div>
              <div style="font-size:12px;color:#64748B">${w.cc}</div>
              <div class="wr-stat ${lv || ''}">${contratoTxt}</div>
              <div style="font-size:12px;font-weight:600">${fmtSueldo(w.sueldo)}</div>
              <div class="wr-actions">
                <button class="icon-btn" onclick="openForm(${w.id})" title="Editar">
                  <i class="ti ti-edit"></i>
                </button>
                <button class="icon-btn danger" onclick="deleteWorker(${w.id})" title="Eliminar">
                  <i class="ti ti-trash"></i>
                </button>
              </div>
            </div>`;
        }).join('')}
      </div>`;
  });

  mc.innerHTML = html;
}

// ── Vista Alertas ─────────────────────────────────────────────
function renderAlertas() {
  const mc    = document.getElementById('main-content');
  const fijos = workers
    .filter(w => w.tipo === 'plazo_fijo')
    .sort((a, b) => daysLeft(a.fin) - daysLeft(b.fin));

  const venc  = fijos.filter(w => daysLeft(w.fin) < 0);
  const p30   = fijos.filter(w => daysLeft(w.fin) >= 0 && daysLeft(w.fin) <= 30);
  const p90   = fijos.filter(w => daysLeft(w.fin) > 30 && daysLeft(w.fin) <= 90);
  const vigentes = fijos.filter(w => daysLeft(w.fin) > 90);

  const alertaItem = w => {
    const d   = daysLeft(w.fin);
    const lv  = alertLv(d);
    const cls = lv === 'ok' ? 'neutral' : lv;
    const msg = d < 0    ? `Venció hace ${Math.abs(d)} días (${fmt(w.fin)})`
              : d === 0  ? `Vence HOY (${fmt(w.fin)})`
              :             `Vence en ${d} días — ${fmt(w.fin)}`;
    const icon = d < 0 ? 'alert-octagon' : d <= 30 ? 'alert-triangle' : 'calendar-check';

    return `
      <div class="alert-box ${cls}">
        <div class="alert-icon"><i class="ti ti-${icon}"></i></div>
        <div style="flex:1">
          <div class="alert-name">
            ${w.nombre} <span style="font-weight:400;font-size:11px">${w.rut}</span>
          </div>
          <div class="alert-detail">${w.cc} · ${w.cargo || ''} · ${fmtSueldo(w.sueldo)}</div>
          <div class="alert-detail" style="font-weight:600;margin-top:2px">${msg}</div>
        </div>
      </div>`;
  };

  const group = (label, color, items) => items.length
    ? `<div class="section-group-label" style="color:${color}">${label} (${items.length})</div>
       ${items.map(alertaItem).join('')}`
    : '';

  mc.innerHTML = `
    <div class="section-title" style="margin-bottom:14px">
      <i class="ti ti-bell" style="color:#DC2626"></i> Alertas de vencimiento — contratos a plazo fijo
    </div>
    ${group('Contratos vencidos',                 '#DC2626', venc)}
    ${group('Vencen en los próximos 30 días',     '#D97706', p30)}
    ${group('Vencen entre 31 y 90 días',          '#78716C', p90)}
    ${group('Contratos vigentes (más de 90 días)','#16A34A', vigentes)}
    ${fijos.length === 0 ? '<div class="empty"><i class="ti ti-file-off"></i>Sin contratos a plazo fijo registrados</div>' : ''}`;
}

// ── Vista Resumen ─────────────────────────────────────────────
function renderResumen() {
  const mc = document.getElementById('main-content');
  const fijos  = workers.filter(w => w.tipo === 'plazo_fijo');
  const indef  = workers.filter(w => w.tipo === 'indefinido');
  const alerts = fijos.filter(w => alertLv(daysLeft(w.fin)) !== 'ok').length;
  const byCC   = {};
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
        <div class="stat-num" style="color:#D97706">${alerts}</div>
        <div class="stat-label">Con alerta</div>
      </div>
      <div class="stat-card">
        <div class="stat-num" style="color:#16A34A">${indef.length}</div>
        <div class="stat-label">Contratos indefinidos</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${Object.keys(byCC).length}</div>
        <div class="stat-label">Centros de costo</div>
      </div>
    </div>
    <div class="section-title" style="margin-bottom:10px">
      <i class="ti ti-building"></i> Por centro de costo
    </div>
    ${Object.keys(byCC).sort().map(cc => {
      const fa = workers.filter(w => w.cc === cc && w.tipo === 'plazo_fijo' && alertLv(daysLeft(w.fin)) !== 'ok').length;
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

// ── Formulario ────────────────────────────────────────────────
const KNOWN_CCS = ['Finanzas','Tecnología','Operaciones','Ventas','Gerencia','Obra/Faena'];

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
    workers[idx] = { ...workers[idx], ...data };
  } else {
    workers.push({ id: nextId++, ...data });
  }

  save();
  closeForm();
  render();
}

function deleteWorker(id) {
  if (!confirm('¿Eliminar este trabajador? Esta acción no se puede deshacer.')) return;
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