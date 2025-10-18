// PlantUML Renderer - Solución Simple y Funcional

// Código PlantUML embebido directamente
const diagramCodes = {
    'diagram-flujo-general': `@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo General del Módulo de Trazados Viales

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
participant "Motor de Asignación" as Motor
participant "Grupo de Fase" as GrupoFase
actor "Supervisor" as Supervisor
actor "Técnico" as Tecnico
actor "Derivación" as Derivacion
database "Expediente Digital" as BD

== REGISTRO DE TRÁMITE ==
Ciudadano -> Ventanilla : Entrega información y documentación
Ventanilla -> Ventanilla : Analista revisa y valida requisitos
Ventanilla -> Herramienta : Registrar Trámite
Herramienta -> Ventanilla : Confirmar creación del trámite

== ASIGNACIÓN AUTOMÁTICA ==
Herramienta -> Motor : Solicitar asignación de responsable por fase
Motor -> GrupoFase : Solicitar siguiente técnico en rotación
GrupoFase -> Motor : Devolver técnico seleccionado
Motor -> Herramienta : Asignar trámite al técnico

== NOTIFICACIONES ==
Herramienta -> Supervisor : Notificar asignación
Herramienta -> Tecnico : Enviar notificación
Herramienta -> Ciudadano : Enviar confirmación
Herramienta -> BD : Registrar evento de asignación

== GESTIÓN DE FASES ==
loop Por cada fase del trámite
  Tecnico -> Herramienta : Trabajar en la fase actual
  Herramienta -> Supervisor : Actualizar seguimiento
  
  alt Solicitud de información
    Tecnico -> Herramienta : Solicitar información al ciudadano
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información recibida
    Herramienta -> Tecnico : Notificar recepción
  else Derivación
    Tecnico -> Herramienta : Solicitar derivación
    Herramienta -> Derivacion : Enviar trámite a derivación
    Derivacion -> Derivacion : Procesar trámite
    Derivacion -> Herramienta : Devolver trámite procesado
    Herramienta -> Tecnico : Notificar continuación
  end
  
  Tecnico -> Herramienta : Finalizar fase y cargar entregables
  Herramienta -> BD : Registrar finalización de fase
  Herramienta -> Motor : Asignar siguiente fase
  Motor -> Herramienta : Confirmar nueva asignación
  Herramienta -> Tecnico : Notificar nueva fase
  Herramienta -> Supervisor : Actualizar seguimiento
end

== CIERRE DEL TRÁMITE ==
Herramienta -> BD : Guardar resolución final
Herramienta -> Ciudadano : Notificar cierre
Herramienta -> Tecnico : Notificar a todos los técnicos participantes
Herramienta -> Supervisor : Informe final del trámite

@enduml`,
    'diagram-flujo-ingreso': '@startuml',  // Se agregará después
    'diagram-flujo-fases': '@startuml',    // Se agregará después
    'diagram-flujo-derivacion': '@startuml', // Se agregará después
    'diagram-flujo-solicitud': '@startuml'   // Se agregará después
};

function loadAndRenderDiagram(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const code = diagramCodes[containerId];
    if (!code) return;

    try {
        container.innerHTML = '<div style="padding:2rem;text-align:center;color:var(--text-secondary)"><div style="font-size:2rem">⏳</div><p>Cargando...</p></div>';
        renderDiagram(code, container, containerId);
    } catch (error) {
        container.innerHTML = `<div style="padding:1.5rem;background:rgba(239,68,68,0.1);border:1px solid #ef4444;border-radius:0.5rem;color:#991b1b"><strong>⚠️ Error:</strong> ${error.message}</div>`;
    }
}

function renderDiagram(code, container, filename) {
    const escapedCode = code.replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": "&#039;" }[m]));
    const encodedForCopy = btoa(unescape(encodeURIComponent(code)));

    // Crear un contenedor temporal para enviar a PlantUML
    const tempId = 'temp-' + Date.now();

    container.innerHTML = `
<div style="background:white;padding:1.5rem;border-radius:0.5rem">
    <div style="display:flex;gap:0.5rem;margin-bottom:1rem;border-bottom:2px solid #e2e8f0;padding-bottom:0.5rem;flex-wrap:wrap">
        <button class="tab-btn active" data-tab="preview-${container.id}" style="padding:0.5rem 1rem;background:#2563eb;color:white;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">👁️ Vista Previa</button>
        <button class="tab-btn" data-tab="code-${container.id}" style="padding:0.5rem 1rem;background:transparent;color:#1e293b;border:1px solid #e2e8f0;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">📝 Código</button>
        <button class="tab-btn" data-tab="links-${container.id}" style="padding:0.5rem 1rem;background:transparent;color:#1e293b;border:1px solid #e2e8f0;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">🔗 Enlaces</button>
    </div>
    
    <div id="preview-${container.id}" class="tab-content">
        <div id="${tempId}" style="text-align:center;padding:2rem;color:#64748b">
            <div style="font-size:2rem">⏳</div>
            <p>Generando diagrama...</p>
        </div>
        <p style="text-align:center;font-size:0.875rem;color:#64748b;margin-top:1rem">💡 <strong>Archivo:</strong> ${filename}</p>
    </div>
    
    <div id="code-${container.id}" class="tab-content" style="display:none">
        <div style="position:relative">
            <pre style="background:#f8fafc;padding:1rem;border-radius:0.5rem;overflow-x:auto;font-size:0.875rem;font-family:monospace;line-height:1.6;max-height:500px;overflow-y:auto"><code>${escapedCode}</code></pre>
            <button onclick="copyCode('${encodedForCopy}')" style="position:absolute;top:0.5rem;right:0.5rem;padding:0.5rem 1rem;background:#10b981;color:white;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.875rem">📋 Copiar</button>
        </div>
    </div>
    
    <div id="links-${container.id}" class="tab-content" style="display:none">
        <div style="display:flex;flex-direction:column;gap:1rem">
            <div style="padding:1rem;background:#f1f5f9;border-radius:0.5rem">
                <h5 style="margin-bottom:0.75rem;font-size:1rem">📄 Archivo Local</h5>
                <a href="../${filename}" target="_blank" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.25rem;background:#2563eb;color:white;text-decoration:none;border-radius:0.5rem;font-size:0.9375rem;font-weight:500">
                    <span>📂</span><span>Abrir archivo .puml</span>
                </a>
                <p style="margin-top:0.75rem;font-size:0.875rem;color:#64748b">Puedes usar este archivo en tu editor PlantUML favorito</p>
            </div>
            <div style="padding:1rem;background:#fff3cd;border:1px solid #ffc107;border-radius:0.5rem">
                <h5 style="margin-bottom:0.75rem;font-size:1rem">⚠️ Nota sobre la visualización</h5>
                <p style="font-size:0.875rem;color:#856404;line-height:1.6">
                    Para visualizar los diagramas en esta página web, necesitas un servidor local activo.<br>
                    <strong>Usa:</strong> <code style="background:#fff;padding:0.25rem 0.5rem;border-radius:0.25rem;font-family:monospace">python3 -m http.server 8000</code> en la carpeta del proyecto.
                </p>
            </div>
        </div>
    </div>
</div>`;

    setupTabs(container);

    // Generar imagen usando el servicio de PlantUML con formato form
    generatePlantUMLImage(code, tempId);
}

async function generatePlantUMLImage(code, tempId) {
    const tempDiv = document.getElementById(tempId);

    try {
        // Codificar correctamente con UTF-8 y deflate
        const encoded = encodePlantUML(code);

        // Usar la URL pública de PlantUML con el código codificado y el prefijo ~1
        const imageUrl = `https://www.plantuml.com/plantuml/svg/~1${encoded}`;

        if (tempDiv) {
            tempDiv.innerHTML = `
                <div style="background:#f8fafc;padding:1rem;border-radius:0.5rem;overflow-x:auto;text-align:center">
                    <img src="${imageUrl}" alt="Diagrama PlantUML" style="max-width:100%;height:auto" 
                         onerror="this.parentElement.innerHTML='<div style=\\'padding:1.5rem;background:rgba(239,68,68,0.1);border:1px solid #ef4444;border-radius:0.5rem;color:#991b1b\\'><strong>⚠️ Error al cargar diagrama</strong><p style=\\'margin-top:0.5rem;font-size:0.875rem\\'>Usa la pestaña \\'📝 Código\\' para copiar el código y pegarlo en <a href=\\'https://www.plantuml.com/plantuml/uml\\' target=\\'_blank\\' style=\\'color:#2563eb;text-decoration:underline\\'>PlantUML Online</a></p></div>'" />
                </div>`;
        }

    } catch (error) {
        if (tempDiv) {
            tempDiv.innerHTML = `
                <div style="padding:1.5rem;background:rgba(239,68,68,0.1);border:1px solid #ef4444;border-radius:0.5rem;color:#991b1b">
                    <strong>⚠️ Error al procesar diagrama</strong>
                    <p style="margin-top:0.5rem;font-size:0.875rem">
                        ${error.message}
                    </p>
                    <p style="margin-top:1rem;font-size:0.875rem">
                        Usa la pestaña "📝 Código" para ver el código PlantUML y copiarlo a 
                        <a href="https://www.plantuml.com/plantuml/uml" target="_blank" style="color:#2563eb;text-decoration:underline">PlantUML Online</a>
                    </p>
                </div>`;
        }
    }
}

// Implementación de la codificación PlantUML con soporte UTF-8 correcto
function encodePlantUML(text) {
    // Convertir texto a bytes UTF-8 usando TextEncoder
    const utf8Bytes = new TextEncoder().encode(text);

    // Comprimir usando deflate
    const compressed = pako.deflate(utf8Bytes, { level: 9 });

    // Codificar usando el alfabeto especial de PlantUML
    return encode64(compressed);
}

function encode64(data) {
    let r = '';
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

    for (let i = 0; i < data.length; i += 3) {
        if (i + 2 === data.length) {
            r += append3bytes(data[i], data[i + 1], 0);
        } else if (i + 1 === data.length) {
            r += append3bytes(data[i], 0, 0);
        } else {
            r += append3bytes(data[i], data[i + 1], data[i + 2]);
        }
    }
    return r;

    function append3bytes(b1, b2, b3) {
        const c1 = b1 >> 2;
        const c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
        const c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
        const c4 = b3 & 0x3F;
        return alphabet.charAt(c1) + alphabet.charAt(c2) + alphabet.charAt(c3) + alphabet.charAt(c4);
    }
}

function setupTabs(container) {
    const tabs = container.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => {
                t.style.background = 'transparent';
                t.style.color = '#1e293b';
                t.style.border = '1px solid #e2e8f0';
                t.classList.remove('active');
            });

            this.style.background = '#2563eb';
            this.style.color = 'white';
            this.style.border = 'none';
            this.classList.add('active');

            const targetId = this.dataset.tab;
            container.querySelectorAll('.tab-content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(targetId).style.display = 'block';
        });
    });
}

function copyCode(encoded) {
    const code = decodeURIComponent(escape(atob(encoded)));
    navigator.clipboard.writeText(code).then(() => {
        alert('✓ Código copiado al portapapeles');
    }).catch(() => {
        alert('❌ Error al copiar');
    });
}

const originalExpandDiagram = window.expandDiagram;
window.expandDiagram = function (diagramId) {
    const diagram = document.getElementById(diagramId);
    const button = diagram?.previousElementSibling?.querySelector('.btn-expand');

    if (diagram && diagram.classList.contains('hidden')) {
        diagram.classList.remove('hidden');
        if (button) button.textContent = 'Ocultar Diagrama';
        if (diagram.querySelector('div[style*="Cargando"]') || !diagram.querySelector('.tab-btn')) {
            loadAndRenderDiagram(diagramId);
        }
    } else if (diagram) {
        diagram.classList.add('hidden');
        if (button) button.textContent = 'Ver Diagrama';
    }
};

console.log('📊 PlantUML Simple Renderer cargado');

