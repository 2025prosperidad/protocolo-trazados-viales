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
    'diagram-flujo-ingreso': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Ingreso de Información y Registro de Trámite

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
participant "Motor de Asignación" as Motor
participant "Grupo de Fase" as GrupoFase
actor "Supervisor" as Supervisor
actor "Técnico" as Tecnico
database "Expediente Digital" as BD

== INICIO: RECEPCIÓN DE SOLICITUD ==
Ciudadano -> Ventanilla : Entrega información y documentación requerida
Ventanilla -> Ventanilla : Analista revisa y valida requisitos

== REGISTRO EN EL SISTEMA ==
Ventanilla -> Herramienta : Registrar Trámite
Herramienta -> Ventanilla : Mostrar confirmación de creación
Herramienta -> BD : Crear expediente digital

== ASIGNACIÓN AUTOMÁTICA DE RESPONSABLE ==
Herramienta -> Motor : Solicitar asignación de responsable por fase
Motor -> GrupoFase : Solicitar siguiente técnico en rotación según perfil
GrupoFase -> Motor : Devolver técnico seleccionado
Motor -> Herramienta : Asignar trámite al técnico

== NOTIFICACIONES Y ACTIVACIÓN ==
Herramienta -> BD : Registrar evento de asignación
Herramienta -> Supervisor : Notificar asignación (vista en panel)
Herramienta -> Tecnico : Enviar notificación (correo + WhatsApp)
Herramienta -> Ciudadano : Enviar confirmación (correo + WhatsApp)
Tecnico -> Herramienta : Acceder al expediente y comenzar gestión

@enduml`,
    'diagram-flujo-fases': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Revisión de Fases de Trámite

participant "Herramienta" as Herramienta
participant "Motor de Asignación" as Motor
participant "Grupo de Fase" as GrupoFase
actor "Supervisor" as Supervisor
actor "Técnico" as Tecnico
actor "Ciudadano" as Ciudadano
database "Expediente Digital" as BD

== CICLO DE GESTIÓN DE FASES ==

loop Por cada fase del trámite
  
  == INICIO DE FASE ==
  Tecnico -> Herramienta : Acceder a la fase asignada
  Herramienta -> Tecnico : Mostrar información del trámite
  Tecnico -> Herramienta : Iniciar trabajo de la fase asignada
  Herramienta -> Supervisor : Actualizar seguimiento del trámite
  
  == GESTIÓN DE LA FASE ==
  Tecnico -> Tecnico : Realizar análisis técnico
  
  == FINALIZACIÓN DE FASE ==
  Tecnico -> Herramienta : Finalizar fase y cargar entregables
  Herramienta -> Supervisor : Actualizar seguimiento de la fase
  Herramienta -> BD : Registrar finalización de fase
  
  == TRANSICIÓN A SIGUIENTE FASE ==
  Herramienta -> Motor : Evaluar y asignar siguiente fase automáticamente
  Motor -> GrupoFase : Seleccionar grupo/miembro disponible para siguiente fase
  GrupoFase -> Motor : Devolver técnico seleccionado
  Motor -> Herramienta : Confirmar nueva asignación
  
  == NOTIFICACIONES DE AVANCE ==
  Herramienta -> Tecnico : Notificar nueva fase asignada
  Herramienta -> Ciudadano : Notificar avance del trámite
  Herramienta -> Supervisor : Actualizar seguimiento con nueva fase
  
end

@enduml`,
    'diagram-flujo-derivacion': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Derivación de Trámites

participant "Herramienta" as Herramienta
actor "Técnico" as Tecnico
actor "Derivación" as Derivacion
actor "Supervisor" as Supervisor
actor "Ciudadano" as Ciudadano
database "Expediente Digital" as BD

== INICIO: DETECCIÓN DE NECESIDAD DE DERIVACIÓN ==

Tecnico -> Tecnico : Analizar trámite en fase actual
Tecnico -> Herramienta : Solicitar derivación

== CAMBIO DE ESTADO Y NOTIFICACIONES ==

Herramienta -> BD : Cambiar estado del trámite a "En Derivación"
Herramienta -> Derivacion : Enviar trámite a derivación
Herramienta -> Supervisor : Notificar derivación del trámite
Herramienta -> Ciudadano : Notificar pausa temporal del trámite

== GESTIÓN EN DERIVACIÓN ==

Derivacion -> Derivacion : Procesar y gestionar el trámite derivado

== RESPUESTA Y REACTIVACIÓN ==

Derivacion -> Herramienta : Responder y devolver trámite procesado
Herramienta -> BD : Cambiar estado a "En Proceso"
Herramienta -> Tecnico : Notificar continuación después de derivación
Herramienta -> Supervisor : Actualizar seguimiento post-derivación
Herramienta -> Ciudadano : Notificar reactivación del trámite
Tecnico -> Herramienta : Continuar con la gestión de la fase

@enduml`,
    'diagram-flujo-solicitud': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo de Solicitud de Información al Usuario

participant "Herramienta" as Herramienta
actor "Técnico" as Tecnico
actor "Ventanilla (Analista)" as Ventanilla
actor "Ciudadano" as Ciudadano
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== INICIO: DETECCIÓN DE INFORMACIÓN FALTANTE ==

Tecnico -> Tecnico : Revisar documentación en fase actual
Tecnico -> Herramienta : Solicitar información o documentación al ciudadano

== CAMBIO DE ESTADO Y NOTIFICACIÓN ==

Herramienta -> BD : Cambiar estado del trámite a "Solicitud de Información"
Herramienta -> Ciudadano : Notificar solicitud de información
Herramienta -> Supervisor : Notificar pausa del trámite

== RESPUESTA DEL CIUDADANO ==

Ciudadano -> Ventanilla : Entregar información solicitada
Ventanilla -> Ventanilla : Verificar documentación recibida

== REGISTRO Y REACTIVACIÓN ==

Ventanilla -> Herramienta : Registrar información recibida
Herramienta -> BD : Actualizar expediente y cambiar estado a "En Proceso"
Herramienta -> Tecnico : Notificar recepción de información
Herramienta -> Supervisor : Actualizar seguimiento
Herramienta -> Ciudadano : Confirmar recepción y reactivación

== CONTINUACIÓN DEL PROCESO ==

Tecnico -> Herramienta : Continuar con la gestión de la fase
Tecnico -> Tecnico : Completar análisis técnico

@enduml`,
    'diagram-trazado-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Trazado Vial
subtitle Duración total estimada: 162 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Geógrafo" as TecGeo
actor "Técnico Arquitecto" as TecArq
actor "Técnico Topógrafo" as TecTopo
actor "Técnico Ing. Civil" as TecCivil
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (8 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecGeo : Asignar fase de competencia
TecGeo -> TecGeo : Verificar competencia

alt Es competente
  TecGeo -> TecGeo : Revisar requisitos completos
  alt Requisitos completos
    TecGeo -> Herramienta : Elaborar mapa de competencia
    Herramienta -> BD : Guardar mapa
  else Requisitos incompletos
    TecGeo -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecGeo -> Herramienta : Elaborar informe de no competencia
  Herramienta -> Supervisor : Revisar informe
  Supervisor -> BD : Aprobar y finalizar
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: INFORME DE PERTINENCIA (25 días) ==
Herramienta -> TecArq : Asignar fase de pertinencia
TecArq -> TecArq : Analizar pertinencia

alt Requiere información
  TecArq -> Herramienta : Solicitar información a terceros
  Herramienta -> TecArq : Recibir información
end

alt Es pertinente
  TecArq -> Herramienta : Elaborar informe de pertinencia
  TecArq -> Herramienta : Elaborar mapa de pertinencia
  Herramienta -> Supervisor : Revisar documentos
  Supervisor -> BD : Aprobar fase
else No es pertinente
  TecArq -> Herramienta : Elaborar informe de no pertinencia
  Herramienta -> Supervisor : Revisar y aprobar
  Supervisor -> BD : Finalizar trámite
  Herramienta -> Ciudadano : Notificar resultado
end

== FASE 3: TOPOGRAFÍA (67 días) ==
Herramienta -> TecTopo : Asignar fase de topografía
TecTopo -> TecTopo : Revisar información

alt Cuenta con topografía
  TecTopo -> TecTopo : Validar topografía
else No cuenta con topografía
  TecTopo -> TecTopo : Inspección de la vía
  TecTopo -> TecTopo : Posicionamiento puntos GPS
  TecTopo -> TecTopo : Levantamiento topográfico
end

TecTopo -> Herramienta : Elaborar informe topográfico y dibujo
Herramienta -> Supervisor : Revisar informe
Supervisor -> BD : Aprobar fase

== FASE 4: DISEÑO GEOMÉTRICO (30 días) ==
Herramienta -> TecCivil : Asignar fase de diseño
TecCivil -> TecCivil : Elaborar diseño geométrico
TecCivil -> Herramienta : Elaborar informe y planos
Herramienta -> Supervisor : Revisar diseño
Supervisor -> BD : Aprobar fase

== FASE 5: INFORME DE TRAZADO VIAL (7 días) ==
TecCivil -> TecCivil : Elaborar informe de trazado vial
TecCivil -> Herramienta : Cargar informe
Herramienta -> Supervisor : Revisar informe
Supervisor -> BD : Aprobar fase

== FASE 6: RESOLUCIONES Y OFICIOS (25 días) ==
TecCivil -> Herramienta : Elaborar resolución
Herramienta -> Supervisor : Revisión técnica previa
Supervisor -> Supervisor : Revisión coordinación
Supervisor -> Supervisor : Revisión y firma director
Herramienta -> BD : Guardar resolución final
Herramienta -> Ciudadano : Enviar resolución
Herramienta -> TecCivil : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
    'diagram-certificacion-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Certificación Vial
subtitle Duración total estimada: 24 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Ing. Civil" as TecCivil
actor "Técnico Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (4 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecCivil : Asignar fase de competencia
TecCivil -> TecCivil : Verificar competencia

alt Es competente
  TecCivil -> TecCivil : Revisar requisitos completos
  alt Requisitos completos
    TecCivil -> Herramienta : Continuar a siguiente fase
  else Requisitos incompletos
    TecCivil -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecCivil -> Herramienta : Elaborar respuesta de no competencia
  Herramienta -> Supervisor : Revisar respuesta
  Supervisor -> Supervisor : Revisar y firmar director
  Herramienta -> BD : Guardar respuesta
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN DE APROBACIÓN (5 días) ==
Herramienta -> TecGeo : Asignar fase de verificación
TecGeo -> TecGeo : Analizar y verificar pertinencia
TecGeo -> TecGeo : Verificar aprobaciones de vías

alt Requiere información adicional
  TecGeo -> Herramienta : Solicitar información
  Herramienta -> Ciudadano : Notificar solicitud
  Ciudadano -> Ventanilla : Entregar información
  Ventanilla -> Herramienta : Registrar información
  Herramienta -> Supervisor : Revisar oficio
  Supervisor -> Supervisor : Revisar y firmar director
end

TecGeo -> Herramienta : Completar verificación
Herramienta -> BD : Guardar verificación

== FASE 3: INFORME DE CERTIFICACIÓN (15 días) ==
TecGeo -> Herramienta : Elaborar informe de certificación vial
Herramienta -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
Supervisor -> Supervisor : Revisar y firma director
Herramienta -> BD : Guardar certificación final
Herramienta -> Ciudadano : Enviar certificación vial
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
    'diagram-replanteo-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Replanteo Vial
subtitle Duración total estimada: 30 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Arquitecto" as TecArq
actor "Técnico Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (4 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecArq : Asignar fase de competencia
TecArq -> TecArq : Verificar competencia

alt Es competente
  TecArq -> TecArq : Revisar requisitos completos
  alt Requisitos completos
    TecArq -> Herramienta : Continuar a siguiente fase
  else Requisitos incompletos
    TecArq -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecArq -> Herramienta : Elaborar respuesta de no competencia
  Herramienta -> Supervisor : Revisar respuesta
  Supervisor -> Supervisor : Revisar y firmar director
  Herramienta -> BD : Guardar respuesta
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN DE APROBACIÓN (6 días) ==
Herramienta -> TecArq : Asignar fase de verificación
TecArq -> TecArq : Verificar información

alt Existen planos por digitalizar
  TecArq -> TecArq : Digitalización de planos escaneados
end

TecArq -> TecArq : Analizar y verificar pertinencia
TecArq -> TecArq : Verificar vías aprobadas

alt Requiere inspección
  TecArq -> TecArq : Inspección en territorio
end

Herramienta -> BD : Guardar verificación

== FASE 3: INFORME DE REPLANTEO (17 días) ==
Herramienta -> TecGeo : Asignar elaboración de informe
TecGeo -> Herramienta : Elaborar informe de replanteo vial
Herramienta -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> Herramienta : Elaborar oficio para usuario
Supervisor -> Supervisor : Revisar y firma director
Herramienta -> BD : Guardar informe final
Herramienta -> Ciudadano : Enviar respuesta de replanteo vial
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
    'diagram-secciones-transversales': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Secciones Transversales
subtitle Duración total estimada: 30 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (8 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecGeo : Asignar fase de competencia
TecGeo -> TecGeo : Verificar competencia

alt Es competente
  TecGeo -> TecGeo : Revisar requisitos completos
  alt Requisitos completos
    TecGeo -> Herramienta : Elaborar mapa de competencia
    Herramienta -> BD : Guardar mapa
  else Requisitos incompletos
    TecGeo -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecGeo -> Herramienta : Elaborar informe de no competencia
  Herramienta -> Supervisor : Revisar informe
  Supervisor -> Supervisor : Revisar y firmar director
  Herramienta -> BD : Guardar respuesta
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN DE APROBACIÓN (2 días) ==
Herramienta -> TecGeo : Asignar fase de verificación
TecGeo -> TecGeo : Verificar información de aprobaciones viales
Herramienta -> BD : Guardar verificación

== FASE 3: INSPECCIÓN (2 días) ==
TecGeo -> TecGeo : Inspección en territorio
Herramienta -> BD : Registrar inspección

== FASE 4: INFORME DE SECCIÓN (18 días) ==
TecGeo -> Herramienta : Elaborar informe de sección transversal
Herramienta -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> Herramienta : Elaborar oficio de respuesta
Supervisor -> Supervisor : Revisar y firma director
Herramienta -> BD : Guardar informe final
Herramienta -> Ciudadano : Enviar informe de secciones transversales
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
    'diagram-colocacion-eje': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Colocación de Eje Vial
subtitle Duración total estimada: 30 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Arquitecto" as TecArq
actor "Técnico Topógrafo" as TecTopo
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (3 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecArq : Asignar fase de competencia
TecArq -> TecArq : Verificar competencia

alt Es competente
  TecArq -> TecArq : Revisar requisitos completos
  alt Requisitos completos
    TecArq -> Herramienta : Continuar a siguiente fase
  else Requisitos incompletos
    TecArq -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecArq -> Herramienta : Elaborar respuesta de no competencia
  Herramienta -> Supervisor : Revisar respuesta
  Supervisor -> Supervisor : Revisar y firmar director
  Herramienta -> BD : Guardar respuesta
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN DE APROBACIÓN (4 días) ==
Herramienta -> TecArq : Asignar fase de verificación
TecArq -> TecArq : Revisar aprobación de la vía

alt Información completa
  TecArq -> Herramienta : Continuar a siguiente fase
else Requiere información
  TecArq -> Herramienta : Solicitar información
  Herramienta -> Ciudadano : Notificar solicitud
end

Herramienta -> BD : Guardar verificación

== FASE 3: DETERMINACIÓN COORDENADAS EJE (4 días) ==
TecArq -> Herramienta : Elaborar informe previo de colocación
Herramienta -> Supervisor : Revisar informe previo
Supervisor -> Supervisor : Revisar coordinación
Herramienta -> BD : Guardar informe previo

== FASE 4: TRABAJO EN TERRITORIO (7 días) ==
Herramienta -> TecTopo : Asignar colocación física
TecTopo -> TecTopo : Colocación del eje vial
Herramienta -> BD : Registrar colocación

== FASE 5: INFORME DE COLOCACIÓN (12 días) ==
TecTopo -> Herramienta : Elaborar informe de colocación de eje vial
Herramienta -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecTopo -> Herramienta : Elaborar oficios de respuesta
Supervisor -> Supervisor : Revisar y firma director
Herramienta -> BD : Guardar informe final
Herramienta -> Ciudadano : Enviar oficio al usuario
Herramienta -> TecTopo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
    'diagram-colocacion-infraestructura': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Colocación de Infraestructura
subtitle Duración total estimada: 35 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Ing. Civil" as TecCivil
actor "Técnico Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (3 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecCivil : Asignar fase de competencia
TecCivil -> TecCivil : Verificar competencia

alt Es competente
  TecCivil -> TecCivil : Revisar requisitos completos
  alt Requisitos completos
    TecCivil -> Herramienta : Continuar a siguiente fase
  else Requisitos incompletos
    TecCivil -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecCivil -> Herramienta : Elaborar respuesta de no competencia
  Herramienta -> Supervisor : Revisar respuesta
  Supervisor -> Supervisor : Revisar y firmar director
  Herramienta -> BD : Guardar respuesta
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN DE FRENTISTAS (20 días) ==
Herramienta -> TecCivil : Asignar fase de verificación
TecCivil -> TecCivil : Verificar información de frentistas
Herramienta -> BD : Guardar verificación

== FASE 3: INFORME DE AUTORIZACIÓN (12 días) ==
Herramienta -> TecGeo : Asignar elaboración de informe
TecGeo -> Herramienta : Elaborar informe de colocación de infraestructura
Herramienta -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> Herramienta : Elaborar oficios de respuesta
Supervisor -> Supervisor : Revisar y firma director
Herramienta -> BD : Guardar informe final
Herramienta -> Ciudadano : Enviar respuesta al usuario
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
    'diagram-declaratoria-camino': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Factibilidad de Declaratoria de Camino Público
subtitle Duración total estimada: 60 días

actor "Ciudadano" as Ciudadano
actor "Ventanilla (Analista)" as Ventanilla
participant "Herramienta" as Herramienta
actor "Técnico Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
participant "MTOP" as MTOP
database "Expediente Digital" as BD

== FASE 1: COMPETENCIA (15 días) ==
Ciudadano -> Ventanilla : Entrega solicitud y requisitos
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecGeo : Asignar fase de competencia
TecGeo -> TecGeo : Verificar competencia

alt Es competente
  TecGeo -> TecGeo : Revisar requisitos completos
  alt Requisitos completos
    TecGeo -> Herramienta : Elaborar mapa de competencia y pertinencia
    TecGeo -> Herramienta : Elaborar planimetría en formato SHAPE
    Herramienta -> BD : Guardar documentos técnicos
  else Requisitos incompletos
    TecGeo -> Herramienta : Solicitar información
    Herramienta -> Ciudadano : Notificar solicitud
    Ciudadano -> Ventanilla : Entregar información
    Ventanilla -> Herramienta : Registrar información
  end
else No es competente
  TecGeo -> Herramienta : Elaborar informe de no competencia
  Herramienta -> Supervisor : Revisar informe
  Supervisor -> Supervisor : Revisar y firmar director
  Herramienta -> BD : Guardar respuesta
  Herramienta -> Ciudadano : Notificar no competencia
end

== FASE 2: INFORME PARA EL MTOP (45 días) ==
Herramienta -> TecGeo : Asignar elaboración de informe
TecGeo -> TecGeo : Analizar y verificar pertinencia

alt Requiere información adicional
  TecGeo -> Herramienta : Solicitar información a terceros
  Herramienta -> TecGeo : Recibir información
end

TecGeo -> Herramienta : Elaborar informe técnico
Herramienta -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> Herramienta : Elaborar oficios de respuesta al MTOP
Supervisor -> Supervisor : Revisar coordinación (oficio máxima autoridad)
Supervisor -> Supervisor : Revisión director de vialidad
Supervisor -> Supervisor : Revisión y firma Prefecta
Herramienta -> BD : Guardar informe final
Herramienta -> MTOP : Enviar respuesta al MTOP
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`
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

