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
title Flujo del Trámite de Trazado Vial (162 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Geógrafo" as TecGeo
actor "Téc. Arquitecto" as TecArq
actor "Téc. Topógrafo" as TecTopo
actor "Téc. Ing. Civil" as TecCivil
actor "Supervisor" as Supervisor
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecGeo : Asignar fase competencia

== FASE 1: COMPETENCIA (8 días) ==
note over TecGeo: Equipo de Ingenieros Geógrafos
TecGeo -> TecGeo : Verificar competencia

alt Es competente
  TecGeo -> TecGeo : Revisar requisitos
  alt Completos
    TecGeo -> BD : Elaborar y guardar mapa
  else Incompletos
    TecGeo -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecGeo -> Supervisor : Informe no competencia
  Supervisor -> BD : Aprobar y finalizar
  Herramienta -> Ciudadano : Notificar cierre
end

== FASE 2: INFORME PERTINENCIA (25 días) ==
note over TecArq: Equipo de Arquitectos
Herramienta -> TecArq : Asignar fase

TecArq -> TecArq : Analizar pertinencia

opt Requiere información
  TecArq -> Herramienta : Solicitar info terceros
end

alt Es pertinente
  TecArq -> BD : Elaborar informes y mapas
  Supervisor -> BD : Aprobar fase
else No pertinente
  TecArq -> Supervisor : Informe no pertinencia
  Supervisor -> BD : Finalizar trámite
  Herramienta -> Ciudadano : Notificar resultado
end

== FASE 3: TOPOGRAFÍA (67 días) ==
note over TecTopo: Equipo de Topógrafos
Herramienta -> TecTopo : Asignar fase

alt Cuenta con topografía
  TecTopo -> TecTopo : Validar topografía
else No cuenta
  TecTopo -> TecTopo : Inspección vía
  TecTopo -> TecTopo : Posicionamiento GPS
  TecTopo -> TecTopo : Levantamiento topográfico
end

TecTopo -> BD : Elaborar informe y dibujo
Supervisor -> BD : Aprobar fase

== FASE 4: DISEÑO GEOMÉTRICO (30 días) ==
note over TecCivil: Equipo de Ingenieros Civiles
Herramienta -> TecCivil : Asignar fase

TecCivil -> TecCivil : Elaborar diseño
TecCivil -> BD : Elaborar informe y planos
Supervisor -> BD : Aprobar fase

== FASE 5: INFORME TRAZADO VIAL (7 días) ==
TecCivil -> TecCivil : Elaborar informe
TecCivil -> BD : Cargar informe
Supervisor -> BD : Aprobar fase

== FASE 6: RESOLUCIONES Y OFICIOS (25 días) ==
TecCivil -> BD : Elaborar resolución
Supervisor -> Supervisor : Revisión técnica
Supervisor -> Supervisor : Revisión coordinación
Supervisor -> Supervisor : Revisión y firma director
BD -> Ciudadano : Enviar resolución
Herramienta -> TecCivil : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  'diagram-certificacion-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Certificación Vial (24 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Ing. Civil" as TecCivil
actor "Téc. Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecCivil : Asignar fase competencia

== FASE 1: COMPETENCIA (4 días) ==
note over TecCivil: Equipo de Ingenieros Civiles
TecCivil -> TecCivil : Verificar competencia

alt Es competente
  TecCivil -> TecCivil : Revisar requisitos
  opt Incompletos
    TecCivil -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecCivil -> Supervisor : Respuesta no competencia
  Supervisor -> Supervisor : Revisar y firmar
  BD -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN APROBACIÓN (5 días) ==
note over TecGeo: Equipo de Ingenieros Geógrafos
Herramienta -> TecGeo : Asignar fase

TecGeo -> TecGeo : Analizar y verificar
TecGeo -> TecGeo : Verificar aprobaciones vías

opt Requiere información
  TecGeo -> Ciudadano : Solicitar información
  Ciudadano -> Ventanilla : Entregar información
  Supervisor -> Supervisor : Revisar oficio
  Supervisor -> Supervisor : Firmar director
end

TecGeo -> BD : Completar verificación

== FASE 3: INFORME CERTIFICACIÓN (15 días) ==
TecGeo -> BD : Elaborar informe certificación
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
Supervisor -> Supervisor : Firma director
BD -> Ciudadano : Enviar certificación vial
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  'diagram-replanteo-vial': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Replanteo Vial (30 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Arquitecto" as TecArq
actor "Téc. Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecArq : Asignar fase competencia

== FASE 1: COMPETENCIA (4 días) ==
note over TecArq: Arquitectos + Geógrafo
TecArq -> TecArq : Verificar competencia

alt Es competente
  TecArq -> TecArq : Revisar requisitos
  opt Incompletos
    TecArq -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecArq -> Supervisor : Respuesta no competencia
  Supervisor -> Supervisor : Revisar y firmar
  BD -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN APROBACIÓN (6 días) ==
note over TecArq: Equipo de Arquitectos
Herramienta -> TecArq : Asignar fase

TecArq -> TecArq : Verificar información

opt Planos por digitalizar
  TecArq -> TecArq : Digitalización planos
end

TecArq -> TecArq : Verificar pertinencia
TecArq -> TecArq : Verificar vías aprobadas

opt Requiere inspección
  TecArq -> TecArq : Inspección en territorio
end

TecArq -> BD : Guardar verificación

== FASE 3: INFORME REPLANTEO (17 días) ==
Herramienta -> TecGeo : Asignar elaboración informe
TecGeo -> BD : Elaborar informe replanteo
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> BD : Elaborar oficio usuario
Supervisor -> Supervisor : Firma director
BD -> Ciudadano : Enviar respuesta replanteo
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  'diagram-secciones-transversales': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Secciones Transversales (30 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecGeo : Asignar fase competencia

== FASE 1: COMPETENCIA (8 días) ==
note over TecGeo: Equipo de Ingenieros Geógrafos
TecGeo -> TecGeo : Verificar competencia

alt Es competente
  TecGeo -> TecGeo : Revisar requisitos
  alt Completos
    TecGeo -> BD : Elaborar y guardar mapa
  else Incompletos
    TecGeo -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecGeo -> Supervisor : Informe no competencia
  Supervisor -> Supervisor : Revisar y firmar
  BD -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN APROBACIÓN (2 días) ==
Herramienta -> TecGeo : Asignar fase
TecGeo -> TecGeo : Verificar aprobaciones viales
TecGeo -> BD : Guardar verificación

== FASE 3: INSPECCIÓN (2 días) ==
TecGeo -> TecGeo : Inspección en territorio
TecGeo -> BD : Registrar inspección

== FASE 4: INFORME SECCIÓN (18 días) ==
TecGeo -> BD : Elaborar informe sección
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> BD : Elaborar oficio respuesta
Supervisor -> Supervisor : Firma director
BD -> Ciudadano : Enviar informe secciones
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  'diagram-colocacion-eje': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Colocación de Eje Vial (30 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Arquitecto" as TecArq
actor "Téc. Topógrafo" as TecTopo
actor "Supervisor" as Supervisor
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecArq : Asignar fase competencia

== FASE 1: COMPETENCIA (3 días) ==
note over TecArq: Equipo de Arquitectos
TecArq -> TecArq : Verificar competencia

alt Es competente
  TecArq -> TecArq : Revisar requisitos
  opt Incompletos
    TecArq -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecArq -> Supervisor : Respuesta no competencia
  Supervisor -> Supervisor : Revisar y firmar
  BD -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN APROBACIÓN (4 días) ==
Herramienta -> TecArq : Asignar fase
TecArq -> TecArq : Revisar aprobación vía

opt Información incompleta
  TecArq -> Ciudadano : Solicitar información
end

TecArq -> BD : Guardar verificación

== FASE 3: DETERMINACIÓN COORDENADAS (4 días) ==
TecArq -> BD : Elaborar informe previo
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
Supervisor -> BD : Guardar informe previo

== FASE 4: TRABAJO EN TERRITORIO (7 días) ==
note over TecTopo: Equipo de Topógrafos
Herramienta -> TecTopo : Asignar colocación
TecTopo -> TecTopo : Colocación eje vial
TecTopo -> BD : Registrar colocación

== FASE 5: INFORME COLOCACIÓN (12 días) ==
TecTopo -> BD : Elaborar informe colocación
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecTopo -> BD : Elaborar oficios respuesta
Supervisor -> Supervisor : Firma director
BD -> Ciudadano : Enviar oficio
Herramienta -> TecTopo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  'diagram-colocacion-infraestructura': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Colocación de Infraestructura (35 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Ing. Civil" as TecCivil
actor "Ing. Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecCivil : Asignar fase competencia

== FASE 1: COMPETENCIA (3 días) ==
note over TecCivil, TecGeo: Equipo Técnico Multidisciplinario
TecCivil -> TecCivil : Verificar competencia

alt Es competente
  TecCivil -> TecCivil : Revisar requisitos
  opt Incompletos
    TecCivil -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecCivil -> Supervisor : Respuesta no competencia
  Supervisor -> Supervisor : Revisar y firmar
  BD -> Ciudadano : Notificar no competencia
end

== FASE 2: VERIFICACIÓN FRENTISTAS (20 días) ==
Herramienta -> TecCivil : Asignar fase
TecCivil -> TecCivil : Verificar info frentistas
note right
  Validar existencia y conformidad
  de frentistas respecto a
  infraestructura solicitada
end note
TecCivil -> BD : Guardar verificación

== FASE 3: INFORME AUTORIZACIÓN (12 días) ==
Herramienta -> TecGeo : Asignar elaboración
TecGeo -> BD : Elaborar informe colocación
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> BD : Elaborar oficios respuesta
Supervisor -> Supervisor : Firma director
BD -> Ciudadano : Enviar respuesta
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  'diagram-declaratoria-camino': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Flujo del Trámite de Declaratoria de Camino Público (60 días)

actor "Ciudadano" as Ciudadano
actor "Ventanilla" as Ventanilla
participant "Herramienta" as Herramienta
actor "Téc. Geógrafo" as TecGeo
actor "Supervisor" as Supervisor
participant "MTOP" as MTOP
database "BD" as BD

== REGISTRO ==
Ciudadano -> Ventanilla : Entrega solicitud
Ventanilla -> Herramienta : Registrar trámite
Herramienta -> TecGeo : Asignar fase competencia

== FASE 1: COMPETENCIA (15 días) ==
note over TecGeo: Equipo de Ingenieros Geógrafos
TecGeo -> TecGeo : Verificar competencia

alt Es competente
  TecGeo -> TecGeo : Revisar requisitos
  alt Completos
    TecGeo -> BD : Mapa competencia y pertinencia
    TecGeo -> BD : Planimetría formato SHAPE
  else Incompletos
    TecGeo -> Ciudadano : Solicitar información
    Ciudadano -> Ventanilla : Entregar información
  end
else No competente
  TecGeo -> Supervisor : Informe no competencia
  Supervisor -> Supervisor : Revisar y firmar
  BD -> Ciudadano : Notificar no competencia
end

== FASE 2: INFORME PARA MTOP (45 días) ==
Herramienta -> TecGeo : Asignar elaboración
TecGeo -> TecGeo : Analizar y verificar

opt Requiere información
  TecGeo -> Herramienta : Solicitar info terceros
end

TecGeo -> BD : Elaborar informe técnico
Supervisor -> Supervisor : Revisar informe
Supervisor -> Supervisor : Revisar coordinación
TecGeo -> BD : Elaborar oficios MTOP
Supervisor -> Supervisor : Revisar (máxima autoridad)
Supervisor -> Supervisor : Revisión director vialidad
Supervisor -> Supervisor : Revisión y firma Prefecta
BD -> MTOP : Enviar respuesta MTOP
note right
  Cierre del trámite
  al enviar al MTOP
end note
Herramienta -> TecGeo : Notificar cierre
Herramienta -> Supervisor : Informe final

@enduml`,
  
  'diagram-casos-uso': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Diagrama de Casos de Uso - Sistema de Trazados Viales

left to right direction
skinparam packageStyle rectangle

actor "Ciudadano" as Ciudadano
actor "Técnico" as Tecnico
actor "Supervisor" as Supervisor
actor "Ventanilla" as Ventanilla

rectangle "Sistema de Trazados Viales" {
  usecase "Registrar Trámite" as UC1
  usecase "Consultar Estado" as UC2
  usecase "Entregar Documentación" as UC3
  usecase "Recibir Notificaciones" as UC4
  
  usecase "Gestionar Fases" as UC5
  usecase "Elaborar Informes" as UC6
  usecase "Solicitar Información" as UC7
  usecase "Solicitar Derivación" as UC8
  usecase "Cargar Entregables" as UC9
  
  usecase "Monitorear Trámites" as UC10
  usecase "Reasignar Tareas" as UC11
  usecase "Generar Reportes" as UC12
  usecase "Aprobar Fases" as UC13
  
  usecase "Validar Requisitos" as UC14
  usecase "Registrar en Sistema" as UC15
  usecase "Recibir Documentos" as UC16
}

' Relaciones Ciudadano
Ciudadano --> UC1
Ciudadano --> UC2
Ciudadano --> UC3
Ciudadano --> UC4

' Relaciones Ventanilla
Ventanilla --> UC14
Ventanilla --> UC15
Ventanilla --> UC16

' Relaciones Técnico
Tecnico --> UC5
Tecnico --> UC6
Tecnico --> UC7
Tecnico --> UC8
Tecnico --> UC9
Tecnico --> UC4

' Relaciones Supervisor
Supervisor --> UC10
Supervisor --> UC11
Supervisor --> UC12
Supervisor --> UC13
Supervisor --> UC4

' Relaciones de extend/include
UC1 ..> UC14 : <<include>>
UC1 ..> UC15 : <<include>>
UC5 ..> UC6 : <<include>>
UC5 ..> UC9 : <<include>>
UC7 ..> UC4 : <<include>>
UC8 ..> UC4 : <<include>>

note right of UC1
  Portal público y
  ventanilla presencial
end note

note right of UC5
  Ciclo de múltiples
  fases secuenciales
end note

note right of UC10
  Dashboard en tiempo real
  con KPIs y métricas
end note

@enduml`,

  'diagram-secuencia-sistema': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Diagrama de Secuencia - Creación y Gestión de Trámite

actor "Ciudadano" as C
participant "Portal Web" as P
participant "Ventanilla" as V
participant "AppSheet" as A
participant "Apps Script" as AS
participant "Google Sheets" as GS
participant "Google Drive" as GD
actor "Técnico" as T
actor "Supervisor" as S

== Registro de Trámite ==
C -> V : Entrega solicitud y documentos
activate V
V -> V : Valida requisitos
V -> P : Registra trámite
activate P
P -> A : Crea nuevo trámite
activate A
A -> GS : INSERT tramite
activate GS
GS --> A : ID generado
deactivate GS
A -> GD : Crea carpeta expediente
activate GD
GD --> A : URL carpeta
deactivate GD
A --> P : Trámite creado
deactivate A
P --> V : Confirmación
deactivate P
V --> C : Entrega número de expediente
deactivate V

== Asignación Automática ==
A -> AS : Trigger: Nuevo trámite
activate AS
AS -> GS : Consulta técnicos disponibles
activate GS
GS --> AS : Lista técnicos
deactivate GS
AS -> AS : Algoritmo Round-Robin
AS -> GS : UPDATE asignar técnico
activate GS
GS --> AS : OK
deactivate GS
AS -> A : Notificar asignación
deactivate AS

== Notificaciones ==
A -> T : Email/WhatsApp: Nuevo trámite asignado
A -> S : Notifica panel supervisor
A -> C : SMS: Trámite registrado

== Gestión de Fase ==
T -> A : Accede a trámite
activate A
A -> GS : SELECT tramite + documentos
activate GS
GS --> A : Datos
deactivate GS
A --> T : Muestra expediente
T -> T : Realiza análisis técnico
T -> A : Carga informe
A -> GD : Sube archivo
activate GD
GD --> A : URL archivo
deactivate GD
A -> GS : UPDATE fase completada
activate GS
GS --> A : OK
deactivate GS

== Transición de Fase ==
A -> AS : Trigger: Fase completada
activate AS
AS -> GS : Identifica siguiente fase
activate GS
GS --> AS : Siguiente fase
deactivate GS
AS -> GS : Asigna nuevo técnico
AS -> A : Nueva asignación
deactivate AS
A -> T : Notifica nuevo técnico
A -> S : Actualiza dashboard
deactivate A

@enduml`,

  'diagram-clases': String.raw`@startuml
!pragma charset UTF-8
skinparam defaultFontName Arial
title Diagrama de Clases - Modelo de Datos del Sistema

class Tramite {
  + id: String
  + numero_expediente: String
  + fecha_registro: DateTime
  + tipo_tramite: TipoTramite
  + estado: EstadoTramite
  + ciudadano_id: String
  + fase_actual: String
  + tecnico_asignado_id: String
  + prioridad: String
  + tiempo_estimado: Integer
  + fecha_vencimiento: DateTime
  + ubicacion_geográfica: String
  + observaciones: Text
  --
  + registrar()
  + asignarTecnico()
  + cambiarEstado()
  + avanzarFase()
  + pausar()
  + reanudar()
  + finalizar()
}

class Ciudadano {
  + id: String
  + nombres: String
  + apellidos: String
  + cedula: String
  + email: String
  + telefono: String
  + direccion: String
  --
  + registrarTramite()
  + consultarEstado()
  + entregarDocumentos()
}

class Tecnico {
  + id: String
  + nombres: String
  + perfil: PerfilTecnico
  + especialidad: String
  + email: String
  + estado: String
  + carga_trabajo: Integer
  --
  + gestionarFase()
  + elaborarInforme()
  + solicitarInformacion()
  + cargarEntregables()
}

class Fase {
  + id: String
  + tramite_id: String
  + nombre: String
  + numero_orden: Integer
  + perfil_requerido: PerfilTecnico
  + estado: EstadoFase
  + fecha_inicio: DateTime
  + fecha_fin: DateTime
  + tiempo_duracion: Integer
  + tecnico_id: String
  --
  + iniciar()
  + pausar()
  + completar()
  + asignarTecnico()
}

class Documento {
  + id: String
  + tramite_id: String
  + fase_id: String
  + nombre: String
  + tipo: TipoDocumento
  + url_archivo: String
  + fecha_carga: DateTime
  + cargado_por: String
  + tamaño: Integer
  --
  + subir()
  + descargar()
  + eliminar()
  + versionar()
}

class Notificacion {
  + id: String
  + tramite_id: String
  + destinatario_id: String
  + tipo: TipoNotificacion
  + canal: CanalNotificacion
  + mensaje: Text
  + fecha_envio: DateTime
  + estado: String
  --
  + enviar()
  + marcarLeida()
}

class Derivacion {
  + id: String
  + tramite_id: String
  + fase_id: String
  + motivo: Text
  + entidad_destino: String
  + fecha_solicitud: DateTime
  + fecha_respuesta: DateTime
  + estado: String
  --
  + solicitar()
  + procesar()
  + responder()
}

class SolicitudInformacion {
  + id: String
  + tramite_id: String
  + fase_id: String
  + documentos_solicitados: Text
  + fecha_solicitud: DateTime
  + fecha_entrega: DateTime
  + estado: String
  --
  + crear()
  + registrarEntrega()
  + cancelar()
}

class ExpedienteDigital {
  + id: String
  + tramite_id: String
  + url_carpeta_drive: String
  + documentos_count: Integer
  + tamaño_total: Integer
  --
  + crear()
  + agregarDocumento()
  + generarPDF()
}

enum TipoTramite {
  TRAZADO_VIAL
  CERTIFICACION_VIAL
  REPLANTEO_VIAL
  SECCION_TRANSVERSAL
  COLOCACION_EJE
  COLOCACION_INFRAESTRUCTURA
  DECLARATORIA_CAMINO
}

enum EstadoTramite {
  REGISTRADO
  EN_PROCESO
  SOLICITUD_INFORMACION
  EN_DERIVACION
  FINALIZADO
  RECHAZADO
}

enum PerfilTecnico {
  ING_GEOGRAFO
  ARQUITECTO
  TOPOGRAFO
  ING_CIVIL
}

enum EstadoFase {
  PENDIENTE
  EN_CURSO
  PAUSADA
  COMPLETADA
}

' Relaciones
Tramite "1" *-- "1..*" Fase : contiene
Tramite "1" -- "1" Ciudadano : solicitado por
Tramite "1" -- "0..*" Tecnico : asignado a
Tramite "1" *-- "0..*" Documento : tiene
Tramite "1" *-- "0..*" Notificacion : genera
Tramite "1" o-- "0..*" Derivacion : puede tener
Tramite "1" o-- "0..*" SolicitudInformacion : puede tener
Tramite "1" -- "1" ExpedienteDigital : tiene

Fase "1" -- "1" Tecnico : asignada a
Fase "1" *-- "0..*" Documento : genera

Documento "0..*" -- "1" ExpedienteDigital : almacenado en

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

// Función global para recargar todos los diagramas
window.renderAllDiagrams = function () {
  console.log('🔄 Recargando todos los diagramas...');
  Object.keys(diagramCodes).forEach(diagramId => {
    const container = document.getElementById(diagramId);
    if (container && !container.classList.contains('hidden')) {
      loadAndRenderDiagram(diagramId);
    }
  });
};

console.log('📊 PlantUML Simple Renderer cargado');
