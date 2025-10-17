# 📐 Protocolo Trazados Viales - Documentación Web

## 📋 Descripción

Sitio web de documentación técnica y funcional para la Plataforma de Trazados Viales del Gobierno Autónomo Descentralizado de la Provincia de Pichincha (GADPP).

## 🚀 Características

- ✨ **Diseño Moderno y Responsivo**: Interfaz limpia y profesional que se adapta a todos los dispositivos
- 🌓 **Modo Oscuro/Claro**: Cambia entre temas según tu preferencia
- 🔍 **Búsqueda en Tiempo Real**: Encuentra rápidamente cualquier sección del documento
- 📱 **Mobile-First**: Optimizado para dispositivos móviles, tablets y escritorio
- 📊 **Navegación Intuitiva**: Menú lateral con acceso rápido a todas las secciones
- 🎨 **Animaciones Suaves**: Transiciones y efectos visuales agradables
- 🖨️ **Impresión Optimizada**: Estilos especiales para impresión de documentos
- ⬆️ **Botón "Volver Arriba"**: Navegación rápida al inicio del documento
- 📈 **Barra de Progreso**: Visualiza tu avance en la lectura del documento

## 📁 Estructura del Proyecto

```
Protocolo_Web/
│
├── index.html          # Página principal con todo el contenido
├── style.css           # Estilos CSS con variables y diseño responsivo
├── script.js           # Funcionalidad JavaScript interactiva
└── README.md          # Este archivo
```

## 🔧 Cómo Usar

### ⚠️ IMPORTANTE: Servidor Local Requerido

Para que los **diagramas PlantUML funcionen correctamente**, **DEBES** usar un servidor local (no funciona con `file://`):

#### ✅ Con Python (Recomendado):
```bash
cd "Protocolo_Web"
python3 -m http.server 8000
```
Luego abre en tu navegador: `http://localhost:8000`

#### Alternativas con Node.js o PHP:
```bash
# Node.js
npm install -g http-server
cd "Protocolo_Web"
http-server

# PHP
cd "Protocolo_Web"
php -S localhost:8000
```

### 💡 Uso Rápido

1. Abre una terminal
2. Ejecuta: `cd "/Users/fredyortegon/PLANT UML TRAZADOS VIALES/Protocolo_Web" && python3 -m http.server 8000`
3. Abre tu navegador en: `http://localhost:8000`
4. ¡Listo! Los diagramas deberían cargarse automáticamente

## 🎨 Características de la Interfaz

### Navegación
- **Menú Lateral**: Acceso rápido a todas las secciones y subsecciones
- **Búsqueda**: Filtra contenido en tiempo real mientras escribes
- **Enlaces Activos**: El enlace de la sección actual se resalta automáticamente

### Tema
- **Modo Claro**: Diseño limpio con fondo blanco (predeterminado)
- **Modo Oscuro**: Diseño oscuro para reducir fatiga visual
- **Persistencia**: Tu preferencia de tema se guarda automáticamente

### Diagramas
- Los diagramas PlantUML pueden renderizarse usando los archivos `.puml` incluidos
- Botones "Ver Diagrama" para expandir/colapsar visualizaciones
- Soporte para renderizado online de PlantUML

### Responsividad
- **Escritorio**: Menú lateral fijo, máxima productividad
- **Tablet**: Layout optimizado con menú colapsable
- **Móvil**: Menú hamburguesa, contenido adaptado

## 📊 Diagramas PlantUML Integrados ✨

Los diagramas PlantUML ahora están **totalmente integrados** en el sitio web! 🎉

### ✅ Funcionalidades Implementadas:

1. **Vista Previa Automática**: Los diagramas se renderizan automáticamente usando PlantUML Online
2. **Pestañas de Visualización**:
   - 👁️ **Vista Previa**: Visualiza el diagrama renderizado en SVG/PNG
   - 📝 **Código**: Ve y copia el código PlantUML fuente
   - 🔗 **Enlaces**: Accede a links externos y opciones de descarga

3. **Carga Dinámica**: Los diagramas se cargan solo cuando haces clic en "Ver Diagrama"
4. **Múltiples Formatos**: Descarga en SVG, PNG o archivo .puml
5. **Copiar Código**: Botón para copiar el código PlantUML al portapapeles

### 📁 Archivos PlantUML Incluidos:

- ✅ `1_flujo_general_modulo.puml` - Flujo General del Módulo
- ✅ `2_flujo_ingreso_informacion.puml` - Flujo de Ingreso de Información
- ✅ `3_flujo_revision_fases.puml` - Flujo de Revisión de Fases
- ✅ `4_flujo_derivacion.puml` - Flujo de Derivación
- ✅ `5_flujo_solicitud_informacion.puml` - Flujo de Solicitud de Información

### 🚀 Cómo Usar los Diagramas:

1. Navega a cualquier sección con diagramas
2. Haz clic en el botón "Ver Diagrama"
3. El diagrama se cargará automáticamente desde PlantUML Online
4. Usa las pestañas para cambiar entre vista previa, código y enlaces
5. Descarga en el formato que prefieras (SVG, PNG, PUML)

### 🔧 Opciones Adicionales:

#### Opción 1: Visualizar en PlantUML Online (ya integrado)
Los diagramas se renderizan automáticamente usando: `http://www.plantuml.com/plantuml/`

#### Opción 2: Instalar PlantUML Localmente
```bash
# Instalar PlantUML
brew install plantuml  # MacOS
apt-get install plantuml  # Linux

# Generar imágenes
plantuml *.puml
```

#### Opción 3: Usar extensión de VS Code
Instala la extensión "PlantUML" en VS Code para visualizar y editar los diagramas directamente.

### ⚠️ Nota Importante:

Para que los diagramas se carguen correctamente, necesitas ejecutar el sitio desde un servidor local (no funciona con `file://`):

```bash
# Opción recomendada: Python
cd Protocolo_Web
python3 -m http.server 8000
# Abre: http://localhost:8000
```

## 🎯 Secciones Incluidas

1. **Inicio** - Portada y datos generales
2. **Registro del Documento** - Información del proyecto y control de versiones
3. **Introducción y Antecedentes** - Contexto del proyecto
4. **Objetivo** - Propósito de la documentación
5. **Modelado del Sistema (UML)** - Diagramas y representaciones
6. **Contexto Operativo** - Marco de trabajo
7. **Gestión de Trámites** - Módulo principal
   - 6.1 Capacidades del Módulo
   - 6.2 Actores del Módulo
   - 6.6 Flujos de Proceso
     - 6.6.1 Flujo General
     - 6.6.2 Flujo de Ingreso
     - 6.6.3 Flujo de Fases
     - 6.6.4 Flujo de Derivación
     - 6.6.5 Solicitud de Información
8. **Módulo de Diseño** - Herramientas geoespaciales
9. **Módulo de Reportes** - Documentación y estadísticas
10. **Arquitectura** - Especificaciones técnicas

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `style.css`:

```css
:root {
    --primary-color: #2563eb;    /* Color principal */
    --secondary-color: #1e40af;  /* Color secundario */
    --success-color: #10b981;    /* Color de éxito */
    /* ... más variables */
}
```

### Agregar Nuevas Secciones
1. Añade la sección en `index.html` con un `id` único
2. Agrega el enlace correspondiente en el menú lateral
3. La funcionalidad de navegación se actualizará automáticamente

### Modificar Estilos
Todos los estilos están organizados por secciones en `style.css` con comentarios claros.

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome/Edge (último)
- ✅ Firefox (último)
- ✅ Safari (último)
- ✅ Opera (último)

### Dispositivos
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1920px)
- ✅ Tablet (768px - 1024px)
- ✅ Móvil (320px - 768px)

## 🖨️ Impresión

El sitio incluye estilos optimizados para impresión:
- Oculta elementos de navegación
- Ajusta márgenes y tamaños
- Mantiene la estructura de contenido

Para imprimir:
1. Haz clic en el botón de imprimir (🖨️) en el header
2. O usa `Ctrl/Cmd + P` en tu navegador

## 🚀 Despliegue en Render.com

### ✅ Archivos Listos para Despliegue

El proyecto está **completamente preparado** para subir a Render.com:

- ✅ `package.json` - Configuración del proyecto
- ✅ `render.yaml` - Configuración específica de Render
- ✅ `.gitignore` - Archivos a ignorar en Git
- ✅ Todos los archivos estáticos listos

### 📋 Pasos para Desplegar en Render.com

1. **Crear repositorio en GitHub:**
   ```bash
   cd "/Users/fredyortegon/PLANT UML TRAZADOS VIALES/Protocolo_Web"
   git init
   git add .
   git commit -m "Initial commit: Protocolo Trazados Viales"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/protocolo-trazados-viales.git
   git push -u origin main
   ```

2. **Conectar con Render.com:**
   - Ve a [render.com](https://render.com)
   - Crea una cuenta o inicia sesión
   - Haz clic en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub
   - Render detectará automáticamente la configuración

3. **Configuración automática:**
   - **Build Command**: `echo "No build required for static site"`
   - **Start Command**: `python3 -m http.server $PORT`
   - **Environment**: `Python 3`
   - **Plan**: Free (suficiente para este proyecto)

4. **Despliegue:**
   - Haz clic en "Create Web Service"
   - Render construirá y desplegará automáticamente
   - Tu sitio estará disponible en `https://tu-proyecto.onrender.com`

### 🌐 Características del Despliegue

- ✅ **HTTPS automático** - Certificado SSL incluido
- ✅ **CDN global** - Carga rápida desde cualquier lugar
- ✅ **Auto-deploy** - Se actualiza automáticamente con cada push
- ✅ **Plan gratuito** - Sin costo para sitios estáticos
- ✅ **PlantUML funcionando** - Los diagramas se renderizan correctamente

### 🔧 Configuración Avanzada

Si necesitas personalizar el despliegue, edita `render.yaml`:

```yaml
services:
  - type: web
    name: protocolo-trazados-viales
    env: static
    buildCommand: echo "No build required"
    startCommand: python3 -m http.server $PORT
    envVars:
      - key: PORT
        value: 10000
```

### 📊 Monitoreo

Render.com incluye:
- Logs en tiempo real
- Métricas de rendimiento
- Alertas de disponibilidad
- Historial de despliegues

## 🚀 Mejoras Futuras Sugeridas

- [ ] Integración con API para datos dinámicos
- [ ] Exportación a PDF desde el navegador
- [ ] Modo presentación para capacitaciones
- [ ] Versiones en otros idiomas
- [ ] Integración con sistema de comentarios
- [ ] Analytics de uso y lectura
- [ ] Despliegue automático con GitHub Actions

## 👥 Créditos

**Cliente**: Gobierno Autónomo Descentralizado de la Provincia de Pichincha (GADPP)

**Desarrollo**: Infinity Solutions RII Cia. Ltda.

**Proyecto**: Consultoría del Servicio Técnico Especializado para la Gestión de Trámites de Trazados Viales y Derivados

**Contrato**: N° 139-DCP-2025

**Versión**: 2.0 - Octubre 2025

## 📄 Licencia

Documento propiedad del GADPP. Todos los derechos reservados.

---

**Última actualización**: Octubre 2025

Para soporte o preguntas sobre el documento, contacta a la Dirección de Vialidad del GADPP.

