import{c as ie,g as de,R as N,r as M,u as Ce,j as e,h as Ae,b as k,i as Ee,k as ze,U as Re,l as Oe,C as Pe,m as Fe}from"./index.js";import{t as G,c as be,n as le,s as xe,g as _e,f as j,e as T,a as J}from"./es.js";import{P as Le}from"./plus.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],qe=ie("map-pin",He);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Z=ie("printer",Be);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ue=ie("refresh-cw",Ve);function ge(t,s,r){const n=G(t,r==null?void 0:r.in);return isNaN(s)?be(t,NaN):(s&&n.setDate(n.getDate()+s),n)}function Y(t,s,r){const[n,l]=le(r==null?void 0:r.in,t,s);return+xe(n)==+xe(l)}function ve(t,s){const r=G(t,s==null?void 0:s.in),n=r.getMonth();return r.setFullYear(r.getFullYear(),n+1,0),r.setHours(23,59,59,999),r}function Ye(t,s){const[r,n]=le(t,s.start,s.end);return{start:r,end:n}}function oe(t,s){const{start:r,end:n}=Ye(s==null?void 0:s.in,t);let l=+r>+n;const o=l?+r:+n,u=l?n:r;u.setHours(0,0,0,0);let v=1;const g=[];for(;+u<=o;)g.push(be(r,u)),u.setDate(u.getDate()+v),u.setHours(0,0,0,0);return l?g.reverse():g}function ye(t,s){const r=G(t,s==null?void 0:s.in);return r.setDate(1),r.setHours(0,0,0,0),r}function Q(t,s){var v,g,m,p;const r=_e(),n=(s==null?void 0:s.weekStartsOn)??((g=(v=s==null?void 0:s.locale)==null?void 0:v.options)==null?void 0:g.weekStartsOn)??r.weekStartsOn??((p=(m=r.locale)==null?void 0:m.options)==null?void 0:p.weekStartsOn)??0,l=G(t,s==null?void 0:s.in),o=l.getDay(),u=(o<n?-7:0)+6-(o-n);return l.setDate(l.getDate()+u),l.setHours(23,59,59,999),l}function ne(t,s,r){const[n,l]=le(r==null?void 0:r.in,t,s);return n.getFullYear()===l.getFullYear()&&n.getMonth()===l.getMonth()}function We(t,s,r){return ge(t,-1,r)}const R=t=>{if(!t)return null;if(t instanceof Date)return Number.isNaN(t.getTime())?null:t;const s=String(t).trim();if(!s)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(s)){const n=new Date(`${s}T00:00:00`);return Number.isNaN(n.getTime())?null:n}if(/^\d{2}\/\d{2}\/\d{4}$/.test(s)){const[n,l,o]=s.split("/").map(Number),u=new Date(o,l-1,n);return Number.isNaN(u.getTime())?null:u}const r=new Date(s);return Number.isNaN(r.getTime())?null:r},f=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),W=t=>{if(!t)return"--:--";const s=String(t).match(/(\d{1,2}):(\d{2})/);if(s){const r=Number(s[1]),n=Number(s[2]);if(!Number.isNaN(r)&&!Number.isNaN(n))return`${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}return String(t).slice(0,5)},we=t=>{var r,n;const s=((r=t.patient)==null?void 0:r.trim())||((n=t.title)==null?void 0:n.trim())||"";return!s||s==="Nueva Reserva"?"Sin nombre":s},ce=t=>t==="interview"?"Entrevista":t==="block"?"Bloqueo":"Sesion",ke=t=>t.coverageType||"particular",Ke=(t,s)=>{const r=s.find(l=>l.id===t.professionalId||t.proId),n=N.find(l=>l.id===t.roomId);return r&&n?`${r.name} · ${n.name}`:r?r.name:n?n.name:"Sin asignar"},ue=t=>{if(!t)return Number.POSITIVE_INFINITY;const s=String(t).match(/^(\d{1,2}):(\d{2})$/);if(!s)return Number.POSITIVE_INFINITY;const r=Number(s[1]),n=Number(s[2]);return Number.isNaN(r)||Number.isNaN(n)?Number.POSITIVE_INFINITY:r*60+n},K=t=>[...t].sort((s,r)=>ue(s.start)-ue(r.start)),me=t=>{const s=t.reduce((n,l)=>{const o=ke(l);return n[o]=(n[o]||0)+1,n},{particular:0,"obra social":0}),r=t.reduce((n,l)=>{const o=ce(l.kind||l.type);return n[o]=(n[o]||0)+1,n},{Sesion:0,Entrevista:0,Bloqueo:0});return{coverage:s,types:r}},Ge=t=>{const s=J(t,{weekStartsOn:1}),r=Q(t,{weekStartsOn:1}),n=oe({start:s,end:r});return{weekStart:s,weekEnd:r,weekDays:n}},z=t=>j(t,"yyyy-MM-dd"),Je=(t,s)=>{const{weekStart:r,weekEnd:n,weekDays:l}=Ge(t),o=s.filter(m=>{const p=R(m.date);return p?p>=r&&p<=n&&m.roomId:!1}),u=o.reduce((m,p)=>{const x=R(p.date);if(!x)return m;const h=`${p.roomId}:${z(x)}`;return m[h]=m[h]||[],m[h].push(p),m},{}),v=N.map(m=>{const p=l.map(h=>{const b=`${m.id}:${z(h)}`,$=K(u[b]||[]);return{day:h,appointments:$,free:$.length===0}}),x=p.filter(h=>h.free).length;return{room:m,dayCells:p,totalAppointments:p.reduce((h,b)=>h+b.appointments.length,0),freeDays:x}}),g=l.map(m=>{const p=z(m),x=o.filter($=>{const D=R($.date);return D?z(D)===p:!1}),h=new Set(x.map($=>$.roomId).filter(Boolean)),b=N.filter($=>!h.has($.id));return{day:m,appointments:K(x),freeRooms:b,occupiedRooms:N.length-b.length}});return{weekDays:l,weekAppointments:o,rooms:v,daySummary:g}},pe=(t,s,r,n=!1)=>`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${f(t)}</title>
    <style>
      @page {
        size: ${n?"A4 landscape":"A4 portrait"};
        margin: 14mm;
      }
      * { box-sizing: border-box; }
      html, body { margin: 0; padding: 0; background: #f8fafc; color: #0f172a; font-family: Inter, Arial, sans-serif; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
      .sheet { max-width: 1120px; margin: 0 auto; padding: 80px 0 0; }
      .preview-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 20;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 14px 20px;
        background: rgba(248, 250, 252, 0.95);
        border-bottom: 1px solid #e2e8f0;
        backdrop-filter: blur(10px);
      }
      .preview-bar .title { font-size: 14px; font-weight: 900; color: #0f172a; }
      .preview-bar .actions { display: flex; gap: 8px; }
      .preview-btn {
        appearance: none;
        border: 0;
        border-radius: 999px;
        padding: 10px 14px;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
      }
      .preview-btn.primary { background: #67b7c9; color: white; }
      .preview-btn.secondary { background: white; color: #334155; border: 1px solid #dbe4ee; }
      .hero {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        align-items: flex-start;
        padding: 18px 20px;
        border-radius: 24px;
        background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%);
        color: white;
        margin-bottom: 16px;
      }
      .hero h1 { margin: 0; font-size: 28px; line-height: 1.05; }
      .hero p { margin: 6px 0 0; color: rgba(255,255,255,.8); font-size: 12px; }
      .meta { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 999px;
        background: rgba(255,255,255,.14);
        font-size: 11px;
        font-weight: 700;
        white-space: nowrap;
      }
      .summary {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
        margin-bottom: 16px;
      }
      .card {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 14px;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
      }
      .card .label { font-size: 11px; text-transform: uppercase; letter-spacing: .12em; color: #64748b; font-weight: 800; }
      .card .value { margin-top: 8px; font-size: 24px; font-weight: 900; color: #0f172a; }
      .grid { display: grid; gap: 12px; }
      .section {
        background: white;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        padding: 16px;
        box-shadow: 0 8px 24px rgba(15, 23, 42, 0.05);
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: center;
        margin-bottom: 12px;
      }
      .section-header h2 { margin: 0; font-size: 18px; }
      .section-header span { font-size: 12px; color: #64748b; font-weight: 700; }
      table { width: 100%; border-collapse: collapse; }
      th, td {
        text-align: left;
        padding: 10px 8px;
        border-bottom: 1px solid #e2e8f0;
        font-size: 12px;
        vertical-align: top;
      }
      th {
        text-transform: uppercase;
        letter-spacing: .08em;
        font-size: 10px;
        color: #64748b;
      }
      .badge {
        display: inline-flex;
        align-items: center;
        padding: 6px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: .06em;
      }
      .badge.session { background: #dbeafe; color: #1d4ed8; }
      .badge.interview { background: #fef3c7; color: #92400e; }
      .badge.block { background: #0f172a; color: white; }
      .badge.coverage { background: #eef2ff; color: #4338ca; }
      .day-card {
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 14px;
        margin-bottom: 12px;
        background: #fff;
        break-inside: avoid;
        page-break-inside: avoid;
      }
      .day-top {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        align-items: baseline;
        margin-bottom: 10px;
      }
      .day-top h3 { margin: 0; font-size: 16px; }
      .day-top p { margin: 0; font-size: 12px; color: #64748b; font-weight: 700; }
      .appointment-list { display: grid; gap: 8px; }
      .appointment-item {
        display: grid;
        grid-template-columns: 88px 1fr;
        gap: 12px;
        padding: 10px 12px;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
      }
      .time { font-weight: 900; color: #0f172a; }
      .subtle { color: #64748b; font-size: 11px; font-weight: 700; margin-top: 4px; }
      .empty {
        padding: 22px;
        border: 1px dashed #cbd5e1;
        border-radius: 18px;
        text-align: center;
        color: #64748b;
        background: #f8fafc;
        font-weight: 700;
      }
      .footer {
        margin-top: 14px;
        color: #94a3b8;
        font-size: 11px;
        text-align: right;
      }
      .month-calendar {
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 10px;
      }
      .month-head {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: .12em;
        color: #64748b;
        font-weight: 800;
      }
      .month-cell {
        min-height: 128px;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        break-inside: avoid;
      }
      .month-cell.outside { opacity: .38; }
      .month-day {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
      }
      .month-day .number {
        width: 26px;
        height: 26px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 900;
        color: #0f172a;
        background: #eff6ff;
      }
      .month-day .count {
        font-size: 10px;
        font-weight: 800;
        color: #64748b;
      }
      .month-badges {
        display: grid;
        gap: 6px;
      }
      .month-badge {
        border-radius: 999px;
        padding: 6px 8px;
        font-size: 10px;
        font-weight: 800;
        display: flex;
        justify-content: space-between;
        gap: 8px;
        align-items: center;
        border: 1px solid transparent;
      }
      .month-badge.session { background: #dbeafe; color: #1d4ed8; border-color: #bfdbfe; }
      .month-badge.interview { background: #fef3c7; color: #92400e; border-color: #fde68a; }
      .month-badge.block { background: #f3e8ff; color: #6b21a8; border-color: #e9d5ff; }
      .month-badge .time { font-size: 9px; }
      .week-summary {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;
        margin-bottom: 16px;
      }
      .week-grid {
        display: grid;
        grid-template-columns: 128px repeat(7, minmax(0, 1fr));
        gap: 8px;
        align-items: stretch;
      }
      .week-head {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: .12em;
        color: #64748b;
        font-weight: 800;
        padding: 6px 8px;
      }
      .week-room {
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        padding: 10px;
        min-height: 92px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .week-room .room-name {
        font-size: 12px;
        font-weight: 900;
        color: #0f172a;
        margin: 0;
      }
      .week-room .room-meta {
        font-size: 10px;
        color: #64748b;
        font-weight: 700;
        margin-top: 4px;
      }
      .week-cell {
        min-height: 92px;
        border: 1px solid #e2e8f0;
        border-radius: 16px;
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        padding: 8px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        break-inside: avoid;
      }
      .week-cell.free {
        background: linear-gradient(180deg, #f0fdf4 0%, #f8fafc 100%);
        border-color: #bbf7d0;
      }
      .week-cell.busy {
        border-color: #bfdbfe;
      }
      .week-cell .count {
        font-size: 10px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: .08em;
        color: #64748b;
      }
      .week-cell .free-label {
        font-size: 12px;
        font-weight: 900;
        color: #15803d;
      }
      .week-cell .mini-list {
        display: grid;
        gap: 4px;
      }
      .week-pill {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        align-items: center;
        padding: 5px 7px;
        border-radius: 999px;
        font-size: 9px;
        font-weight: 800;
        background: #eff6ff;
        color: #1d4ed8;
        border: 1px solid #bfdbfe;
      }
      .week-pill.interview { background: #fef3c7; color: #92400e; border-color: #fde68a; }
      .week-pill.block { background: #f3e8ff; color: #6b21a8; border-color: #e9d5ff; }
      .week-pill .time { font-size: 8px; opacity: .8; }
      .day-free-list {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .day-free-list .chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 6px 10px;
        background: #ecfeff;
        color: #155e75;
        border: 1px solid #a5f3fc;
        font-size: 10px;
        font-weight: 800;
      }
      @media print {
        body { background: white; }
        .sheet { max-width: none; }
        .hero, .card, .section, .day-card { box-shadow: none; }
        .preview-bar { display: none; }
      }
    </style>
  </head>
  <body>
    <div class="preview-bar">
      <div class="title">${f(t)} - Vista previa</div>
      <div class="actions">
        <button class="preview-btn secondary" onclick="window.close()">Cerrar</button>
        <button class="preview-btn primary" onclick="window.print()">Imprimir</button>
      </div>
    </div>
    <div class="sheet">
      ${r}
    </div>
  </body>
</html>`,Qe=(t,s)=>{if(typeof window>"u")return;const r=window.open("","_blank","width=1280,height=900");r&&(r.document.open(),r.document.write(s),r.document.close(),r.document.title=t,r.focus())},Xe=(t,s)=>{const r=de(),n=j(t,"EEEE, d MMMM yyyy",{locale:T}),l=K(s.filter(m=>{const p=R(m.date);return p?Y(p,t):!1})),{coverage:o,types:u}=me(l),v=j(new Date,"dd/MM/yyyy HH:mm",{locale:T}),g=l.length?l.map(m=>`
      <tr>
        <td><strong>${f(W(m.start))}</strong><div class="subtle">${f(W(m.end))}</div></td>
        <td><strong>${f(we(m))}</strong><div class="subtle">${f(Ke(m,r))}</div></td>
        <td><span class="badge ${m.kind||m.type}">${f(ce(m.kind||m.type))}</span></td>
        <td><span class="badge coverage">${f(ke(m))}</span></td>
        <td>${f(m.notes||"-")}</td>
      </tr>
    `).join(""):'<tr><td colspan="5"><div class="empty">No hay turnos para este dia.</div></td></tr>';return pe(`Agenda diaria - ${n}`,"Resumen listo para compartir con el equipo.",`
      <div class="hero">
        <div>
          <h1>Agenda diaria</h1>
          <p>${f(n)}</p>
        </div>
        <div class="meta">
          <span class="pill">Generado: ${f(v)}</span>
          <span class="pill">Turnos: ${l.length}</span>
        </div>
      </div>
      <div class="summary">
        <div class="card"><div class="label">Total</div><div class="value">${l.length}</div></div>
        <div class="card"><div class="label">Particular</div><div class="value">${o.particular||0}</div></div>
        <div class="card"><div class="label">Obra social</div><div class="value">${o["obra social"]||0}</div></div>
        <div class="card"><div class="label">Tipos</div><div class="value">${u.Sesion||0}/${u.Entrevista||0}/${u.Bloqueo||0}</div></div>
      </div>
      <div class="section">
        <div class="section-header">
          <h2>Detalle del día</h2>
          <span>${f(n)}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Horario</th>
              <th>Paciente / destino</th>
              <th>Tipo</th>
              <th>Cobertura</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>${g}</tbody>
        </table>
      </div>
      <div class="footer">Reporte diario listo para imprimir o guardar como PDF.</div>
    `,!1)},Ze=(t,s)=>{de();const r=j(t,"MMMM yyyy",{locale:T}),n=s.filter(p=>{const x=R(p.date);return x?x.getMonth()===t.getMonth()&&x.getFullYear()===t.getFullYear():!1}),{coverage:l,types:o}=me(n),u=j(new Date,"dd/MM/yyyy HH:mm",{locale:T}),v=n.reduce((p,x)=>{const h=R(x.date);if(!h)return p;const b=j(h,"yyyy-MM-dd");return p[b]=p[b]||[],p[b].push(x),p},{}),g=oe({start:J(ye(t),{weekStartsOn:1}),end:Q(ve(t),{weekStartsOn:1})}),m=g.length?`
      <div class="section">
        <div class="section-header">
          <h2>Calendario mensual</h2>
          <span>${f(r)}</span>
        </div>
        <div class="month-calendar">
          ${["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"].map(p=>`<div class="month-head">${p}</div>`).join("")}
          ${g.map(p=>{const x=K(v[j(p,"yyyy-MM-dd")]||[]);return`
              <div class="month-cell ${ne(p,t)?"":"outside"}">
                <div class="month-day">
                  <span class="number">${j(p,"d")}</span>
                  <span class="count">${x.length} turno${x.length===1?"":"s"}</span>
                </div>
                <div class="month-badges">
                  ${x.slice(0,3).map(h=>`
                    <div class="month-badge ${h.kind||h.type}">
                      <span>${f(we(h))}</span>
                      <span class="time">${f(W(h.start))}</span>
                    </div>
                  `).join("")}
                  ${x.length>3?`<div class="subtle">+ ${x.length-3} más</div>`:""}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `:'<div class="section"><div class="empty">No hay turnos para este mes.</div></div>';return pe(`Agenda mensual - ${r}`,"Vista general para compartir con colaboradores.",`
      <div class="hero">
        <div>
          <h1>Agenda mensual</h1>
          <p>${f(r)}</p>
        </div>
        <div class="meta">
          <span class="pill">Generado: ${f(u)}</span>
          <span class="pill">Turnos: ${n.length}</span>
        </div>
      </div>
      <div class="summary">
        <div class="card"><div class="label">Total</div><div class="value">${n.length}</div></div>
        <div class="card"><div class="label">Particular</div><div class="value">${l.particular||0}</div></div>
        <div class="card"><div class="label">Obra social</div><div class="value">${l["obra social"]||0}</div></div>
        <div class="card"><div class="label">Tipos</div><div class="value">${o.Sesion||0}/${o.Entrevista||0}/${o.Bloqueo||0}</div></div>
      </div>
      <div class="section">
        <div class="section-header">
          <h2>Resumen del mes</h2>
          <span>${f(r)}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Total</th>
              <th>Cobertura particular</th>
              <th>Cobertura obra social</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Sesión</td><td>${o.Sesion||0}</td><td>${l.particular||0}</td><td>${l["obra social"]||0}</td></tr>
            <tr><td>Entrevista</td><td>${o.Entrevista||0}</td><td colspan="2">Ver detalle diario</td></tr>
            <tr><td>Bloqueo</td><td>${o.Bloqueo||0}</td><td colspan="2">Ver detalle diario</td></tr>
          </tbody>
        </table>
      </div>
      ${m}
      <div class="footer">Reporte mensual listo para imprimir o guardar como PDF.</div>
    `,!0)},et=(t,s)=>{de();const r=`${j(J(t,{weekStartsOn:1}),"dd/MM/yyyy",{locale:T})} - ${j(Q(t,{weekStartsOn:1}),"dd/MM/yyyy",{locale:T})}`,{weekDays:n,weekAppointments:l,rooms:o,daySummary:u}=Je(t,s),v=j(new Date,"dd/MM/yyyy HH:mm",{locale:T}),{types:g}=me(l),m=o.reduce((y,O)=>y+O.freeDays,0),p=u.filter(y=>y.freeRooms.length===N.length).length,x=z(t),h=u.find(y=>z(y.day)===x),b=(h==null?void 0:h.freeRooms.length)||0,$=`
    <div class="section">
      <div class="section-header">
        <h2>Disponibilidad por consultorio</h2>
        <span>${f(r)}</span>
      </div>
      <div class="week-grid">
        <div></div>
        ${n.map(y=>`<div class="week-head">${f(j(y,"EEE dd",{locale:T}))}</div>`).join("")}
        ${o.map(({room:y,dayCells:O,totalAppointments:P,freeDays:_})=>`
          <div class="week-room">
            <div>
              <p class="room-name">${f(y.name)}</p>
              <div class="room-meta">${P} turnos · ${_} libres</div>
            </div>
            <div class="room-meta">Consultorio fijo</div>
          </div>
          ${O.map(I=>`
            <div class="week-cell ${I.free?"free":"busy"}">
              <div class="count">${I.appointments.length} turno${I.appointments.length===1?"":"s"}</div>
              ${I.free?'<div class="free-label">Libre</div>':`
                <div class="mini-list">
                  ${I.appointments.slice(0,2).map(E=>`
                    <div class="week-pill ${E.kind||E.type}">
                      <span>${f(ce(E.kind||E.type))}</span>
                      <span class="time">${f(W(E.start))}</span>
                    </div>
                  `).join("")}
                  ${I.appointments.length>2?`<div class="subtle">+ ${I.appointments.length-2} más</div>`:""}
                </div>
              `}
            </div>
          `).join("")}
        `).join("")}
      </div>
    </div>
  `,D=u.filter(y=>y.freeRooms.length>0).map(y=>`
      <span class="chip">
        ${f(j(y.day,"EEE dd",{locale:T}))} · ${y.freeRooms.length} libres
      </span>
    `).join("");return pe(`Disponibilidad semanal - ${r}`,"Resumen semanal de consultorios para compartir con colaboradores.",`
      <div class="hero">
        <div>
          <h1>Disponibilidad semanal</h1>
          <p>${f(r)}</p>
        </div>
        <div class="meta">
          <span class="pill">Generado: ${f(v)}</span>
          <span class="pill">Consultorios: ${N.length}</span>
        </div>
      </div>
      <div class="summary">
        <div class="card"><div class="label">Turnos semana</div><div class="value">${l.length}</div></div>
        <div class="card"><div class="label">Consultorios libres hoy</div><div class="value">${b}/${N.length}</div></div>
        <div class="card"><div class="label">Días totalmente libres</div><div class="value">${p}</div></div>
        <div class="card"><div class="label">Bloques libres</div><div class="value">${m}</div></div>
      </div>
      <div class="section">
        <div class="section-header">
          <h2>Resumen rápido</h2>
          <span>${f(r)}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Total</th>
              <th>Sesiones</th>
              <th>Entrevistas</th>
              <th>Bloqueos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Semana actual</td>
              <td>${l.length}</td>
              <td>${g.Sesion||0}</td>
              <td>${g.Entrevista||0}</td>
              <td>${g.Bloqueo||0}</td>
            </tr>
            <tr>
              <td>Consultorios</td>
              <td colspan="4">${N.map(y=>f(y.name)).join(" · ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
      ${$}
      <div class="section">
        <div class="section-header">
          <h2>Días con espacio libre</h2>
          <span>${f(r)}</span>
        </div>
        <div class="day-free-list">
          ${D||'<div class="empty">No hay días libres en esta semana.</div>'}
        </div>
      </div>
      <div class="footer">Reporte semanal de disponibilidad listo para imprimir o guardar como PDF.</div>
    `,!0)},ee=(t,s)=>{Qe(t,s)},fe=Array.from({length:14},(t,s)=>8+s),he=88,tt=45,st={id:"unassigned",name:"Sin asignar",color:"bg-slate-400"},F=t=>{if(!t)return null;if(t instanceof Date)return Number.isNaN(t.getTime())?null:t;const s=String(t).trim();if(!s)return null;if(/^\d{4}-\d{2}-\d{2}$/.test(s)){const n=new Date(`${s}T00:00:00`);return Number.isNaN(n.getTime())?null:n}if(/^\d{2}\/\d{2}\/\d{4}$/.test(s)){const[n,l,o]=s.split("/").map(Number),u=new Date(o,l-1,n);return Number.isNaN(u.getTime())?null:u}const r=new Date(s);return Number.isNaN(r.getTime())?null:r},H=t=>{var r,n;const s=((r=t.patient)==null?void 0:r.trim())||((n=t.title)==null?void 0:n.trim())||"";return!s||s==="Nueva Reserva"?"Sin nombre":s},at=t=>t.kind||t.type||"session",q=t=>t==="interview"?"Entrevista":t==="block"?"Bloqueo":"Sesión",B=t=>t==="interview"?"bg-amber-100 text-amber-950 border-amber-200":t==="block"?"bg-violet-100 text-violet-950 border-violet-200":"bg-sky-100 text-sky-950 border-sky-200",te=t=>t==="interview"?"bg-amber-50 text-amber-800 border-amber-200":t==="block"?"bg-violet-50 text-violet-800 border-violet-200":"bg-sky-50 text-sky-800 border-sky-200",A=t=>{if(!t)return Number.POSITIVE_INFINITY;const s=String(t).match(/^(\d{1,2}):(\d{2})$/);if(!s)return Number.POSITIVE_INFINITY;const r=Number(s[1]),n=Number(s[2]);return Number.isNaN(r)||Number.isNaN(n)?Number.POSITIVE_INFINITY:r*60+n},se=t=>{const s=Math.max(t,0),r=Math.floor(s/60),n=s%60;return`${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`},V=t=>[...t].sort((s,r)=>A(s.start)-A(r.start)),ae=t=>{if(!t)return"--:--";const s=String(t).match(/(\d{1,2}):(\d{2})/);if(s){const r=Number(s[1]),n=Number(s[2]);if(!Number.isNaN(r)&&!Number.isNaN(n))return`${r.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`}return String(t).slice(0,5)},re=t=>t.coverageType||"particular",rt=t=>!!(t.professionalId||t.proId||t.roomId),U=(t,s)=>j(t,s,{locale:T}),nt=t=>t.charAt(0).toUpperCase()+t.slice(1),ot=({onOpenModal:t,appointments:s,focusDate:r})=>{const[n,l]=M.useState(new Date),[o,u]=M.useState("professionals"),[v,g]=M.useState("daily"),m=M.useRef(!1),p=M.useRef(null),[x]=Ce(),h=a=>{const d=x.find(c=>c.id===a.professionalId||a.proId),i=N.find(c=>c.id===a.roomId);return d&&i?`${d.name} · ${i.name}`:d?d.name:i?i.name:"Sin asignar"};M.useEffect(()=>{if(!r)return;const a=F(r);a&&(l(a),g("daily"),m.current=!0)},[r]),M.useEffect(()=>{if(m.current)return;const a=[...s].map(d=>({appointment:d,date:F(d.date)})).filter(d=>!!d.date).sort((d,i)=>d.date.getTime()-i.date.getTime())[0];a&&(l(a.date),g("daily"),m.current=!0)},[s]);const b=M.useMemo(()=>V(s.filter(a=>{const d=F(a.date);return d?Y(d,n):!1})),[s,n]),$=M.useMemo(()=>b.reduce((d,i)=>{const c=at(i);return d.total+=1,c==="interview"?d.interview+=1:c==="block"?d.block+=1:d.session+=1,d},{total:0,session:0,interview:0,block:0}),[b]),D=M.useMemo(()=>{if(o==="professionals"){const d=new Set(b.filter(i=>i.professionalId||i.proId).map(i=>i.professionalId||i.proId));return{label:"Profesionales libres",total:x.length,busy:d.size,free:Math.max(x.length-d.size,0)}}const a=new Set(b.filter(d=>d.roomId).map(d=>d.roomId));return{label:"Consultorios libres",total:N.length,busy:a.size,free:Math.max(N.length-a.size,0)}},[x.length,b,o]);M.useMemo(()=>s.filter(a=>{const d=F(a.date);return d?ne(d,n):!1}),[s,n]);const y=M.useMemo(()=>{const a=o==="professionals"?x.map(i=>({id:i.id,name:i.name,color:i.color})):N.map(i=>({id:i.id,name:i.name}));return b.some(i=>!rt(i))?[...a,st]:a},[b,o]),O=M.useMemo(()=>{const a=["bg-cyan-500","bg-emerald-500","bg-amber-500","bg-violet-500","bg-rose-500","bg-sky-500"];return N.map((i,c)=>({...i,colorClass:a[c%a.length],...(()=>{const w=V(b.filter(S=>S.roomId===i.id));return{totalAppointments:w.length,appointments:w.slice(0,2),overflowCount:Math.max(w.length-2,0)}})()}))},[b]),P=V(b),_=a=>P.filter(d=>je(d,a)),I=a=>(A(a)-480)/60*he,E=(a,d)=>{const i=A(d)-A(a);return Math.max(i/60*he,68)},Ne=a=>!a.professionalId&&!a.proId&&!a.roomId,je=(a,d)=>d==="unassigned"?Ne(a):o==="professionals"?(a.professionalId||a.proId)===d:a.roomId===d,$e=()=>{const a=Xe(n,s);ee(`Agenda diaria - ${U(n,"dd-MM-yyyy")}`,a)},Se=()=>{const a=Ze(n,s);ee(`Agenda mensual - ${U(n,"MMMM yyyy")}`,a)},Me=()=>{const a=et(n,s);ee(`Disponibilidad semanal - ${U(n,"dd-MM-yyyy")}`,a)},Ie=(a,d)=>{let c=Math.max(d,480),w=0;for(;w<24;){w+=1;const S=c+tt,L=a.filter(C=>overlaps(se(c),se(S),C.start,C.end)).sort((C,De)=>A(C.start)-A(De.start));if(L.length===0)return c;const X=Math.max(...L.map(C=>A(C.end||C.start)));c=Math.max(X,c+1)}return c},Te=(a,d,i)=>{const c=a.currentTarget.getBoundingClientRect(),w=a.clientY-c.top,S=d*60+(w>=c.height/2?30:0),L=_(i.id),X=Ie(L,S),C=j(n,"yyyy-MM-dd");t(o==="rooms"?i.id==="unassigned"?void 0:i.name:void 0,o==="professionals"?i.id==="unassigned"?void 0:i.name:void 0,void 0,{date:C,startTime:se(X)})};return M.useEffect(()=>{if(v!=="daily")return;const a=p.current;if(!a)return;const d=b[0],i=d?Math.max(I(d.start)-120,0):0,c=window.requestAnimationFrame(()=>{a.scrollTop=i});return()=>window.cancelAnimationFrame(c)},[b,v]),e.jsxs("div",{className:"h-full flex flex-col gap-1.5 md:gap-2 min-h-0",children:[e.jsxs("div",{className:"flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between",children:[e.jsx("div",{className:"hidden md:block space-y-1 max-w-2xl min-w-0",children:e.jsxs("div",{className:"flex items-start gap-2 md:gap-2.5",children:[e.jsx("div",{className:"p-1.5 rounded-2xl bg-gradient-to-br from-cyan-100 via-blue-50 to-lavender-100 text-blue-600 border border-blue-100 shrink-0 shadow-sm",children:e.jsx(Ae,{className:"w-4 h-4"})}),e.jsx("div",{className:"min-w-0",children:e.jsxs("h1",{className:"text-[1.05rem] md:text-[1.45rem] lg:text-[1.55rem] font-black text-slate-900 tracking-tight leading-tight",children:[e.jsx("span",{className:"md:hidden",children:"Agenda"}),e.jsx("span",{className:"hidden md:inline",children:"Agenda Operativa"})]})})]})}),e.jsxs("div",{className:"flex w-full flex-col gap-1.5 lg:w-auto lg:items-end",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-1.5 w-full",children:[e.jsxs("div",{className:"flex bg-slate-100/80 p-0.5 rounded-xl gap-1 w-full sm:w-auto border border-slate-200/70 shrink-0 min-w-0",children:[e.jsx("button",{onClick:()=>g("daily"),className:k("flex-1 md:flex-none px-2 md:px-2.5 py-1 md:py-1.25 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-[0.22em] transition-all",v==="daily"?"bg-white text-blue-600 shadow-sm":"text-slate-500"),children:"Día"}),e.jsx("button",{onClick:()=>g("monthly"),className:k("flex-1 md:flex-none px-2 md:px-2.5 py-1 md:py-1.25 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-[0.22em] transition-all",v==="monthly"?"bg-white text-blue-600 shadow-sm":"text-slate-500"),children:"Mes"})]}),v==="daily"&&e.jsxs("div",{className:"flex bg-white/80 rounded-xl border border-slate-100 p-1 shadow-sm w-full sm:w-auto backdrop-blur-sm shrink-0 min-w-0",children:[e.jsx("button",{onClick:()=>l(We(n)),className:"p-1.5 hover:bg-slate-50 rounded-lg transition-colors shrink-0",children:e.jsx(Ee,{className:"w-4 h-4 text-slate-400"})}),e.jsx("div",{className:"px-2 py-1.25 font-bold text-slate-700 text-center flex-1 md:min-w-[150px] text-[10px] md:text-[11px] leading-tight truncate",children:nt(U(n,"EEEE, d MMMM"))}),e.jsx("button",{onClick:()=>l(ge(n,1)),className:"p-1.5 hover:bg-slate-50 rounded-lg transition-colors shrink-0",children:e.jsx(ze,{className:"w-4 h-4 text-slate-400"})})]}),v==="daily"&&e.jsxs("div",{className:"bg-slate-100/80 p-0.5 rounded-xl flex gap-1 w-full sm:w-auto border border-slate-200/70 shrink-0 min-w-0",children:[e.jsxs("button",{onClick:()=>u("professionals"),className:k("flex-1 md:flex-none px-2 md:px-2.5 py-1 md:py-1.25 rounded-lg text-[9px] md:text-[10px] font-bold transition-all inline-flex items-center justify-center gap-1 whitespace-nowrap",o==="professionals"?"bg-white text-blue-600 shadow-sm":"text-slate-500 hover:text-slate-700"),children:[e.jsx(Re,{className:"w-3 h-3 shrink-0"}),"Profesionales"]}),e.jsxs("button",{onClick:()=>u("rooms"),className:k("flex-1 md:flex-none px-2 md:px-2.5 py-1 md:py-1.25 rounded-lg text-[9px] md:text-[10px] font-bold transition-all inline-flex items-center justify-center gap-1 whitespace-nowrap",o==="rooms"?"bg-white text-blue-600 shadow-sm":"text-slate-500 hover:text-slate-700"),children:[e.jsx(qe,{className:"w-3 h-3 shrink-0"}),"Consultorios"]})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-end gap-1.5 w-full",children:[e.jsxs("button",{onClick:()=>t(),className:"inline-flex items-center justify-center gap-2 px-3 md:px-3.5 py-1.5 md:py-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-lavender-500 text-white rounded-xl font-bold text-[10px] hover:brightness-105 transition-colors shadow-lg shadow-blue-200/40 w-full md:w-auto shrink-0 whitespace-nowrap",children:[e.jsx(Le,{className:"w-3.5 h-3.5 shrink-0"}),"Nuevo Bloque"]}),e.jsxs("button",{onClick:$e,className:"hidden sm:inline-flex items-center justify-center gap-2 px-3 md:px-3.5 py-1.5 md:py-2 bg-white/80 text-slate-700 border border-slate-200 rounded-xl font-bold text-[10px] hover:bg-slate-50 transition-colors shadow-sm w-full md:w-auto backdrop-blur-sm shrink-0 whitespace-nowrap",children:[e.jsx(Z,{className:"w-3.5 h-3.5 shrink-0"}),"PDF Día"]}),e.jsxs("button",{onClick:Se,className:"hidden sm:inline-flex items-center justify-center gap-2 px-3 md:px-3.5 py-1.5 md:py-2 bg-white/80 text-slate-700 border border-slate-200 rounded-xl font-bold text-[10px] hover:bg-slate-50 transition-colors shadow-sm w-full md:w-auto backdrop-blur-sm shrink-0 whitespace-nowrap",children:[e.jsx(Z,{className:"w-3.5 h-3.5 shrink-0"}),"PDF Mes"]}),e.jsxs("button",{onClick:Me,className:"inline-flex items-center justify-center gap-2 px-3 md:px-3.5 py-1.5 md:py-2 bg-white/80 text-slate-700 border border-slate-200 rounded-xl font-bold text-[10px] hover:bg-slate-50 transition-colors shadow-sm w-full md:w-auto backdrop-blur-sm shrink-0 whitespace-nowrap",children:[e.jsx(Z,{className:"w-3.5 h-3.5 shrink-0"}),"PDF Semana"]}),e.jsxs("button",{onClick:()=>{Oe().catch(a=>{console.warn("No se pudo refrescar la agenda manualmente.",a)})},className:"inline-flex items-center justify-center gap-2 px-3 md:px-3.5 py-1.5 md:py-2 bg-white/80 text-slate-700 border border-slate-200 rounded-xl font-bold text-[10px] hover:bg-slate-50 transition-colors shadow-sm w-full md:w-auto backdrop-blur-sm shrink-0 whitespace-nowrap",children:[e.jsx(Ue,{className:"w-3.5 h-3.5 shrink-0"}),"Refrescar"]})]})]})]}),e.jsxs("div",{className:"hidden md:grid gap-2 md:gap-3 lg:gap-4 [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] items-stretch",children:[e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white/85 px-3 py-2 shadow-sm",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.22em] text-slate-400",children:"Turnos del día"}),e.jsx("p",{className:"mt-1 text-lg font-black text-slate-900",children:$.total})]}),e.jsxs("div",{className:k("rounded-2xl border px-3 py-2 shadow-sm",te("session")),children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.22em] opacity-80",children:"Sesiones"}),e.jsx("p",{className:"mt-1 text-lg font-black",children:$.session})]}),e.jsxs("div",{className:k("rounded-2xl border px-3 py-2 shadow-sm",te("interview")),children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.22em] opacity-80",children:"Entrevistas"}),e.jsx("p",{className:"mt-1 text-lg font-black",children:$.interview})]}),e.jsxs("div",{className:k("rounded-2xl border px-3 py-2 shadow-sm",te("block")),children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.22em] opacity-80",children:"Bloqueos"}),e.jsx("p",{className:"mt-1 text-lg font-black",children:$.block})]}),e.jsxs("div",{className:"rounded-2xl border border-slate-200 bg-white/85 px-3 py-2 shadow-sm",children:[e.jsx("p",{className:"text-[9px] font-black uppercase tracking-[0.22em] text-slate-400",children:D.label}),e.jsxs("p",{className:"mt-1 text-lg font-black text-slate-900",children:[D.free,"/",D.total]}),e.jsxs("p",{className:"text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-400",children:[D.busy," ocupados"]})]})]}),e.jsx("div",{className:"flex-1 overflow-hidden bg-white/80 rounded-3xl border border-slate-100 shadow-sm flex flex-col min-h-0 backdrop-blur-sm",children:v==="daily"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:hidden p-2 pb-2 space-y-2 overflow-y-auto custom-scrollbar",children:o==="professionals"?e.jsx(e.Fragment,{children:P.length===0?e.jsxs("div",{className:"p-4 rounded-3xl border border-dashed border-slate-200 bg-slate-50 text-center",children:[e.jsx("p",{className:"text-sm font-bold text-slate-700",children:"No hay turnos para este día"}),e.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Creá un bloque nuevo para empezar."})]}):P.map(a=>{const d=x.find(c=>c.id===a.professionalId||a.proId),i=N.find(c=>c.id===a.roomId);return e.jsx("button",{type:"button",onClick:()=>t(i==null?void 0:i.name,d==null?void 0:d.name,a),className:k("w-full text-left rounded-[1.9rem] p-4.5 md:p-4 border shadow-md backdrop-blur-sm min-h-[118px]",B(a.kind||a.type)),children:e.jsxs("div",{className:"flex items-start justify-between gap-3.5",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("p",{className:"text-[11px] font-black uppercase tracking-[0.18em] mb-1.5",children:[a.start," - ",a.end]}),e.jsx("p",{className:"font-black text-[17px] truncate leading-tight",children:H(a)}),e.jsxs("p",{className:"mt-2 text-[12px] font-semibold uppercase tracking-wide opacity-85 truncate",children:[q(a.kind||a.type)," · ",h(a)]})]}),e.jsx("span",{className:"text-[10px] font-black uppercase opacity-75 shrink-0",children:re(a)})]})},a.id)})}):e.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:O.map(a=>e.jsxs("div",{className:"rounded-2xl border border-slate-100 bg-white/95 shadow-sm p-1 min-h-[172px] flex flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between gap-1 mb-0.5",children:[e.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[e.jsx("div",{className:k("w-5 h-5 rounded-lg flex items-center justify-center text-white font-black text-[8px]",a.colorClass),children:a.name[0]}),e.jsx("div",{className:"min-w-0",children:e.jsx("p",{className:"text-[8px] font-black text-slate-900 truncate leading-tight",children:a.name})})]}),e.jsx("span",{className:"text-[7px] font-black uppercase tracking-[0.08em] text-cyan-700 bg-cyan-50 border border-cyan-100 px-1 py-0.5 rounded-full shrink-0",children:a.totalAppointments})]}),e.jsx("div",{className:"flex-1 space-y-[3px]",children:a.appointments.length===0?e.jsx("div",{className:"h-full min-h-[128px] rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-1 py-1 text-center flex items-center justify-center",children:e.jsxs("div",{children:[e.jsx("div",{className:"mx-auto mb-1 h-6 w-6 rounded-full bg-slate-200/80 flex items-center justify-center text-slate-500 text-[10px] font-black",children:"0"}),e.jsx("p",{className:"text-[8px] font-bold text-slate-700",children:"Libre"})]})}):e.jsxs(e.Fragment,{children:[a.appointments.map(d=>{const i=x.find(w=>w.id===d.professionalId||w.id===d.proId),c=d.kind||d.type;return e.jsx("button",{type:"button",onClick:()=>t(a.name,i==null?void 0:i.name,d),className:k("w-full text-left rounded-xl px-1 py-1 border shadow-sm backdrop-blur-sm min-h-[40px] flex items-center",B(c)),children:e.jsxs("div",{className:"flex items-center gap-1.5 w-full min-w-0",children:[e.jsxs("div",{className:"shrink-0 w-7 text-[8px] font-black leading-none text-center",children:[e.jsx("div",{children:d.start}),e.jsx("div",{className:"text-[7px] opacity-70",children:"-"}),e.jsx("div",{children:d.end})]}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex items-center gap-1 min-w-0",children:[e.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-current/70 shrink-0"}),e.jsx("p",{className:"font-black text-[9px] truncate leading-tight",children:H(d)})]}),e.jsx("p",{className:"mt-0.5 text-[7px] font-semibold uppercase tracking-wide opacity-80 truncate",children:q(c)})]})]})},d.id)}),a.overflowCount>0?e.jsx("div",{className:"rounded-xl border border-dashed border-slate-200 bg-slate-50 px-1 py-1 text-center",children:e.jsxs("p",{className:"text-[7px] font-bold text-slate-500",children:["+",a.overflowCount," más"]})}):null]})})]},a.id))})}),e.jsxs("div",{className:"hidden md:flex border-b border-slate-100 bg-slate-50/40",children:[e.jsx("div",{className:"w-16 border-r border-slate-100 flex items-center justify-center bg-slate-100/50",children:e.jsx(Pe,{className:"w-4 h-4 text-slate-400"})}),e.jsx("div",{className:k("flex-1 grid divide-x divide-slate-100",o==="professionals"?"grid-cols-7":"grid-cols-4"),children:y.map(a=>e.jsxs("div",{className:"py-3 px-2 text-center",children:["color"in a?e.jsx("div",{className:k("w-9 h-9 rounded-xl mx-auto mb-1.5 flex items-center justify-center text-white font-bold shadow-sm text-sm",a.color),children:a.name[0]}):e.jsx("div",{className:"w-9 h-9 rounded-xl mx-auto mb-1.5 flex items-center justify-center bg-white text-slate-900 border border-slate-200 font-bold shadow-sm text-xs",children:a.name==="Sin asignar"?"—":a.name}),e.jsx("p",{className:"text-[10px] font-bold text-slate-900 uppercase tracking-wider leading-tight",children:a.name}),o==="rooms"&&a.id!=="unassigned"&&e.jsx("p",{className:"text-[9px] text-slate-400 uppercase font-medium mt-0.5",children:"Capacidad 1"})]},a.id))})]}),e.jsx("div",{ref:p,className:"flex-1 overflow-y-auto relative custom-scrollbar",children:e.jsxs("div",{className:"hidden md:flex min-h-[1232px]",children:[e.jsx("div",{className:"w-16 border-r border-slate-100 bg-slate-50/20 sticky left-0 z-20 backdrop-blur-sm",children:fe.map(a=>e.jsxs("div",{className:"relative h-[88px] border-b border-slate-200/60 flex items-start justify-center pt-2",children:[e.jsxs("span",{className:"text-[10px] font-black text-slate-400",children:[a.toString().padStart(2,"0"),":00"]}),e.jsx("span",{className:"absolute inset-x-0 top-1/2 border-t border-dashed border-slate-200/80"})]},a))}),e.jsx("div",{className:k("flex-1 grid divide-x divide-slate-100 relative",o==="professionals"?"grid-cols-7":"grid-cols-4"),children:y.map(a=>{const d=_(a.id);return e.jsxs("div",{className:"relative h-full cursor-cell transition-colors hover:bg-slate-50/50",children:[fe.map(i=>e.jsx("div",{className:"relative h-[88px] border-b border-slate-200/60 w-full cursor-cell",onClick:c=>Te(c,i,a),children:e.jsx("span",{className:"absolute inset-x-0 top-1/2 border-t border-dashed border-slate-200/70"})},i)),d.length===0?e.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:e.jsx("div",{className:"px-3 py-2 rounded-xl border border-dashed border-slate-200 bg-white/80 text-[10px] font-bold text-slate-400",children:"Sin turnos"})}):null,d.map(i=>{const c=x.find(S=>S.id===i.professionalId||i.proId),w=N.find(S=>S.id===i.roomId);return e.jsxs(Fe.div,{initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},onClick:S=>{S.stopPropagation(),t(w==null?void 0:w.name,c==null?void 0:c.name,i)},style:{top:`${I(i.start)}px`,height:`${E(i.start,i.end||i.start)}px`},className:k("absolute left-1 right-1 rounded-2xl p-2.5 border shadow-sm group cursor-pointer overflow-hidden transition-all hover:ring-2 ring-blue-100",B(i.kind||i.type)),children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-[8px] font-black tracking-[0.18em] uppercase px-1.5 py-0.5 rounded-full bg-white/80 text-slate-900 border border-white/80",children:[ae(i.start)," - ",ae(i.end)]}),e.jsx("span",{className:"text-[8px] font-black tracking-widest uppercase opacity-75",children:re(i)})]}),e.jsx("p",{className:"text-[12px] font-bold truncate leading-tight mt-1",children:H(i)}),e.jsxs("p",{className:"text-[10px] font-medium truncate opacity-85 mt-0.5",children:[q(i.kind||i.type)," · ",h(i)]})]},i.id)})]},a.id)})})]})})]}):e.jsx("div",{className:"flex-1 p-2 md:p-6 overflow-y-auto custom-scrollbar",children:e.jsxs("div",{className:"grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-2xl md:rounded-3xl overflow-hidden",children:[["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"].map(a=>e.jsx("div",{className:"bg-slate-50 py-1 px-1 text-center text-[7px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.12em]",children:a},a)),oe({start:J(ye(n)),end:Q(ve(n))}).map(a=>{const d=V(s.filter(i=>{const c=F(i.date);return c?Y(c,a):!1}));return e.jsxs("div",{className:k("min-h-[76px] md:min-h-[140px] bg-white/85 p-1 md:p-2 border-slate-50 transition-colors hover:bg-slate-50/60 cursor-pointer backdrop-blur-sm",!ne(a,n)&&"opacity-30"),onClick:()=>{l(a),g("daily")},children:[e.jsxs("div",{className:"flex items-center justify-between gap-1 mb-1",children:[e.jsx("span",{className:k("text-[10px] md:text-xs font-bold",Y(a,new Date)?"w-5 h-5 md:w-6 md:h-6 flex items-center justify-center bg-blue-600 text-white rounded-full":"text-slate-400"),children:j(a,"d")}),d.length>0&&e.jsx("span",{className:"text-[8px] md:text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700",children:d.length})]}),e.jsxs("div",{className:"space-y-1",children:[d.slice(0,2).map(i=>{const c=x.find(S=>S.id===i.professionalId||i.proId),w=N.find(S=>S.id===i.roomId);return e.jsxs("div",{className:k("text-[7px] md:text-[9px] px-1 py-1 rounded-lg font-bold truncate border leading-tight",B(i.kind||i.type)),children:[e.jsxs("div",{className:"flex items-center justify-between gap-2",children:[e.jsxs("span",{className:"truncate",children:[ae(i.start)," ",H(i)]}),e.jsx("span",{className:"shrink-0 opacity-70",children:re(i)})]}),e.jsxs("div",{className:"mt-0.5 flex items-center justify-between gap-2 text-[7px] font-bold uppercase opacity-70",children:[e.jsx("span",{className:"truncate",children:q(i.kind||i.type)}),e.jsx("span",{className:"truncate",children:(w==null?void 0:w.name)||(c==null?void 0:c.name)||"Sin asignar"})]})]},i.id)}),d.length>2&&e.jsxs("div",{className:"text-[8px] text-slate-400 font-bold pl-1",children:["+ ",d.length-2," más"]})]})]},a.toISOString())})]})})})]})};export{ot as Agenda};
