# 🚀 Inicio Rápido - Protocolo Trazados Viales

## ✅ Integración Completada!

Los diagramas PlantUML han sido **totalmente integrados** en el sitio web! 🎉

## 📋 Archivos Incluidos:

```
Protocolo_Web/
├── index.html                          # Página principal
├── style.css                           # Estilos
├── script.js                           # Funcionalidad general
├── plantuml-renderer.js               # ✨ Renderizador de diagramas
├── 1_flujo_general_modulo.puml        # Diagrama Flujo General
├── 2_flujo_ingreso_informacion.puml   # Diagrama Flujo Ingreso
├── 3_flujo_revision_fases.puml        # Diagrama Flujo Fases
├── 4_flujo_derivacion.puml            # Diagrama Flujo Derivación
├── 5_flujo_solicitud_informacion.puml # Diagrama Solicitud Info
└── README.md                           # Documentación completa
```

## 🎯 Cómo Ver los Diagramas:

### ⚠️ IMPORTANTE: Necesitas un servidor local

Los diagramas PlantUML requieren un servidor local para cargar los archivos `.puml`.
**No funciona abriendo el `index.html` directamente** (file://).

### 🐍 Opción 1: Python (Recomendado - Ya instalado en Mac)

```bash
# 1. Abre Terminal
# 2. Navega a la carpeta:
cd "/Users/fredyortegon/PLANT UML TRAZADOS VIALES/Protocolo_Web"

# 3. Inicia el servidor:
python3 -m http.server 8000

# 4. Abre en tu navegador:
# http://localhost:8000
```

### 🌐 Opción 2: Node.js (Si tienes npm instalado)

```bash
# Instalar http-server (solo una vez)
npm install -g http-server

# Iniciar servidor
cd "/Users/fredyortegon/PLANT UML TRAZADOS VIALES/Protocolo_Web"
http-server

# Abre: http://localhost:8080
```

### 🔧 Opción 3: VS Code (Si usas VS Code)

1. Instala la extensión "Live Server"
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

## 📊 Funcionalidades de los Diagramas:

Una vez que tengas el servidor corriendo:

1. **Navega** a cualquier sección con diagramas (ej: 6.6.1 Flujo General)
2. **Haz clic** en el botón "Ver Diagrama"
3. El diagrama se cargará automáticamente

### 🎛️ Pestañas de Visualización:

- **👁️ Vista Previa**: Diagrama renderizado en alta calidad (SVG)
- **📝 Código**: Código fuente PlantUML (con botón copiar)
- **🔗 Enlaces**: 
  - Abrir en PlantUML Online (editor web)
  - Descargar SVG
  - Descargar PNG
  - Descargar archivo .puml

## 🎨 Características del Sitio Web:

- ✅ Diagramas PlantUML integrados con carga dinámica
- ✅ Modo oscuro/claro (botón 🌙 en header)
- ✅ Búsqueda en tiempo real
- ✅ Navegación con scroll suave
- ✅ 100% Responsivo (móvil, tablet, escritorio)
- ✅ Botón "volver arriba"
- ✅ Barra de progreso de lectura
- ✅ Impresión optimizada

## 🔍 Ejemplo Rápido:

```bash
# Terminal 1: Iniciar servidor
cd "/Users/fredyortegon/PLANT UML TRAZADOS VIALES/Protocolo_Web"
python3 -m http.server 8000

# Terminal 2 o navegador:
open http://localhost:8000
```

## ✨ Ventajas de esta Implementación:

1. **Sin Instalaciones**: No necesitas instalar PlantUML localmente
2. **Actualización Automática**: Los diagramas se renderizan siempre actualizados
3. **Múltiples Formatos**: Descarga SVG, PNG o código fuente
4. **Fácil Edición**: Copia el código y edítalo en PlantUML Online
5. **Responsive**: Los diagramas se adaptan al tamaño de pantalla

## 🐛 Solución de Problemas:

### ❌ Los diagramas no cargan?

**Causa**: Probablemente abriste el archivo directamente (file://)

**Solución**: Usa un servidor local como se indica arriba.

### ❌ Error "Failed to load resource"?

**Causa**: Los archivos .puml no están en la ubicación correcta

**Solución**: 
```bash
cd "/Users/fredyortegon/PLANT UML TRAZADOS VIALES/Protocolo_Web"
ls -la *.puml  # Verifica que los archivos existan
```

### ❌ El diagrama se ve borroso?

**Causa**: Estás viendo la versión PNG

**Solución**: El sistema usa SVG por defecto (alta calidad). Si ves PNG, verifica tu conexión.

## 📧 Necesitas Ayuda?

Consulta el archivo `README.md` completo para más información detallada.

---

**¡Disfruta explorando la documentación con los diagramas integrados!** 🎉📊

